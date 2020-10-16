const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
//when server receives request with json data in the body bodyParser will handle parsing data into properties of request object to access data more easily

app.use('/campsites', campsiteRouter);



//allows us to store whatever the user sends as a part of the path after the path as a route parameter named campsiteId



app.use(express.static(__dirname + '/public'));
//__dirname special variable node refers to the absolute path of the current directory of the file that it's in

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});