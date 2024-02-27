const Koa = require('koa')
const koaContrllers= require("../index")
const app = new Koa()

koaContrllers(app,{root:__dirname})
app.listen(3000)
 

 