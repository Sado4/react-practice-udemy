import Profile from './components/Profile';

const Example = () => {
  const peoples = [
    { name: 'Geo', age: 18, hobby: ['Sports', 'Music'] },
    { name: 'John', age: 20, hobby: ['Music', 'Movie'] },
    { name: 'Mike', age: 22, hobby: ['Reading', 'dance'] },
  ];
  return (
    <>
      <ul>
        {peoples.map((person) => {
          return (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Example;
