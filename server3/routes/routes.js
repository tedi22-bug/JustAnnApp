const express = require('express');
const router = express.Router();
const post = require('../models/post');

router.get('/tedy', (req, res) => {
    res.send('ce plm');
});

router.get('/tedy', (req, res) => {

    post.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});


router.post('/tedy/save', (req, res) => {
    const data = req.body;

    const newPagePost = new post(data);

    newPagePost.save((error) => {
        if (error) {
            res.status(500).json({msg: 'Internal server bleeding'});
            return;
        } 
        return res.json({
            msg: "Your data has been saved!"
        });
    });

});

module.exports = router;