import { tokenizer } from "./tokenizer";
import { parser } from "./parser";
import { transformer } from "./transformer";
import { codeGenerator } from "./codeGenerator";
export function compiler(input: string) {
  let tokens = tokenizer(input);
  let ast = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);
  return output;
}