const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Book name must be provided"],
    },
    author: {
      type: [String],
      required: [true, "Author name/names must be provided"],
    },
    price: {
      type: Number,
      required: [true, "Book Price must be provided"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
