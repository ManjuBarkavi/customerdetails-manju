var CustomerListView = Backbone.View.extend(
{
      tagName: 'tbody',
   initialize: function() 
             {
             this.collection.on('add', this.addOne, this);
             },
       render: function() 
             {
             this.collection.each(this.addOne, this);
             return this;
             },
       addOne: function(customer) 
             {
             var customerView = new CustomerView({ model:customer });
             this.$el.append(customerView.render().el);
             }
});


var CustomerView = Backbone.View.extend({
      tagName: 'tr',
     template: template('customerTemplate'),
   initialize: function() 
             {
             this.listenTo(this.model, 'destroy', this.remove);
             },
       render: function() 
             {
             this.$el.html( this.template( this.model.toJSON() ));
             console.log(this.model.toJSON());
             return this;
             },
       events: 
             {
             'click a.edit': 'editContact',
             'click a.delete': 'deleteContact'
             },
  editContact: function() 
             {
             console.log(this.model.toJSON());
             },
deleteContact: function() 
             {
             this.model.destroy();
             }
});

var allCustomersView = new CustomerListView({ collection:customers}).render();
$('#allCustomer').append(allCustomersView.el);


