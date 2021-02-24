const express = require('express');
const app = express();
const path = require('path'); 

const port = process.env.PORT || 8081;

app.use(express.static(__dirname));

app.get('*', function(req, res) {
    res.sendfile(path.resolve(__dirname, 'index.html'));
});

app.listen(port)

console.log('server started');
