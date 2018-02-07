var Customer = Backbone.Model.extend(
      {
	     idAttribute: 'cid'
      });

var template = function(id) 
      {
         return _.template( $('#' + id).html() );
      }
