'''
https://jx.xmflv.com/?url=https://v.99.com/x/cover/mzc00200u8vfzcz.html
'''
import requests
#导入可以在python中运行js代码的包
import execjs
import os
with open('test.js', 'r') as file:#打开对应的js文件
    #读取代码
    js_code = file.read()
#编译代码
ctx = execjs.compile(js_code)
# 运行js中自定义的函数myFunction,用来读取js逆向得到的key,sign,tm
parameters = ctx.call("myFunction")
# 获取对应的参数
key=parameters['key']
sign=parameters['sign']
tm=parameters['tm']
# 请求头
headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://jx.xmflv.com',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'sec-ch-ua': '"Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36',
}
# 把对应的参数传入
data = {
    'tm': tm,
    'url': 'https%3A%2F%2Fv.99.com%2Fx%2Fcover%2Fmzc00200u8vfzcz.html',
    'key': key,
    'sign': sign,
}
# 请求
response = requests.post('https://202.189.8.170/Api', headers=headers, data=data)
# 打印对应的结果
print(response.text)
