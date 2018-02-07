var CustomerItemView = Backbone.View.extend({
  
        el: '#addCustomer',
    events: {
              'click #addcus': 'addCustomer'
            },
  addCustomer: function(e) 
            {
            e.preventDefault();

            var newCustomer = {};
            newCustomer.name = this.$('#customer_name').val();
            newCustomer.email = this.$('#customer_email').val();

            var customer = new Customer (
            {

            name: newCustomer.name,
            email: newCustomer.email
 
            });
            this.collection.create(customer)
            
            this.clearForm();
            },
  
  clearForm: function() 
            {
            this.$('#customer_name').val(''),
            this.$('#customer_email').val('')
            }
});

var addCustomersItemView = new CustomerItemView({ collection:customers});