# before
> window
npm install cross-env -g

# ws
path | 用途     | data
:----|:---------|:-------------
/msg | 消息类型 | msg
/user| 用户操作 | user

### data1
参数    | 定义         | 值类型
:------|:-------------|:-------------
from   | 发出的用户_id | string
to     | 接收的用户_id | string
type   |  消息类型     | 'text'or'img'
content| 消息文字内容or图片url| string

# http

### 登录
url: /user/login
方式: POST

参数     | 说明         | 值类型   |是否必填
:--------|:-------------|:--------|:-----
username | 用户名       | string  | 是
password | 密码         | string  | 是


### 注册
url: /user/signUp
方式: POST

参数     | 说明         | 值类型   |是否必填
:--------|:-------------|:--------|:-----
username | 用户名       | string  | 是
password | 密码         | string  | 是
name     | name         | string  | 是

### 搜索用户
url: /user/search/:username
方式: GET

### 获取moments
url: /moments/:_id
方式: GET

### 发moments
url: /moments
方式: POST

待定
