'use strict';

var electron = require('electron');

const createWindow = () => {
    const win = new electron.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile("index.html");
};
electron.app.whenReady().then(createWindow);
electron.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron.app.quit();
    }
});
electron.app.on("activate", () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map
