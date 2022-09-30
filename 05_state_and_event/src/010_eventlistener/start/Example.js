const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました');
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button>クリックしてね</button>
    </>
  );
};

export default Example;
