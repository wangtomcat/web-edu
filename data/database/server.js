var express = require('express')
var app = express()
// app.all(function (req, res, next) {
//     res.append("Access-Control-Allow-Origin", "*")
//     next()
// })
var mysql = require('mysql');

// 路由
app.get('/dashboard', function (req, res) {
    console.log(req.query)
    res.append("Access-Control-Allow-Origin", "*")
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'demo' // 数据库名字
    });

    connection.connect(); // 执行连接
    // 执行sql语句
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({
            results
        })
    });

    connection.end(); // 关闭数据库

})
app.get('/orders', function (req, res) {
    console.log(req.query)
    res.append("Access-Control-Allow-Origin", "*")
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'demo' // 数据库名字
    });

    connection.connect(); // 执行连接
    // 执行sql语句
    var name = req.query.name;
    var password = req.query.password;
    connection.query("INSERT INTO USER VALUES ('" + name + "', '" + password + "')", function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send({
            status: "success"
        })
    });

    connection.end(); // 关闭数据库

})


app.listen(3000)