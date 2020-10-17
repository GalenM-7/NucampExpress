const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
    //next passes control of application routing to next relevant routing method after this one otherwise would stop here.
})
.get((req,res) => {
    res.send('Will send all the promotions to you');
})
.post((req,res) => {
    res.send(`Will add the promotion: ${req.body.name} with the description: ${req.body.description}`);
})
.put((req,res) => {
    res.statusCode = 403;
    res.send('PUT operation not supported on /promotions');
})
.delete((req,res) => {
    res.send('Deleting all promotions');
});



promotionRouter.route('/:promotionId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res) => {
    res.send(`Will send the promotion: ${req.params.promotionId}`);
})
.post((req,res) => {
    res.send(`Will add the promotion: ${req.body.name} with the description: ${req.body.description}`);
})
.put((req,res) => {
    res.statusCode = 403;
    res.send(`PUT operation not supported on /promotions/${req.params.promotionId}`);
})
.delete((req,res) => {
    res.send('Deleting all promotions');
});


module.exports = promotionRouter;
