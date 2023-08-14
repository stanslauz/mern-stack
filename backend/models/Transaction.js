import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
userId: String,
cost: String,
products: {
    type: [mongoose.Types.ObjectId],
    of: Number
}
   
},
{timestamps: true}
);

const Trasanction = mongoose.model("Trasanction", transactionSchema);

export default Trasanction;