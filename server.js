const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('接收到客户端发送的消息', message);
    wx.send('你发送的消息是'+message);
  });

  ws.send('你好，有什么可以帮助您的');
});
