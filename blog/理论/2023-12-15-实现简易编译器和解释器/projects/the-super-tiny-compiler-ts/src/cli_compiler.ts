import { compiler } from "./index";
import { createInterface } from "readline/promises";
let readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function test_compiler() {
  while (true) {
    let ans = await readline.question(">");
    let result = compiler(ans);
    console.log(result);
  }
}

async function main() {
  test_compiler();
}
main();
