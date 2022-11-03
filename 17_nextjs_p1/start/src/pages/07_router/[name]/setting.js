import { useRouter } from 'next/router';

// useRouterと、getServerSidePropsのqueryは動的なルーターのパラメーターおよび、クエリパラメーターを取得できる。

export default function Setting({ query }) {
  const router = useRouter();
  const clickHandler = () => {
    router.reload('/', '/dada');
  };

  return (
    <>
      <h1>{router.query.name}/setting!</h1>
      <button onClick={clickHandler}>アクションによる画面遷移</button>
    </>
  );
}

export async function getServerSideProps({ query }) {
  // const { name } = context.query;
  console.log(query);
  return {
    props: {
      query,
    },
  };
}
