/*
Given two number a and b. Return the remainder when a is divided by b.

Example 1:
Input:
5 8

Output:
5

*/


function remainder(a,b){
    
   return(a%b);   
}

console.log(remainder(5,8));

/*
Sum of natural number
Medium
Given an interger n return the sum of all the natural numbers from 1 to n.

Example 1:
Input:
5

Output:
15

*/

function sum(n){
   return n*(n+1)/2;
}

console.log(sum(5));


/*
Swap Number
Hard
Given two number a and b return number after swap value to each other.

Example 1:
Input:
5 8

Output:
{ a: 8, b: 5 }
*/

function swap(a,b){
   // let temp = a;
   //  a = b;
   //  b = temp;
   //  return {a,b};

   [a,b] = [b,a];
   return {a,b}
}







console.log(swap(5,8));






console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(typeof(NaN))