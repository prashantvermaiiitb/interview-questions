/**
 * s will be the string will have to remove the characters
 * connecting one and then have to see whether the string is 
 * palindrome or not.
 * @param {*} s 
 */
function palindrome(s) {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
    if (s.length == 0) return true;
    let i = 0,
        j = s.length - 1,
        flag = false;
    // console.log(s)
    while (i <= j) {
        if (s.charAt(i) !== s.charAt(j)) {
            flag = false
            break;
        }
        i++;
        j--;
        flag = true;
    }
    return flag;
}

console.log(palindrome("A man, a plan, a canal: Panama"));
console.log(palindrome('race a car'));