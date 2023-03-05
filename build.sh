#
docker build  -f ./Dockerfile_dependencies -t chatbot_dependencies .
docker tag chatbot_dependencies ccr.ccs.tencentyun.com/jansora/chatbot_dependencies:1.0
docker push ccr.ccs.tencentyun.com/jansora/chatbot_dependencies:1.0

docker build -t chatbot .

docker tag chatbot ccr.ccs.tencentyun.com/jansora/chatbot:1.0
docker push ccr.ccs.tencentyun.com/jansora/onlinecompiler:7.3
