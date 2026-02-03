'''
无限debugger 可以在控制台执行这个代码跳过
(function (){
    AAA = Function.prototype.constructor;
    Function.prototype.constructor = function(e){
        if (e === "debugger"){
            return function(){}
        }
        return AAA(e)
    }
})();

md5_1038 是拼接在网址上面的，先找到这个网址请求的位置，分析查看网址是否有拼接md5_1038参数，进行堆栈查找

第一页的数据可以爬到，但是第二页的数据就爬不到了，因为有一个md5的参数。而且代码有混淆，搜索不到。无限debugger也不好解决
尝试用playwright
'''

from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    # context = p.chromium.launch_persistent_context(
    #         # 1. 浏览器安装路径
    #         executable_path=r"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    #         # 2. 单独指定一个用户数据目录（任意空目录）（为什么要？因为需要登录，要记录登录状态，后续不用重复登录）
    #         user_data_dir=r"user_data",
    #         # 3. 有头模式
    #         headless=False,
    #         # 4. 窗口大小
    #         viewport={"width": 1200, "height": 800}
    #     )
    #     # page实例，访问页面
    # page = context.pages[0]

    browser = p.chromium.launch(headless=False)
    page = browser.new_page()
    # page.goto("http://xueqiu.com/u/1247347556")
    page.goto("https://www.baidu.com")

    page.wait_for_timeout(10000)