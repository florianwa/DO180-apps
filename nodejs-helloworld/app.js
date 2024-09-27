var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello IWA!</h1><img src=http://placekitten.com/g/500/500</body></html>');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

