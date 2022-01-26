ar http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
 
});
app.listen(3000);

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// var app = http.createServer(function(request,response){
//     var _url = request._url;
//     var queryData = url.parse(_url, true).query;
//     console.log(queryData.id);
//     if(_url == '/'){
//       _url = '/index.html';
//     }
//     if(_url == '/favicon.ico'){
//     //   response.writeHead(404);
//     //   response.end();
//     //   return;
//     return response.writeHead(404);
//     }
//     response.writeHead(200);
//     response.end(fs.readFileSync(__dirname + url));
 
// });
// app.listen(3000); // 이거 포트번호 웹서버(HTTP)는 80이 기본빵임.

