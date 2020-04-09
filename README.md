# 🚀 electron-vue/react

一个可以用于开发electron+vue&react 的脚手架。
之前的electron 版本过低，babel 过低，导致一些比较新的功能无法使用。
该版本支持最新的electron 7以上，babel 7以上。
renderer 中的electron 未通过挂载方式添加，只需通过
```
import electron from 'electron'的方式增加即可

```
+ electron 运行时的代码放置在```src/main/```
+ vue的代码放置在```src/renderer/vue```
+ react代码放置在```src/renderer/react``` 

renderer的webpack配置文件在config/webpack.render.js中

main的webpack配置文件在 config/webpack.main.js中
测试：
```yarn dev```


打包
```yarn buildpack```
