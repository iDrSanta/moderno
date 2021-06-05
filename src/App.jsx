import headerLogo from './assets/images/header__logo.png';
import SearchIcon from '@material-ui/icons/Search';
import SearchI from './assets/images/search.svg';
import searchBg from './assets/images/search-bg.jpg';

const navMenu = [
  'Home',
  'About',
  'WordPress',
  'Joomla',
  'PSD',
  'Plugins',
  'Components',
  'Pages',
  'Contact',
  'Help',
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="header__top-inner">
              <div className="header__logo">
                <a href="#">
                  <img src={headerLogo} alt="logo" />
                </a>
              </div>
              <div className="header__text">
                <a href="">
                  <span>Need help?</span>
                </a>
                Talk to an expert:
                <a className="header__phone" href="tel:+61383766284">
                  +61 3 8376 6284
                </a>
              </div>
              <div className="header__box">
                <a className="basket" href="#"></a>
                <a href="#" className="header__btn header__btn-login">
                  Login
                </a>
                <a href="#" className="header__btn header__btn-register">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header__menu">
          <div className="container">
            <nav className="menu">
              <ul className="menu__list">
                {navMenu.map((el, index) => (
                  <li key={index}>
                    <a href="#">{el}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className="search" style={{ backgroundImage: `url(${searchBg})` }}>
        <div className="container">
          <div className="search__inner">
            <div className="search__inner-title">Welcome To Foxtar Market Place!</div>
            <div className="search__inner-text">
              Premium WordPress Themes, Web Templates and Many More ...
            </div>
            <div className="search__inner-form">
              <form action="">
                <input type="text" placeholder="Search Your Keywords . . ." required />
                <button type="submit">
                  <img src={SearchI} alt="search" />
                  {/* <SearchIcon color="action" /> */}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
