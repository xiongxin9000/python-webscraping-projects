#===============playwright通用代码脚本模板====================
from playwright.sync_api import sync_playwright
import pymongo
db_name = 'xueqiu'
#初始化数据库
client = pymongo.MongoClient(host='localhost', port=27017)
if db_name in client.list_database_names():
    print(f"数据库 {db_name} 已存在 -> 删除（仅在初始化时）")
    # client.drop_database(db_name)
else:
    print(f"数据库 {db_name} 不存在，跳过删除")
db = client[db_name]
#开始playwright爬取数据
with sync_playwright() as p:
    # playwright指定使用本地浏览器(需要指定浏览器的路径和本地用户数据的路径)
    browser = p.chromium.launch_persistent_context(
        # 1. 浏览器安装路径
        executable_path=r"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        # 2. 单独指定一个用户数据目录（任意空目录）（为什么要？因为需要登录，要记录登录状态，后续不用重复登录）
        user_data_dir=r"user_data",

        # 3.开启有界面模式
        headless = False,
        # 4.设置窗口最大化
        no_viewport=True,
        args=['--start-maximized']
    )
    # 查看当前所有页面
    page_list_aa = browser.pages
    print(f'当前有 {len(page_list_aa)} 个页面')
    # 此时浏览器会默认打开一个空白页面，获取到第一个页面对象，页面索引是从0开始的
    first_page = page_list_aa[0]
    # 添加初始化js脚本代码，隐藏webdriver属性，防止检测出来
    js_data = open('stealth.min.js', 'r', encoding="utf-8").read()
    first_page.add_init_script(js_data)

    # 4.在第一个空白页面中打开访问目标网站
    first_page.goto('https://xueqiu.com/u/1247347556')
    first_page.wait_for_timeout(2000)
    #等待加载完成
    #翻页
    pagination__next = first_page.locator('div.pagination>input')
    pagination__next.fill('182')
    pagination__next.press('Enter')
    first_page.wait_for_timeout(2000)
    input('已到182页,按回车继续')
    #循环翻页抓取300页
    for j in range(181,300):
        print(f'抓取第 {j+1} 页')
        #等待页面帖子加载
        first_page.wait_for_selector('article.timeline__item')
        #获取所有帖子
        posts=first_page.locator('article.timeline__item').all()
        #打印帖子长度
        print('post长度',len(posts))
        # 创建帖子列表
        all_posts = []
        # 循环遍历帖子
        for post in posts:
            # 问题内容，问题者，提问时间，转发数，讨论数，点赞数
            try:
                question_content = post.locator('blockquote.timeline__item__forward div.content--description > div').text_content() 
                question_user = post.locator('span.user-name').text_content() 
                question_time = post.locator('span.timestamp').text_content() 
                retweet_count = post.locator('span.retweet-count').text_content() 
                reply_count = post.locator('a.replay-count').text_content() 
                like_count = post.locator('span.like-count').text_content() 
            # 如果没有提问内容，就全部置空
            except:
                question_content = ""
                question_user = ""
                question_time = ""
                retweet_count = ""
                reply_count = ""
                like_count = ""
            # 回复者，回复内容，回复时间
            try:
                reply_user= post.locator('a.user-name').text_content() 
                reply_content=post.locator('div.timeline__item__content>div.content--description>div:nth-child(1)').text_content() 
                reply_time=post.locator('a.date-and-source').text_content() 
            # 如果没有回复内容，就全部置空
            except:
                reply_user=""
                reply_content=""
                reply_time=""
            # 将提问内容，提问者，提问时间，转发数，讨论数，点赞数，回复者，回复内容，回复时间添加到帖子列表
            all_posts.append({
            '页数': j+1,
            '提问内容': question_content,
            '提问者': question_user,
            '提问时间': question_time,
            '转发数': retweet_count,
            '讨论数': reply_count,
            '点赞数': like_count,
            '回复者': reply_user,
            '回复内容': reply_content,
            '回复时间': reply_time
            })
        print('append成功,打印数据')
        for i, post in enumerate(all_posts):
            print(f'第{i+1}个帖子')
            print('问题:', post['提问内容'])
            print('提问者:', post['提问者'])
            print('提问时间:', post['提问时间'])
            print('转发数:', post['转发数'])
            print('讨论数:', post['讨论数'])
            print('点赞数:', post['点赞数'])
            print('回复者:', post['回复者'])
            print('回复内容:', post['回复内容'])
            print('回复时间:', post['回复时间'])
            print('------------------')
        #保存到mongodb
        print(f'保存第{j+1}页的数据到mongodb')
        #mac需要先链接数据库 sudo mongod --dbpath=/Users/xinxiong/data/db
        import copy
        collection = db['xueqiu']  # 创建集合
        # 给 MongoDB 用 copy，避免污染原数据
        mongo_data = copy.deepcopy(all_posts)
        collection.insert_many(mongo_data)
        #翻页
        pagination__next = first_page.locator('a.pagination__next')
        pagination__next.click()
        #等待新页面加载
        first_page.wait_for_selector('article.timeline__item')
        #加一个延迟
        first_page.wait_for_timeout(2000)
    print('所有抓取完成,可以关闭浏览器')
    input('按下回车,关闭浏览器') 