const Example = () => {
  // 配列
  const arr1: number[] = [1, 2, 3];
  const arr2: Array<number> = [1, 2, 3];
  const arr3: (number | string)[] = [1, 2, 3, "4"];
  const arr4: Array<number | string> = [1, 2, 3, "4"];
  const arr5: string[] = ["aaa", "dada", 'fafa'];

  // オブジェクト
  type Person = { name: string; age?: number }
  const obj1: Person = {
    name: "aaa",
    // age: 20,
  }
  obj1.name = "bbb";

  // オブジェクトの配列
  const objArr1: Array<Person> = [
    { name: "aaa", age: 20 },
    { name: "bbb" },
  ]
  objArr1[1].name = "ccc";
};

export default Example;
