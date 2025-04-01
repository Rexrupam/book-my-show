import mongoose from "mongoose"

const seatSchema = new mongoose.Schema({
   A1: { type: Number, default: 0 },
   A2: { type: Number, default: 0 },
   B1: { type: Number, default: 0 },
   B2: { type: Number, default: 0 },
   C1: { type: Number, default: 0 },
   C2: { type: Number, default: 0 },
   D1: { type: Number, default: 0 },
   D2: { type: Number, default: 0 }
})

const bookingSchema = new mongoose.Schema({
   movie: { type: String, required: true },
   seats: { type: seatSchema, required: true },
   slot: { type: String, required: true }
}, {timestamps: true});


export const Booking = mongoose.model("Bookingschema", bookingSchema)
