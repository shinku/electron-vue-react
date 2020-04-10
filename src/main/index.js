let electron = require('electron');
let {app,BrowserWindow,dialog} = electron;
let path = require('path');


class Atest {
  constructor(){
    this.x=100;
  }
  @dec
  showX(){
    return this.x;
  }
}
function dec (target,name,desp){
  console.log({
    target,name
  });
  return desp
}
let ob = new Atest();
console.log(ob.showX());

const WINURL = process.env.NODE_ENV=="development"?"http://localhost:1900/index.html":`file://${__dirname}/renderer/index.html`;
console.log(process.env.NODE_ENV,__dirname);
let mainWindow = null;
function createWindow() {

    mainWindow = new BrowserWindow({
      width: 1980,
      height: 1080,
      //resizable: false,
      useContentSize: true,
      webPreferences: {
        webSecurity: false,
        nodeIntegration:true
      }
    })
    mainWindow.loadURL(WINURL);
    mainWindow.webContents.on('did-finish-load',()=>{
      process.env.NODE_ENV=="development"?mainWindow.webContents.openDevTools():"";
    });
    mainWindow.on('closed', () => {
      mainWindow = null;
      app.quit();
    })
    //mainWindow.BrowserWindow.on('clo')
}
app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  app.on('activate', () => {
    if (mainWindow === null) {
      createWindow()
    }
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })