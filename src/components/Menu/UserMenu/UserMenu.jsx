import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { StyledUserMenu } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);

  return (
    <StyledUserMenu>
      <p>Hello, {userName}</p>
      <button
        className="logoutBtn"
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </StyledUserMenu>
  );
};
export default UserMenu;