import { createContext, useReducer, useContext } from 'react';

const CounterContext = createContext();
const CounterDispatchContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case '+':
        return prev + step;
      case '-':
        return prev - step;
      default:
        throw new Error('不明なactionです。');
    }
  }, 0);

  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

const useCounter = () => useContext(CounterContext);
const useDispatchCounter = () => useContext(CounterDispatchContext);

export { CounterProvider, useCounter, useDispatchCounter };
