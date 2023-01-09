const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res
    .status(200)
    .json({ status: "success", data: { books, nbHits: books.length } });
};

const getBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findOne({ _id: bookId });

  if (!book) {
    return res.status(404).json({ msg: `No book with id : ${bookId}` });
  }

  res.status(200).json({ book });
};

const addBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(200).json({ status: "success", data: book });
};

const updateBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findByIdAndUpdate({ _id: bookId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!book) {
    return res.status(404).json({ msg: `No Book with id : ${bookId}` });
  }

  res.status(200).json({ book });
};

const deleteBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findByIdAndDelete({ _id: bookId });

  if (!book) {
    return res.status(404).json({ msg: `No Book with id : ${bookId}` });
  }
  res.status(201).json({ message: `Book with id : ${bookId} is deleted.` });
};

module.exports = {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  deleteBook,
};
