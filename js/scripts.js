function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize
  this.pizzaPrice = this.price(toppings, pizzaSize)
}
Pizza.prototype.price = function() {
  var pizzaPrice = 10;
  var toppingsNumber = this.toppings
  if (this.pizzaSize === "small") {
    pizzaPrice = pizzaPrice - 5
  } else if (this.pizzaSize === "medium") {
    pizzaPrice = pizzaPrice + 3
  } else {
    pizzaPrice = pizzaPrice + 10
  }
  var toppingsPrice = toppingsNumber * 2
  pizzaPrice = pizzaPrice + toppingsPrice;
  return pizzaPrice
}

function Order() {
  this.Pizzas = []
  this.Salads = []
}

Order.prototype.totalPrice = function () {
  var orderPrice = 0
  for (var i = 0; i<this.Pizzas.length;i++) {
    var individual = this.Pizzas[i]
     orderPrice += this.Pizzas[i].pizzaPrice
  }
  return orderPrice;
}

$(document).ready(function() {
  var newOrder = new Order()
  var toppingsSelected = 0
  $(".btn-primary").click(function() {
    if ($(this).hasClass("clicked") === true) {
      toppingsSelected -= 2
    }
    $(this).toggleClass("clicked")
    toppingsSelected++
    $("#toppingsNum").text(toppingsSelected)
  });
  $(".clicked").click(function() {
    toppingsSelected--
    $("#toppingsNum").text(toppingsSelected)
  });
  $("form").submit(function(event) {
    var pizzaSize = $("#sizeList").val()
    var toppings = toppingsSelected

    var newPizza = new Pizza(toppings, pizzaSize);
    var finalPrice = newPizza.price(toppings, pizzaSize)
    $("#finalPrice").text(newPizza.price(toppings, pizzaSize))
newOrder.Pizzas.push(newPizza);
console.log(newOrder)
    event.preventDefault()
    $(".pizzaPrintout").append("<li>you've selected " + newPizza.toppings + " toppings on a " + newPizza.pizzaSize + " pizza! Sounds delicous!</li>")
  })






});
