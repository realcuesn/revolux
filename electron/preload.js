const { contextBridge, ipcRenderer } = require("electron");

// Expose the getTrackingData method
contextBridge.exposeInMainWorld("getTrackingData", {
  getTrackingData: () => ipcRenderer.invoke("getTrackingData"),
});
