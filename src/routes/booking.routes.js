import { Router } from "express";
import  {createBooking, showLastBooking}  from "../controller/booking.controller.js";
const router = Router();

router.route('/booking').post(createBooking)
router.route('/booking').get(showLastBooking)
export default router