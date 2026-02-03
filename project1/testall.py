import requests
import json
from jsonpath import jsonpath
import re
class XueQiu():
    def __init__(self):
        self.url = 'http://xueqiu.com/u/1247347556'

        self.cookies = {
            'xq_a_token': '9492bad942dadf90b60f270aac7d5b5e982fdf82',
            'xqat': '9492bad942dadf90b60f270aac7d5b5e982fdf82',
            'xq_r_token': 'edf6f46eaceb40d684979451929ef3d7c0928034',
            'xq_id_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTc2Njc5ODE1MSwiY3RtIjoxNzY1MjY4MjUzMzM5LCJjaWQiOiJkOWQwbjRBWnVwIn0.g1uOR8xMzGtZvUgJGRX6fDF1GbO3xBv8CzOhdsm0K_sFb6nXZgkCexnFG8ABPxQmM5AtoTdzpdONFq_9T8Lm8lgKH5L7CNiaX7ZDYfdfoKg5mWQyv0NN4NHrdI_DSPZYSZyj4r06OO1Q7TCbyaf0fKvO0YxEF-YYSZtnTFXEfUlhbCPItcwuH_R3T1mh0FXxYke-UJDk9HQ6uv5i5t8_iQnkFIF9XdIAjIdxLa0AIbrAtS_Ku4fhClN5S2V-LqacO2YruJFlbQihSCTq6bBOm0vNcx-epJMUW_yd5Eu5vajPdXV38a7CxC9Qj8w61BozapjtyeAVcMMerAAVr3ByCw',
            'cookiesu': '971765268270808',
            'u': '971765268270808',
            'device_id': 'ac581339802b0b6967d826f555b53b3c',
            'Hm_lvt_1db88642e346389874251b5a1eded6e3': '1765268272',
            'HMACCOUNT': 'D2B7CD27AC13E0DA',
            'smidV2': '202512091617520e4cdaa0bb0e0f1506bc88ae32df492e004715d2551258370',
            's': 'bh11vu6gyq',
            'acw_tc': '1a0c652617652854203257541e3d77e4a6c0aa495697024d4a8e2ddeb6d74f',
            '.thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7': 'mjVB747Uj46eE007+vWyNlKuZSG5Ehrd5xJUO97XqlMSkpmKTIQVF6YhBT3XNbxBiRTYmMhxqcXQm/ujblBRYA%3D%3D',
            'Hm_lpvt_1db88642e346389874251b5a1eded6e3': '1765285680',
            'ssxmod_itna': '1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh70DxzSjAkDNrqRxGNk_DA5DnCx7YDtoRP4YgK/GG=P=5iWrtdqznlxmpqrjnDqdd1jWZpnLkvH6PzfP7t_DiTTD07DmeDUxD1IDDkglGYDemaDCeDQxirDD4DAWoD0=3mIDDdzzgIsbAo=txmz4GWIjA5IDGCM4GtLFSEzbY4f4iadIRAICYDExGO=k_5z4GaMIbuDl9_DmRb7f69DCI0Qz7QhbfEIn1b0=D4_ioi_iiTQAGxFGielYVDn5qSDNjDkR2CY0N7GNQwOAnqPxDG8zambdDohwCIkrATew0P_oiygt9TxNi5NDpvCiM05DrYe24x2zFBNY0YVA_q044D',
            'ssxmod_itna2': '1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh70DxzSjAkDNrqexD3rNege8nvNamLyXGq67oBnXNeD',
        }

        self.headers = {
            'Accept': '*/*',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Pragma': 'no-cache',
            'Referer': 'https://xueqiu.com/u/1247347556',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest',
            'elastic-apm-traceparent': '00-6633a0699989b696029c02fe79f95288-696dfa6145ba7027-00',
            'sec-ch-ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            # 'Cookie': 'xq_a_token=9492bad942dadf90b60f270aac7d5b5e982fdf82; xqat=9492bad942dadf90b60f270aac7d5b5e982fdf82; xq_r_token=edf6f46eaceb40d684979451929ef3d7c0928034; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTc2Njc5ODE1MSwiY3RtIjoxNzY1MjY4MjUzMzM5LCJjaWQiOiJkOWQwbjRBWnVwIn0.g1uOR8xMzGtZvUgJGRX6fDF1GbO3xBv8CzOhdsm0K_sFb6nXZgkCexnFG8ABPxQmM5AtoTdzpdONFq_9T8Lm8lgKH5L7CNiaX7ZDYfdfoKg5mWQyv0NN4NHrdI_DSPZYSZyj4r06OO1Q7TCbyaf0fKvO0YxEF-YYSZtnTFXEfUlhbCPItcwuH_R3T1mh0FXxYke-UJDk9HQ6uv5i5t8_iQnkFIF9XdIAjIdxLa0AIbrAtS_Ku4fhClN5S2V-LqacO2YruJFlbQihSCTq6bBOm0vNcx-epJMUW_yd5Eu5vajPdXV38a7CxC9Qj8w61BozapjtyeAVcMMerAAVr3ByCw; cookiesu=971765268270808; u=971765268270808; device_id=ac581339802b0b6967d826f555b53b3c; Hm_lvt_1db88642e346389874251b5a1eded6e3=1765268272; HMACCOUNT=D2B7CD27AC13E0DA; smidV2=202512091617520e4cdaa0bb0e0f1506bc88ae32df492e004715d2551258370; s=bh11vu6gyq; acw_tc=1a0c652617652854203257541e3d77e4a6c0aa495697024d4a8e2ddeb6d74f; .thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7=mjVB747Uj46eE007+vWyNlKuZSG5Ehrd5xJUO97XqlMSkpmKTIQVF6YhBT3XNbxBiRTYmMhxqcXQm/ujblBRYA%3D%3D; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1765285680; ssxmod_itna=1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh70DxzSjAkDNrqRxGNk_DA5DnCx7YDtoRP4YgK/GG=P=5iWrtdqznlxmpqrjnDqdd1jWZpnLkvH6PzfP7t_DiTTD07DmeDUxD1IDDkglGYDemaDCeDQxirDD4DAWoD0=3mIDDdzzgIsbAo=txmz4GWIjA5IDGCM4GtLFSEzbY4f4iadIRAICYDExGO=k_5z4GaMIbuDl9_DmRb7f69DCI0Qz7QhbfEIn1b0=D4_ioi_iiTQAGxFGielYVDn5qSDNjDkR2CY0N7GNQwOAnqPxDG8zambdDohwCIkrATew0P_oiygt9TxNi5NDpvCiM05DrYe24x2zFBNY0YVA_q044D; ssxmod_itna2=1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh70DxzSjAkDNrqexD3rNege8nvNamLyXGq67oBnXNeD',
        }

        

    def get_question(self,page):
        params = {
            'page': f'{page}',
            'user_id': '1247347556',
            'md5__1038': '2287582d28-tlvl7Cxw3C4kACslk/gOCask1FL5HES50T_OswivC4gCCvl3amkV8H7MzTC0CuXwPCe5pw3OCp_CyVsCiCXXCWC=lwLabDkCtnCtelCakpOCWcnNwEpRXRotvmXCDI1L0HrC2khmWZ=TRlEIaCtORv5nCvt7x5IORntIts2wC5F_jtvpC',
        }
        response = requests.get('https://xueqiu.com/v4/statuses/user_timeline.json', params=params, cookies=self.cookies, headers=self.headers)
        response_json = response.json()
        statuses = jsonpath(response_json, '$..statuses')[0]
        for status in statuses:
            reweet_status=jsonpath(status,'$..retweeted_status')

            text=jsonpath(reweet_status,'$..text')
            if text:
                html_tag_pattern = re.compile(r'<[^>]+>')
                pure_text = html_tag_pattern.sub('', text[0])
                print('问题:',pure_text)
                name=jsonpath(reweet_status,'$..user..screen_name')
                print('提问者:',name[0])

                time_before=jsonpath(reweet_status,'$..timeBefore')
                retweet_count=jsonpath(reweet_status,'$..retweet_count')
                reply_count=jsonpath(reweet_status,'$..reply_count')
                like_count=jsonpath(reweet_status,'$..like_count')
                print('提问时间:',time_before[0])
                print('转发数:',retweet_count[0])
                print('讨论数:',reply_count[0])
                print('点赞数:',like_count[0])

                print('id:',jsonpath(reweet_status,'$..id')[0])
                print('转发id:',jsonpath(status,'$..commentId')[0])
                id=jsonpath(reweet_status,'$..id')[0]
                commentId=jsonpath(status,'$..commentId')[0]
                self.get_reply(id,commentId)
                print('-----------------')
    def get_reply(self,id,commentId):
        params = {
            'id': f'{id}',
            'comment_id': f'{commentId}',
            'page': '1',
            'count': '20',
            'asc': 'true',
            # 'md5__1038': '2287582d28-VlvBhvwOhO7vpvwONROgglqlRvCUfsvhN5O=u0h4l_CrCwEf0WJpSTJk8E0ElCTCujkCFCP_lwBCtHC1eXRTCR0qnqCKkhpC6kRpC5kp5BCu3pwZCOsC0bknfXT247qPCAk7uCSkw0V0CpNCKW4P=NHTvhkU/7CrdRj9h7CCXoHCsJjphq3sLhfkC',
        }
        response = requests.get('https://xueqiu.com/statuses/talks.json', params=params, cookies=self.cookies, headers=self.headers)
        response_json = response.json()
        comments=response_json['comments']
        for comment in comments:
            print('回复内容:',comment['text'])
            print('回复时间:',comment['timeBefore'])
            print('回复者:',comment['user']['screen_name'])
            print("------------")
    def run (self):
        # for page in range(1,3):
            self.get_question(2)




if __name__ == '__main__':
    xq=XueQiu()
    xq.run()