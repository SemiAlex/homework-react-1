import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import ThemeContext from './context/ThemeContext';
import {useState} from "react";
import Footer from './components/Footer';
import Profile from './components/Profile';

function App() {
  const [theme, setTheme] = useState('bg-light');
  const [profile, setProfile] = useState({name: '', email: ''})

  return (
    <div className={`m-0-auto ${theme} ${theme === 'bg-light' ? '' : 'text-light'}`}>
      <header className='pt-3'>
        <h3 className='text-center'>Sneakers</h3>
        <div className='container'>
          <Profile profile={profile} setProfile={setProfile} />
        </div>
      </header>
      <ThemeContext.Provider value={{ theme, setTheme, profile }}>
        <div className='container'>
          <Products />
        </div>
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
