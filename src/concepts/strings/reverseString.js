function reverseString(input) {
    // let input = inputString.split('');
    let len = input.length,
        i = 0,
        j = len - 1;
    while (i <= j) {
        [input[i], input[j]] = [input[j], input[i]]
        i++;
        j--;
    }
    console.log(input.join(''));
}

reverseString(["p", "r", "a", "s", "h", "a", "n", "t", "v", "e", "r", "m", "a"]);