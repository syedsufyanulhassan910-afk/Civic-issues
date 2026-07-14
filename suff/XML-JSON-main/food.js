const order = {
  "orderId": "ORD-44581",
  "customer": {
    "id": 6731,
    "name": "Zainab Malik",
    "contact": {
      "email": "zainab.m@example.com",
      "phone": "+923121122334"
    }
  },
  "items": [
    { "productId": 501, "name": "Chicken Biryani (Double)", "price": 450, "qty": 3 },
    { "productId": 512, "name": "Soft Drink 1.5L", "price": 180, "qty": 2 }
  ],
  "payment": {
    "method": "Cash on Delivery",
    "isPaid": false
  }
};

console.log(order.customer.contact.email); 

console.log(order.items[0].name); 

let total = 0;
order.items.forEach(item => {
    total += item.price * item.qty;
});
console.log("Total Bill:", total); 

