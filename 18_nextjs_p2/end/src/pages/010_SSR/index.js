// POINT [SSR]とgetServerSideProps
import { useEffect, useState } from 'react';

// export default function SSR({message}) {
// 初初期表示のときは、SSRが実行される
// 画面遷移時はCSRで表示される
export default function SSR({ message }) {
  console.log('hello');
  console.log(message);

  // windowはブラウザ上(クライアント側)でしか使えない(SSR(サーバー側(Node.js))では使えない)
  //   window.document.title = 'SSR';
  // console.log(message)

  // useEffectはCSR(クライアント側)でしか実行されない
  useEffect(() => {
    console.log('useEffect');
    window.localStorage.setItem('key', 'value');
    document.cookie = 'val=0; path=/;';
  }, []);

  const [state, setState] = useState('bye');
  const val = 0;
  return (
    <>
      <h3>SSR</h3>
      <h3>{state}</h3>
    </>
  );
}

export async function getServerSideProps(context) {
  const { cookie } = context.req.headers;
  console.log('cookie', cookie);
  console.log('getServerSideProps is executed');
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
    props: { message: 'From Server Side Props' },
  };
}
