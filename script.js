function orderPizza(size, crust, toppings, quantity, totalPrice) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}
let pizzaSize,priceSize,pizzaCrust,pizzaToppings,pizzaQuantity,pizzaPrice;
function priceBySize(){
if (document.getElementById("size").value =="small"){
  priceSize = 600;
}else if
  (document.getElementById("size").value =="medium"){
    priceSize = 800;
}else if
(document.getElementById("size").value =="large"){
  priceSize = 1000;
}
return priceSize;
}
