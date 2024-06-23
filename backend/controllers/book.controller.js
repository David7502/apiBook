const BookModel = require("../models/book.model");

module.exports.getBooks = async (req, res) => {
  const books = await BookModel.find();
  res.status(200).json(books);
};

module.exports.setBooks = async (req, res) => {
  if (!req.body.title) {
    res.status(400).json({ message: "Please add a title" });
  }
  const book = await BookModel.create({
    title: req.body.title,
    author: req.body.author,
  });
  res.status(200).json(book);
};

module.exports.editBook = async (req, res) => {
  const book = await BookModel.findById(req.params.id);
  if (!book) {
    res.status(400).json({ message: "This book does not exist" });
  }
  const updateBook = await BookModel.findByIdAndUpdate(book, req.body, {
    new: true,
  });

  res.status(200).json(updateBook);
};

module.exports.deleteBook = async (req, res) => {
  const book = await BookModel.findById(req.params.id);
  if (!book) {
    res.status(400).json({ message: "This book does not exist" });
  }
  await book.deleteOne();

  res.status(200).json("book deleted" + req.params.id);
};

module.exports.likeBook = async (req, res) => {
  try {
    await BookModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.dislikeBook = async (req, res) => {
  try {
    await BookModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }
};
