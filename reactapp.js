const express = require('express')
var fs = require('fs')
var https = require('https')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware');

//同步读取密钥和签名证书
var options = {
  key: fs.readFileSync('./ssl/wispw.com.key'),
  cert: fs.readFileSync('./ssl/wispw.com_bundle.crt')
}

app.use(express.static('./build'))

app.use('/api', createProxyMiddleware({
  target: 'https://www.ahsj.link/rambo',
  changeOrigin: true,
  pathRewrite: { '^/api': '/' }
}));

var httpsServer = https.createServer(options, app);

httpsServer.listen(8083, () => {
  console.log('httpsServer server is running')
})