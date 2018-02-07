var Customers = Backbone.Collection.extend(
      {
        model: Customer
      });

var customers = new Customers();
customers.add({ name: "Manju", email: "manju@gmail.com" });
customers.add({ name: "Test", email: "Test@yahoo.com" });
console.log("Customer details");
