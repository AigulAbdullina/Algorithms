// 
// Level 1
// Последовательность ([{}]) является правильной, а последовательности ([)], {()] правильными не являются. 
// Докажите это используя стек!

function rigthOrWrong(string) {
    const arr = [];
 
    for (let i = 0; i < string.length; i++) {
        const a = string[i];
 
        if (a === '(' || a === '[' || a === '{') {
            arr.push(a);

        } else if (a === ')' || a === ']' || a === '}') {

            if (arr.length === 0) {
                return false;
            }
 
            const b = arr.pop();
 
            if ((a === ')' && b !== '(') || (a === ']' && b !== '[') || (a === '}' && b !== '{')) {
                return false;
            }
        }
    }
 
    return arr.length === 0;
 }
 
 const str1 = "([{}])";
 const str2 = "([)]";
 const str3 = "{()]";
 console.log(str1 + " " + rigthOrWrong(str1)); // ([{}]) true
 console.log(str2 + " " + rigthOrWrong(str2)); // ([)] false
 console.log(str3 + " " + rigthOrWrong(str3)); // {()] false