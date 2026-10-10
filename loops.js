// Loops & Iteration.
// For Loop,  While, & Do-While loops.  
// Syntax Example: for(initialization; condition; increment) {}

for (let n = 1; n <=5; n++ ){ 
console.log(n); // 1 2 3 4 5
}

let array =["Mughal", "Mir", "Mirza"];
for (let n of array){ 
console.log(n); // Mughal Mir Mirza
}

let obj = {name: "Mir" , age : 24};
for (let key in obj){ 
console.log(key, obj [key]); //  name Mir, age 24
}

for (let n = 1; n <=5; n++ ){ 
    if(n==4) break;
console.log(n); //  
}

for (let n = 1; n <=5; n++ ){ 
    if(n==4) continue;
console.log(n); //  
}

