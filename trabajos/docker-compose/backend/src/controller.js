const personaService = require('./service');
const router = require('express').Router();

router.get('/findall', (req, res) => {


    personaService.findall().then((data) => {
        res.status(200).json(data)

    }).catch((reason) => {
        res.status(500).json({
            error: true,
            message: reason
        })
    })



});

router.post('/save', (req, res) => {

    let persona = req.body;
    personaService.save(persona).then((data) => {
        res.status(201).json(data);
    }).catch((reason) => {
        res.status(500).json({
            error: true,
            message: reason
        })
    })


})


module.exports = router;

