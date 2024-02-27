import Koa from "koa";
import { fileURLToPath } from 'url'
import { dirname } from "path"
import koaContrllers from '../index.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = new Koa()
koaContrllers(app,{root:__dirname})
app.listen(3000)
