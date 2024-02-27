const Koa = require('koa')
const koaContrller= require("../index")
const app = new Koa()

koaContrller(app,{root:__dirname})
app.listen(3000)
 

 