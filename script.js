function orderPizza(size, crust, toppings, quantity, totalPrice) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}
let pizzaSize,
  priceSize,
  pCrust,
  pToppings,
  pizzaQuantity,
  pizzaPrice,
  userInput,
  summativePrice =0,
  confirmPrice,
  deliveryPrice,
  totalCharge;
function priceBySize() {
  if ($("input[type='radio'][name='size']:checked").val() == "small") {
    priceSize = 600;
    
  } else if ($("input[type='radio'][name='size']:checked").val() == "medium") {
    priceSize = 800;
  } else priceSize = 1000;
  console.log(priceSize)
  return priceSize;
}

function priceByCrust() {
  pCrust = 100;
  console.log(pCrust)
  return pCrust;
}

function toppings() {
  if ( $("input[type='radio'][name='toppings']:checked").val()== "bacon") {
    pToppings = 100;
  } else if ($("input[type='radio'][name='toppings']:checked").val()== "pepperoni") {
    pToppings = 200;
  } else if ($("input[type='radio'][name='toppings']:checked").val()== "extra-cheese") {
    pToppings = 200;
  } else if (
    $("input[type='radio'][name='toppings']:checked").val() == "onions-and-bbq-chicken"
  ) {
    pToppings = 100;
  } else pToppings = 200;
console.log(pToppings)
  return pToppings;
}
function pizzaCharge() {
  priceBySize();
  priceByCrust();
  toppings();
  pizzaPrice = priceSize + pCrust + pToppings;
  userInput = {
    size: document.getElementById("size").value,
    crust: document.getElementById("crust").value,
    toppings: document.getElementById("toppings").value,
  };
  alert("The pizza costs " + pizzaPrice);
  summativePrice += pizzaPrice;
  alert("Your total pizza costs Ksh " +summativePrice)
  confirmPrice = confirm("Do you want to make another order?");
  if (confirmPrice == true) {
    document.getElementById("form").reset();
  } else alert("kindly check out our delivery services");
  return summativePrice;
}
function delivery() {
  deliveryPrice = confirm(
    "We offer delivery services at Ksh 300.Do you want your order delivered?"
  );
  if (deliveryPrice ==true){
    totalCharge =summativePrice + 300

  }else totalCharge =summativePrice
  alert("Your total charge is Ksh " +totalCharge)
  history.go()
}
