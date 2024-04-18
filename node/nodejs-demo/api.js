const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";
var dbName = "koa";

exports.find = function find(table, option) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(url, function (err, client) {
      if (err) throw err;
      var dbase = client.db(dbName); //数据库名
      dbase
        .collection(table)
        .find(option)
        .toArray(function (err, result) {
          // 返回集合中所有数据
          if (err) throw err;
          client.close();
          resolve(result);
        });
    });
  });
}

exports.add = function add(table, option) {
    return new Promise(function (resolve, reject) {
      MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var dbase = client.db(dbName); //数据库名
        dbase
          .collection(table)
          .insertMany(option,function(err,result){
              if(err) throw err
              client.close();
              resolve('新增成功');
          })
      });
    });
  }

  exports.del = function del(table, option) {
    return new Promise(function (resolve, reject) {
      MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var dbase = client.db(dbName); //数据库名
        dbase
          .collection(table)
          .deleteMany(option,function(err,result){
              if(err) throw err
              client.close();
              resolve('删除成功');
          })
      });
    });
  }

  exports.update = function update(table, option) {
    return new Promise(function (resolve, reject) {
      MongoClient.connect(url, function (err, client) {
        if (err) throw err;
        var dbase = client.db(dbName); //数据库名
        dbase
          .collection(table)
          .updateMany(...option,function(err,result){
              if(err) throw err
              client.close();
              resolve('修改成功！');
          })
      });
    });
  }
