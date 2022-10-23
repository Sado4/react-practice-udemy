import { createContext, useState } from 'react';

import Child from './components/Child';
import OtherChild from './components/OtherChild';

// providerが見つからない場合のデフォルト値
// ※今回は全コンポーネントをproviderで囲っているので、デフォルト値は使われない
export const MyContext = createContext();

const Example = () => {
  const [value, setValue] = useState(0);
  return (
    // stateは親コンポーネントで管理する
    // valueからuseContextを使って値を取得する
    // ※Providerで囲んだchildとotherChild側からuseContextを使って値を取得できるようになる
    <MyContext.Provider value={[value, setValue]}>
      <Child />
      <OtherChild />
    </MyContext.Provider>
  );
};

export default Example;
