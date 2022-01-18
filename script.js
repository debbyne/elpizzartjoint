function orderPizza(size, crust, toppings, quantity, totalPrice) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.quantity = quantity;
  this.totalPrice = totalPrice;
}
let pizzaSize,priceSize,pCrust,pToppings,pizzaQuantity,pizzaPrice;
function priceBySize(){
if (document.getElementById("size").val =="small"){
  priceSize = 600;
}else if
  (document.getElementById("size").val =="medium"){
    priceSize = 800;
}else if
(document.getElementById("size").val =="large"){
  priceSize = 1000;
}
return priceSize;
}

function priceByCrust(){
  if (document.getElementById("crust").val =="crispy" =="stuffed" =="glutten-free"=="thin"=="thick" ){
    pCrust = 100;
  }
  return pCrust;
  }
 
  function toppins(){
    if (document.getElementById("toppings").val =="bacon"){
      pToppings = 100;
    }else if
      (document.getElementById("toppings").val =="pepperoni"){
        pToppings = 250;
    }else if
    (document.getElementById("toppings").val =="extra-cheese"){
      pToppings = 200;
    }
    else if
    (document.getElementById("toppings").val =="onions-and-bbq-chicken"){
      pToppings = 150;
    }
    else {
    pToppings = 200;
    }
    return pToppings;
    }
