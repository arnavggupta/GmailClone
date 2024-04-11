import express from "express";
import email from "../Database/Emailmodels.js";
// import email from "../Database/Emailmodels.js";
import {getemailfromdatabase,moveemailtobinhandler} from "./routehandelers.js";
const router= express.Router();


router.post("/save",async(req,res)=>{
    // console.log(req.body.body);
try {
    const newemail = new email({

        emailid:req.body.emailid,
        From:req.body.From,
        subject:req.body.subject,
        body:req.body.body,
        date:new Date(),
image:req.body.image,
name:req.body.name,
starred:req.body.starred,
type:req.body.type
    });
    await newemail.save();
   return     res.status(201).json({message:"Email has been sent SucessfUlly"});
} catch (error) {
    console.log("Error in sending Email: ", error);
    return res.status(409).json({message:error})
} 
})

router.get("/emails/:type",getemailfromdatabase);
router.post("/emails/:type",getemailfromdatabase);
router.post("/:type",getemailfromdatabase);
router.post("/bin",moveemailtobinhandler);
// router.get("/bin/",moveemailtobinhandler);




export default router;