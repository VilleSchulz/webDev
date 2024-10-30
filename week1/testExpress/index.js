const _ = require('lodash');

const numbers = [33,22,474,555,6,66,33];
_.each(numbers, function(number, i){
    console.log(number);
})