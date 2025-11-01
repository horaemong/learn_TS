const str: string = "hello";
const num: number = 1;
const bool: boolean = false;
const n: null = null;
const sym: symbol = Symbol("sym");
const big: bigint = 100000000n;
let obj: object = { hello: "world" };

function plus(x: number, y: number): number {
  return x + y;
}

console.log(str);
console.log("\n");
console.log(num);
console.log("\n");
console.log(bool);
console.log("\n");
console.log(n);
console.log("\n");
console.log(sym);
console.log("\n");
console.log(big);
console.log("\n");
console.log(obj);
console.log("\n");
console.log(plus(1, 2));
console.log("\n");
