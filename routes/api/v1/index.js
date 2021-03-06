'use strict'

const router = require('koa-router')();
const rcYaoKanCtrl = require('../../../controller/api/v1/rc_yaokan');

/**
 * 激活遥看用户
 */
router.post('rc_user/active', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = await rcYaoKanCtrl.active(ctx.request.body.data);
});

/**
 * 添加红外码库
 */
router.post('rc_keycodes/create', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = await rcYaoKanCtrl.add_rc_code(ctx.request.body.data);
});

module.exports = router;