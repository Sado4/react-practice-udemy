import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);
  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value });
  }
  const changeAge = (e) => {
    setPerson({ name: person.name, age: e.target.value });
  }
  const reset = () => {
    setPerson({ name: "", age: "" });
  }
  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <input
        onChange={changeName}
        value={person.name}
        type="text"
      />
      <input
        onChange={changeAge}
        value={person.age}
        type="number"
      />
      <div><button onClick={reset}>リセット</button></div>
    </>
  )
};

export default Example;
