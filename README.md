# koa-controllers
 Require all controllers in a directory

### 初始化
```
// cjs
const Koa = require('koa')
const koaContrllers= require("../index")
const app = new Koa()

koaContrllers(app,{root:__dirname})
app.listen(3000)
```

```
// esm
import Koa from "koa";
import { fileURLToPath } from 'url'
import { dirname } from "path"
import koaContrllers from '../index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = new Koa()
koaContrllers(app,{root:__dirname})
app.listen(3000)
```

### controller
```
//cjs
module.exports = async (ctx) => {
    return {code:0,msg:'index'}
}
 ```
 ```
// esm
export default  {
    login:async (ctx)=>{
        return {code:0,msg:'login'}
    },
    sign:async (ctx)=>{
        return {code:0,msg:'sign'}
    },
    token:async (ctx)=>{
        return {code:0,msg:'token'}
    }
}
```