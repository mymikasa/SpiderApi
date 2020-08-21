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
const jiyanFirstW = require('./spiderTools/jiyan/getFirstW.js')

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
    let param = req.body;
    let uuid = param.uuid;
    let encodeStr = param.encode_str;
    let ans = wwtTransform(encodeStr);
    console.log(ans);
    res.send(JSON.stringify(ans));
    // let jsonString = {};
    // jsonString[]
});

// 极验3滑块

router.post('/jiyan/firstw', jsonParser, function (req, res, next) {
    let param = req.body;
    let gt = param.gt;
    let challenge = param.challenge;

    let ans = jiyanFirstW(gt, challenge);
    // console.log(ans);
    res.send(JSON.stringify({'ans': ans}));
})

router.post('/jiyan/ajaxw', jsonParser, function (req, res, next))
module.exports = router