import { Router } from "express";
import { ordersModel } from "../models/orders.model.js";

const router = Router()

router.get('/', async (req, res) => {
    try{
        const orders = await ordersModel.find().lean();
        res.render('orders', {orders})
    } catch (error) {
        res.status(500).send("Server Error")
    }
})

router.get('/new_orders', async (req, res) => {
    try{
        res.render("new_orders")
    } catch (error) {
        res.status(500).send("Server Error")
    }
})

router.post('/', async (req, res) => {
    const { date, description, customer_name, ammount, status } = req.body;
    const newOrder = new ordersModel({ date, description, customer_name, ammount, status });
    try {
        await newOrder.save();
        res.redirect("/orders")
    } catch (error) { 
        res.status(500).send("Server Error")
    }
})

export default router;