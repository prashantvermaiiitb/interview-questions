/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let tmp = s.charAt(i);
        //console.log(tmp);
        switch (tmp) {
            case '{':
            case '(':
            case '[':
                stack.push(tmp);
                break;
            case '}':
            case ')':
            case ']':
                if (stack.length === 0) return false; //extra closing tag
                let optop = stack.pop();
                if (optop === '{' && tmp !== '}' ||
                    optop === '(' && tmp !== ')' ||
                    optop === '[' && tmp !== ']'
                )
                    return false; // not matching closing tags
                break;
        }
    }
    if (stack.length > 0) return false; // extra opening tag
    return true;
};