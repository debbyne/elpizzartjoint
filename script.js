function orderPizza(size,crust,toppings,quantity,totalPrice){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
}

var size =  newPizza ("small","medium","large")
var crust =  newPizza ("Crispy","Stuffed","Glutten free","Thin","Thick")
var toppings = newPizza ("bacon and bacon","pepperoni","Extra cheese","onions and bbq chicken")
var quantity = newPizza ()
var price = newPizza ()

$(document).ready(function(e){
   $ ("#placeOrder").click(function(){
    pizzaSize= parseInt($("form input[name='size']:checked").val());
    pizzaCrust = parseInt($("form input[name='crust']:checked").val());
    pizzaToppings = parseInt($("form input[name='toppings']:checked").val());
    pizzaQuantity= parseInt($("form input[name='quantity']").val());
    pizzaPrice = (pizzaSize + pizzaCrust +  pizzaToppings) *pizzaQuantity ;
    alert ("The totalPrice for your order" +"Ksh" + pizzaPrice);
    totalCharge = (pizzaPrice);
    e.preventDefault();
   });

   $("#delivery").click(function(e){
       alert("The dekivery charge will be ksh 300")
       e.preventDefault();
   })





})