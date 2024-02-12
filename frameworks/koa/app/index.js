const Koa = require('koa');
const app = new Koa();
const api = require('./api');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = new Router();

app.use(bodyParser());

router.get('/satellites', api.satellites.get);
router.post('/satellites', api.satellites.post);
router.get('/satellites/:id', api.satellites.id.get);
router.patch('/satellites/:id', api.satellites.id.patch);
router.put('/satellites/:id', api.satellites.id.put);
router.delete('/satellites/:id', api.satellites.id.delete); 
router.get('/satellites/:id/details', api.satellites.id.details.get);
router.get('/satellites/:id/details/:detailId', api.satellites.id.details.detailId.get);

app.use(router.routes());

app.listen(3000);