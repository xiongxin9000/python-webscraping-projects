'''
http://xueqiu.com/u/1247347556
'''

import requests

cookies = {
    'cookiesu': '971765268270808',
    'device_id': 'ac581339802b0b6967d826f555b53b3c',
    'Hm_lvt_1db88642e346389874251b5a1eded6e3': '1765268272',
    'HMACCOUNT': 'D2B7CD27AC13E0DA',
    'smidV2': '202512091617520e4cdaa0bb0e0f1506bc88ae32df492e004715d2551258370',
    's': 'bh11vu6gyq',
    'remember': '1',
    'xq_a_token': 'a929cc5d14981e883bf4d37aa65228a6285e7ef4',
    'xqat': 'a929cc5d14981e883bf4d37aa65228a6285e7ef4',
    'xq_id_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOjI4NDg3NjM2MzUsImlzcyI6InVjIiwiZXhwIjoxNzY3ODc5NzcwLCJjdG0iOjE3NjUyODc3NzAzNTMsImNpZCI6ImQ5ZDBuNEFadXAifQ.LjArbr8x3sWdMy-LbQm1RYtPEcZ755bbeOFnD-5YN5jkhF8SOXTFsJMjTarAFMv_inVu86Hno-6Ge7hFvrJd0nwuF-CeEADM6TfoOuebhYA36m4u40VwH0U7L69ZkFGm5feqZYOz3jFAf0JOk_VU3InpeaBEorr81xT2pjG4FTAWC7rlQERA_pOEDk74eMBeJR38r_pGZOlrabkZvqMmAq1_Ga8KptHm6TfcgH0EOzKVnw_AFEbV70VezBediI_8maFhVO7OsAF7bOwKuLq4ka28T1VJsRPpE_XELx7bErR20ot1cf-rs35Wt63FyHN4-ftsYklnXNuo45sP14twEg',
    'xq_r_token': 'c05309cdb11f1766a3cb2b956fd1818a7b714363',
    'xq_is_login': '1',
    'u': '2848763635',
    'acw_tc': '1a0c65da17652903683141928ec60929af55b42d6ff37754b72c92e63517d3',
    'Hm_lpvt_1db88642e346389874251b5a1eded6e3': '1765291262',
    '.thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7': 'oi/0ie8YRY8A/jS29RyLbvEWgGvk8LclJUpvh37pfmFZ2X6zVZ3LM9O1S5lXL/WpOsnOQli2FsIKVqMv+KZMrg%3D%3D',
    'ssxmod_itna': '1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh70__xSD9TnGCDBuIYDSxD=HDK4GT_ChDbtzSzi0I_pqqIuRG5dsDooHeo=00bb5orsgCScyrkh5SVgY4D==xDwxibDBKDnO4Djpuq_DiiWx0rD0eDPxDYDGRmDDHAt84Dj0OpO9EGIjBetRoDbOb_z74DRpdDSmSApREGYG3Dap73h8bhDmKDI6joz0oDFpk3dq0ko4i3oOo97q0ODL7h2lEAm8R95g9DYY_mqQ4xd2G4K7x4r0qlqGNqSDNjG8RrCY0N7GNWiGmeqpeDG3zTWbdG5_Bk_wCoRC_7eUYQVEtcresgx1gm30hgA5VYYqgzlGxpn4Zxxeg5TeY4D',
    'ssxmod_itna2': '1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh70__xSD9TnDrDGbnqrQ1/jOTPgSZdBiK3B2Yfy54D',
}

