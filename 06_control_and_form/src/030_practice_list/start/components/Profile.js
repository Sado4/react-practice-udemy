const Profile = ({ name, age, hobby }) => {
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>
        <div>Hobby:</div>
        <ul>
          {hobby.map((hob) => {
            return <li key={hob}>{hob}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
