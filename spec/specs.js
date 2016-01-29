describe('Pizza', function() {
  it("will have both toppings and size properties", function() {
    var newPizza = new Pizza(2, "large")
    expect(newPizza.toppings).to.equal(2)
    expect(newPizza.pizzaSize).to.equal("large")
  });
  it("will allow price adjustments based on toppings and sizes", function() {
    var newPizza = new Pizza(2, "large")
    expect(newPizza.price()).to.equal(24);
    var newPizza = new Pizza(3, "medium")
    expect(newPizza.price()).to.equal(19);
  });
});

describe('Order', function () {
  it("Will have empty array so store food objects in", function () {
  var newOrder = new Order()
  expect(newOrder.Pizzas).to.eql([])
  expect(newOrder.Salads).to.eql([])
  })


  it("Will add up all the prices of all the Pizzas ordered", function () {
  var pizza1 = new Pizza(2, "large")
  var pizza2 = new Pizza(3, "medium")
  var newOrder = new Order()
  newOrder.Pizzas.push(pizza1)
  newOrder.Pizzas.push(pizza2)
  expect(newOrder.totalPrice()).to.eql(43)
  })


it("Will print the full order", function () {
var pizza1 = new Pizza(2, "large")
var pizza2 = new Pizza(3, "medium")
var newOrder = new Order()
newOrder.Pizzas.push(pizza1)
newOrder.Pizzas.push(pizza2)
expect(newOrder.printOrder()).to.eql("<li>Your 1st item has 2 toppings on a large pizza! costing 24</li><li>Your 2st item has 3 toppings on a medium pizza! costing 19</li>your total order price will be 43")
})
})
