const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this is similear to order
const shipmentLotSchema = new Schema(
  {
    orderPlacedBy: {
      type: mongoose.Schema.ObjectId(),
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ShipmentLot", shipmentLotSchema);
