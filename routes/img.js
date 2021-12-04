const { Router } =require("express");
const router = Router();

const path = require ('path');
//Image path
const imgFolderPath = path.join(__dirname, '../images/');

//Ruta imagenes

router.get('/:imgName',(req,res) =>{
    const image = req.params.imgName;
    console.log()
    res.sendFile('${imgFolderPath}${image}');
});


module.exports = router;