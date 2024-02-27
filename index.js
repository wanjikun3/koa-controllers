const fs = require("fs")
const path= require('path')
const { pathToFileURL } = require('node:url')
const koaContrllers = async (app,option = {})=>{
    let defult={
        root:process.cwd(),
        controller:'controller',
    }
    let config={...defult,...option}
    let files = fs.readdirSync(path.join(config.root,config.controller));
    let controllers = [];
    for (let file of files) {
        let name = file.split('.')[0]
        try{
            controllers[name] = require(path.join(config.root,config.controller,file))
        }catch(err){
           let import_file =await import(pathToFileURL(path.join(config.root,config.controller,file)).href)
           controllers[name]=import_file.default
        }
    }
    app.use( async function (ctx,next) {
        const paths = ctx.path.split('/');
        const controller = paths[1] === '' ? 'index' : paths[1]
        if (controllers.hasOwnProperty(controller)) {
            let result = null
            if (paths.length === 2) {
                if (controllers[controller].index) {
                    result = await controllers[controller].index(ctx)
                } else if (typeof (controllers['index']) === 'function') {
                    result = await controllers[controller](ctx)
                }
            } else if (paths.length === 3 ) {
                let action =paths[2]?paths[2]:'index'
                if(controllers[controller].hasOwnProperty(action)){
                    result = await controllers[controller][action](ctx)
                }
            }
            if (result) {
                ctx.body = result
            }
        }
        await next()
    })
}
module.exports=koaContrllers
module.exports.koaContrllers=koaContrllers
module.exports.default=koaContrllers