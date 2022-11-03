import { lazy, startTransition, Suspense, useState } from 'react';
// import ComponentA from './components/ComponentA';

const LazyComponentA = lazy(() => import('./components/ComponentA'));
const LazyComponentB = lazy(() => import('./components/ComponentB'));
const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          startTransition(() => {
            setCompA((prev) => !prev);
          });
        }}
      >
        ComponentA
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {compA ? <LazyComponentA /> : <LazyComponentB />}
      </Suspense>
    </>
  );
};

export default Example;
