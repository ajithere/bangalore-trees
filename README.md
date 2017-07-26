# Bangalore Trees

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.
Please add .angular-cli.json from angularsite before doing npm install.
This has been built using MEAN(Mongodb, Express, Angular4 and Nodejs) Framework. Heroku cloud is used to host this webapp. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.ng serve by default runs with environment as dev and hence loads the mock service which fetches data locally instead of getiing from the REST service. 
npm start in package.json is configured to run node server.js which brings up express and mongodb. 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. Building with --env=prod ensures that actual REST service is invoked. When commit is made into heroku cloud, it automatically triggers a production build ensuring the REST API is called

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
