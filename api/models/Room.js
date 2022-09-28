import mongoose from "mongoose";

const Room = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  maxPeople: {
    type: Number,
    require: true
  },
  desc: {
    type: String,
    required: true,
  },
  roomsNumbers:[{}],

},{
  timestamps: true
})

export default mongoose.model('Room', Room)