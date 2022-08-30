import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import ThemeContext from './context/ThemeContext';
import {useState} from "react";
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('bg-light');

  return (
    <div className={`m-0-auto ${theme}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <header className='pt-3'>
          <h3 className={`text-center ${theme === 'bg-light' ? '' : 'text-light'}`}>Sneakers</h3>
        </header>
        <div className='container'>
          <Products />
        </div>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
