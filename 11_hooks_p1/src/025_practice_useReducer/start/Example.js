import { useReducer } from 'react';

const CALC_OPTIONS = ['add', 'minus', 'divide', 'multiply'];

const reducer = (prev, { type, payload }) => {
  // console.log(prev);
  switch (type) {
    case 'add':
      return { ...prev, result: prev.a + prev.b };
    case 'minus':
      return { ...prev, result: prev.a - prev.b };
    case 'divide':
      return { ...prev, result: prev.a / prev.b };
    case 'multiply':
      return { ...prev, result: prev.a * prev.b };
    case 'numChange':
      return { ...prev, [payload.name]: payload.value };
    default:
      throw new Error('不明なactionです。');
  }
};

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({ type: e.target.value });
  };

  const numChangeHandler = (e) => {
    // console.log(e.target.name);
    dispatch({
      type: 'numChange',
      payload: {
        name: e.target.name,
        value: Number(e.target.value),
      },
    });
  };

  return (
    <>
      <div>
        a:
        <input
          type="number"
          name="a"
          value={state.a}
          onChange={numChangeHandler}
        />
      </div>
      <div>
        b:
        <input
          type="number"
          name="b"
          value={state.b}
          onChange={numChangeHandler}
        />
      </div>
      <select onChange={calculate}>
        {CALC_OPTIONS.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <h3>結果：{state.result}</h3>
    </>
  );
};

export default Example;
