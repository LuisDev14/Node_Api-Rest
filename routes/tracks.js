const express = require('express');
const router = express.Router();
//TODO http://localhost/tracks GET, POST, PUT, DELETE

router.get('/tracks',(req,res)=>{
    const data = ['hola','mundo']

    //res.send({data:data});
    res.send({data});
});



module.exports = router;