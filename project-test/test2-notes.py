import requests

cookies = {
        'abRequestId': '31332a8d-9bc4-5fab-800b-66687ec8e83a',
        'a1': '19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698',
        'webId': 'c0f704203a40e38f82dc8c4be59d8609',
        'gid': 'yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q',
        'xsecappid': 'xhs-pc-web',
        'webBuild': '4.86.0',
        'acw_tc': '0a0bb13817644182970626591e4f9c84967d6604ffcd1a2d983c8b43b5f8f1',
        'websectiga': '634d3ad75ffb42a2ade2c5e1705a73c845837578aeb31ba0e442d75c648da36a',
        'sec_poison_id': '9213e580-5300-4be0-b122-25fb5e1d2207',
        'web_session': '040069b0533f5f561d1672ae1f3b4b986d46e8',
        'unread': '{%22ub%22:%22692750b4000000000d0363ed%22%2C%22ue%22:%2269245a7b000000000d00ee48%22%2C%22uc%22:20}',
        'loadts': '1764419191009',
    }

headers = {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'cache-control': 'no-cache',
            'content-type': 'application/json;charset=UTF-8',
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
            'x-b3-traceid': '593f78186e9e2072',
            'x-s': 'XYS_2UQhPsHCH0c1Pjh9HjIj2erjwjQhyoPTqBPT49pjHjIj2eHjwjQ+GnPW/MPjNsQhPUHCHfM1qAZAPebK8SkYa7blPgSk2bYhJdSH2BEaN78gGASk2e4k/pHh+p8T89khnnSPa/QxPgD7a/zD8e+zzDMdydYI40+z2gZFpLQxnSkjJpkcPrR9zMQ3yBbDzr+1LnSr/fqUqd4p+BTQa9Rf+FlM/LlrNA8/porI/Fr6aSLIaDYNnb+tpM8otAHMprMeJdmALdkaaSmpGpcAJrzVaM+18b8yJB+kz/mtLDS3PrRHz0FRHjIj2ecjwjQ6GfkSG7cjKc==',
            'x-s-common': '2UQAPsHCPUIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0c1Pjh9HjIj2eHjwjQ+GnPW/MPjNsQhPUHCHdYiqUMIGUM78nHjNsQh+sHCH0c1weG1PsHVHdWMH0ijP/SYG0SS8f+j+0+lGAb3Jor7y9cFPBEi2BlC8AbUy9Q6J7zjJ9cM2nrAPeZIPerU+0GEwsHVHdW9H0ijHjIj2eqjwjHjNsQhwsHCHDDAwoQH8B4AyfRI8FS98g+Dpd4daLP3JFSb/BMsn0pSPM87nrldzSzQ2bPAGdb7zgQB8nph8emSy9E0cgk+zSS1qgzianYt8p+f/LzN4gzaa/+NqMS6qS4HLozoqfQnPbZEp98QyaRSp9P98pSl4oSzcgmca/P78nTTL08z/sVManD9q9z1J9p/8db8aob7JeQl4epsPrz6agW3tF4ryaRApdz3agYDq7YM47HFqgzkanYMGLSbP9LA/bGIa/+nprSe+9LI4gzVPDbrJg+P4fprLFTALMm7+LSb4d+kpdzt/7b7wrQM498cqBzSpr8g/FSh+bzQygL9nSm7qSmM4epQ4flY/BQdqA+l4oYQ2BpAPp87arS34nMQyFSE8nkdqMD6pMzd8/4SL7bF8aRr+7+rG7mkqBpD8pSUzozQcA8Szb87PDSb/d+/qgzVJfl/4LExpdzQ4fRSy7bFP9+y+7+nJAzdaLp/2LSizgbHwgbMagYiJdbCwB4QyFSfJ7b7yFSenS4o+A+A8BlO8p8c4A+Q4DbSPB8d8ncIyLEQy/pAPFSj80QM4rbQyLTAynz98nTy/fpLLocFJDbO8p4c4FpQ4S+P2DrI8p+n4F+d8DTALMm7LrDApoQQ2rLM/op749bl4UTU8nTinDbw8/b+/fLILoqEaL+wqM8PJ9p/GDSBanT6qM+U+7+nJD8kanTdqM8n4rMQygpDqgb7t7zl4b4QPAmSPMm7aLSiJ9LA4gclanSOq9kM4e+74gz1qMm7nrSeG9lQPFSUP04VyAQQ+nLl4gzeaLp/NFSbadPILoz1qbSQcLuIafp88DclaLpULrRc4rT6qgqAa/+O8gYl4b4z/epSyn+mqA+Iyo4QyBRAPASOqA+M4o+0Lo4YaL+tqM4c4ApQyn4Sy9pl/rSea9px8sRA8SmF+LSh+7+h4g4r+BRnqFDALDSQ2rRSP9FMqM+p4d+rG9zS8S87pDS9JnYQ4dQaqob7pFShGMpQy/mSP9l/Jdk6/fpDpd41agYrN7kM4MS7LFbSpBIMq98n4BR0pdzaanSBwLSit7SSpdzTLob7nLDAN7+xpFkSpb87NFkM4o8QzgkNqdbFwLShqnEzN7b0anDMqMSs/7+kzd8SpS87wrEM4o4QyLSTagW9q9zl4e+QyrkSnnGhqLSe/nQjnnlEaL+b4FSbPBpn4gq9/bmFp9Rn4eSQ2rWEaLLIqAbx8BpnLo4cqoQn/LSi/BcU4gzSqM8FqLShLrpQPMzianS8zLSi+nLAqDTA2rQ38LEM47QQc7Qh2S87LnQn49EQyBzSP9zB4LSkqnS0wg8SySmFapkc4BET2f+zqdQoprS3L08Cpd4Fa/P7qA8VqrlQy7kbnSm7cLS3JoSzqgclab8F4LSe4n+QyBTwaLp8aFYM4emQyMSzanSSq7Yc47Y0JBWRHjIj2eDjwjFlP/DUP0rF+ePhNsQhP/Zjw0ZVHdWlPaHCHfE6qfMYJsQR',
            'x-t': '1764419198563',
            'x-xray-traceid': 'cd67ca2f2b5732cca8945fa9f0545f53',
            # 'cookie': 'abRequestId=31332a8d-9bc4-5fab-800b-66687ec8e83a; a1=19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698; webId=c0f704203a40e38f82dc8c4be59d8609; gid=yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q; xsecappid=xhs-pc-web; webBuild=4.86.0; acw_tc=0a0bb13817644182970626591e4f9c84967d6604ffcd1a2d983c8b43b5f8f1; websectiga=634d3ad75ffb42a2ade2c5e1705a73c845837578aeb31ba0e442d75c648da36a; sec_poison_id=9213e580-5300-4be0-b122-25fb5e1d2207; web_session=040069b0533f5f561d1672ae1f3b4b986d46e8; unread={%22ub%22:%22692750b4000000000d0363ed%22%2C%22ue%22:%2269245a7b000000000d00ee48%22%2C%22uc%22:20}; loadts=1764419191009',
        }

json_data = {
    'keyword': '英语学习机',
    'page': 100,
    'page_size': 20,
    'search_id': '2fn83ri9kh6oljmyw6uvq',
    'sort': 'general',
    'note_type': 0,
    'ext_flags': [],
    'geo': '',
    'image_formats': [
        'jpg',
        'webp',
        'avif',
    ],
}

response = requests.post(
    'https://edith.xiaohongshu.com/api/sns/web/v1/search/notes',
    cookies=cookies,
    headers=headers,
    json=json_data,
)
print(response.text)
# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
#data = '{"keyword":"英语学习机","page":1,"page_size":20,"search_id":"2fn83ri9kh6oljmyw6uvq","sort":"general","note_type":0,"ext_flags":[],"geo":"","image_formats":["jpg","webp","avif"]}'.encode()
#response = requests.post('https://edith.xiaohongshu.com/api/sns/web/v1/search/notes', cookies=cookies, headers=headers, data=data)
