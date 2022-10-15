import User from "../models/User.js"
import bcrypt from 'bcryptjs'


export const register = async(req, res) => {

  try{
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    })

    await newUser.save()
    res.status(200).send('User has been created')
  }
  catch(err){
    res.status(500).json(err)
  }
}

export const login = async(req, res) => {

  try{
    const user = await User.findOne({userName: req.body.userName})
    if(!user) return res.status(404).json('User not found')
    
    const isPasswordCorrect = bcrypt.compare(req.body.password, user.password);
    if(!isPasswordCorrect) return res.status(400).json('Wrong password or username')
    const {password, isAdmin, ...otherDetails} = user._doc
    res.status(200).json({details:{...otherDetails}, isAdmin})
  }
  catch(err){
    res.status(500).json(err)
  }
}