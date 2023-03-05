const proxy = require('http-proxy-middleware');
const { createProxyMiddleware } = require('http-proxy-middleware');

// // proxy middleware options
// const options = {
//   target: 'http://localhost:30115/', // target host
//   changeOrigin: true, // needed for virtual hosted sites
//   ws: true, // proxy websockets
//   pathRewrite: {
//     '^/api/old-path': '/api/new-path', // rewrite path
//     '^/api/remove/path': '/path', // remove base path
//   },
//   router: {
//     // when request.headers.host == 'dev.localhost:3000',
//     // override target 'http://www.example.org' to 'http://localhost:8000'
//     'dev.localhost:3000': 'http://localhost:8000',
//   },
// };
// createProxyMiddleware('/api', options)
module.exports = function(app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://localhost:8082/',
    // target: 'https://www.jansora.com/',
    changeOrigin: true,
    secure: false
  }));
};
