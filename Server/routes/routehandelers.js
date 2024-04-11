
import email from "../Database/Emailmodels.js";



const getemailfromdatabase=async(req,res)=>{
    if(req.params.type==='inbox'){
        return res.status(200).json("Ok Fine");
    }
else{
    try {
        let emails;
        if(req.params.type==='sent'){
            emails= await email.find({type:'sent'})    
        }
        else if(req.params.type==='all mails'){
            emails= await email.find({});
        }

        else if(req.params.type==='drafts'){
           
            try {
                if(req.body.emailid){
                emails = new email({
            
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
                await emails.save();
            }
            emails= await email.find({type:'draft'})
               return     res.status(201).json({emails});
            } 
            catch (error) {
                console.log("Error in sending Email: ", error);
                return res.status(409).json({message:error})
            } 
        }
        else if(req.params.type==='bin'){
          emails = await email.find({bin:true});
        }
return res.status(200).json({emails});

    } 

    
    
    catch (error) {
        console.log(error);
        return res.status.json({message:error});
    }
}
}

const moveemailtobinhandler=async(req,res)=>{

    try {
        console.log(req.body)
        await email.updateMany({_id:{$in:req.body}},{$set:{bin:true,starred:false,type:""}});
        console.log("chalo yaar");
        return res.status(200).json("Updated");
       
    } catch (error) {
        
        return res.status(500).json({message:error});
    }

}


export  {getemailfromdatabase,moveemailtobinhandler};