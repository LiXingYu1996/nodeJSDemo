var express = require("express");
var app = express();
app.engine('html', require('express-art-template'));
var bodyParser = require('body-parser');
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use("/public/", express.static("./public/"));

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

app.get("/", function (request, response) {
    response.render("index.html", {comments: comments});
});

app.get("/post", function (request, response) {
    response.render("post.html");
});

//get请求方式
/*app.get("/pinglun", function (request, response) {
    var comment = request.query;
    var date = new Date();
    // 年
    var year = date.getFullYear();
    // 月
    var month = date.getMonth() + 1;
    // 日
    var day = date.getDate();
    var dateTime = year + "-" + month + "-" + day;
    comment.dateTime = dateTime;
    comments.unshift(comment);
    response.redirect(302, "/");
});*/

// post请求方式
app.post("/pinglun", function (request, response) {
    var comment = request.body;
    var date = new Date();
    // 年
    var year = date.getFullYear();
    // 月
    var month = date.getMonth() + 1;
    // 日
    var day = date.getDate();
    var dateTime = year + "-" + month + "-" + day;
    comment.dateTime = dateTime;
    comments.unshift(comment);
    response.redirect(302, "/");
});

app.listen(3000, function () {
    console.log("server is running");
});