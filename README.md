<p align="center">
    <image src="assets/cover.png">
</p>

# Node.js Essentials

Node.js is a cross-platform, open-source and an asynchronous event-driven JavaScript runtime evironment.

# Table of Contents:

- [History of Node.js](#history-of-nodejs)
- [Node Globals](#)
    - [Global Objects](#)
- [Node Modules](#)
    - [npm](#)
- [File Management and Streams](#)
- [Error Handling and Debugging](#)
- [Testing](#)

## History of Node.js:

1. Node.js
    - 2009
    - [Install](https://nodejs.org/en/)
2. npm
    - 2011
3. Node.js Foundation
    - 2015
    - IBM, Microsoft, Paypal and others

<br>

## Node Globals:

### Global Objects:

- These objects are available in all modules and need not be included in an application.
- The built-in JavaScript language objects are also globally accessible.
- Some variables may appear to be global but are not. These exist in the scope of modules:
    - __dirname
    - __filename
    - exports
    - module
    - require()