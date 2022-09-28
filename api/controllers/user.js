import User from '../models/User.js'

export const register = async (req, res) => {
  try{
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })

    const appUser = await newUser.save()
    res.status(200).json(appUser )
  }catch(err){
    res.status(500).json(err)
  }
}
