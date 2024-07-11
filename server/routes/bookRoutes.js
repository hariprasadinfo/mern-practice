const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const booksController = require("../controllers/BooksController");

// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/addbook", upload.single("image"), booksController.addNewBook);

router.put("/updateBook/:id", booksController.updateBook);

router.delete("/deleteBook/:id", booksController.deleteBook);

router.get("/getBookById/:id", booksController.getBookById);

router.get("/allBooks", booksController.allBooks);

module.exports = router;
