import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { StyledNavigation } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <StyledNavigation>
      <NavLink className="navLink" to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className="navLink" to="/phonebook">
          Phonebook
        </NavLink>
      )}
    </StyledNavigation>
  );
};
export default Navigation;