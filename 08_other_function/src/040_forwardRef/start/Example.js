import { useRef, forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" />;
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref} />
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
