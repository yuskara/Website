const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/hey', (req, res) => res.send('ho!'));

app.listen(8080); 