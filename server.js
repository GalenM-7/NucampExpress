const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
//when server receives request with json data in the body bodyParser will handle parsing data into properties of request object to access data more easily

app.all('/campsites', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
    //next passes control of application routing to next relevant routing method after this one otherwise would stop here.
});

app.get('/campsites', (req,res) => {
    res.end('Will send all the campsites to you');
});

app.post('/campsites', (req,res) => {
    res.end(`Will add the campsite: ${req.body.name} with the description: ${req.body.description}`);
});

app.put('/campsites', (req,res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

app.delete('/campsites', (req,res) => {
    res.end('Deleting all campsites');
});


//allows us to store whatever the user sends as a part of the path after the path as a route parameter named campsiteId
app.get('/campsites/:campsiteId', (req,res) => {
    res.end(`Will send the details of the campsite: ${req.params.campsiteId} to you`);
});

app.post('/campsites/:campsiteId', (req,res) => {
    res.statusCode = 403
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req,res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite: ${req.body.name}
    with description: ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req,res) => {
    res.end(`Deleting campsite:${req.params.campsiteId}`);
});


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