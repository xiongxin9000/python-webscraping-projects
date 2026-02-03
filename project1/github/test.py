import os
import re
import subprocess
import requests
import logging
from config import HEADERS

def get_xueqiu_cookies():
    """获取雪球网所需的 cookies 值，返回包含 xqat 和 u 的字典"""
    # 读取 JS 加密文件
    js_code = open('md5_1038.js', 'r', encoding='utf-8').read()
    
    url = 'https://xueqiu.com/'
    
    try:
        # 首次请求获取初始 cookies 和 waf 值
        response = requests.get(url, headers=HEADERS)
        cookies = dict(response.cookies.items())
        
        # 提取 waf 值
        match = re.search('"_waf_bd8ce2ce37":"(.*?)"', response.text)
        if not match:
            raise ValueError("无法从响应中提取 _waf_bd8ce2ce37 值")
        
        _waf_bd8ce2ce37 = match.group(1)

        # 替换 JS 代码中的关键参数
        js_code = (js_code.replace('bjL+/tPniOQA+ED1CaEm48B8yNJ/BHmvZgRW3roIHXQ=', _waf_bd8ce2ce37)
                   .replace('/7796248954/354282572', url.replace('https://xueqiu.com', '')))
        
        # 写入临时 JS 文件
        with open('md5_1038_env.js', 'w', encoding='utf-8') as f:
            f.write(js_code)
        
        # 执行 Node.js 计算参数
        result = subprocess.run(['node', 'md5_1038_env.js'], 
                               capture_output=True, text=True, timeout=5)
        
        if result.returncode != 0:
            raise RuntimeError(f"Node.js 执行失败: {result.stderr}")
        
        # 拼接验证 URL 并获取最终 cookies
        verify_url = url + '?' + result.stdout.strip()
        response = requests.get(verify_url, headers=HEADERS, cookies=cookies)
        cookies_dict = dict(response.cookies)
        
        # 检查必需的 cookies
        if 'xqat' not in cookies_dict or 'u' not in cookies_dict:
            raise KeyError("响应中缺少必需的 cookies (xqat 或 u)")
        
        xueqiu_cookies = {
            'xqat': cookies_dict['xqat'],
            'u': cookies_dict['u']
        }
        logging.info(f"获取雪球cookie: {xueqiu_cookies}")
        
        return xueqiu_cookies
    
    except Exception as e:
        # 异常处理
        logging.error(f"获取雪球 cookies 时出错: {str(e)}")

    finally:
        # 确保清理临时文件
        if os.path.exists('md5_1038_env.js'):
            try:
                os.remove('md5_1038_env.js')
            except:
                os.exit(1)

if __name__ == "__main__":
    cookies = get_xueqiu_cookies()
    if cookies:
        print(f"获取的 Cookies: {cookies}")
    else:
        print("未能成功获取 cookies")