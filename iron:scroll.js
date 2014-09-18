// Write your package code here!

Meteor.startup(function() {
  // XXX: scroll selector
  $(window).scroll(_.debounce(function() {
    var state = Iron.Location.get().options.historyState;
    var scrollTop = $(this).scrollTop();
    Iron.Location.replaceState(_.extend({}, state, {lastScrollTop: scrollTop}));
  }, 100));
  
  Iron.Location.onPopState(function() {
    var state = this.options.historyState;
    if (state && state.lastScrollTop)
      Meteor.setTimeout(function() {
        // XXX: selector
        $(window).scrollTop(state.lastScrollTop);
      }, 0)
  });
});