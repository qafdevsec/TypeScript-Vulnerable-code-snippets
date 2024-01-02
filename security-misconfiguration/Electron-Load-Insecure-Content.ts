const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      allowRunningInsecureContent: true, // This allows insecure content to be loaded
    }
  });

  mainWindow.loadURL('http://insecure-website.com'); // Loading content over HTTP (insecure)
});
