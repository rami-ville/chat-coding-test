# Chat demo w/ WebSocket (a coding-test)

## Using on local machine

Prerequisite for using this locally is that you have local web server installed, e.g., Apache or NGINX 

With these steps you can try this chat demo locally:
* Download  and unzip WebContent
* Configure your web server configuration URL-path to access that directory where the index.html file is
* Optionally you can copy WebContect under your web servers public html directory and access _localhost/WebContent/_


## Install node.js and npm

Instruction how to install can be found [here](https://docs.npmjs.com/getting-started/installing-node)


## Using a package.json

Check also instruction how to use [package.json](https://docs.npmjs.com/getting-started/using-a-package.json).


## Set-up gulp

This project uses npm and Gulp for automating build tasks. Project can be run without using Gulp, but then CSS and JS files are _not_ minified / uglified and combined

Needed npm modules are:
* gulp
* gulp-util
* gulp-clean-css
* gulp-useref
* gulp-uglify
* gulp-if
* gulp-chmod

Here is example how to install gulp-uglify and save dependency to npm's _package.json_ file
> "npm install --save-dev gulp-uglify"

More instructions how to install and use npm can be found [here](https://www.npmjs.com/)  


## Demo

See live [demo](http://rami-ville.com/chat-demo/)
