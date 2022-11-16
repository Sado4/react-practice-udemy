const Example = () => {
  // 練習用
  // プリミティブ型
  let str: string = 'Hello';
  str = 'World';
  console.log('str: ', str);
  
  let num: number = 1;
  num = 2;
  console.log('num: ', num);

  let bignum: bigint = 100n;
  bignum = 200n;
  console.log('bignum: ', bignum);

  let bool: boolean = true;
  bool = false;
  console.log('bool: ', bool);

  let nullish: null = null;
  let undef: undefined = undefined;

  // リテラル型
  let trueVal: true = true;
  let num123: 123 = 123;
};

export default Example;
