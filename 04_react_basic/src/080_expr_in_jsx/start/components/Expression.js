import "./Expression.css";

const Expression = () => {
  const name = 'Expression';
  const array = [1, 2, 3, 4, 5];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>JSX</h3>;
  const obj = { obj: "obg" };
  const bool = false;
  const num = true;

  console.log(num);
  return (
    <div className={name.toLowerCase()}>
      <h3>Hello {name}</h3>
      <h3>{array}</h3>
      <h3>{hello('Hello')}</h3>
      {jsx}
      <h3>{obj.obj}</h3>
      <h3>{bool}</h3>
    </div>
    
  )
}

export default Expression;
