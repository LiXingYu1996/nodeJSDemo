var express = require("express");
var app = express();

app.use("/public/", express.static("./public/"));

// 想要请求不同的url就直接get新的url就行了就不用再像前面那样判断url的值了
app.get("/", function (request, response) {
    console.log("hello express");
    //响应
    response.send("hello express");
});

app.get("/about", function (request, response) {
    console.log("hello 你好 express");
    //响应
    response.send("hello 你好 express");
});

app.listen(3000, function () {
    console.log("express is running at port 3000")
});

