[![Build Status](https://travis-ci.org/popularowl/angular-starter.svg?branch=master)](https://travis-ci.org/popularowl/angular-starter/)

## Angular Starter

### Minimal Angular.js app

Angular Starter is a minimal [AngularJS](http://angularjs.org/) HTML5 application to get your web app project started. The main goal of this project is to provide the basic structure for **Angular.js** projects with preconfigured **testing** and **Continuous Integration** setup.

### How minimal?
- Angular Starter application has 3 minimal pages with navigation between them.
- Angular Starter application has a defined structure with separated controllers and views.
- Angular Started application has few simple examples of Angular.js app http communication with Restful APIs.
- Angular Starter application has unit and end 2 end tests configured so you can dive into TDD and BDD haven.
- Angular Starter application has Continuous Integration configured to perfrom testing on every GitHub code push. Its like having an additional QA team member!
- That's all!

Summary of how this project was created together with the detailed component walkthrough can be found on [HTMLCenter Blog](http://www.htmlcenter.com/blog/building-angular-js-starter-application). Below is a simple start-up guide.

### How to start Angular Starter

How to start, test and use Angular Starter? First, you need [Node.js](https://nodejs.org/) to be installed in your dev environment as Angular Starter project depends on it. Next, you should clone Angular Starter project to your dev environment:
    
    git clone https://github.com/popularowl/angular-starter.git
    
Once the project is cloned you can use the following commands to run and test the project:

- **npm run start** (will start the local web server on localhost:8000)
- **npm run test** (will start karma for countinous testing once code changes are detected)
- **npm run test-single-run** (will start karma for one single test run)

Above commands are defined in the **package.json** configuration file in the root of the project. Check it out to understand what is exactly executed once above commands are run.


### Contributing to the project

All feedback and suggested improvements are very welcome. You can always [create an issue](https://github.com/PopularOwl/angular-starter/issues) for this repositary or issue a pull request.

### Authors

This project is created and maintained by [Saulius Zukauskas](https://github.com/sauliuz)  and is one of [PopularOwl Labs](http://www.popularowl.com/) open source projects. Enjoy!

