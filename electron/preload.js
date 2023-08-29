const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronNavigation", {
  minimize: () => ipcRenderer.invoke("minimize"),
  maximize: () => ipcRenderer.invoke("maximize"),
  close: () => ipcRenderer.invoke("close"),
});