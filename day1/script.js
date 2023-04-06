console.log('running script...');

// import or require a module
const fs = require('fs');

const random = require('./utils/random');
const circle = require('./utils/circle')

for (let i = 0; i < 10; i++) {
    console.log( random(10, 20) );
}

console.log(circle);





// const request = require('request');


// request('http://jsonplaceholder.typicode.com/users', function(err, res, body) {
//     console.log(res);
//     // console.log(body);
// })




// const daysOfWeek = require('./days-of-week');

// console.log(daysOfWeek.weekdays)
// const day = daysOfWeek.getWeekday(5);
// console.log(day);


// write a new file
fs.writeFile('./hello.txt', 'hello world Nodejs!', function(e) {
    if (e){
        // console.log(e)
        // creates an explicit error to stop our program
        throw Error(e.message)
    }
    console.log('Done writing file!');
})

fs.appendFile('./hello.txt', 'More data hello from node', function() {
    console.log('Done');
})