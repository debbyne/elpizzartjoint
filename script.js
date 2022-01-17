function orderPizza(size, crust, toppings, quantity, totalPrice) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}

var size = newOrder("small", "medium", "large");
var crust = newOrder("Crispy", "Stuffed", "Glutten free", "Thin", "Thick");
var toppings = newOrder(
  "bacon and bacon",
  "pepperoni",
  "Extra cheese",
  "onions and bbq chicken");
var quantity = newOrder("quantity");
var price = newOrder("totalPrice");

$(document).ready(function () {
  $("#placeOrder").click(function (e) {
    pizzaSize = parseInt($("form input[name='size']:checked").val());
    pizzaCrust = parseInt($("form input[name='crust']:checked").val());
    pizzaToppings = parseInt($("form input[name='toppings']:checked").val());
    pizzaQuantity = parseInt($("form input[name='Quantity']").val());
    pizzaPrice = (pizzaSize + pizzaCrust + pizzaToppings) * pizzaQuantity;
    alert("The totalPrice for your order" + "Ksh" + pizzaPrice);
    totalCharge = pizzaPrice;
    console.log(totalPrice);

    const form=document.querySelector(".form")
    form.addEventListener("placeOrder",function(e){
        e.preventDefault();
        totalPrice();
  

  $("#delivery").click(function (e) {
    alert("The delivery charge will be" + "ksh 300");
    e.preventDefault();
  });
})
