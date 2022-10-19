import express from 'express'
import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js'

const router = express.Router();

//CREATE
router.post('/:hotelid', async(req, res) => {
  const hotelId = req.params.hotelid;
 const newRoom = new Room(req.body)

 try{
  const savedRoom = await newRoom.save()
  try {
    await Hotel.findByIdAndUpdate(hotelId,{
      $push: { rooms: savedRoom._id }
    })
  } catch (err) {
    res.status(400).json(err)
  }
  res.status(201).json(savedRoom)
 }catch(err){
  res.status(500).json(err)
 }
})

//GET one room
router.get('/:id', async(req, res) => {
  
  try{
    const room = await Room.findById(req.params.id)
    res.status(200).json(room)
  }catch(err){
    res.status(500).json(err)
  }
})

//GET all rooms
router.get('/', async (req, res) => {
  const rooms = await Room.find()
  try{
    res.status(200).json(rooms)
  }catch(err){
    res.status(500).json(err)
  }
})

//UPDATE
router.put('/:id', async(req, res) => {
  try{
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updatedRoom)
  }catch(err){
    res.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  try{
    const deletedRoom = await Room.findByIdAndDelete(req.params.id)
    res.status(200).json('Room has been delated')
  }catch(err){
    res.status(500).json(err)
  }
})
export default router