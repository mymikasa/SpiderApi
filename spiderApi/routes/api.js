var express = require('express');
var router = express.Router();

var ftxh = require('../api/ftx')

/* POST /ftx */

router.post('/ftx', function(req, res, next) {

    try {
        let pwd = req.body.pwd;
        pwd = ftxh.f1(pwd);
        console.log(pwd);
        res.send( {"pwd": pwd} )
    } catch (error) {
        res.send("Param Error");
    }
});
module.exports = router;
