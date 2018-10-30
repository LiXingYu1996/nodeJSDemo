// 引入需要的核心模块
// 为了让目录结构保持统一清晰，所以我们约定，把所有的HTML文件都放到views（视图里面）目录里面
var fs = require("fs");
var http = require("http");
var url = require("url");
var server = http.createServer();
var template = require("art-template");

var comments = [
    {
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    }
];

server.on("request", function (request, response) {
    // 这里是把request.url进行解析成一个对象
    var parseObj = url.parse(request.url, true);
    var pathname = parseObj.pathname;
    if (pathname === "/") {
        fs.readFile("./views/index.html", function (error, data) {
            if (error) {
                return response.end("404 Not Found");
            }
            data = data.toString();
            var httpArt = template.render(data.toString(), {comments: comments});
            response.end(httpArt);
        });
    } else if (pathname === "/post") {
        fs.readFile("./views/post.html", function (error, data) {
            if (error) {
                return response.end("404 Not Found");
            }

            response.end(data);
        });
    } else if (pathname.indexOf("/public/") === 0) {
        // url.indexOf("/public/") === 0判断该字符串是不是第一位
        fs.readFile("." + pathname, function (error, data) {
            if (error) {
                response.end("404 Not Found");
            }
            response.end(data);
        });
    } else if (pathname === "/pinglun") {
        // 重定向第一种方法
        // response.statusCode = 302;
        // response.setHeader("location","/");
        // 重定向第二种方法
        var conment = parseObj.query;
        conment.dateTime = "2017.11.2";
        comments.unshift(conment);
        response.writeHead(302, {"location": "/"});
        response.end();
    } else {
        fs.readFile("./views/404.html", function (error, data) {
            if (error) {
                return response.end("404 Not Found");
            }
            response.end(data);
        });
    }
});

server.listen(3000, function () {
    console.log("server running");
});