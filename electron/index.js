const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const activeWindow = require('@rize-io/active-win');
const fs = require("fs");

// Configuration
const trackingInterval = 1000; // 1 second
const saveInterval = 1000; // 1 second

const trackingDataPath = path.join(app.getPath("userData"), "trackingData.json");
console.log(trackingDataPath)

// Initialize tracking data from the existing file or create an empty object
let trackingData = loadTrackingData();

function createWindow() {
  const win = new BrowserWindow({
    width: 940,
    height: 600,
    minWidth: 940,
    minHeight: 600,
    titleBarStyle: 'hidden',
    trafficLightPosition: { x: 10, y: 8 },
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (!app.isPackaged) {
    win.loadURL("http://localhost:5173/");
  } else {
    win.loadFile("dist/index.html");
  }
}

ipcMain.handle("getTrackingData", (e) => {
  return trackingData;
});

function startTracking() {
  setInterval(async () => {
    try {
      const result = await activeWindow();
      if (result) {
        const { title, url } = result;
        const appName = result.owner ? result.owner.name : "Unknown";

        // Determine if the application is a browser based on the URL
        const isBrowser = url !== "";

        // Initialize or update the tracking data for the application
        if (!trackingData[appName]) {
          trackingData[appName] = {
            totalDuration: 0,
            isBrowser,
            lastActiveTime: new Date(), // Initialize lastActiveTime as a Date object
            windowInfo: [], // Initialize as an empty array
          };
        }

        if (isBrowser && url) {
          trackingData[appName].url = url;
        }

        // Update the application's usage duration and lastActiveTime
        const now = new Date();
        const lastActiveTime = new Date(trackingData[appName].lastActiveTime);
        trackingData[appName].totalDuration += now.getTime() - lastActiveTime.getTime();
        trackingData[appName].lastActiveTime = now;

        // Update the windowInfo array with the current window info
        trackingData[appName].windowInfo.push(result);
      }
    } catch (error) {
      console.error("Error while tracking:", error);
    }
  }, trackingInterval); // Set the interval to 1 second
}

app.whenReady().then(() => {
  createWindow();

  // Start tracking when the application is ready
  startTracking();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Save tracking data periodically
setInterval(saveTrackingData, saveInterval); // Set the interval to 1 second

// Helper function to load tracking data from file
function loadTrackingData() {
  try {
    return JSON.parse(fs.readFileSync(trackingDataPath, 'utf-8')) || {};
  } catch (error) {
    console.error("Error loading tracking data:", error);
    return {};
  }
}

// Helper function to save tracking data to file
function saveTrackingData() {
  try {
    fs.writeFileSync(trackingDataPath, JSON.stringify(trackingData, null, 2));
  } catch (error) {
    console.error("Error saving tracking data:", error);
  }
}
