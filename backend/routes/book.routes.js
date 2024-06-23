const express = require("express");
const {
  setBooks,
  getBooks,
  editBook,
  deleteBook,
  likeBook,
  dislikeBook,
} = require("../controllers/book.controller");
const router = express.Router();

router.get("/", getBooks);
router.post("/", setBooks);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);
router.patch("/like-book/:id", likeBook);
router.patch("/dislike-book/:id", dislikeBook);

module.exports = router;
