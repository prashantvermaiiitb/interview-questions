function accumlate() {
    // console.log(arguments);

    let parentArguments = arguments;

    console.log('inside parent ..length of arguments ', arguments.length, ' passed in ', parentArguments[0], ' len ', arguments.length === 0);

    return function (...args) {
        console.log('inside returned function ..', parentArguments[0], ' passed in arguments ', args[0]);

        if (arguments.length === 0) { //base case
            return parentArguments[0];
        }

        // console.log(typeof parentArguments[0]);
        return accumlate(args[0] + parentArguments[0]);
    };
}
console.log(accumlate(3)());
console.log(accumlate(3)(4)());
console.log(accumlate(3)(4)(8)());