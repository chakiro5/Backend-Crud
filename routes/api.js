const { Router } =require("express");

const router = Router();
const controladorProducto = require("../controllers/controladorProducto");


router.get("/productos", controladorProducto.productos_get);
router.post("/crear-productos",controladorProducto.productos_post);
router.delete("/productos/:id",controladorProducto.productos_delete );

module.exports = router;