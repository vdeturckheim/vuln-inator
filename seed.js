'use strict';
const Path = require('path');
const Fs = require('fs');
const SimpleGit = require('simple-git')(process.cwd());

SimpleGit.clone('https://github.com/nodejs/security-wg.git', Path.join(process.cwd(), 'tmp'))
    .then(() => {



    })
    .catch((err) => {

        console.error(err);
        process.exit(1);
    });


