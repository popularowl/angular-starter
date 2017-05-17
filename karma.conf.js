module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/resources/bower/angular/angular.js',
      'app/resources/bower/angular-mocks/angular-mocks.js',
      'app/resources/bower/angular-route/angular-route.js',
      'app/app.js',
      'app/components/controllers/*.js',
      'tests/*_test.js'
    ],

    autoWatch : true,
    frameworks: ['jasmine'],
    browsers : ['PhantomJS'],

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-phantomjs-launcher'
    ],

    junitReporter : {
      outputFile: 'tests/junit-reporter-log.xml',
      suite: 'unit'
    }

  });
};
