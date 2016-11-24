import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

import Main from './main'

let win

function createMainWindow() {
  const win = new BrowserWindow({ width: 800, height: 600 })

  win.loadURL(url.format({
    pathname: path.join(__dirname, '..', 'renderer', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.on('closed', onClosed)
  win.webContents.openDevTools()

  return win
}

function onClosed() {
  win = null
}

app.on('ready', () => {
  win = createMainWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (!win) {
    win = createMainWindow()
  }
})


Main.initialize()
