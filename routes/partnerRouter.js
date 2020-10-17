const express = require('express');
const bodyParser = require('body-parser');

const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
    //next passes control of application routing to next relevant routing method after this one otherwise would stop here.
})
.get((req,res) => {
    res.send('Will send all the partners to you');
})
.post((req,res) => {
    res.send(`Will add the partner: ${req.body.name} with the description: ${req.body.description}`);
})
.put((req,res) => {
    res.statusCode = 403;
    res.send("PUT operation not supported on /partners");
})
.delete((req,res) => {
    res.send('Deleting all partners');
});



partnerRouter.route('/:partnerId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res) => {
    res.send(`Will send the partner: ${req.params.partnerId}`);
})
.post((req,res) => {
    res.send(`Will add the partner: ${req.body.name} with the description: ${req.body.description}`);
})
.put((req,res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`);
    res.end(`Will update the partner: ${req.body.name}
    with description: ${req.body.description}`);
})
.delete((req,res) => {
    res.send('Deleting all partners');
});


module.exports = partnerRouter;