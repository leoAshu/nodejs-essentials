<p align="center">
    <image src="assets/cover.png">
</p>

# Node.js Essentials

Node.js is a `cross-platform`, `open-source` and an `asynchronous event-driven` JavaScript runtime evironment.

# Table of Contents:

- [History of Node.js](#history-of-nodejs)
- [Node Globals](#node-globals)
    - [Global Objects](#global-objects)
- [Node Modules](#node-modules)
    - [npm](#npm)
- [Commonly Used Commands](#commonly-used-commands)

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

### npm:
    
    // initialise a javascript project as a node package
    npm init

    // initialise as a default node package
    npm init -y
    npm init --yes

    // install a package locally
    npm i <package_name>
    npm install <package_name>

    // install packages from package.json dependencies
    npm i
    npm install

    // install a package globally
    npm i -g <package_name>
    npm install -g <package_name>

    // update all local packages
    npm update

    // update a specific local package
    npm update <package_name>

    // update all global packages
    npm update -g

    // update a specific global package
    npm update -g <package_name>

    // list outdated local packages
    npm outdated

    // list outdated global packages
    npm outdated -g --depth=0

    // remove a local package
    npm uninstall <package_name>

    // remove a local package without removing it from package.json
    npm uninstall --no-save <package_name>

    // remove a global package
    npm uninstall -g <package_name>

> Note:
> - is the standard package manager for Node.js
> - is downloaded and bundled alongside Node.js
> - can be used to download, configure and create packages for Node.js projects

<br>

## Commonly Used Commands:

### Check version:
    
    // display node.js version
    node -v
    node --version

### Run Node.js script:

    // run a script file
    // can omit the .js extension
    node <file_name>
    node app.js
    node app

