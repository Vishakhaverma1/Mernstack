import ErrorHandler from "../middlewares/error.js";
import useModel from "../models/userModel.js";
import msgModel from "../models/msg.js";

export const addUser = async(req,res,next)=>{
        const{username,schoolname,mobilenumber,whatsappnumber,email,tennumber,twelvenumber,city,category,course} = req.body;

        console.log(req.body);

        // if(!username || !schoolname || !mobilenumber || !whatsappnumber || !email || !tenpercante || !twelthpercante || !city || !category || !course){
        //     return next(new ErrorHandler("Please fill full form !",400));
        // }
        try{
            await useModel.create({username,schoolname,mobilenumber,whatsappnumber,email,tennumber,twelvenumber,city,category,course});
            res.status(200).json({
                success :true,
                message : "Sent Successfully ! ",
            });

        }catch(error){
            if(error.name === "validationError"){
                const validationErrors = Object.values(error.errors).map(
                (err)=> err.message
            );
                return next(new ErrorHandler(validationErrors.join(" , "),400));
            }
            return next(error);
        }       
};

export const sendMsg = async(req,res,next)=>{

        const{name,email,subject,msg} = req.body;
        console.log(req.body);
        try{
        await msgModel.create({name,email,subject,msg});
        res.status(200).json({
            success :true,
            message : "Sent Successfully ! ",
        });
       
    }catch(error){
        if(error.name === "validationError"){
            const validationErrors = Object.values(error.errors).map(
            (err)=> err.message
        );
            return next(new ErrorHandler(validationErrors.join(" , "),400));
        }
        return next(error);
    }       
}