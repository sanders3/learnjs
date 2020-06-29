'use strict';

var learnjs = {};

learnjs.problemView = function(problemNumber) {
    const newLocal = `Problem #${problemNumber} Coming soon!`;
    return $('<div class="problem-view">').text(newLocal);
}

learnjs.showView = function(hash) {
    var routes = {
        '#problem': learnjs.problemView
    };

    var hashParts = hash.split('-', 2);
    var viewFn = routes[hashParts[0]];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }
}