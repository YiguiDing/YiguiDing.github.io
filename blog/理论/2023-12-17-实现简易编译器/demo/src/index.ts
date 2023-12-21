import { Parser } from "./Parser";
import { interpreater } from "./interpreater";

function main(argv: string[]) {
  let [exec, path, code] = argv;
  let parser = new Parser();
  let ast = parser.parse(code);
  console.dir(ast, { depth: null });
  let result = interpreater(ast);
  console.log(result);
}

main(process.argv);
