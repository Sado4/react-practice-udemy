import { useState } from 'react';

const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  const [text, settext] = useState('');
  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          settext(e.target.value);
        }}
      />
      <ul>
        {animals
          .filter((animal) => animal.indexOf(text) !== -1)
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;
