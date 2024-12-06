/* stack => for Primitive Data Type 
            it gives copy */

let a = 12
let b = a

console.log(a);
console.log(b);

b = 13

console.log(a);
console.log(b); // only value of b changes is a only give copy to b in stack memory.


/* Heap => for non-Primitive Data Type
           it give reference of original */

let c = {
    name :"Abc",
    email: "Abc@bd.in"
}

let d = c

console.log(c.email);
console.log(d.email);

d.email = "xyz@Ab.in"

console.log(c.email);
console.log(d.email);  // here value of c.email also change if we change value of d.email

