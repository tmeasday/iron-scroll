Package.describe({
  name: "iron:scroll",
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.1');
  api.use(["iron:location", "jquery", "underscore"], "client");
  api.addFiles('iron:scroll.js', "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('iron:scroll');
  api.addFiles('iron:scroll-tests.js');
});
