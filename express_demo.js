/**
 * Created by linxiaoli on 2017/7/6.
 */
var express = require('express');
var app1=express();

app1.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app1.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})