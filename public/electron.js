const { app, BrowserWindow, TouchBar, screen } = require('electron');
const { TouchBarButton } = TouchBar;

function createCounterButton() {
  let counter = 0;

  const button = new TouchBarButton({
    label: `Count: ${counter}`,
    accessibilityLabel: 'Counter',
    backgroundColor: '#6ab04c',
    click: () => {
      update();
    }
  });

  const update = () => {
    counter += 1;
    button.label = `Count: ${counter}`;
  }

  return button;
}


function createTouchBar() {
  const counterButton = createCounterButton();
  const touchBar = new TouchBar({
    items: [counterButton]
  });

  return touchBar;
}

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: width,
    height: height,
    x: width / 2,
    y: height,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    focusable: false,
    webPreferences: {
      nodeIntegration: true,
      enableLargerThanScreen: true,
    },
    backgroundColor: '#00FFFFFF',
    hasShadow: false,
  })
  win.webContents.setBackgroundThrottling(false);
  win.setTouchBar(createTouchBar())
  win.setIgnoreMouseEvents(true);
  win.loadURL('http://localhost:3000');
  // move(win); //warning red lines, commented for later use (probably?)
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
