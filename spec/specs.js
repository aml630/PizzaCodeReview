describe('Pizza', function() {
  it("will have both toppings and size properties", function() {
    var newPizza = new Pizza(2, "large")
    expect(newPizza.toppings).to.eql(2)
    expect(newPizza.pizzaSize).to.equal("large")
  });
  it("will allow price adjustments based on toppings and sizes", function() {
    var newPizza = new Pizza(2, "large")
    expect(newPizza.price()).to.equal(24);
    var newPizza = new Pizza(3, "medium")
    expect(newPizza.price()).to.equal(19);
  });
});
