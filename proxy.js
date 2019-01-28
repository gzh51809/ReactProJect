  const proxy =require('http-proxy-middleware');
  const express = require('express');
  let app =express();
  
  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});
/**
 注： http://localhost:4008/farapi/index/hotsShowList请求是/farapi开头，进入代理模式，
 转换成地址https://m.juooo.com/farapi/index/hotsShowList，而/farapi会被替换成/，因此最终的地址是：
 https://m.juooo.com/index/hotsShowList
 */
  	app.use('/farapi', proxy({
    "target": "https://m.juooo.com",//目标访问网站
    "changeOrigin": true,
    "pathRewrite": {
        "^/farapi" : "/"
   		 }
	}));
app.listen(4008, function(){
    console.log('Server running on http://localhost:4008');
});