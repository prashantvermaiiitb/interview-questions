/**
 * parseInt() default replication
 */

function atoi(str) {
    let isPositive = true,
        positiveRange = 2 ** 31 - 1,
        negativeRange = 2 ** 31,
        isNonWhiteSpaceMet = false, //for tracking white space 
        isSignInformationProcessed = false, //for tracking evaluation of the numeric value
        result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (!isNonWhiteSpaceMet) { //if we met non-white space previously
                continue;
            }
            break; //chance we might have evaluated the expression once 
        }
        isNonWhiteSpaceMet = true; //all the spaces are being consumed 

        if (str[i] === '+' && !isSignInformationProcessed) { //catch the positive sign
            isPositive = true;
            isSignInformationProcessed = true;
            continue;
        }
        if (str[i] === '-' && !isSignInformationProcessed) { //catch the negative sign
            isPositive = false;
            isSignInformationProcessed = true;
            continue;
        }
        if (isNaN(str[i])) break; //when non-white spaces are there but non-numeric
        if (str[i] >= '0' && str[i] <= '9') { //for the numeric characters
            result = result * 10 + (str[i] - '0'); //get the proper decimal code for the character
            if (result >= positiveRange && isPositive) {
                return positiveRange;
            } else if (result >= negativeRange) {
                return -negativeRange;
            }
        }
    }

    if (!isPositive && result > 0) {
        return -result;
    }
    return result;

}

function atoi2(str) {
    let i = 0,
        sign = 1,
        result = 0;
    if (str.length === 0) return 0;

    //discard the white-spacing
    while (i < str.length && str[i] === ' ') i++;
    // console.log('here-199',str[i],'po');
    //check if optional sign exists or not
    if (i < str.length && (str[i] === '-' || str[i] === '+')) {
        sign = (str[i++] == '-' ? -1 : 1);
    }
    // console.log('here-1',str[i]);
    //build the result and handle overflow / underflow situation
    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        result = result * 10 + (str[i++] - '0');
        // console.log('here-1.5')
        if (result >= 2 ** 31 - 1 && sign === 1) {
            return 2 ** 31 - 1;
        } else if (result >= 2 ** 31) {
            return -1 * 2 ** 31;
        }
        // console.log(result);

    }
    // console.log('here-2')
    return result * sign;
}




console.log(atoi2('4266'));
console.log(atoi2('     425'));
console.log(atoi2('     +425'));
console.log(atoi2('     -424'));
console.log(atoi2('     -424 hello'));
console.log(atoi2('     -424hello'));
console.log(atoi2('     -424+hello'));
console.log(atoi2('     -424+8734'));
console.log(atoi2('     -4233 8734 this is cool'));
console.log(atoi2('     this is cool -4233 8734 this is cool'));
console.log(atoi2('     -2-3  '));
console.log(atoi2('     -2148343249832  '));
console.log(atoi2('0-1'));
console.log(atoi2('+-2'));