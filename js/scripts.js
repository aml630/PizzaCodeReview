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

Order.prototype.printOrder = function () {
  var text = ""
  for (var i = 0; i<this.Pizzas.length; i++ ) {
    text += "<li>Your "+ (i+1) + "st item has " + this.Pizzas[i].toppings + " toppings on a " + this.Pizzas[i].pizzaSize + " pizza! costing " +  this.Pizzas[i].pizzaPrice + "</li>"
  }
  text += "your total order price will be " + this.totalPrice()
  return text;
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

  $("form").submit(function(event) {
    var pizzaSize = $("#sizeList").val()
    var toppings = toppingsSelected

    var newPizza = new Pizza(toppings, pizzaSize);
    var finalPrice = newPizza.price(toppings, pizzaSize)
    $("#finalPrice").text(newPizza.price(toppings, pizzaSize))
      newOrder.Pizzas.push(newPizza);
      console.log(newOrder)
    event.preventDefault()
    $(".pizzaPrintout").text("")
    $(".pizzaPrintout").append("<li>you've selected " + newPizza.toppings + " toppings on a " + newPizza.pizzaSize + " pizza! Sounds delicous!</li>")
  })


  $(".viewOrder").click(function () {
    $(".orderDetails").text("")
      $(".orderDetails").append(newOrder.printOrder())

  })

});
