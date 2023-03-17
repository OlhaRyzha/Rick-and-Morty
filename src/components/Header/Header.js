import { Outlet, useLocation } from 'react-router-dom';
import Logo from 'components/Icons/Logo';
import { StyledNavLink } from './Header.styled';

const Header = () => {
  const location = useLocation();
  const regex = /\d+/;
  const containsNumbers = regex.test(location.pathname);

  return (
    <div className="container">
      {!containsNumbers && (
        <StyledNavLink to="/">
          <Logo />
        </StyledNavLink>
      )}

      <Outlet />
    </div>
  );
};
export default Header;
