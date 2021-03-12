const express = require("express");
const router = express.Router();
const db = require("../models");

router.post('/api/createpark', (req, res) => {

    db.Parks.findOne({id: req.body.id}).then((response) => {
        if (!response){
            db.Parks.create(req.body).then((response) => {
                res.send(response)
            }).catch((error) => {
                console.log(error)
                res.send(error)
            })
        }else{
            res.send(response)
        }
    })

})


module.exports = router;