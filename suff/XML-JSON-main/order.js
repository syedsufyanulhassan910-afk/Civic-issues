const orderDetails2 = {
    "orderId": "ORD-55412",
    "customer": {
        "id": 8922,
        "name": "Ayesha Khan",
        "contact": {
            "email": "ayesha.k@example.com",
            "phone": "+923219876543"
        }
    },
    "items": [
        {
            "productId": 22,
            "name": "Leather Wallet",
            "price": 2200,
            "qty": 1
        },
        {
            "productId": 5,
            "name": "Stainless Steel Bottle",
            "price": 1800,
            "qty": 3
        }
    ],
    "payment": {
        "method": "Credit Card",
        "isPaid": true
    }
};

console.log(orderDetails2.payment.method);
