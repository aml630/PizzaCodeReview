function Pizza (toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize
}

Pizza.prototype.price = function () {
var pizzaPrice = 10;
var toppingsNumber = this.toppings
if(this.pizzaSize === "small") {
  pizzaPrice = pizzaPrice -5
}else if (this.pizzaSize === "medium") {
  pizzaPrice = pizzaPrice +3
}else {
  pizzaPrice = pizzaPrice +10
}
var toppingsPrice = toppingsNumber *2
pizzaPrice = pizzaPrice + toppingsPrice;
return pizzaPrice
}

$(document).ready(function() {
var toppingsSelected = 0
$(".btn-primary").click(function() {
  if ($(this).hasClass("clicked") === true){
    toppingsSelected -= 2
  }
  $(this).toggleClass("clicked")
  toppingsSelected ++
  $("#toppingsNum").text(toppingsSelected)
});
$(".clicked").click(function() {
  toppingsSelected --
  $("#toppingsNum").text(toppingsSelected)
});

$("form").submit(function (event) {
var size = $("#sizeList").val()
console.log(size)
var toppings = toppingsSelected
console.log(toppings)
var newPizza = new Pizza(toppings, size);
console.log(newPizza)
var finalPrice = newPizza.price(toppings, size)
console.log(finalPrice)
$("#finalPrice").text(newPizza.price(toppings, size))
  event.preventDefault()

})

});
