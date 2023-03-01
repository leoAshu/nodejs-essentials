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

- is the standard package manager for Node.js
- can be used to:
    - initialise a javascript project as a package:
        - `npm init`
    - install packages locally (in the current module):
        - `npm install <package_name>`
    - install packages globally (for the current user):
        - `npm install -g <package_name>`
    - update local packages
        - `npm update`
    - update global packages
        - `npm update -g`
        - `npm update -g <specific_package_name>`
    - list outdated local packages
        - `npm outdated`
    - list outdated global packages
        - `npm outdated -g --depth=0`
    - remove a local package
        - `npm uninstall <package_name>`
    - remove a local package without removing it from `package.json`
        - `npm uninstall --no-save <package_name>`
    - remove global packages
        - `npm uninstall -g <package_name`
