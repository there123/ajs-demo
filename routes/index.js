var express = require('express');
var router = express.Router();

/* GET home page. */
exports.index= function(req, res) {
  res.render('index', { title: 'Express' });
};
exports.login=function(req,res){
  res.render('login',{title:'Logging'});
};

