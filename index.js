var webdriverio = require('webdriverio');
var options = {
    host: 'localhost',
    port: 4444,
    desiredCapabilities: {
        browserName: 'chrome'
    }
};


    
webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });
