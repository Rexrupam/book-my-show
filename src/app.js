import express from "express"
import cors from "cors"
import bodyParser from "body-parser";
import bookingRouter from "./routes/booking.routes.js"

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', bookingRouter)

export { app }