let number1 = "33"
let number2 = "33abc"
let number3 = null
let number4;

let tnumber1 = Number(number1)  // 33
let tnumber2 = Number(number2)  // NaN
let tnumber3 = Number(number3)  // 0
let tnumber4 = Number(number4)  // NaN

console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
console.log(typeof number4);

console.log(typeof tnumber1);
console.log(typeof tnumber2);
console.log(typeof tnumber3);
console.log(typeof tnumber4);

console.log(tnumber1);
console.log(tnumber2);
console.log(tnumber3);
console.log(tnumber4);

let a1 = true
let b1 = Number(a1)
console.table(["a1", a1 ,b1, typeof(b1)]);
 
let a2 = 1
let b2 = Boolean(a2)
console.table(["a2", a2 , b2, typeof(b2)]);

let a3 = 0
let b3 = Boolean(a3)
console.table(["a3", a3 , b3, typeof(b3)]);


let a4 = ""
let b4 = Boolean(a4)
console.table(["a4", a4 , b4, typeof(b4)]);

let a5 = " Nitin"
let b5 = Boolean(a5)
console.table(["a5", a5 , b5, typeof(b5)]);


let Somenumber1 = 33
let string = String(Somenumber1)
