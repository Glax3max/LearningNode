export class OrderController{
    constructor(orderService) {
        this.orderService = orderService;
    }
    create(req,res) {
        // Inital processing

        const order = this.orderService.createOrder(req.body);
        return res.json({message:"Order created!"}); 
    }
}