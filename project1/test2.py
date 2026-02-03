from jsonpath import jsonpath
import json
import re
with open('test.json','r',encoding='utf-8') as f:
    response = json.load(f)
    # print(response)
statuses = jsonpath(response, '$..statuses')[0]
# print(len(statuses))
status=statuses[2]

reweet_status=jsonpath(status,'$..retweeted_status')

text=jsonpath(reweet_status,'$..text')
# print(text)
html_tag_pattern = re.compile(r'<[^>]+>')
pure_text = html_tag_pattern.sub('', text[0])
# print(reweet_status)
print('问题:',pure_text)
name=jsonpath(reweet_status,'$..user..screen_name')
print('提问者:',name[0])

time_before=jsonpath(reweet_status,'$..timeBefore')
retweet_count=jsonpath(reweet_status,'$..retweet_count')
reply_count=jsonpath(reweet_status,'$..reply_count')
like_count=jsonpath(reweet_status,'$..like_count')
print('提问时间:',time_before[0])
print('转发数:',retweet_count[0])
print('讨论数:',reply_count[0])
print('点赞数:',like_count[0])

print('id:',jsonpath(reweet_status,'$..id')[0])
print('转发id:',jsonpath(status,'$..commentId')[0])