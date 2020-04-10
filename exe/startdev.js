const webpack = require('webpack');
const { spawn } = require('child_process')
let package = require(process.cwd()+'/package.json');
let webpackHotMiddleWare = require('webpack-hot-middleware');
let mainConfig = require('../config/webpack.main');
let rendererConfig = require('../config/webpack.renderer');
const WebpackDevServer = require('webpack-dev-server');
//console.log({mainConfig})
let electronprocess = null;
const electron = require('electron');
const path = require('path');
const fs = require('fs');
process.env.NODE_ENV ="development";

console.log(process.env.NODE_ENV);

function startRenderer(){
    
    return new Promise((res,jet)=>{
        rendererConfig.mode ='development';
        rendererConfig.node.__dirname = process.env.NODE_ENV !== 'production';
        rendererConfig.node.__filename = process.env.NODE_ENV !== 'production';
        const compiler = webpack(rendererConfig);
        
        //设置热加载
        let hotmiddleware = webpackHotMiddleWare(compiler,{
            log:false,
            heartbeat:2500
        });
        compiler.hooks.compilation.tap('myplugin',(com,done)=>{
            console.log("compiler,compilation")
        });
        compiler.hooks.afterEmit.tap('plugin2',(com,done)=>{
            console.log("compiler,afterEmit")
        });
        let server = new WebpackDevServer(
            compiler,
            {
                contentBase:path.join(__dirname,'../src/renderer'),
                quiet:true,
                before(app,ctx){
                    app.use(hotmiddleware);
                    ctx.middleware.waitUntilValid(()=>{
                        res();
                    })
                }
            }
        )
        server.listen(1900)
        
    })
}
function startMain(){
    //console.log(12312312);
    return new Promise((res,rej)=>{

        mainConfig.mode ='development';
        
        mainConfig.node.__dirname = process.env.NODE_ENV !== 'production';
        mainConfig.node.__filename = process.env.NODE_ENV !== 'production';
        const compiler = webpack(mainConfig);
         compiler.hooks.watchRun.tap('myplugin',(com,done)=>{
            console.log('Main', 'compilin...');
            //hotMiddleware.publish({ action: 'compiling' })
            if(done) done();
         });
         compiler.watch({},(err,status)=>{
            console.log('watching');
           if(err){
               console.log({err})
           }
            //return;
            if(electronprocess && electronprocess.kill){
               
                process.kill(electronprocess.pid);
                electronprocess = null
                startElectron();
              
            };
            res();
         })
    })
}
function startElectron(){
    //console.log("start electron");
    electronprocess = spawn(electron,
        ['--inspect=5858', 
        path.join(__dirname, '../dist/electron/index.js')]
        );
        electronprocess.stdout.on('data', data => {
            console.log(data.toString())
        })  
        electronprocess.stderr.on('data', data => {
            console.log(data.toString())
          })
        electronprocess.on('close', () => {
           // process.exit()
           process.exit()
        })
       
};
Promise.all([startRenderer(),startMain()]).
then(()=>{
    startElectron();
}).catch(e=>{
    console.log({e})
});