/* eslint-disable no-undef */
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 940,
    height: 600,
    minWidth: 940,
    minHeight: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.handle("close", () => {
    win.close();
    return "closed";
  });

  ipcMain.handle("maximize", () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });

  ipcMain.handle("minimize", () => {
    win.minimize();
  });

  if (!app.isPackaged) {
    win.loadURL("http://localhost:5173/");
  } else {
    win.loadFile("dist/index.html");
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});