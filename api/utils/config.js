import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 3700

export const MONGO_URI = process.env.MONGO_URI

export const NODE_ENV = process.env.NODE_ENV