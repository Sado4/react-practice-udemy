import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('h1が存在するかどうか', () => {
  // render()でコンポーネントをレンダリングする
  render(<Greet />);

  // screenでレンダリングされたコンポーネントを確認する
  // screen.getByText()で、テキストを持つ要素を取得する
  const h1El = screen.getByText('こんにちは');

  // h1Elが存在するかどうかを確認する
  expect(h1El).toBeInTheDocument();
});
