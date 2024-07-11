const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const middleware = require('../middleware/middleware');

router.post("/registerUser", usersController.registerUser);

router.post("/login", usersController.login);

// router.put("/updateBook/:id", booksController.updateBook);

// router.delete("/deleteBook/:id", booksController.deleteBook);

router.get("/getUserById/:id", middleware, usersController.getUserById);

router.get("/allUsers", middleware, usersController.allUsers);

module.exports = router;
