/**
 * @swagger
 * /hello:
 *   get:
 *     tags:
 *       - 测试
 *     summary: GET 测试
 *     description: 用于测试基础 GET 请求的接口
 *     responses:
 *       200:
 *         description: 【成功】 返回 world
 */

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

const bdTransform = require('./spiderTools/baiduTranslate.js');
const wwtTransform = require('./spiderTools/waitwaitpay/decode');

const jsonParser = bodyParser.json();

router.get('/bd', function (req, res, next) {
    res.send('respond with a resource');
});

// baidu
router.post('/bd', jsonParser, function (req, res, next) {
    console.log(req.body)
    let param = req.body.key;
    console.log(param)
    let ans = bdTransform(param);
    let jsonString = {};
    jsonString[param] = ans
    res.send(JSON.stringify(jsonString));
});

router.post('/wwt', jsonParser, function (req, res, next){
    let param = req.body.key;
    let ans = wwtTransform(param);
    res.send(JSON.stringify(ans));
    // let jsonString = {};
    // jsonString[]
});
module.exports = router