import { NavLink } from 'react-router-dom';
import { StyledAuthMenu } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <StyledAuthMenu>
      <NavLink className="authLink" to="/register">
        Register
      </NavLink>
      <NavLink className="authLink" to="/login">
        Log In
      </NavLink>
    </StyledAuthMenu>
  );
};

export default AuthNav;