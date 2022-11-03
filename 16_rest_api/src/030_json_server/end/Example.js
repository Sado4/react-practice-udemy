import { useEffect, useState } from 'react';
import axios from 'axios';

// POINT JSON server とは
// API のモックを手軽に作成できる node.js のライブラリです。
// APIモックとは モックアップのことで、開発環境用の簡易APIのことです。

// JSON server をインストールする
// npm i -D json-server

// json ファイルを用意する

// オブジェクト形式で、パス名をkeyにする
// {
//   "パス名": json形式のデータ
// }

// npx json-server -w src/**/db.json

const Example = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('useEffect');
    //  *axios(async/await)の書き方
    const getUsers = async () => {
      const res = await axios.get('http://localhost:3003/user');
      setUser(res.data);
    };
    getUsers();

    // *フェッチの書き方
    // fetch('http://localhost:3003/user').then((res) => {
    //   res.json().then((data) => {
    //     console.log(data);
    //   });
    // });

    // *axios(then)の書き方
    // axios.get('http://localhost:3003/todo').then((res) => {
    //   console.log(res.data);
    // });
  }, []);

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <ul>
        {user?.map((user) => {
          return (
            <li key={user.id}>
              {user.id}: {user.username}
              <br />
              年齢:{user.age}
              <br />
              趣味:{user.hobbies.join('と')}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Example;
