# koa-controllers
 Require all controllers in a directory

### Init
```
// cjs
const Koa = require('koa')
const koaContrllers= require("koa-controllers")
const app = new Koa()

koaContrllers(app)
app.listen(3000)
```

```
// esm
import Koa from "koa";
import koaContrllers from 'koa-controllers'

const app = new Koa()
koaContrllers(app)
app.listen(3000)
```

### Controller
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