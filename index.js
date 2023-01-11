var express = require('express');
var router = express.Router();
var mysql = require('../config/connection')


/* GET home page. */
router.get('/', function (req, res, next) {


});

router.get('/register', function (req, res, next) {
  mysql.query("select * from details", function (err, result) {

    res.render('create', { result });
  })
});

router.post('/created', function (req, res, next) {
  console.log(req.body);
  mysql.query("insert into details values(NULL,'" + req.body.uname + "','" + req.body.email + "','" + req.body.psw + "')", function (err, result) {

    res.redirect('/register')
  })
});

router.get('/edit/:id', function (req, res, next) {
  var idd = req.params.id;
  mysql.query("select * from details where id ='" + idd + "' ", (err, resul) => {

    console.log(resul[0]);
    var result = resul[0];
    res.render('edit', { result });

  })

});

router.post('/edited/:id', function (req, res, next) {

  mysql.query("update details set username ='" + req.body.uname + "',email = '" + req.body.email + "', password = '" + req.body.psw + "' where id = '" + req.params.id + "' ",function(err,result){

  if(result){
    console.log(result)
    res.redirect('/register')
  }

  })
  
});



router.get('/delete/:id', function (req, res, next) {
  var idd = req.params.id;
  mysql.query("delete from details where id ='" + idd + "' ", (err, resul) => {

    console.log(resul);
    
    res.redirect("/register");

  })

});

module.exports = router;
