// POINT [SG]ダイナミックルーティングの記述方法
import { useRouter } from 'next/router';

export default function Page({ id, date }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }
  return (
    <h3>
      このページは{id}です。{date}
    </h3>
  );
}

// ダイナミックルーティングのパスを指定
// SGでダイナミックルーティングを実装する場合は、
// getStaticPathsでパスを指定する必要がある(ビルド時にHTMLが生成され、決められたパスしかアクセスできないため)
export async function getStaticPaths() {
  console.log('getStaticPaths executed');
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: 'blocking',
  };
}

// paramsでパスの値を受け取り、propsでparamsのidを返す
export async function getStaticProps({ params }) {
  console.log('getStaticProps executed');
  const date = new Date();
  return {
    props: {
      id: params.id,
      date: date.toJSON(),
    },
    // revalidate: 5
  };
}
