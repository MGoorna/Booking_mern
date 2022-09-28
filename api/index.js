import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import hotelRoute from './routes/Hotels.js'
import roomRoute from './routes/Room.js'
import authRoute from './routes/Auth.js'
import { PORT, MONGO_URI } from './utils/config.js'
import { errorMiddleware } from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
app.use(cors());

const connect = async() => {
  try{
    await mongoose.connect(MONGO_URI);
    console.log('Conected to Mongo DB')
  }catch(error){ 
    throw error
  }
}
mongoose.connection.on('disconnected', () => {
  console.log('DB disconnected')
})

//middelwares
app.use(express.json())
app.use('/api/hotel', hotelRoute)
app.use('/api/room', roomRoute)
app.use('/api/auth', authRoute)
//app.use('api/user', userRoute)

app.use(errorMiddleware)
//const PORT = process.env.PORT || 3700

app.listen(PORT, () => {
  connect()
  console.log( `Listen port ${PORT}`)
})