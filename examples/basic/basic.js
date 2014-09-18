if (Meteor.isClient) {
  Template.long.helpers({
    tentimes: function() {
      return _.times(10, _.identity);
    }
  });
  
  Template.long.events({
    click: function() {
      Iron.Location.go('/' + Random.id());
      console.log('gone');
      $(window).scrollTop(0);
    }
  });
}
