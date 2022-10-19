import express from 'express'
import { getHotel, 
  getHotels, 
  createHotel, 
  deleteHotel, 
  updateHotel, 
  getHotelByCity, 
  getHotelByType,
  getHotelByCitySingle,
  getHotelRooms } from '../controllers/hotel.js'

const router = express.Router()

//GET a single hotel
router.get('/find/:id', getHotel)

//GET ALL hotels
router.get('/', getHotels)
router.get('/findByCitySingle', getHotelByCitySingle)

router.get('/findByCity', getHotelByCity)
router.get('/type/findByType', getHotelByType)
router.get('/room/:id', getHotelRooms)


//CREATE
router.post('/', createHotel)

//DELETE 
router.delete('/:id', deleteHotel)

//UPDATE
router.put('/:id', updateHotel)

export default router