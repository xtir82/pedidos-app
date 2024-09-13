import { connect } from "mongoose";

connect("mongodb+srv://andherdev82:Ckon5ALzWHbEqxOR@test-pedidos-app.kze6j.mongodb.net/?retryWrites=true&w=majority&appName=test-pedidos-app", 
    { dbName: 'orders' })
    .then(() => console.log("Connected to DB"))
    .catch(() => console.log("Error to connect to DB"))