import mongoose from "mongoose";

const Hotel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: String,
  city: String,
  address: String,
  distance: String,
  title: String,
  desc: String,
  rating:{
    type: Number,
    min: 0,
    max: 5,
  },
  rooms:{
    type: [String],
  },
  cheapestPrice: {
    type:Number,
    requred: true,
  }
},{
  timestamps: true
})

export default mongoose.model('Hotel', Hotel)