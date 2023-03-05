# chatbot
A web chatbot client build with openapi offical api

Demo: https://chatbot.jansora.com/


1. 模仿微信聊天输入框
2. 已适配移动端
3. 已适配暗黑模式

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

后台运行
`nohup python3 backend/app.py &`

nginx 前后端部署参考

```nginx
server {

    listen 443 ssl http2;
    server_name chatbot.jansora.com;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_certificate     /etc/nginx/certs/lets-encrypt-jansora.com/jansora.com.cer;
    ssl_certificate_key /etc/nginx/certs/lets-encrypt-jansora.com/jansora.com.key;

    location / {
      root /data/ci/nginx/deploy/chatbot/dist;
      try_files $uri /index.html;
    }

    location /api {
      proxy_pass http://127.0.0.1:23386;
    }

}
```


# 部分截图

Web
![img.png](img/img.png)

移动端

![img.png](img.png)


