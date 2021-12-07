const router = require("express").Router();
const productosController = require("../controllers/productos_controller");
const usersController = require("../controllers/users_controller");
const paymentsController = require("../controllers/payments_controller");
const authController = require("../controllers/auth_controller");

// Puntos de acceso para el modelo de productos
router.get("/productos", productosController.get_products);
router.get("/productos/:id", productosController.get_product_by_id );
router.post("/productos", productosController.create_product);
router.put("/productos", productosController.update_product);
router.delete("/productos/:id", productosController.delete_product );

// Puntos de acceso para el modelo de usuarios
router.get("/usuarios", usersController.get_users);
router.post("/usuarios", usersController.create_user);
router.delete("/usuarios/:id", usersController.delete_user );

// Puntos de acceso para el modelo de pagos
router.get("/payments", paymentsController.get_payments);
router.get("/payments/:id", paymentsController.get_payment_by_id );
router.post("/payments", paymentsController.create_payment);
router.delete("/payments/:id", paymentsController.delete_payment );

// Puntos de acceso para authenticacion
router.post('/auth/login', authController.login);
router.post('/auth/register', authController.register);


module.exports = router;