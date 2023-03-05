FROM ccr.ccs.tencentyun.com/jansora/chatbot_dependencies:1.0


RUN mkdir -p /app

WORKDIR /app

COPY ./backend/app.py ./

RUN chmod 755 ./quarkus-onlinecompiler


COPY ./frontend/chat/build ./dist


COPY ./nginx.conf /etc/nginx/nginx.conf


CMD ["sh","-c", "service nginx restart && python3 app.py"]





