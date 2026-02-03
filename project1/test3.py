import requests

cookies = {
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
    'acw_tc': 'ac11000117652835578863502e9d31b1f52b0210ffe77715a89bc6d9f7e794',
    'Hm_lpvt_1db88642e346389874251b5a1eded6e3': '1765284116',
    '.thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7': 'fsBfm09Q5SaNwIT5HFWIWbPOWkSTEGNtctPTGcvldvlna3Gng+Bwd2XUFpHEWBLW4mZRChnqPvLr1ccnuBpe0w%3D%3D',
    'ssxmod_itna': '1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh7Yh4kMK=7rtDlOTeDZDGIdDqx0orUiDo5N1NYQWgD1FWmuRG53sDxgFeY=004b5YrsgCScyrkh58/S7iQemwYDnneDQKDoxGkDivoD0FtNY4Dx=PD5xDTDWeDGDD3H4DCp3EoD04AO9OAK8RwTYoADYpo=ShoDYHXDATLvI3AK_DLDWawEWfoo4i8D79uIBxAD7aXElQDXcYDEGmICu=DvrjwoKuAI_fosd_rYOmYF4mYeAeq37GPYexNiilB5qSDNjG8RrCY0N7GNYqOjWePxDGfbinbQiedG5_7CIq1=b1_AYA2xgTxY2=FRdNGdUWxbjwM05DOxwoiwGDFANYi5P7DcdzFiDD',
    'ssxmod_itna2': '1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh7Yh4kMK=7hYDio_GU5gUD7PPq8DaytPKD0yDEiOQid4XbnRGl9u3/R0QnU1eqZ2HeCo5FZHPREq9Z8Qn97/ZGCxtYOeCBHSDBHgZKmN3Yp6E5qlcaGh=KvUx5s78vvspIma_gpArOm06YIKzFA8O0Hs6APi=FI8OqW99MXljvXxtE4n2L1SzKqttcUjgd1XfauPTCG_tH2SGvFsk1EZbDOlrtSGNKC9ES1x8B8kqSHFBdf9rvsdbHGkgX1hG6DwUZ5HjKVeKe9=hAoAW0zcPK/vc0i40qyW0PY5H7tK75d_AMirOx22GDMQrzZiHQLM=rBnKr8N6i53tTqKEYUAm1bT2puB_GPKzCu1GLLOd77tt9eY_nRiQwDQdBAh4pIcK7AKBCcxA6NUaKe9SAPHAq2EjP8hESvQ_ioDP_aoHGGXEQ/B4s7iBSTV75n8iqg41gv6fLD6YeUKBCNjSjDMjyCXZ=HZOiPY_xjx47hCBXeYPe0qk2g4CNhlK17tPiSXOhji=EAw=g8pr9M8Q8kkei5Ahk6rP1EqLUkeiFEQl1p8VguEA8IQG0A85BXtQazQDGdp=YPxOtwn91vj=xzAGrrjhELGQUh9kjqY4KA/Sy/Cnwsem7LqqQ4vBee0bAz4D',
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
    'elastic-apm-traceparent': '00-524b55eab75a20d72e6b5e1ee40b7126-2f1b081a062f95e1-00',
    'sec-ch-ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    # 'Cookie': 'xq_a_token=9492bad942dadf90b60f270aac7d5b5e982fdf82; xqat=9492bad942dadf90b60f270aac7d5b5e982fdf82; xq_r_token=edf6f46eaceb40d684979451929ef3d7c0928034; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTc2Njc5ODE1MSwiY3RtIjoxNzY1MjY4MjUzMzM5LCJjaWQiOiJkOWQwbjRBWnVwIn0.g1uOR8xMzGtZvUgJGRX6fDF1GbO3xBv8CzOhdsm0K_sFb6nXZgkCexnFG8ABPxQmM5AtoTdzpdONFq_9T8Lm8lgKH5L7CNiaX7ZDYfdfoKg5mWQyv0NN4NHrdI_DSPZYSZyj4r06OO1Q7TCbyaf0fKvO0YxEF-YYSZtnTFXEfUlhbCPItcwuH_R3T1mh0FXxYke-UJDk9HQ6uv5i5t8_iQnkFIF9XdIAjIdxLa0AIbrAtS_Ku4fhClN5S2V-LqacO2YruJFlbQihSCTq6bBOm0vNcx-epJMUW_yd5Eu5vajPdXV38a7CxC9Qj8w61BozapjtyeAVcMMerAAVr3ByCw; cookiesu=971765268270808; u=971765268270808; device_id=ac581339802b0b6967d826f555b53b3c; Hm_lvt_1db88642e346389874251b5a1eded6e3=1765268272; HMACCOUNT=D2B7CD27AC13E0DA; smidV2=202512091617520e4cdaa0bb0e0f1506bc88ae32df492e004715d2551258370; s=bh11vu6gyq; acw_tc=ac11000117652835578863502e9d31b1f52b0210ffe77715a89bc6d9f7e794; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1765284116; .thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7=fsBfm09Q5SaNwIT5HFWIWbPOWkSTEGNtctPTGcvldvlna3Gng+Bwd2XUFpHEWBLW4mZRChnqPvLr1ccnuBpe0w%3D%3D; ssxmod_itna=1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh7Yh4kMK=7rtDlOTeDZDGIdDqx0orUiDo5N1NYQWgD1FWmuRG53sDxgFeY=004b5YrsgCScyrkh58/S7iQemwYDnneDQKDoxGkDivoD0FtNY4Dx=PD5xDTDWeDGDD3H4DCp3EoD04AO9OAK8RwTYoADYpo=ShoDYHXDATLvI3AK_DLDWawEWfoo4i8D79uIBxAD7aXElQDXcYDEGmICu=DvrjwoKuAI_fosd_rYOmYF4mYeAeq37GPYexNiilB5qSDNjG8RrCY0N7GNYqOjWePxDGfbinbQiedG5_7CIq1=b1_AYA2xgTxY2=FRdNGdUWxbjwM05DOxwoiwGDFANYi5P7DcdzFiDD; ssxmod_itna2=1-YqfxBDnD2Du7DQQ4YQPY5G7XxkqYuuD0dGMD3qq7tNGcD8OD0PI7P4NrPGkDjh7Yh4kMK=7hYDio_GU5gUD7PPq8DaytPKD0yDEiOQid4XbnRGl9u3/R0QnU1eqZ2HeCo5FZHPREq9Z8Qn97/ZGCxtYOeCBHSDBHgZKmN3Yp6E5qlcaGh=KvUx5s78vvspIma_gpArOm06YIKzFA8O0Hs6APi=FI8OqW99MXljvXxtE4n2L1SzKqttcUjgd1XfauPTCG_tH2SGvFsk1EZbDOlrtSGNKC9ES1x8B8kqSHFBdf9rvsdbHGkgX1hG6DwUZ5HjKVeKe9=hAoAW0zcPK/vc0i40qyW0PY5H7tK75d_AMirOx22GDMQrzZiHQLM=rBnKr8N6i53tTqKEYUAm1bT2puB_GPKzCu1GLLOd77tt9eY_nRiQwDQdBAh4pIcK7AKBCcxA6NUaKe9SAPHAq2EjP8hESvQ_ioDP_aoHGGXEQ/B4s7iBSTV75n8iqg41gv6fLD6YeUKBCNjSjDMjyCXZ=HZOiPY_xjx47hCBXeYPe0qk2g4CNhlK17tPiSXOhji=EAw=g8pr9M8Q8kkei5Ahk6rP1EqLUkeiFEQl1p8VguEA8IQG0A85BXtQazQDGdp=YPxOtwn91vj=xzAGrrjhELGQUh9kjqY4KA/Sy/Cnwsem7LqqQ4vBee0bAz4D',
}

params = {
    'id': '364955117',
    'comment_id': '387937909',
    'page': '1',
    'count': '20',
    'asc': 'true',
    # 'md5__1038': '2287582d28-VlvBhvwOhO7vpvwONROgglqlRvCUfsvhN5O=u0h4l_CrCwEf0WJpSTJk8E0ElCTCujkCFCP_lwBCtHC1eXRTCR0qnqCKkhpC6kRpC5kp5BCu3pwZCOsC0bknfXT247qPCAk7uCSkw0V0CpNCKW4P=NHTvhkU/7CrdRj9h7CCXoHCsJjphq3sLhfkC',
}

response = requests.get('https://xueqiu.com/statuses/talks.json', params=params, cookies=cookies, headers=headers)

with open('test3.json','w',encoding='utf-8') as f:
    f.write(response.text)