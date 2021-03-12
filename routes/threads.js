const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/api/get_threads", (req, res) => {
    db.Threads.find({ park_id: req.body.id }).then((response) => {
        if (response.length > 0){
        let newArr = [...response].map(v => ({...v, park_name: req.body.name}))
        res.send(newArr)
        }else{
            res.send([{park_id: req.body.id, noThreads: true, name: req.body.name }])
        }
    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
})

router.post("/api/submit_threads", (req, res) => {
    db.Threads.create({park_id: req.body.park_id, user_id: req.user._id, user_name: req.user.name, text: req.body.message, time: Date.now()}).then((response) => {
        let newArr = [response].map(v => ({...v, park_name: req.body.park_name}))
        res.send(newArr)
    }).catch((error) => {
        console.log(error)
        res.send(error)
    })
})

module.exports = router;