import mongoose from "mongoose";

const dbconnection=async()=>{

    try {
        await mongoose.connect("mongodb+srv://arnavgupta295:Rse4RonwXe9eZUQ2@cluster0.yyc23ve.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{useNewUrlParser:true})
        console.log("Database Connected SucessFully")
    } catch (error) { 
        console.log(error);
        
    }
    
}

export default dbconnection;
