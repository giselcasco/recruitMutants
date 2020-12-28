const {Router}=require('express');
const router = Router();
const service = require('../services/serviceMutant');

router.get('/mutant', (req,res) => {
    const data = {
        "IsMutant": "False"
    }
    res.json(data);
});

router.post('/mutant', (req,res) => {
    const data = req.body;
    if(service.isMutant(data)){
        res.status(200).send('OK');
    }    
    else{
        res.status(403).send('Forbidden');
    }
})



module.exports = router;