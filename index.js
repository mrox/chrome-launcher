const chromeLauncher = require('chrome-launcher');
 
chromeLauncher.launch({
  startingUrl: 'http://0.0.0.0:42479/index.html',
  chromeFlags: ['--test-type','-kiosk','-fullscreen', '--use-fake-ui-for-media-stream']
}).then(chrome => {
  console.log(`Chrome debugging port running on ${chrome.port}`);
});

