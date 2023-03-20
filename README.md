<p align="center">
    <image src="assets/cover.png">
</p>

# Node.js Essentials

This repository is a beginner's guide to Node.js, covering everything needed to know to get started with this powerful tool.

## Introduction

Node.js is a `cross-platform`, `open-source` and an `asynchronous` `event-driven` JavaScript runtime evironment that allows developers to run JavaScript on the server-side. It is built on Chrome V8 JavaScript engine, and provides a range of powerful features and libraries that make it easy to build fast, scalable, and efficient web applications.

# Table of Contents:

- [History of Node.js](#history-of-nodejs)
- [Node Globals](#node-globals)
    - [Global Objects](#global-objects)
- [Node Modules](#node-modules)
- [Node Packages](#packages)
- [Node Package Manager](#node-package-manager)
- [Commonly Used Commands](#commonly-used-commands)
    - [NPM Commands](#npm-commands)
        - [Initialize Package](#initialize-package)
        - [Install Packages](#install-packages)
        - [Update Packages](#update-packages)
        - [List Outdated Packages](#list-outdated-packages)
        - [Uninstall Packages](#uninstall-packages)
    - [Node Commands](#node-commands)
        - [Check Version](#check-version)
        - [Run File](#run-file)
        - [Debug File](#debug-file)
        - [Run Test](#run-tests)

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
- Some important global objects are:
    - `Process`:
        - provides information about, and control over the current Node.js process instance.
        - `process.argv`: can be used to collect information from the terminal.
        - `process.stdin` and `process.stdout`: standard input and standard output.


> Note:
> - Some variables may appear to be global but are not. These exist in the scope of modules:
>    - `__dirname`
>    - `__filename`
>    - `exports`
>    - `module`
>    - `require()`

<br>

## Node Modules:

- Node modules are a fundamental part of the Node.js ecosystem.
- They are reusable pieces of code that encapsulate functionality.
- They promote code reusability and modular design resulting in the development of maintainable and scalable application.
- Modules are the building blocks of a package.

## Node Packages:

- A package is a collection of one or more modules that are distributed together.
- They can be installed via npm. 
- A package typically includes a package.json file that specifies its dependencies and other metadata, such as its name, version, author, and license.
- Packages can be used to distribute and share reusable code within the Node.js community.

## Node Package Manager:

- Node Package Manager aka `npm` is the standard package manager for Node.js.
- It is downloaded and bundled alongside Node.js.
- It can be used to download, configure and create packages for Node.js projects.

## Commonly Used Commands:

### NPM Commands:

- ### Initialize Package:
    
        // initialize as a package
        npm init

        // initialize as a default node package
        // skips the prompts and accepts default values
        npm init -y
        npm init --yes

> Note:
>
> - It creates a `package.json` file that contains information about the project and its dependencies.

- ### Install Packages:

        // install a package locally
        npm i <package_name>
        npm install <package_name>

        // install a package locally as a dev dependency
        npm i --save-dev <package_name>
        npm install --save-dev <package_name>

        // install packages from package.json dependencies
        npm i
        npm install

        // install a package globally
        npm i -g <package_name>
        npm install -g <package_name>

> Note:
>
> - There are two scopes of package installation available:
>    - global
>    - local or project

- ### Update Packages:

        // update all local packages
        npm update

        // update a specific local package
        npm update <package_name>

        // update all global packages
        npm update -g

        // update a specific global package
        npm update -g <package_name>

- ### List Outdated Packages:

        // list outdated local packages
        npm outdated

        // list outdated global packages
        npm outdated -g --depth=0

- ### Uninstall Packages:

        // remove a local package
        npm uninstall <package_name>

        // remove a local package without removing it from package.json
        npm uninstall --no-save <package_name>

        // remove a global package
        npm uninstall -g <package_name>

<br>

### Node Commands:

- ### Check Version:
    
        // display node.js version
        node -v
        node --version

- ### Run File:

        // run a Node.js script file
        node <file_name>

- ### Debug File:

        // starts a debugging session
        // for a Node.js file
        node --inspect <file_name>

- ### Run Tests:

        // run a test
        npm test
