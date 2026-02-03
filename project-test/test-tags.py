import requests
from jsonpath import jsonpath
cookies = {
    'abRequestId': '31332a8d-9bc4-5fab-800b-66687ec8e83a',
    'a1': '19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698',
    'webId': 'c0f704203a40e38f82dc8c4be59d8609',
    'gid': 'yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q',
    'webBuild': '4.86.0',
    'unread': '{%22ub%22:%22691adfe6000000001b0270fe%22%2C%22ue%22:%2269099b0d000000000301e34f%22%2C%22uc%22:20}',
    'xsecappid': 'xhs-pc-web',
    'web_session': '040069b0533f5f561d161ba71f3b4bcedd50f0',
    'websectiga': '2a3d3ea002e7d92b5c9743590ebd24010cf3710ff3af8029153751e41a6af4a3',
    'sec_poison_id': '611a7d02-6ba1-4204-81de-6f6274dababe',
    'acw_tc': '0a4a9dd317644292319012608e3aa6300e93f127a64938c92172a48621cf09',
    'loadts': '1764429423070',
}

headers = {
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
    'x-b3-traceid': 'eaaa28a8755ed447',
    'x-s': 'XYS_2UQhPsHCH0c1Pjh9HjIj2erjwjQhyoPTqBPT49pjHjIj2eHjwjQ+GnPW/MPjNsQhPUHCHfM1qAZlPebKL/Q9LrYFz04S2DkFafM6yUTsGaTat7ZUGMWMLFYdPLR6/DYt2BpDGFTd/rQhqbmEzADlzSD9PApot789agkF/g4O47mrqokx40LUtAbePFMgLB8cJoLIz/SMnLYow/4/4FR0LbzCaeS7yn8+2sTsLoSBzM4a4MP649hM4/Yb+DpLpBb7/f8bJDYoJ/8rynP6/Bu9G78zPnlMzdSopeYj4fYjngmMGF4CLdZjNsQh+sHCHjQR',
    'x-s-common': '2UQAPsHCPUIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0c1Pjh9HjIj2eHjwjQ+GnPW/MPjNsQhPUHCHdYiqUMIGUM78nHjNsQh+sHCH0c1weG1PsHVHdWMH0ijP/SYG0SS8f+j+0+lGAb3Jor7y9cFPBEi2BlC8AbUy9Q6J7zjJ9cM2nrAPeZIPerU+0GEwsHVHdW9H0ijHjIj2eqjwjHjNsQhwsHCHDDAwoQH8B4AyfRI8FS98g+Dpd4daLP3JFSb/BMsn0pSPM87nrldzSzQ2bPAGdb7zgQB8nph8emSy9E0cgk+zSS1qgzianYt8p+f/LzN4gzaa/+NqMS6qS4HLozoqfQnPbZEp98QyaRSp9P98pSl4oSzcgmca/P78nTTL08z/sVManD9q9z18np/8db8aob7JeQl4epsPrzsagW3tF4ryaRApdz3agYDq7YM47HFqgzkanYMGLSbP9LA/bGIa/+nprSe+9LI4gzVPDbrJg+P4fprLFTALMm7+LSb4d+kpdzt/7b7wrQM498cqBzSpr8g/FSh+bzQygL9nSm7qSmM4epQ4flY/BQdqA+l4oYQ2BpAPp87arS34nMQyFSE8nkdqMD6pMzd8/4SL7bF8aRr+7+rG7mkqBpD8pSUzozQcA8Szb87PDSb/d+/qgzVJfl/4LExpdzQ4fRSy7bFP9+y+7+nJAzdaLp/2LSizLkHwgbMagYiJdbCwB4QyFSfJ7b7yFSenS4o+A+A8BlO8p8c4A+Q4DbSPB8d8ncIyLEQy/pAPFSj80QM4rbQyLTAynz98nTy/fpLLocFJDbO8p4c4FpQ4S+P2Dr98p+n4ApIJjRAzob7qDDA+oQQ2rLM/op749bl4UTU8nTinDbw8/b+/fLILoqEaL+wqM8PJ9p/GDSBanT6qM+U+7+nJD8kanTdqM8n4rMQygpDqgb7t7zl4b4QPAmSPMm7aLSiJ9LA4gclanSOq9kM4e+74gz1qMm7nrSeG9lQPFSUP04VyAQQ+nLl4gzeaLp/NFSbadPILoz1qbSQcLuIafp88DclaLpULrRc4rT6qgqAa/+O8gYl4b4z/epSyn+mqA+Iyo4QyBRAPASOqA+M4o+0Lo4YaL+tqM4c4ApQyn4Sy9pl/rSea9px8sRA8SmF+LSh+7+h4g4r+BRnqFDALDSQ2rRSP9FMqM+p4d+rG9zS8S87pDS9JnYQ4dQaqob7pFShGMpQy/mSP9l/Jdk6/fpDpd41agYrN7kM4MS7LFbSpBIMq98n4BR0pdzaanSBwLSit7SSpdzTLob7nLDAN7+xpFkSpb87NFkM4o8QzgkNqdbFwLShqnEzN7b0anDMqMSs/7+kzd8SpS87wrEM4o4QyLSTagW9q9zl4e+QyrkSnnGhqLSe/nQjnnlEaL+b4FSbPBpn4gq9/bmFp9Rn4eSQ2rWEaLLIqAbx8BpnLo4cqoQn/LSi/BcU4gzSqM8FqLShLrpQPMzianS8zLSi+nLAqDTA2rQ38LEM47QQc7Qh2S87LnQn49EQyBzSP9zB4LSkqnS0wg8SySmFapkc4BET2f+zqdQoprS3L08Cpd4Fa/P7qA8VqrlQy7kbnSm7cLS3JoSzqgclab8F4LSe4n+QyBTwaLp8aFYM4emQyMSzanSSq7Yc47Y0JBWRHjIj2eDjwjFlP0D9+AD7P0HENsQhP/Zjw0ZVHdWlPaHCHfE6qfMYJsQR',
    'x-t': '1764429423192',
    'x-xray-traceid': 'cd6818312049a31c2543e2b8aeea89a9',
    # 'cookie': 'abRequestId=31332a8d-9bc4-5fab-800b-66687ec8e83a; a1=19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698; webId=c0f704203a40e38f82dc8c4be59d8609; gid=yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q; webBuild=4.86.0; unread={%22ub%22:%22691adfe6000000001b0270fe%22%2C%22ue%22:%2269099b0d000000000301e34f%22%2C%22uc%22:20}; xsecappid=xhs-pc-web; web_session=040069b0533f5f561d161ba71f3b4bcedd50f0; websectiga=2a3d3ea002e7d92b5c9743590ebd24010cf3710ff3af8029153751e41a6af4a3; sec_poison_id=611a7d02-6ba1-4204-81de-6f6274dababe; acw_tc=0a4a9dd317644292319012608e3aa6300e93f127a64938c92172a48621cf09; loadts=1764429423070',
}
params = {
    'keyword': '英语学习机',
    'search_id': '2fnktufqqum3iayhap251',
}

response = requests.get(
    'https://edith.xiaohongshu.com/api/sns/web/v1/search/filter',
    params=params,
    cookies=cookies,
    headers=headers,
)
response_json = response.json()
filters=jsonpath(response_json,'$..filters')[0]
print(filters)
print('-----------------')
filter_tags=jsonpath(response_json,'$..filter_tags')[0][0]['name']
print(filter_tags)
filter_tags=jsonpath(response_json,'$..filter_tags')[-1]
for i in filter_tags:
    print(i['name'])

