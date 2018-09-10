'use strict';

// copy from https://github.com/jonasjacek/colors

var colors = require('./color256-data');

var map = {};

colors.forEach(function(color) {
    map[color.name.toLowerCase()] = color;
});

module.exports = {
    get: function(name) {
        return map[name];
    },
};
