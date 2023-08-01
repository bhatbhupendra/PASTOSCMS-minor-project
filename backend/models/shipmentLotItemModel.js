const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is similear to order
const shipmentLotItemSchema = new Schema(
  {
    shipmentLot: {
      type: mongoose.Schema.ObjectId(),
      ref: "ShipmentLot",
    },
    quantity:{
        type: Number,
        requred:true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ShipmentLotItem", shipmentLotItemSchema);
