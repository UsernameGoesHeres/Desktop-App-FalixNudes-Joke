function openAboutWin() {
  const { remote } = require('electron');
  const path = require('path');
  const url = require('url');
  const BrowserWindow = remote.BrowserWindow;

  var win = new BrowserWindow({
    width: 500,
    height: 150,
    backgroundColor: "#00000000",
    title: "About",
    resizable: false,
    skipTaskbar: true,
    alwaysOnTop: true,
    center: true,
    autoHideMenuBar: true,
    frame: false,
    transparent: true,
    webPreferences: {
        preload: path.join(__dirname, "preload.js"), // use a preload script
        nodeIntegration: true
    }
})
}