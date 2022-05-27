/****************Brackets Match***************/

// let input = "()())";
// let input = ")(()((()))"
let input = ")(())";
let lenght = input.length;
let stack = [];
let count = 0;

for (i=0; i<lenght; i++)
{
    let first = stack[stack.length - 1];
    if(input[i] === "(")
    {
        stack.push(input[i]);
    }
    else if(input[i] === ")" && first === "(")
    {  
        stack.pop();
        count+=2;
    }
}
console.log(count);