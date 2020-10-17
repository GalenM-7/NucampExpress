const express = require('express');
const bodyParser = require('body-parser');

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());

campsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
    //next passes control of application routing to next relevant routing method after this one otherwise would stop here.
})
.get((req,res) => {
    res.send('Will send all the campsites to you');
})
.post((req,res) => {
    res.send(`Will add the campsite: ${req.body.name} with the description: ${req.body.description}`);
})
.put((req,res) => {
    res.statusCode = 403;
    res.send('PUT operation not supported on /campsites');
})
.delete((req,res) => {
    res.send('Deleting all campsites');
});



campsiteRouter.route('/:campsiteId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res) => {
    res.send(`Will send the campsite: ${req.params.campsiteId}`);
})
.post((req,res) => {
    res.send(`Will add the campsite: ${req.body.name} with the description: ${req.body.description}`);
})
.put((req,res) => {
    res.statusCode = 403;
    res.send(`PUT operation not supported on /campsites/${req.params.campsiteId}`);
})
.delete((req,res) => {
    res.send('Deleting all campsites');
});


module.exports = campsiteRouter;
