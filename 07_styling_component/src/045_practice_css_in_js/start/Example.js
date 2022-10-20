import styled from 'styled-components';

const FirstButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: none;
  background-color: pink;
`;

const SecondButton = styled(FirstButton)`
  background-color: red;
  color: white;
`;

const ThirdButton = styled(SecondButton)`
  background-color: ${(p) => (p.dark ? 'black' : 'green')};
`;

const Example = () => {
  return (
    <>
      <FirstButton>ボタン1</FirstButton>
      <SecondButton>ボタン2</SecondButton>
      <ThirdButton>ボタン3</ThirdButton>
      <ThirdButton dark>ボタン3</ThirdButton>
    </>
  );
};

export default Example;
