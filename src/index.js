import { __dirname } from "./utils.js";
import express from "express";
import handlebars from "express-handlebars";
import morgan from "morgan";
import "./database.js";

import Orders from './routes/orders.router.js';

const app = express();
const port = 8080;

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

