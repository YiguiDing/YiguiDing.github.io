import { intrepreter } from "./index";
import { createInterface } from "readline/promises";
let readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function test_intrepreter() {
  while (true) {
    let ans = await readline.question(">");
    intrepreter(ans);
  }
}

async function main() {
  test_intrepreter();
}
main();
