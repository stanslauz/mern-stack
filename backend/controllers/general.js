import User from "../models/User.js";

export const getUser = async (req, res)=>{
  try {

    const {id} = req.params;
    if(!id){
        res.status(404).json({message: "no id present"})
    }
    const user = await User.findById(id);
    if(user){
    return res.json(user);
    }


  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

