const webpack = require('webpack');
const { spawn } = require('child_process')
let package = require(process.cwd()+'/package.json');
let webpackHotMiddleWare = require('webpack-hot-middleware');
let mainConfig = require('../config/webpack.main');
let rendererConfig = require('../config/webpack.renderer');
let del = require('del');
process.env.NODE_ENV ="production";
function buidMain(){
    return new Promise((ros,jet)=>{
        mainConfig.mode = "production";
        mainConfig.node.__dirname = process.env.NODE_ENV !== 'production';
        mainConfig.node.__filename = process.env.NODE_ENV !== 'production';
        let pack = webpack(mainConfig,(err,stats)=>{
            if(err){
                console.log({err});
                ros(err);
            }
            else{
                console.log(stats.toString())
                ros();
            }
        })
    })
};
function buildRenderer(){
    return new Promise((ros,jet)=>{
        
        rendererConfig.mode = "production";
        rendererConfig.node.__dirname = process.env.NODE_ENV !== 'production';
        rendererConfig.node.__filename = process.env.NODE_ENV !== 'production';
        let pack = webpack(rendererConfig,(err,stats)=>{
            if(err){
                console.log({err});
                ros(err);
            }
            else{
                console.log(stats.toString())
                ros();
            }
            //ros();
        })
    })
};
async function  startPack(){
   console.log("start packing...");
   console.log("start packing Main...");
   await buidMain();
   console.log("start packing Renderer...");
   await buildRenderer();
}
startPack().then(()=>{
    del.sync("./build/*");
    console.log('over');
})
