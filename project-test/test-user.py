import requests

cookies = {
    'abRequestId': '31332a8d-9bc4-5fab-800b-66687ec8e83a',
    'a1': '19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698',
    'webId': 'c0f704203a40e38f82dc8c4be59d8609',
    'gid': 'yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q',
    'xsecappid': 'xhs-pc-web',
    'web_session': '040069b0533f5f561d16a751123b4bd2b1c7fa',
    'acw_tc': '0a00d33a17642302529311254e160c6a7a9f8eb317d149303e83cb2a198bc2',
    'webBuild': '4.86.0',
    'websectiga': '16f444b9ff5e3d7e258b5f7674489196303a0b160e16647c6c2b4dcb609f4134',
    'sec_poison_id': '4ee19116-63de-4662-8cb9-98aa64c27e6a',
    'loadts': '1764230456876',
}

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'sec-ch-ua': '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36',
    # 'cookie': 'abRequestId=31332a8d-9bc4-5fab-800b-66687ec8e83a; a1=19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698; webId=c0f704203a40e38f82dc8c4be59d8609; gid=yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q; xsecappid=xhs-pc-web; web_session=040069b0533f5f561d16a751123b4bd2b1c7fa; acw_tc=0a00d33a17642302529311254e160c6a7a9f8eb317d149303e83cb2a198bc2; webBuild=4.86.0; websectiga=16f444b9ff5e3d7e258b5f7674489196303a0b160e16647c6c2b4dcb609f4134; sec_poison_id=4ee19116-63de-4662-8cb9-98aa64c27e6a; loadts=1764230456876',
}

response = requests.get(
    'https://www.xiaohongshu.com/user/profile/586e55226a6a6957bbde613b?xsec_token=AB9zSJ39OdVXZC8LHXg8lPeIeCxoLvfxbsHKiCaxlo-Lc=&xsec_source=pc_comment',
    cookies=cookies,
    headers=headers,
)