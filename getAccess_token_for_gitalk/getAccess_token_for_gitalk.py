import requests
import flask
from flask_cors import CORS

server = flask.Flask(__name__)

# 跨域访问问题
CORS(server, resources={r"/*": {"origins": "*"}})

# github auth
client_id = "e0b7de11a5245802f0b0"
client_secret = "b076dfdb5e3738f307e9e8277201f6cdc77a2c0b"

@server.get('/')
def test_proxy():
    return "<br>代理服务器运行正常</br>"

@server.get('/test_github')
def test_github():
    url = 'https://github.com/'
    result = requests.get(url=url)
    return result.text

# 接口返回格式 {"access_token":"gho_COSr3lUITUX9b2J7krsKjNlnlNSOBw2g0oZ1","token_type":"bearer","scope":"public_repo"}
@server.post('/get_access_token')
def get_access_token():

    print("######################################################################")
    print(flask.request.json['code'])
    print("######################################################################")

    url = 'https://github.com/login/oauth/access_token'
    params = {
        'client_id': client_id,
        'client_secret': client_secret,
        'code': flask.request.json['code']
    }
    headers = {
        'accept': 'application/json'
    }
    result = requests.post(url=url, params=params, headers=headers, verify=False)

    print("######################################################################")
    print(result.text)
    print("######################################################################")

    # 存储access_token
    # ..暂时不需要
    return result.json()


if __name__ == '__main__':
    server.run(host='0.0.0.0', port=8011, debug=False)
