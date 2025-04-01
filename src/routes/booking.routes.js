import { Router } from "express";
import  {check, createBooking}  from "../controller/booking.controller.js";
const router = Router();

router.post('/booking', ()=>{ 
    console.log('hello')
}, check)

export default router;