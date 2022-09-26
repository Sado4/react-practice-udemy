import Child from "./components/Child";

const Example = () => {
  const hello = (arg) => `Hello ${arg}`
  const ob = {
    color: 'red',
    nu: 123
  }
  return (
    <>
      <Child
        {...ob}
        num={123}
        fn={hello}
        boo
        obj={{ name: 'Takashi', age: 19 }}
      />
      {/* <Child color="red" dada="dada" /> */}
    </>
  )
};

export default Example;
