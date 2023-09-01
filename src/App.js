import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { setUser } from './reduxFiles/slices';


const NavBar = () => {
  const user = useSelector(state=>state.user.user);
  const dispatch = useDispatch();

  return(
    <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/posts'}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={'/blog'}>Blog</NavLink>
        </li>
        <li>
          <button onClick={()=> dispatch(setUser())}>{user ? 'Logout': 'Login'}</button>
        </li>
      </ul>
  );
};

function App() {
  const location = useLocation();
  const  shouldRenderHeader = location.pathname !== '/blog';

  return (
    <>
      {shouldRenderHeader && <h1>My App</h1>}
      {shouldRenderHeader && <NavBar/>}
      <Outlet/>
    </>
  );
}

export default App;
