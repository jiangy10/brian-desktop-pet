require('electron/main')
const { app, BrowserWindow, TouchBar } = require('electron/main')
const { TouchBarButton } = TouchBar
const path = require('node:path')

function createCounterButton(){
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

function createTouchBar(){
  const counterButton = createCounterButton();
  const touchBar = new TouchBar({
    items: [counterButton]
  });
  
  return touchBar;
}

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
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