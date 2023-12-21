import { Interpreater } from '../Interpreater';
import { Parser } from '../Parser';
import { Tokenizer } from '../Tokenizer';
import { regFuncs } from '../functions';

function testForInterpreater(code: string) {
  let tokenizer = new Tokenizer();
  let parser = new Parser();
  let interpreater = new Interpreater();
  regFuncs(interpreater);

  let tokens = tokenizer.getTokens(code);
  let ast = parser.parse(tokens);

  console.log('源代码:');
  console.log(code);
  console.log('解释器执行结果:');
  interpreater.exec(ast);
  console.log('源代码词法分析结果:');
  console.log(tokens);
  console.log('源代码文法分析结果:');
  console.dir(ast, { depth: null });
}

function main() {
  // 测试解释器
  testForInterpreater(
    `
      def fbnq(def max){
        def a=1,b=1,c;
        while(a<max){
          print(a);
          c = b;
          b = a + b;
          a = c;
        }
      };

      def main(){
        fbnq(200); // 输出200以内斐波那契数列
      };
      main();
    `
  );
}
main();
