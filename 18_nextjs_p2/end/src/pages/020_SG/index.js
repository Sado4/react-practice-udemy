// POINT getStaticPropsでSGを実装
export default function IndexPage({ message }) {
  console.log(message);
  return <h3>SG:{message}</h3>;
}

// getStaticPropsはbuild時にしか実行されない(SGで先にデータを取得しておく)
export async function getStaticProps() {
  console.log('getStaticProps');

  return {
    props: { message: 'From Static Props' },
  };
}
