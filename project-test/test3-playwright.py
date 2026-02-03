'''
https://www.xiaohongshu.com/search_result?keyword=%25E8%258B%25B1%25E8%25AF%25AD%25E5%25AD%25A6%25E4%25B9%25A0%25E6%259C%25BA&source=web_search_result_notes
批量采集小红书 英语学习机 相关热门帖子 下面所有的评论，
需要采集每个评论的 评论人、评论时间、评论内容、小红书号、IP属地(小红书号在用户的主页里面）
'''
from playwright.sync_api import sync_playwright
import os
import json
import pymongo
class Rednote:
    def __init__(self,url):
        self.page=None  
        self.browser=None
        self.context=None
        self.url=url
    def login(self):
        if os.path.exists("storage_state.json"):
            #检测登录状态
            try:
                self.auto_login()
                self.page.wait_for_selector('#global > div.main-container > div.side-bar > ul > div.channel-list-content > li.user.side-bar-component > div > a > span.channel',timeout=3000)
                print('自动登录成功')
            except:
                print('自动登录失败')
                print("请手动登录") 
                self.manual_login()
        else:
            print("没找到指定文件,请手动登录")
            self.context = self.browser.new_context()
            self.page = self.context.new_page()
            self.page.goto(self.url)
            self.manual_login()
        #更新登录状态
        self.context.storage_state(path="storage_state.json")

    #手动登录
    def manual_login(self):
        print("Please log in manually. After you are logged in, press Enter here...")
        # self.page.locator("#J_SiteNavLogin > div.site-nav-menu-hd > div.site-nav-sign > a.h").click()
        input("Press Enter after login: ")
        self.context.storage_state(path="storage_state.json")

    #自动登录
    def auto_login(self):
        self.context = self.browser.new_context(storage_state="storage_state.json")
        self.page = self.context.new_page()
        self.page.goto(self.url)
        
    def real_login(self,p):
        # 指定用户数据目录
        self.context = p.chromium.launch_persistent_context(
        user_data_dir=r"user_data/rednote",  # 第一次手动登录后保存状态
        headless=False,
        viewport={"width": 1200, "height": 800},
        executable_path=r"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        )
        self.page = self.context.pages[0]
        self.page.goto(self.url)
        
    #获取所有的类型的按钮
    def get_all_buttons(self):
        buttons=self.page.locator('#global > div.main-container > div.with-side-bar.main-content > div > div > div.search-layout__middle > div.reds-sticky-box > div > div > div.content-container > button').all()
        return buttons
    
    #获取所有的帖子
    def get_all_notes(self):
        old = 0
        while True:
            # 滚到底部
            self.page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            self.page.wait_for_timeout(1200)

            # 拿 section 数量
            sections = self.page.locator(
                "#global div.feeds-container > section"
            ).all()

            if len(sections) == old:  # 数量不变 → 到底了
                break
            old = len(sections)

        print(f"找到 {len(sections)} 个帖子")

        # 提取 note 元素
        notes = [s.locator("> div > a.cover.mask.ld") for s in sections]
        # notes = ['https://www.xiaohongshu.com'+s.locator("> div > a.cover.mask.ld").get_attribute("href") for s in sections]
        return notes

    
    def get_data(self):
        print("获取数据")

        # 等待评论区加载，如果评论区不存在，直接返回空
        try:
            self.page.wait_for_selector("div.author > a", state="attached", timeout=2000)
        except:
            print("帖子没有评论")
            return [], []

        # 定位元素
        users = self.page.locator("div.author > a")
        times = self.page.locator("div.date>span")
        contents = self.page.locator("span.note-text>span")

        count = users.count()
        print("评论数量:", count)

        data_list = []
        for i in range(count):
            data = {
                "user": users.nth(i).text_content(),
                "time": times.nth(i).text_content(),
                "content": contents.nth(i).text_content(),
                # "user_link": 'https://www.xiaohongshu.com'+users.nth(i).get_attribute("href")
            }
            data_list.append(data)

        return data_list,users


    def get_user_info(self,users):
        user_info_list = []
        try:
            users = users.all()
        except:
            print("没有用户评论")
            return []
        for user in users:
            # 等待新页面打开
            with self.context.expect_event("page") as event_info:
                user.click()

            user_page = event_info.value  # 新 tab
            user_page.wait_for_selector("span.user-redId")
            # 采集用户数据
            uid = user_page.locator("span.user-redId").text_content().split("：")[1]
            try:
                ip = user_page.locator("span.user-IP").text_content().split("：")[1]
            except:
                ip = ""

            user_info = {
                "ip": ip,
                "uid": uid
            }

            user_info_list.append(user_info)
            # 关闭用户页面
            # 加个延迟
            user_page.wait_for_timeout(1000)
            user_page.close()

        return user_info_list

    def init_db_once(self):
        db_name = 'rednote'
        client = pymongo.MongoClient(host='localhost', port=27017)
        if db_name in client.list_database_names():
            print(f"数据库 {db_name} 已存在 -> 删除（仅在初始化时）")
            client.drop_database(db_name)
        else:
            print(f"数据库 {db_name} 不存在，跳过删除")

        db = client[db_name]
        return db
    def save_data(self,db,data):
        #数据存入mongodb
        #mac需要先链接数据库 sudo mongod --dbpath=/Users/xinxiong/data/db
        import copy
        collection = db['rednote']  # 创建集合
        # 给 MongoDB 用 copy，避免污染原数据
        mongo_data = copy.deepcopy(data)
        if not mongo_data:
            print("没有数据需要保存")
            return
        collection.insert_many(mongo_data)

        # 保存到 JSON
        file_path = 'rednote.json'

        # 如果文件已存在 → 读取旧数据
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                try:
                    old_data = json.load(f)
                except:
                    old_data = []
        else:
            old_data = []

        # 合并旧数据 + 新数据
        new_data = old_data + data

        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(new_data, f, ensure_ascii=False, indent=4)

        print(f"JSON 已保存，共 {len(new_data)} 条数据")
        
    def run(self):
        with sync_playwright() as p:
            self.browser = p.chromium.launch(headless=False)
            self.login()
            # self.real_login(p)
            self.page.wait_for_timeout(3000)
            # input("是否需要登录?是请回车,否请登录然后回车:")
            #获取所有的类型按钮
            buttons=self.get_all_buttons()
            db=self.init_db_once()
            #循环所有类型
            for bi, button in enumerate(buttons):
                if bi>1:
                    continue
                print(f"开始爬取第{bi+1}个类型")
                #点击类型按钮
                button.click()
                self.page.wait_for_timeout(2000)
                #获取所有的帖子
                notes = self.get_all_notes()
                #循环所有帖子
                for ni, note in enumerate(notes):
                    print(f"开始爬取第{bi+1}个类型，第{ni+1}个帖子")
                    # 滚动到可见
                    note.scroll_into_view_if_needed()
                    #点击帖子
                    note.click()
                    # input("是否需要登录?是请回车,否请登录然后回车:")
                    self.page.wait_for_timeout(3000)
                    #获取评论人、评论时间、评论内容
                    data_list, users = self.get_data()
                    #获取用户信息
                    user_info_list = self.get_user_info(users)
                    #整合数据
                    combined = [
                        {"button_index": bi, "note_index": ni} | data | user_info
                        for data, user_info in zip(data_list, user_info_list)
                    ]
                    #保存数据
                    self.save_data(db,combined)
                    # #关闭note
                    self.page.wait_for_selector('div.close-circle',timeout=1000)
                    self.page.locator('div.close-circle').click()
                    self.page.wait_for_timeout(1000)

            self.page.wait_for_timeout(1000)
            self.browser.close()

if __name__ == '__main__':
    rn=Rednote('https://www.xiaohongshu.com/search_result?keyword=%25E8%258B%25B1%25E8%25AF%25AD%25E5%25AD%25A6%25E4%25B9%25A0%25E6%259C%25BA&source=web_search_result_notes')
    rn.run()