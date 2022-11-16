const Example = () => {
  // 練習用
  // ユニオン型
  let strOrNum: string | number | boolean = 'Hello';
  strOrNum = 123;
  strOrNum = true;
  console.log('strOrNum: ', strOrNum);

  type DayOfWeek =
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday'
    | 'December'
    | 'January'
    | 'February'
  
  const day: DayOfWeek = 'Monday';


  // interfaceとtypeの違い
  // interfaceはオブジェクトの型を定義するのに使う

  // typeはオブジェクトの型を定義するのに使う
  // ただし、typeはオブジェクトの型以外にも使える
  // 例えば、typeはunion型を定義するのに使える
  // また、typeはintersection型を定義するのに使える
  // また、typeはtypeofを使って型を定義するのに使える
};

export default Example;
