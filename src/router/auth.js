const express = require("express");
const router = express.Router();

const User = require("../models/usermessage");


router.get('/', (req, res)=>{
    res.status(200).render('index');
});
router.get('/services', (req, res)=>{
    res.status(200).render('services');
});
router.get('/about', (req, res)=>{
    res.status(200).render('about');
});
router.get('/contact', (req, res)=>{
    res.status(200).render('contact');
});
router.get('/education', (req, res)=>{
    res.status(200).render('education');
});
router.get('/medical', (req, res)=>{
    res.status(200).render('medical');
});
router.get('/food', (req, res)=>{
    res.status(200).render('food');
});
router.get('/marriage', (req, res)=>{
    res.status(200).render('marriage');
});
router.get('/shelter', (req, res)=>{
    res.status(200).render('shelter');
});
router.get('/household', (req, res)=>{
    res.status(200).render('household');
});

router.post("/contact", (req, res)=>{
    const userData = new User(req.body);
    userData.save().then(()=>{
        res.status(201).render("success");
    }).catch((error)=>{
        res.status(400).render("error");
        console.log(error)
    });
});
router.get('*', (req, res)=>{
    res.render('')
});

module.exports = router;