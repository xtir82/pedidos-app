import { __dirname } from "./src/utils.js";
import express from "express";
import handlebars from "express-handlebars";
import morgan from "morgan";
import "./src/database.js";
import 'dotenv/config';

import Orders from './src/routes/orders.router.js';

const app = express();
const port = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(morgan("tiny"));

//View Engine
app.engine("handlebars", handlebars.engine());
app.set('views', __dirname + '/views');
app.set("view engine", "handlebars");

//Routes
app.use('/orders', Orders);

app.listen(port, () => {
    console.log(`Server up on port: ${port}`);
})

