const { model, Schema } = require("mongoose");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
      minlength: [2, "Title must be at least 2 characters long."],
      maxlength: [255, "Title cannot exceed 255 characters."],
    },
    author: {
      type: String,
      required: [true, "Author is required."],
      minlength: [5, "Author name must be at least 5 characters long."],
      maxlength: [255, "Author name cannot exceed 255 characters."],
    },
    pages: {
      type: Number,
      required: [true, "Number of pages is required."],
      min: [1, "There must be at least 1 page."],
    },
    isAvailable: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Book = model("Book", bookSchema);
module.exports = Book;
