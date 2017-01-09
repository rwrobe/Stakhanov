#!/usr/bin/env node

'use strict';

var Stakhanov = require('../lib/stakhanov');

var token = process.env.BOT_API_KEY || require('../token');
var name = process.env.BOT_NAME;

var stakhanov = new Stakhanov({
    token: token,
    name: name
});

stakhanov.run();
