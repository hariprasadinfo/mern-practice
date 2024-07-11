const books = require("../models/Books");

exports.allBooks = async (req, res) => {
  const book = await books.find({});
  return res.send(book);
};

exports.getBookById = async (req, res) => {
  const bookObject = await books.findById(req.params.id);
  return res.status(200).json({ details: bookObject });
};

exports.updateBook = async (req, res) => {
  const body = req.body;
  const book = await books.findByIdAndUpdate(req.params.id, body);
  return res
    .status(200)
    .json({
      status: "200",
      message: "book details has been updated successfully...",
    });
};

exports.deleteBook = async (req, res) => {
  const BookObject = await books.findByIdAndDelete(req.params.id);
  return res
    .status(200)
    .json({
        Book:
        BookObject.name + "Book has been deleted successfully....",
    });
};

exports.addNewBook = async (req, res) => {
  const bookObject = req.body;
  const bookName = bookObject.name;
  const isExist = await books.findOne({ bookName });
  if (isExist) {
    return res
      .status(200)
      .json({ message: bookName + " Book details are already exists...." });
  }
  const addBook = await books.create({
    name: bookObject.name,
    author: bookObject.author,
    description: bookObject.description,
    price: bookObject.price,
    isInStock: bookObject.isInStock,
    filename: req.file.filename,
    path: req.file.path,
  });
  return res
    .status(200)
    .json({
      book: addBook.name + " Book details has been added successfully....",
    });
};
