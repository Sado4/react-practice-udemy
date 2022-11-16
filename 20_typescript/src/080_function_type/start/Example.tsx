const Example = () => {
  // 練習用
  function sum(a: number, b: number = 1): number {
      return a + b;
  }
  sum(1);

  const sum1 = (a: number, b?: number): number | void => {
    if (b) {
      return a + b;
    }
  }
  console.log('sum1: ', sum1(1));

  type sum3 = (a: number, b: number) => number;
  const sum2: sum3 = (a, b) => a + b;
  console.log('sum2: ', sum2(1, 2));
};

export default Example;
