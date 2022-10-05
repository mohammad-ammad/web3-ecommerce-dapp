//---INTIALIZED IMPORTS
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
const UserRoute = require('./Routes/UserRoute');
const CategoryRoute = require('./Routes/CategoryRoute')
const ColorRoute = require("./Routes/ColorRoute")
const SizeRoute = require("./Routes/SizeRoute")
const ProductRoute = require("./Routes/ProductRoute")
const OrderRoute = require('./Routes/OrderRoutes')

//---CONFIGURE APP INSTANCE
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))

//---DATABASE CONNECTIVITY
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(console.log("Connected to database")).catch(err => console.log(err));

//---ALL ROUTES ENDPOINTS
app.use("/api/v1/user", UserRoute);
app.use("/api/v1/category", CategoryRoute)
app.use("/api/v1/color", ColorRoute)
app.use("/api/v1/size", SizeRoute)
app.use("/api/v1/product",ProductRoute)
app.use("/api/v1/order",OrderRoute)


//---APP RUNNING PORT
app.listen("8000", ()=>console.log("server is running"));
