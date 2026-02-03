import requests
import json
from jsonpath import jsonpath
import re
import time
import copy
class RedNoteComment:
    #初始化请求头,根据自己的登录信息修改
    def __init__(self):
        self.session = requests.Session()
        #cookies,headers,serach_id根据自己的登录信息修改
        self.cookies = {
    'abRequestId': '31332a8d-9bc4-5fab-800b-66687ec8e83a',
    'a1': '19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698',
    'webId': 'c0f704203a40e38f82dc8c4be59d8609',
    'gid': 'yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q',
    'webBuild': '4.86.0',
    'acw_tc': '0a0bb28b17644759320585955e3e35bf073f080d4532c64986d548ba5962cd',
    'web_session': '0400698f83322d567866568c1e3b4beab25de0',
    'websectiga': '2a3d3ea002e7d92b5c9743590ebd24010cf3710ff3af8029153751e41a6af4a3',
    'sec_poison_id': '096dd53c-40d6-4478-9489-24df5dafe985',
    'xsecappid': 'xhs-pc-web',
    'unread': '{%22ub%22:%226919565c000000000d039d82%22%2C%22ue%22:%22691609d90000000005003d70%22%2C%22uc%22:21}',
    'loadts': '1764476744619',
}

        self.headers = {
    'accept': 'application/json, text/plain, */*',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'origin': 'https://www.xiaohongshu.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://www.xiaohongshu.com/',
    'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
    'x-b3-traceid': '2e0ccf636e32d076',
    'x-s': 'XYS_2UQhPsHCH0c1Pjh9HjIj2erjwjQhyoPTqBPT49pjHjIj2eHjwjQ+GnPW/MPjNsQhPUHCHfM1qAZlPebKL/Q9LrYFzrk7+/+M8M+a8LQc2/bj/B8I8DE7tAqA/BEPJpWAy9Rxa7L7Pg8YwnS8GS4h8Fkd2S4S/F+cyrSHqokDGFFUyMcFyFQa+Amd8bzEt9ED4dzGabzF8nYOzn4HaDk++UTrynEt4/QgqBiUNFk049z6Pfl/zLu94aRTygcALnS0nnET+78s2fldap+tLA8BPnD9aUul+d4g2f+QzF4GLrIIJDSkcFDjNsQh+sHCHjQR',
    'x-s-common': '2UQAPsHCPUIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0c1Pjh9HjIj2eHjwjQ+GnPW/MPjNsQhPUHCHdYiqUMIGUM78nHjNsQh+sHCH0c1weG1PsHVHdWMH0ijP/SYG0SS8f+j+0+lGAb3Jor7y9cFPBEi2BlC8AbUy9Q6J7zjJ9cM2nrAPeZIPerU+0GEwsHVHdW9H0ijHjIj2eqjwjHjNsQhwsHCHDDAwoQH8B4AyfRI8FS98g+Dpd4daLP3JFSb/BMsn0pSPM87nrld/gLjNsQhwaHCN/qM+AclPeZIPUIj2erIH0iINsQhP/rjwjQ1J7QTGnIjKc==',
    'x-t': '1764476744763',
    'x-xray-traceid': 'cd69813a0fe44c8053b5bdb047bb8ead',
    # 'cookie': 'abRequestId=31332a8d-9bc4-5fab-800b-66687ec8e83a; a1=19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698; webId=c0f704203a40e38f82dc8c4be59d8609; gid=yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q; webBuild=4.86.0; acw_tc=0a0bb28b17644759320585955e3e35bf073f080d4532c64986d548ba5962cd; web_session=0400698f83322d567866568c1e3b4beab25de0; websectiga=2a3d3ea002e7d92b5c9743590ebd24010cf3710ff3af8029153751e41a6af4a3; sec_poison_id=096dd53c-40d6-4478-9489-24df5dafe985; xsecappid=xhs-pc-web; unread={%22ub%22:%226919565c000000000d039d82%22%2C%22ue%22:%22691609d90000000005003d70%22%2C%22uc%22:21}; loadts=1764476744619',
}

    
    def get_tags(self):
        params = {
        'keyword': '英语学习机',
        'search_id': '2fnnvj0qzgdocyah2f2vc',
        }

        response = self.session.get(
            'https://edith.xiaohongshu.com/api/sns/web/v1/search/filter',
            params=params,
            cookies=self.cookies,
            headers=self.headers,
        )
        tags=[]
        response_json = response.json()
        filter_tags1=jsonpath(response_json,'$..filter_tags')[0][0]['name']
        tags.append(filter_tags1)
        filter_tags=jsonpath(response_json,'$..filter_tags')[-1]
        for i in filter_tags:
            name=i['name']
            tags.append(name)
        return tags
    #获取帖子信息
    def get_notes_data(self,page,tag):
        json_data = {
            'keyword': '英语学习机',
            'page': page,
            'page_size': 20,
            'search_id': '2fn4az8tqhr8wkephiud4@2fn4b1y5dcbldsp13y9so',
            'sort': 'general',
            'note_type': 0,
            'ext_flags': [],
            'filters': [
                {
                    'tags': [
                        'general',
                    ],
                    'type': 'sort_type',
                },
                {
                    'tags': [
                        '不限',
                    ],
                    'type': 'filter_note_type',
                },
                {
                    'tags': [
                        '不限',
                    ],
                    'type': 'filter_note_time',
                },
                {
                    'tags': [
                        '不限',
                    ],
                    'type': 'filter_note_range',
                },
                {
                    'tags': [
                        '不限',
                    ],
                    'type': 'filter_pos_distance',
                },
                {
                    'type': 'filter_hot',
                    'tags': [
                        tag,
                    ],
                },
            ],
            'geo': '',
            'image_formats': [
                'jpg',
                'webp',
                'avif',
            ],
        }
    
        response = self.session.post('https://edith.xiaohongshu.com/api/sns/web/v1/search/notes',
            cookies=self.cookies,
            headers=self.headers,
            json=json_data,
        )
        response_json = response.json()
        # 如果没有数据,返回空
        if jsonpath(response_json,'$..data')==[]:
            return [],[]
        # 获取帖子外层列表
        note_items=jsonpath(response_json,'$..items')
        # 如果没有数据，返回空
        if not note_items:
            return [],[]
        note_ids=[]
        # 获取帖子id
        for i in note_items[0]:
            note_id=jsonpath(i,'$.id')
            # 如果没有帖子id，跳过
            if not note_id:
                continue
            note_ids.append(note_id[0])
        # 获取帖子token
        note_tokens=jsonpath(response_json,'$..xsec_token')
        #返回帖子id和帖子token
        return note_ids,note_tokens
    # 获取帖子评论
    def get_comment_data(self,note_id,note_token):
        url=f'https://edith.xiaohongshu.com/api/sns/web/v2/comment/page?note_id={note_id}&cursor=&top_comment_id=&image_formats=jpg,webp,avif&xsec_token={note_token}'
        response = requests.get(
            url,
            cookies=self.cookies,
            headers=self.headers,
        )
        #转换为字典
        response_json = response.json()
        # 获取评论人、评论时间、评论内容、用户id和用户token
        comments=jsonpath(response_json,'$..comments')
        if not comments or not comments[0]:  # 没有主评论，跳过该帖子
            print(f"note_id={note_id} 没有评论，跳过")
            return [],[],[]
        #创建获取的数据的列表
        main_contents=[]
        main_usernames=[]
        main_create_times=[]
        main_user_ids=[]
        main_user_tokens=[]
        # #主评论
        for comment in comments[0]:
            content=jsonpath(comment,'$.content')[0]
            username=jsonpath(comment,'$.user_info.nickname')[0]
            create_time=jsonpath(comment,'$.create_time')[0]
            user_id=jsonpath(comment,'$.user_info.user_id')[0]
            user_token=jsonpath(comment,'$.user_info.xsec_token')[0]
            main_contents.append(content)
            main_usernames.append(username)
            main_create_times.append(create_time)
            main_user_ids.append(user_id)
            main_user_tokens.append(user_token)
        #主评论的数据列表创建并保存
        main_data=[]
        for i in range(len(main_contents)):
            main_data.append({
                'content':main_contents[i],
                'username':main_usernames[i],
                'create_time':main_create_times[i],
            })
        #子评论数据列表
        sub_contents=[] 
        sub_usernames=[]
        sub_create_times=[]
        sub_user_ids=[]
        sub_user_tokens=[]
        sub_comments_lists=jsonpath(response_json,'$..sub_comments')
        # 如果没有子评论，跳过
        if not sub_comments_lists:
            print(f"note_id={note_id} 没有子评论，跳过")
            return main_user_ids,main_user_tokens,main_data
        for sub_list in sub_comments_lists:
            for sub_comment in sub_list:
                content=jsonpath(sub_comment,'$.content')[0]
                username=jsonpath(sub_comment,'$.user_info.nickname')[0]
                create_time=jsonpath(sub_comment,'$.create_time')[0]
                user_id=jsonpath(comment,'$.user_info.user_id')[0]
                user_token=jsonpath(comment,'$.user_info.xsec_token')[0]
                sub_contents.append(content)
                sub_usernames.append(username)
                sub_create_times.append(create_time)
                sub_user_ids.append(user_id)
                sub_user_tokens.append(user_token)
        #子评论的数据列表
        sub_data=[]
        for i in range(len(sub_contents)):
            sub_data.append({
                'content':sub_contents[i],
                'username':sub_usernames[i],
                'create_time':sub_create_times[i],
            })
        #合并主评论和子评论
        user_ids=main_user_ids+sub_user_ids
        xsec_tokens=main_user_tokens+sub_user_tokens
        data=main_data+sub_data
        #返回合并的数据和每个评论的用户的id和token
        return user_ids,xsec_tokens,data
    #获取用户信息
    def get_user_info(self,user_ids,xsec_tokens):
        user_rednotes=[]
        user_ips=[]
        for user_id,xsec_token in zip(user_ids,xsec_tokens):
            response = requests.get(
            f'https://www.xiaohongshu.com/user/profile/{user_id}?xsec_token={xsec_token}&xsec_source=pc_comment',
            cookies=self.cookies,
            headers=self.headers,
            )
            #找到小红书号和ip
            user_rednote=re.findall(r'小红书号：(.*?)</span>',response.text)
            user_ip=re.findall(r'IP属地：(.*?)</span>',response.text)
            #没有小红书号或被封
            if not user_rednote:
                print(f"用户没有小红书号或被封,跳过")
                user_ip=['无ip']
                user_rednote=['无小红书号']
            #小红书号列表
            user_rednotes.append(user_rednote[0])
            try:
                user_ips.append(user_ip[0])
            except:
                #有些用户没有ip
                user_ips.append('无ip')
            #加个延迟，防止被封
            time.sleep(2)
        #返回小红书号和ip
        return user_rednotes,user_ips
    #保存数据
    def save_data(self,data,collection):
        # 给 MongoDB 用 copy，避免污染原数据
        mongo_data = copy.deepcopy(data)
        if not mongo_data:
            print("没有数据需要保存")
            return
        collection.insert_many(mongo_data)
    #初始化数据库
    def init_db_once(self):
        print('初始化数据库')
        import pymongo
        db_name = 'rednote'
        client = pymongo.MongoClient(host='localhost', port=27017)
        if db_name in client.list_database_names():
            print(f"数据库 {db_name} 已存在 -> 删除（仅在初始化时）")
            client.drop_database(db_name)
        else:
            print(f"数据库 {db_name} 不存在，跳过删除")

        db = client[db_name]
        collection = db['rednote']  # 创建集合
        return collection
    def run (self):
        #标签，根据实时情况修改
        tags=self.get_tags()
        print(tags)
        collection=self.init_db_once()
        #循环标签
        for tag in tags:
            page=1
            #每个标签从第一页开始一直到没有帖子位置
            while True:
                note_ids,note_tokens=self.get_notes_data(page,tag)
                #如果没有帖子,就到底了,跳出
                if not note_ids or not note_tokens:
                    break
                #循环帖子
                for note_id,note_token in zip(note_ids,note_tokens):
                    print(f'爬取{tag}第{page}页的{note_id}帖子评论')
                    #获取帖子的评论
                    user_ids,xsec_tokens,data=self.get_comment_data(note_id,note_token)
                    #如果没有评论,就跳过
                    if not user_ids or not xsec_tokens or not data:
                        continue
                    #获取用户信息
                    user_rednotes,user_ips=self.get_user_info(user_ids,xsec_tokens)
                    user_data=[]
                    #合并用户信息数据
                    for i in range(len(user_rednotes)):
                        user_data.append({
                            'rednote':user_rednotes[i],
                            'ip':user_ips[i],
                        })
                    #合并用户数据和评论并加上标签和帖子id
                    for i in range(len(data)):
                        data[i].update(user_data[i])
                        data[i]['tag']=tag
                        data[i]['note_id']=note_id
                    print(f"-----------保存{tag}第{page}页的{note_id}帖子的数据--------------")
                    #保存数据
                    self.save_data(data,collection)
                    print(f'爬取{tag}第{page}页的{note_id}帖子评论完毕')
                    #等待2秒，防止被封
                    time.sleep(2)
                page+=1

if __name__ == '__main__':
    rednote_comment = RedNoteComment()
    rednote_comment.run()