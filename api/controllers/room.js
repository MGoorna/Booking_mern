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


export const updateRoomAvailability = async (req, res) => {
  try{
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  }catch(err){
    res.status(500).json(err)
  }
}

