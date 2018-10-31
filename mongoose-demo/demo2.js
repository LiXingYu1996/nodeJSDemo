var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

var User = mongoose.model('User', userSchema);

// var demo = new User({
//     username: "zs",
//     password: "123456",
//     email: "123123@qq.com"
// });
//
// demo.save(function (error, result) {
//     if (error) {
//         console.log("保存失败");
//     } else {
//         console.log("保存成功");
//         console.log(result);
//     }
// });

// User.find(function (error, result) {
//     if (error) {
//         console.log("查询失败");
//     } else {
//         console.log(result);
//     }
// });

// User.find({username: "zs"}, function (error, result) {
//     if (error) {
//         console.log("查询失败");
//     } else {
//         console.log(result);
//     }
// });

// User.remove({
//     username: "admin",
// }, function (error, result) {
//     if (error) {
//         console.log("删除失败");
//     } else {
//         console.log("删除成功");
//         console.log(result);
//     }
// });

// User.findByIdAndUpdate('5a001b23d219eb00c8581184', {
//   password: '123'
// }, function (err, ret) {
//   if (err) {
//     console.log('更新失败')
//   } else {
//     console.log('更新成功')
//   }
// })