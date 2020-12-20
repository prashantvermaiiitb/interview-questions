// implementing a version of compose (composeFetch), which works with rest endpoints.
// i.   Instead of accepting a list of functions, it accepts a list of strings each representing an URL which listens to HTTP POST requests.
// ii.  Instead of invoking functions, it makes a POST request to the URL endpoints with the respective input value in it's request body.
// iii. The return value of the function returned by composeFetch should always be a promise.

// makeRequest(url, payload) -> return a promise that resolves to the serialized response value.

// const squareAndAddTen = composeFetch(
//   "http://abc.com/addTen",
//   "http://abc.com/square"
// );


// const addTen = n => n + 10
// const square = n => n * n

// const squareAndAddTen = compose(addTen, square);

// squareAndAddTen(10).then((response) => {
//   console.log(response); // expecting 110
// });





// function composeFetch() {
//   let composeArguments = arguments;
//   return function (payload) {
//     if (composeArguments.length > 0) {
//       let promise = Promise.resolve(payload);

//       for (let i = 0; i < composeArguments.length; i++) {
//         if (isUrlValid(composeArguments[i])) {
//           promise = promise.then((response) => {
//             makeRequest(composeArguments[i], response);
//           });
//         }
//         //@todo error handling for this use-case
//         return promise;
//       }
//     }
//     //@todo error handling for the no request Urls
//   };
// }
addTen = (value) => value + 10;
multiplyTen = (value) => value * 10;

function compose() {
  let functionList = arguments;
  return function (payload) {
    let promise = Promise.resolve(payload);
    for (let i = 0; i < functionList.length; i++) {
      promise = promise.then((response) => Promise.resolve(functionList[i](response)));
    }
    return promise;
  }
}