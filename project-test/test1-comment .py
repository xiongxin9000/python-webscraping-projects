import requests
import json
cookies = {
    'abRequestId': '31332a8d-9bc4-5fab-800b-66687ec8e83a',
    'a1': '19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698',
    'webId': 'c0f704203a40e38f82dc8c4be59d8609',
    'gid': 'yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q',
    'xsecappid': 'xhs-pc-web',
    'webBuild': '4.86.0',
    'acw_tc': '0a4adfe817641701732976685ea397785c93b9e97b5dc0195a2114958d1912',
    'web_session': '040069b0533f5f561d16a751123b4bd2b1c7fa',
    'loadts': '1764171589082',
    'websectiga': 'f47eda31ec99545da40c2f731f0630efd2b0959e1dd10d5fedac3dce0bd1e04d',
    'sec_poison_id': '7bea6283-370f-4f95-9852-cd9e70c79816',
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
    'x-b3-traceid': 'c179590a3927c38a',
    'x-s': 'XYS_2UQhPsHCH0c1Pjh9HjIj2erjwjQhyoPTqBPT49pjHjIj2eHjwjQ+GnPW/MPjNsQhPUHCHfM1qAZAPebK8SkYa7b0498xzBE+cpQ149EaN78gq0Q6yaRA/pHh+p89+9khnnSPa/QxPrI7a/zDcnEkcpSo/0p7nsRz2gZFpLQxnSkjJpkcPrR9zMQ3yBbDzr+1LnSr/fqUqd4p+BTQa9Rf+FlM/LlrNA8/porI/Fr6aSLIaDYNnb+tpM8otAHMprMeJdmALdkaaSmpGpcAJrkaaM+18b8yJB+kz/mtLDS3PrRHz0FRHjIj2ecjwjHjKc==',
    'x-s-common': '2UQAPsHCPUIjqArjwjHjNsQhPsHCH0rjNsQhPaHCH0c1Pjh9HjIj2eHjwjQ+GnPW/MPjNsQhPUHCHdYiqUMIGUM78nHjNsQh+sHCH0c1weG1PsHVHdWMH0ijP/SYG0SS8f+j+0+lGAb3Jor7y9cFPBEi2BlC8AbUy9Q6J7zjJ9cM2nrAPeZIPerU+0GEwsHVHdW9H0ijHjIj2eqjwjHjNsQhwsHCHDDAwoQH8B4AyfRI8FS98g+Dpd4daLP3JFSb/BMsn0pSPM87nrldzSzQ2bPAGdb7zgQB8nph8emSy9E0cgk+zSS1qgzianYt8p+1/LzN4gzaa/+NqMS6qS4HLozoqfQnPbZEp98QyaRSp9P98pSl4oSzcgmca/P78nTTL08z/sVManD9q9z18np/8db8aob7JeQl4epsPrzsagW3Lr4ryaRApdz3agYDq7YM47HFqgzkanYMGLSbP9LA/bGIa/+nprSe+9LI4gzVPDbrJg+P4fprLFTALMm7+LSb4d+kpdzt/7b7wrQM498cqBzSpr8g/FSh+bzQygL9nSm7qSmM4epQ4flY/BQdqA+l4oYQ2BpAPp87arS34nMQyFSE8nkdqMD6pMzd8/4SL7bF8aRr+7+rG7mkqBpD8pSUzozQcA8Szb87PDSb/d+/qgzVJfl/4LExpdzQ4fRSy7bFP9+y+7+nJAzdaLp/2LSiz/zzwgbMagYiJdbCwB4QyFSfJ7b7yFSenS4o8e+A8BlO8p8c4A+Q4DbSPB8d8ncIyLEQy/pAPFSj80QM4rbQyLTAynz98nTy/fpLLocFJDbO8p4c4FpQ4S+PGAm98nzn4MpP8DTAzop7GDDA+oQQ2rLM/op749bl4UTU8nTinDbw8/b+/fLILoqEaL+wqM8PJ9p/GDSBanT6qM+U+7+nJD8kanTdqM8n4FYQ4fl1NMmFc9+c47mQznRAPop7LLS9+nL94gqManWAq9kM4Apwqg4oJM874LSe2SzQ4SQFLnpncL4VN7+kqgzBanYc4rSk8np84g468p40G7mp/7+rq9TManYa2gzc474Cqg4manTSqM4l4oplaLbApDG9qAbQGDlQz/mA+fpDq9Sc4B+0Lo4UaL+t8n8n498Qy94A+0mgJFSea9pDJURSpM8FPFDA+9pnqgqAwrQ8qDSiasTQcA8A2rS68/GE4fpDqDRAnpmFqFSbtURQzgb3qob78LSkzMpQy/mSP7k/Jdks/fpgpd4yanSHzgkM4MW3qDES8Dbwq7Yn4sR14gzUanTQyFSi2dmy4gzUnS87qrDA/d+DJrkSPob7an+c4okQz/z0cdpFaLS3abmycpmCanTSqM8U8g+D8FESygb74UTl4rEQ2BWFagW9qAbl4b+Qyo8Sy9hhcLSeL0QAGMzOag8apDS9cnpk4gq7qgpFpMml4r8QPFz3anWMqA+mPBp/Lo49qrlcJDSi/rWUqgzoGdbF/DDAz9SQyLM0anT/JrS9PBpDGDRAyM+V2rRn47+QcF8CGM87LLQM4AbQz/pSpDMHNFS3aBSI8DbS8b8FP9Qn4rzy2SkdJ9Ry+FSkLnTILo4TanDMq7YTGf+QyaT6Lp87LDS3psTcpdcE/MmF2DSiyBkQc9Q1ag8zGDQn4ASQyFYTaL+9qM+l4FTcPBQSag8Q/FSb+npf8e+SPgb7JrShtFzQyM4hHjIj2eDjw0L7+0c9+Ar7NsQhP/Zjw0ZVHdWlPaHCHfE6qfMYJsQR',
    'x-t': '1764171956939',
    'x-xray-traceid': 'cd606be1606ccd2f1be6be111dbce9fd',
    # 'cookie': 'abRequestId=31332a8d-9bc4-5fab-800b-66687ec8e83a; a1=19ab9efcb63qc1klq7kd40nhxlzg1rkbootbod5ya30000126698; webId=c0f704203a40e38f82dc8c4be59d8609; gid=yj0DjdifS2ldyj0DjdiSDlf2KqASyT1AWTf49v08IxC1uDq8kyFTDl888yJKKjY8y0D4di4q; xsecappid=xhs-pc-web; webBuild=4.86.0; acw_tc=0a4adfe817641701732976685ea397785c93b9e97b5dc0195a2114958d1912; web_session=040069b0533f5f561d16a751123b4bd2b1c7fa; loadts=1764171589082; websectiga=f47eda31ec99545da40c2f731f0630efd2b0959e1dd10d5fedac3dce0bd1e04d; sec_poison_id=7bea6283-370f-4f95-9852-cd9e70c79816',
}

response = requests.get(
    'https://edith.xiaohongshu.com/api/sns/web/v2/comment/page?note_id=686e7c75000000001203edce&cursor=&top_comment_id=&image_formats=jpg,webp,avif&xsec_token=AB2n07dr_8iOkLCDo3JXth2InTV6tDXAWuaJpnDHHTANI=',
    cookies=cookies,
    headers=headers,
)

print(response.text)