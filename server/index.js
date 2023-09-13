const express = require ('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

const router = require('./routes/index.js');
app.use('/api', router);

app.listen(port);
console.log(`Server started at http://localhost: ${port}`);