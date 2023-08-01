const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is similear to order
const productModelSchema = new Schema(
  {
    productName: {
      type: String,
      requred: "true",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productModelSchema);
