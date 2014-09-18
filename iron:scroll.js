// Write your package code here!

Meteor.startup(function() {
  // XXX: scroll selector
  $(window).scroll(_.debounce(function() {
    var state = Iron.Location.get().options.historyState;
    var scrollTop = $(this).scrollTop();
    Iron.Location.replaceState(_.extend({}, state, {lastScrollTop: scrollTop}));
  }, 100));
  
  // XXX: use Iron.Location.onPopState for this
  $(window).on('popstate.iron-scroll', function() {
    
    var state = Iron.Location.get().options.historyState;
    if (state && state.lastScrollTop)
      Meteor.setTimeout(function() {
        // XXX: selector
        $(window).scrollTop(state.lastScrollTop);
      }, 0)
  });
});