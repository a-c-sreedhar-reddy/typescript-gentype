/* TypeScript file generated from Test.res by genType. */
/* eslint-disable import/first */


import {divide as divideNotChecked} from './Math';

// @ts-ignore: Implicit any on import
import * as Curry__Es6Import from 'rescript/lib/es6/curry.js';
const Curry: any = Curry__Es6Import;

// In case of type error, check the type of 'divide' in 'Test.re' and './Math'.
export const divideTypeChecked: (_1:number, _2:number) => number = divideNotChecked;

// Export 'divide' early to allow circular import from the '.bs.js' file.
export const divide: unknown = divideTypeChecked as (_1:number, _2:number) => number;

// tslint:disable-next-line:no-var-requires
const TestBS = require('./Test.bs');

export const add: (a:number, b:number) => number = function (Arg1: any, Arg2: any) {
  const result = Curry._2(TestBS.add, Arg1, Arg2);
  return result
};
