import json

with open('test3.json','r',encoding='utf-8') as f:
    response = json.load(f)

# print(response)

# 回复者，回复内容，回复时间
comments=response['comments']
for comment in comments:
    print('回复内容:',comment['text'])
    print('回复时间:',comment['timeBefore'])
    print('回复者:',comment['user']['screen_name'])
    print("------------")