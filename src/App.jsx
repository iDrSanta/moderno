import headerLogo from './assets/images/header__logo.png';

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
    </div>
  );
}

export default App;
