import { useTheme } from '../context/ThemeContext';

const THEMES = ['light', 'dark', 'red'];

const Header = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme = (e) => setTheme(e.target.value);

  return (
    <header className={`content-${theme}`}>
      {THEMES.map((color) => {
        return (
          <label key={color}>
            <input
              type="radio"
              name="theme"
              value={color}
              checked={theme === color}
              onChange={changeTheme}
            />
            {color}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
