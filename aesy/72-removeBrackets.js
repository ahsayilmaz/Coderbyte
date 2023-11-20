export const removeBrackets = (str) => {
    str = str.replace(/[^\{\[\(\)\]\}]/g, "").split("");
    let stack = [];

    for (let char of str) {
        if (char === "[" || char === "(" || char === "{") {
            stack.push(char);
        } else {
            const lastBracket = stack.pop();

            if (
                (char === "]" && lastBracket !== "[") ||
                (char === ")" && lastBracket !== "(") ||
                (char === "}" && lastBracket !== "{")
            ) {
                return 0; // brackets are not balanced
            }
        }
    }

    return stack.length === 0 ? 1 : 0;
};
