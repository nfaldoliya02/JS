const FName = "Nitin"
const LName = "Faldoliya"

// console.log(FName + LName); // it is old now and not a best way to use.

console.log(`my name is ${FName} ${LName}. `);  // it is best practice 


// Other way to devclare String.

const GameName = new String('Nfaldoliya 1231')

console.log(GameName.at(-10));
console.log(GameName.charAt(2));

console.log(GameName.charCodeAt(4));

console.log(GameName.includes("fal"));
console.log(GameName.includes("abc"));

console.log(GameName.indexOf('l'));

console.log(GameName.slice(1,10));
console.log(GameName.slice(-15,-6));

console.log(GameName.split(" "));

console.log("    Mnoj   ");
console.log("    Mnoj   ".trim());  // trim extra spaces


