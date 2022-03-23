import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="nav-header">
      <div className="nav-logo">
        <h2>RARE KICKS</h2>
      </div>
      <div className="search-container">
        <i className="fas fa-search"></i>
        <input type="search" placeholder="Search for product" />
      </div>
      <div className="nav-icons">
        <div className="sign-in">
          <p>Sign in</p>
        </div>
        <div className="heart-badge">
          <i className="fas fa-heart fa-2x"></i>
          <div className="notification-badge flex-row">
            <span>2</span>
          </div>
        </div>
        <div className="heart-badge">
          <i className="fas fa-shopping-cart fa-2x"></i>
          <div className="notification-badge flex-row">
            <span>4</span>
          </div>
        </div>
        <div className="account">
          <a className="account-avatar">
            <i className="fas fa-user-circle fa-2x"></i>
          </a>
        </div>
      </div>
    </header>
  );
};
export { Navbar };
