import express from 'express'
import { getHotel, getHotels, createHotel, deleteHotel, updateHotel, getHotelByCity, getHotelByType } from '../controllers/hotel.js'

const router = express.Router()

//GET a single hotel
router.get('find/:name', getHotel)

//GET ALL hotels
router.get('/', getHotels)
router.get('/findByCity', getHotelByCity)
router.get('/type/findByType', getHotelByType)

//CREATE
router.post('/', createHotel)

//DELETE 
router.delete('/:id', deleteHotel)

//UPDATE
router.put('/:id', updateHotel)

export default router