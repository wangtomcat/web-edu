var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'demo' // 数据库名字
});

connection.connect(); // 执行连接
// 执行sql语句
var name = 'li';
var password = '234';
connection.query("INSERT INTO USER VALUES ('" + name + "', '" + password + "')" ,function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});

connection.end(); // 关闭数据库