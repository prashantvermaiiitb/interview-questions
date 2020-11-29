var events = require("events");
var eventEmitter = new events.EventEmitter();

/**
 * batch the request from the components
 * then after some time i.e. implement throttling
 * and serve the content
 */
let users = [
  { id: 1, name: "user1" },
  { id: 2, name: "user2" },
  { id: 3, name: "user3" },
  { id: 4, name: "user4" },
  { id: 5, name: "user5" },
  { id: 6, name: "user6" },
  { id: 7, name: "user7" },
  { id: 8, name: "user8" },
  { id: 9, name: "user9" },
  { id: 10, name: "user10" },
];

let queue = [],
  x = 3000;

// function wait(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("hello");
//     }, ms);
//   });
// }

// let counter = 1;
// (function () {
//   timer = setTimeout(function () {
//     counter++;
//   }, 1000);
// });

// function checkIfRequestCanBeSent() {
//   return counter === 3;
// }

function getUsers(userIdList) {
  return userIdList.map((value) => {
    let tmpUser = users.filter((user) => user.id === value).shift();
    return tmpUser;
  });
}

function makeNetworkRequest(queue) {
  // console.log(queue);
  // console.log(users);
  //filter the users from the DB and return as promise
  let result = getUsers(queue);
  // console.log(result);
  //empty the queue as well so that it can be re-used
  queue = [];

  return Promise.resolve(result);
  // return new Promise((resolve, reject) => {});
}

function makeRequest(...params) {
  //send the request after x seconds
  if (queue.length == 0) {
    timer = setTimeout(() => {
      //trigger the request
      makeNetworkRequest(queue)
        //after you get the result
        .then((response) => {
          //emit the event
          eventEmitter.emit("data_fetched", response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally((info) => {
          console.log(info);
        }); 
    }, x);
  }
  //batch the request
  queue.push(params[1]);

  // return new Promise(function (resolve, reject) {});
  return new Promise((resolve, reject) => {
    eventEmitter.on("data_fetched", function (users) {
      resolve(users.filter((user) => user.id === params[1]).shift());
    });
  });
}

function fetch(...params) {
  return makeRequest(...params);
}

function component1(id) {
  return fetch("Even component", id);
}
function component2(id) {
  return fetch("Odd component", id);
}
function component3(id) {
  return fetch("Default component", id);
}
function printResponse(i, response) {
  console.log(`Data for the User${i} is `, response);
}

function generateRequest(loop) {
  while (loop > 0) {
    console.log("value of loop:", loop);
    for (let i = 1; i <= (Math.random() * 5).toFixed(0); i++) {
      console.log(i);
      if (i % 2 == 0) {
        component1(i).then((response) => {
          printResponse(i, response);
        });
      } else if (i % 3 == 0) {
        component2(i).then((response) => {
          printResponse(i, response);
        });
      } else {
        component3(i).then((response) => {
          printResponse(i, response);
        });
      }
    }
    console.log(queue);
    loop--;
  }
}

function main() {
  // wait(3000).then((response) => {
  //   console.log(response);
  // });
  setTimeout(function () {
    generateRequest(2);
  }, 1000);
  setTimeout(function () {
    generateRequest(2);
  }, 500);
}
main();
console.log(queue);
