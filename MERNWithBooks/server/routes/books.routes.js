const { Router } = require("express");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/books.controllers.js");

const router = Router();
// Define the routes
router.route("/books").post(createBook).get(getAllBooks);
router.route("/books/:id").get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;
