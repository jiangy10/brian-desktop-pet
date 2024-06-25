import { app, BrowserWindow, TouchBar, screen } from 'electron';
import path from 'node:path';
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
    width: 300,
    height: 300,
    x: width - 300,
    y: height - 300,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
  })
  win.setTouchBar(createTouchBar())
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})