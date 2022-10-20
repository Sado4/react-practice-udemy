import { useState } from 'react';

import styled from 'styled-components';

// console.log(styled);
// console.dir(styled);

const StyledButton = styled.button`
  margin: auto;
  border-radius: 9999px;
  border: none;
  display: block;
  width: 120px;
  height: 60px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? 'pink' : '')};
`;

const GreenButton = styled(StyledButton)`
  background-color: green;

  &:hover {
    color: red;
  }
`;

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  return (
    <>
      <StyledButton isSelected={isSelected} onClick={clickHandler}>
        ボタン
      </StyledButton>
      <GreenButton isSelected={isSelected} onClick={clickHandler}>
        Greenボタン
      </GreenButton>
      <button
        className={`btn ${isSelected ? 'selected' : ''}`}
        onClick={clickHandler}
      >
        ボタン
      </button>
      <div style={{ textAlign: 'center' }}>
        {isSelected && 'クリックされました。'}
      </div>
    </>
  );
};

export default Example;
