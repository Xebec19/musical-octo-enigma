import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions, authActions } from '../store';
const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const handleLogout = () => {
    console.log("Fired");
    dispatch(authActions.logout());
  }
  const handleLogin = () => {
    console.log("Fired");
    console.log({auth});
    dispatch(authActions.login());
    console.log({auth});
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            { auth.isAuthenticated && <button onClick={handleLogout}>Logout</button> }
            { !auth.isAuthenticated && <button onClick={handleLogin}>Login</button> }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
