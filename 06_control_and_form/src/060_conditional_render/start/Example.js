import { useState } from 'react';

const Example = () => {
  const animals = ['Dog', 'Cat', null, 'Rat'];

  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalName = animal ?? '';
            const isMatch = animalName.indexOf(filterVal) !== -1;
            console.log(animalName.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            return (
              <li key={animal}>
                {animal ?? 'No name'}
                {animal === 'Dog' && '★'}
              </li>
            );

            // if (animal === 'Dog') {
            //   return <li key={animal}>{animal + '★'}</li>;
            // } else {
            //   return <li key={animal}>{animal}</li>;
            // }
          })}
      </ul>
    </>
  );
};

export default Example;
