export default function Number({ hello }) {
  return <h1>{hello}</h1>;
}

export async function getServerSideProps() {
  return {
    props: {
      hello: 'world',
    },
  };
}
