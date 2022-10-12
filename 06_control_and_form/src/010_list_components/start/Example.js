const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimal = animals.map((animal) => <li>Hello, {animal}</li>);
  return (
    <>
      <h3>配列の操作</h3>
      <ul>{animalList}</ul>
      <ul>{helloAnimal}</ul>
    </>
  );
};

export default Example;
