const { default: mongoose } = require("mongoose");


const orderSchema= new mongoose.Schema({
name:{
type:String,
require:true
},
age:{
    type:Number,
    require:true  
},
price:{
    type:Number,
    require:true
},
id	:{
    type:String,
    require:true
},
bookedAT:{
    type:String,
    require:true
},
MovieSlotTime:{
    type:String,
    require:true
},
MovieSlotDate:{
    type:String,
    require:true
},
seatNumber:{
    type:Number,
    require:true
},
movieName:{
    type:String,
    require:true
},
movieId:{
    type:String,
    require:true
},
transtitionId:{
    type:String,
    require:true
}
})
exports.Order=mongoose.model('ORDER',orderSchema)