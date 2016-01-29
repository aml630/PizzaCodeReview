function Pizza (toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize
}

Pizza.prototype.price = function () {
var pizzaPrice = 10;
var toppingsNumber = this.toppings.length

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
$(".btn-primary").click(function() {
  $(this).addClass("clicked")

$("form").submit(function (event) {

  event.preventDefault()


})
})


});
