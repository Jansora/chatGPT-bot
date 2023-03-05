# chatbot
A web chatbot client build with openapi offical apt

1. 模仿微信聊天输入框
2. 已适配移动端

# 部署说明

部署准备:
1. 海外的服务器 (openai 需要梯子)
2. openai 账户以及密钥 (3个月内限免 18 美刀) ,具体请查看 https://platform.openai.com/account/api-keys
3. 需要 python3.10 环境支持
部署配置:
很省资源, 几乎为零, 可部署在 1C 512M 的服务器上


## 安装依赖

`pip3 install tornado openai==0.27.0 --upgrade -i https://mirrors.aliyun.com/pypi/simple/`


## 部署
指定环境变量
`export OPENAI_TOKEN=sk-*` (替换成自己的)

部署后端服务

`python3 backend/app.py`


nginx 前后端部署
