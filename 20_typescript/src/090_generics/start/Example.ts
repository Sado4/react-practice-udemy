const Example = () => {
  // ジェネリクスとは、型を引数として受け取ることができる関数やクラスのこと

  // const repeatString = (value: string, times: number): string[] => {
  //   return new Array(times).fill(value);
  // };

  // const repeatNum = (value: number, times: number): number[] => {
  //   return new Array(times).fill(value);
  // };
  const repeat = <T, U>(value: T | U, times: number): T | U[] => {
    return new Array(times).fill(value);
  };
  const str = repeat<string, number>(12, 3);
  console.log('str: ', str);
  // const num = repeat(5, 3);
  // console.log('num: ', num);

  // console.log(repeatString('abc', 3));
  // console.log(repeatNum(5, 3));
};

export default Example;
