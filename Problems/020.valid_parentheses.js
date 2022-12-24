var isValid = function(s) {
    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    const stack = [];

    for(let char of s) {
        if(brackets[char]) {
            stack.push(brackets[char]);
        } else if(stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}