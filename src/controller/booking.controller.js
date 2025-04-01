import mongoose from "mongoose"
import {Booking} from "../models/booking.model.js"

export const createBooking=async(req,res)=>{
   try {
     const { movie, seats, slot }= req.body;
     if(!movie || !seats || !slot)
     return res.status(400).json({ message: "All three fields are required"})
     
     const booking = await Booking({
         movie,
         seats,
         slot
     })
     await booking.save();
     return res.status(200).json({ message: "Booking successfull", book })
   } catch (error) {
     return res.status(500).send("Internal server error")
   }
}

export const check=(req,res)=>{
  console.log('check')
}