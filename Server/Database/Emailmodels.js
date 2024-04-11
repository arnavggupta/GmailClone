import mongoose from "mongoose";

const emailSchema= new mongoose.Schema({

emailid:{
    type:String,
    required:true
},
From:{
    type:String,
   required:true 
},

subject:{
    type:String
},
body:{
    type:String,
    
},
date:{  
    type:Date,
    required:true
}
,image:{
    type:String
},
name:{
    type:String
},
starred:{
    type:Boolean,
required:true,
default:false
},
bin:{
    type:Boolean,
required:true,
default:false
},
type:{
    type:String,
    required:true
}

})

const email= mongoose.model("email",emailSchema);

export default email;