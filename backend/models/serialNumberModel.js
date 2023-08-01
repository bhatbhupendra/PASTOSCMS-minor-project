const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is similear to order
const serialNumberSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId(),
      ref: "Product",
    },
    serialId:{
        type:String,
        requred:true
    },
    owner: {
      type: mongoose.Schema.ObjectId(),
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(" SerialNumber",  serialNumberSchema);