headers = {
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
    'elastic-apm-traceparent': '00-4dd1d12167f22b1f642ffd902599f8f3-25e05a40029ab247-00',
    'sec-ch-ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # 'Cookie': 'cookiesu=971765268270808; device_id=ac581339802b0b6967d826f555b53b3c; Hm_lvt_1db88642e346389874251b5a1eded6e3=1765268272; HMACCOUNT=D2B7CD27AC13E0DA; smidV2=202512091617520e4cdaa0bb0e0f1506bc88ae32df492e004715d2551258370; s=bh11vu6gyq; remember=1; xq_a_token=a929cc5d14981e883bf4d37aa65228a6285e7ef4; xqat=a929cc5d14981e883bf4d37aa65228a6285e7ef4; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOjI4NDg3NjM2MzUsImlzcyI6InVjIiwiZXhwIjoxNzY3ODc5NzcwLCJjdG0iOjE3NjUyODc3NzAzNTMsImNpZCI6ImQ5ZDBuNEFadXAifQ.LjArbr8x3sWdMy-LbQm1RYtPEcZ755bbeOFnD-5YN5jkhF8SOXTFsJMjTarAFMv_inVu86Hno-6Ge7hFvrJd0nwuF-CeEADM6TfoOuebhYA36m4u40VwH0U7L69ZkFGm5feqZYOz3jFAf0JOk_VU3InpeaBEorr81xT2pjG4FTAWC7rlQERA_pOEDk74eMBeJR38r_pGZOlrabkZvqMmAq1_Ga8KptHm6TfcgH0EOzKVnw_AFEbV70VezBediI_8maFhVO7OsAF7bOwKuLq4ka28T1VJsRPpE_XELx7bErR20ot1cf-rs35Wt63FyHN4-ftsYklnXNuo45sP14twEg; xq_r_token=c05309cdb11f1766a3cb2b956fd1818a7b714363; xq_is_login=1; u=2848763635; acw_tc=1a0c65da17652903683141928ec60929af55b42d6ff37754b72c92e63517d3; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1765291262; .thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7=oi/0ie8YRY8A/jS29RyLbvEWgGvk8LclJUpvh37pfmFZ2X6zVZ3LM9O1S5lXL/WpOsnOQli2FsIKVqMv+KZMrg%3D%3D; ssxmod_itna=1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh70__xSD9TnGCDBuIYDSxD=HDK4GT_ChDbtzSzi0I_pqqIuRG5dsDooHeo=00bb5orsgCScyrkh5SVgY4D==xDwxibDBKDnO4Djpuq_DiiWx0rD0eDPxDYDGRmDDHAt84Dj0OpO9EGIjBetRoDbOb_z74DRpdDSmSApREGYG3Dap73h8bhDmKDI6joz0oDFpk3dq0ko4i3oOo97q0ODL7h2lEAm8R95g9DYY_mqQ4xd2G4K7x4r0qlqGNqSDNjG8RrCY0N7GNWiGmeqpeDG3zTWbdG5_Bk_wCoRC_7eUYQVEtcresgx1gm30hgA5VYYqgzlGxpn4Zxxeg5TeY4D; ssxmod_itna2=1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh70__xSD9TnDrDGbnqrQ1/jOTPgSZdBiK3B2Yfy54D',
}

params = {
    'page': '3',
    'user_id': '1247347556',
    '_': '1765287803343',
    # 'md5__1038': '2287582d28-nvXlyCxOqWCTsCHROwnC/kv8TRCb_NO6o9PrGtTpCMCtBssCOqh8CAa/C0_iq0MkqtvCtfwMRslRFCLXRGCwijoC=kwNCkZXwqO0C7OBCn3NwcCOHCJRpvXCxpXnT3CuxEZ7gBZPuwdScBu1sBssALHpaXsTqkOvLCfvnDOptpX=yvsXC',
}

# response = requests.get('https://xueqiu.com/v4/statuses/user_timeline.json', params=params, cookies=cookies, headers=headers)

url='https://xueqiu.com/v4/statuses/user_timeline.json?page=1&user_id=1247347556'
response = requests.get(url, cookies=cookies, headers=headers)
# with open('test1.json','w',encoding='utf-8') as f:
#     f.write(response.text)
print(response.text)
'''
提问者screen_name，问题，提问时间timeBefore，“转发数retweet_count，“讨论数reply_count，‘点赞数like_count，
‘回复者，回复内容，回复时间
'''