const express = require('express')
const router = express.Router()
const path = require('path')

const timemiddleware = (req,res,next)=>{
//     if (Date.now()<9 || Date.now()> 17) {

//         console.log('the site is closed')
// }else{ 
    
    console.log('Time:', Date.now());
    next();
}

router.get('/',timemiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','Home.html'))
})
router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','Contact.html'))
})
router.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','Services.html'))
})
module.exports=router