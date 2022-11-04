import { useRouter } from 'next/router';

export default function Multipage() {
  const router = useRouter();
  const step = router.query.step ?? 0;

  const goToStep = (_step, asPath) => {
    router.push(`/08_multipage?step=${_step}`, asPath);
  };

  return (
    <div>
      {step == 0 && (
        <>
          <h1>Step {step}</h1>
          <button onClick={() => goToStep(1, '/personal')}>Next Step</button>
        </>
      )}
      {step == 1 && (
        <>
          <h1>Step {step}</h1>
          <button onClick={() => goToStep(2, '/confirm')}>Next Step</button>
        </>
      )}
      {step == 2 && (
        <>
          <h1>Step {step}</h1>
          <button onClick={() => goToStep(0, '08_multipage')}>Next Step</button>
        </>
      )}
    </div>
  );
}
