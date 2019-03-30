# Checkout code example

For this code example I focused on the logical implementation. I have not implemented anything related to UI/UX.

### Tech

The technologies that I used are:

- [JavaScript] - ES6
- [HTML5]

### External libraries

- [webpack](https://webpack.js.org/) - Module bundler for modern JavaScript applications
- [jestjs](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework
- [babeljs](https://babeljs.io/) - Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments

### Installation

This code example requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server:

```
$ cd checkout
$ npm install
```

For build the bundle.js:

```
$ npm run build
```

For run the test:

```
$ npm run test -- --coverage
```

### Web server

Is recommended install a web server for running the application

- [http-server](http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server) - The web server runs on the http-server npm package

#### Instalation

Install the http-server globally on your machine using the node package manager (npm) command line tool, this will allow you to run a web server from anywhere on your computer:

```
$ npm install -g http-server
```

In the project directory start the server with this command:

```
$ http-server
```

You should see something like the following:

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.3:8080
Hit CTRL-C to stop the server
```

## Browse to your local website with a browser

Open your browser and go to the address [http://localhost:8080](http://localhost:8080) and you should see your local website.

**Thank you so much for your time**
