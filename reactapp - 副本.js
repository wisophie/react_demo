const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(express.static('./build'))

app.use('/api', createProxyMiddleware({
  target: 'https://www.ahsj.link/rambo',
  changeOrigin: true,
  pathRewrite: { '^/api': '/' }
}));

app.listen(8083, () => {
  console.log('exress server is running')
})