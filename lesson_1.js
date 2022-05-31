console.log("Hello");

let a = 20;
let b = "30";
let c = 40;


let sum_body = a + +b;
let sum_body_string = String(a + c);


let type1 = typeof(sum_body);
let type2 = typeof(sum_body_string);


console.log("sum_body =", sum_body);
console.log("type_sum_body =", type1);

console.log("sum_body_string =", sum_body_string);
console.log("type_sum_body_string =", type2);