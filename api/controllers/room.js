import Room from '../models/Room.js'


export const createRoom = async (req, res) =>{
  const hotelId = req.params.hotelid
  const newRoom = new Room(req.body)
  try {
    const savedRoom = await newRoom.save();
    await Promis.all(savedRoom)
    res.status(200).json()
  } catch (err) {
    res.status(500).json(err)  
  }
};





