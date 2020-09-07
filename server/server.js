const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/api/rivers', function (req, res) {
  // This normally would come from a database
  const data = require('./rivers.json');
  return res.send(JSON.stringify(data));
});

app.post('/api/contact', function (req, res) {
  console.log('TODO');
  res.send(JSON.stringify({
    contact: {
      name: "TODO"
      // whatever else we want this payload to be
    }
  }));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);