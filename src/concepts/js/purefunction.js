/**
 * The definition of Pure Component says that for specific input parameters, we
 * always have a specific output. The output is solely dependent on Input
 * parameters and no other external variable.
 *
 * The function given above defines the output on the basis of the input
 * parameter only.
 */

var initialValue = 10;
/**
 * Adding initialValue to the passed in value
 * @param {*} newValue 
 */
function Impure1(newValue) {
    return initialValue + newValue;
}


var getInitialValue = 0;
/**
 * Updating the Global variable with something else
 * @param {*} inputValue 
 */
function Impure2(inputValue) {
    getInitialValue = inputValue;
    return getInitialValue;
}

/**
 * Pure function using only the first Input and second Input
 * @param {*} firstInput 
 * @param {*} secondInput 
 */
function Pure(firstInput, secondInput) {
    return firstInput + secondInput;
}

var getData = Pure(1, 2);