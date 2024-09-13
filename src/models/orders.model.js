import { Schema, model } from "mongoose";

const ordersSchema = new Schema({
    date: String,
    description: String,
    customer_name: String,
    ammount: String,
    status: String
})

export const ordersModel = model('orders', ordersSchema);

/*
{
    "date": "manana",
    "description":"prueba",
    "customer_name": "pepe botija",
    "ammount":12342,
    "status":"Enviado"
  }*/