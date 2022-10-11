import Hotel from '../models/Hotel.js'

export const createHotel = async(req, res, next) => {
  const newHotel = new Hotel(req.body)
  try{
    const savedHotel = await newHotel.save()
    res.status(201).json(savedHotel)
  }catch(error){
    res.status(500).json(error)
  }
}

export const getHotel = async(req, res, next) => { 
  try{
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel)
  }catch(error){
    res.status(500).json(error)
  }
}
export const getHotelByCitySingle = async (req, res, next) => { 
  const cities = req.query.city
  const {min, max, ...others} = req.query;

  try{
    const list = 
    await Hotel.find({...others, cheapestPrice: {$gt: min | 1, $lt:max || 999}})
    res.status(200).json(list)
  }catch(error){
    res.status(500).json(error)
  }
}

export const getHotelByCity = async (req, res, next) => { 
  const cities = req.query.cities.split(',')
  try{
    const list = await Promise.all(cities.map(city => {
      return Hotel.find({city:cities})//Hotel.countDocuments({ city: city }) 
    }))
    res.status(200).json(list)
  }catch(error){
    res.status(500).json(error)
  }
}
export const getHotelByType = async(req, res, next) => { 
  const types = req.query.types.split(',')
  try{
    const list = await Promise.all(types.map(type =>{
      return Hotel.countDocuments({type: type})
    }))
    res.status(200).json(list)
  }catch(error){
    res.status(500).json(error)
  }
}

export const getHotels = async(req, res, next) => {
  const {min, max, ...others} = req.body;
  const hotels = await Hotel.find({
    ...others,
    cheapestPrice: {$gt:min | 1, $lt: max|| 999},
  }).limit(req.query.limit).sort({createdAt: 'desc'})
  res.status(200).json(hotels)
}

export const deleteHotel = async(req, res, next) => { 
  try{
    const deleteHotel = await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json('Hotel has been delated')
  }catch(error){
    res.staus(500).json(error)
  }
}

export const updateHotel = async(req, res, next) => {
  try{
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updatedHotel)
  }catch(error){
    res.staus(500).json(error)
  } 
}