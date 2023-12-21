import { Interpreater } from './Interpreater';

export function regFuncs(interpreater: Interpreater) {
  interpreater.registerFun('print', function (args: any[]) {
    console.log(...args);
  });
  interpreater.registerFun('printStack', function (args: any[]) {
    console.log('ctxIdx:');
    console.dir(interpreater.ctxIdx, { depth: null });
    console.log('ctxStack:');
    console.dir(interpreater.ctxStack, { depth: null });
  });
}
