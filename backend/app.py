import json
import os
import shutil
from pathlib import Path
import openai
import tornado
import tornado.ioloop
import tornado.web
from openai.error import TryAgain
from requests import JSONDecodeError

token = os.getenv("OPENAPI_TOKEN")

assert token is not None

openai.api_key = token

class ChatHandler(tornado.web.RequestHandler):

    def post(self):
        args = json.loads(self.request.body.decode('utf8'))


        message = args.get("message")
        if message:
            try:
                print(f"ChatHandler chat start question={message}")
                completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": message}], timeout=10)
                answer = completion.choices[0].message.content
                print("ChatHandler chat start answer=: ", answer)
                result = {'status': True, 'data': answer}
            except TryAgain as e:
                print(e)
                result = {'status': False, 'message': '接口调用超时'}
        else:
            result = {'status': True, 'message': '参数不能为空'}

        print(f"ChatHandler chat response={result}")

        self.write(result)


def make_app():
    return tornado.web.Application([
        (r"/api/chatbot/chat", ChatHandler),
    ], debug=True)

if __name__ == "__main__":
    app = make_app()
    app.listen(8082)
    tornado.ioloop.IOLoop.current().start()