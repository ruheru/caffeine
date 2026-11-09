require('dotenv').config();
const { ipcMain } = require('electron');
const fetch = require('node-fetch');

// Notifications are opt-in: there is no default endpoint, so nothing is fetched
// unless BRUNO_INFO_ENDPOINT points at a notifications feed.
const fetchNotifications = async () => {
  const url = process.env.BRUNO_INFO_ENDPOINT;
  if (!url) {
    return [];
  }
  const data = await fetch(url).then((res) => res.json());
  return data?.notifications || [];
};

const pushNotifications = async (mainWindow) => {
  try {
    const notifications = await fetchNotifications();
    mainWindow.webContents.send('main:load-notifications', notifications);
  } catch (error) {
    console.error('Error while fetching notifications!', error);
  }
};

const registerNotificationsIpc = (mainWindow, watcher) => {
  mainWindow.webContents.on('did-finish-load', () => pushNotifications(mainWindow));
  ipcMain.on('renderer:notifications-opened', () => pushNotifications(mainWindow));
};

module.exports = registerNotificationsIpc;
