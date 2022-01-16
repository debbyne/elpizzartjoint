function orderPizza(size,crust,toppings,quantity,totalPrice){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
}

var pizzaSize
var pizzaCrust
var pizzaToppings
var pizzaQuantity
var totalPrice

$(document).ready(function(){
   $ ("#placeOrder").click(function(){
    pizzaSize= parseInt($("form input[name='size']:checked").val());
    pizzaCrust = parseInt($("form input[name='crust']:checked").val());
    pizzaToppings = parseInt($("form input[name='toppings']:checked").val());
    pizzaQuantity= parseInt($("form input[name='quantity']").val());
   })
})