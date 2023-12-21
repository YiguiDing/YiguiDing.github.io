import { Interpreater } from './Interpreater';
import { Parser } from './Parser';
import { Tokenizer } from './Tokenizer';
import { regFuncs } from './functions';
import { createInterface } from 'readline/promises';
let readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function exec(code: string) {
  let tokenizer = new Tokenizer();
  let parser = new Parser();
  let interpreater = new Interpreater();
  regFuncs(interpreater);
  let tokens = tokenizer.getTokens(code);
  console.log(tokens);
  let ast = parser.parse(tokens);
  console.dir(ast, { depth: null });
  interpreater.exec(ast);
}

async function main() {
  let tokenizer = new Tokenizer();
  let parser = new Parser();
  let interpreater = new Interpreater();
  regFuncs(interpreater);
  while (true) {
    let lines = [];
    let line = await readline.question('> ');
    while (line != 'EOF') {
      lines.push(line);
      line = await readline.question('> ');
    }
    let code = lines.join('\n');
    console.log(code);
    let tokens = tokenizer.getTokens(code);
    console.log(tokens);
    let ast = parser.parse(tokens);
    console.dir(ast, { depth: null });
    try {
      interpreater.exec(ast);
    } catch (error) {
      console.debug(error);
    }
  }
}
main();
