import { compiler } from "../index";
import { visualizeEscapes } from "../utils";

async function test_compiler() {
  let result = compiler(
    `(
      print
      (
        add
        "hello world!!!" "\n"
        "1+1=" (add 1 1) "\n"
        "2-2=" (sub 2 2) "\n"
        "3*3=" (mut 3 3) "\n"
        "4/4=" (div 4 4) "\n"
      )
    )`
  );
  console.log(visualizeEscapes(result));
}

async function main() {
  test_compiler();
}
main();
