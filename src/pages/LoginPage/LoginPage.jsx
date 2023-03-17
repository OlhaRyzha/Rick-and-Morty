import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from 'redux/user/userOperations';
import { GoogleLogin } from 'components/LoginRegister/GoogleLogin/GoogleLogin';
import { LoginRegisterText } from 'components/LoginRegister/LoginRegisterText/LoginRegisterText';

import {
  LoginPageWrapper,
  LoginForm,
  LoginFormLabel,
  LoginFormInput,
  LoginButton,
  RegisterNavLink,
  Background,
  Notification,
} from './LoginPage.styled';
import { Wrapper, CabbageTop } from 'pages/HomePage/HomePage.styled';

import { useAuth } from 'hook/useAuth';

function LoginPage() {
  let { errorLoginMessage } = useAuth();

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(login(user));
  };

  let errorType = null;
  if (errorLoginMessage) {
    if (errorLoginMessage.indexOf('email doesn') !== -1) {
      errorType = 'email';
    } else if (errorLoginMessage.indexOf('Password') !== -1) {
      errorType = 'password';
    }
  }

  return (
    <Background>
      <CabbageTop>
        <div>
          <Wrapper>
            <div>
              <LoginPageWrapper className="animate__animated animate__flip">
                <GoogleLogin />

                <LoginRegisterText />
                <LoginForm onSubmit={handleSubmit}>
                  <LoginFormLabel>
                    Email:
                    <LoginFormInput
                      type="text"
                      name="email"
                      placeholder="your@mail.com"
                      required
                    />
                  </LoginFormLabel>
                  {errorLoginMessage && errorType === 'email' && (
                    <Notification>{errorLoginMessage}</Notification>
                  )}
                  <LoginFormLabel>
                    Password:
                    <LoginFormInput
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                    />
                  </LoginFormLabel>
                  {errorLoginMessage && errorType === 'password' && (
                    <Notification>{errorLoginMessage}</Notification>
                  )}
                  <LoginButton type="submit">Log in</LoginButton>
                </LoginForm>
                <RegisterNavLink>
                  <NavLink to="/register" style={{ padding: '12px 14px' }}>
                    Registration
                  </NavLink>
                </RegisterNavLink>
              </LoginPageWrapper>
            </div>
          </Wrapper>
        </div>
      </CabbageTop>
    </Background>
  );
}

export default LoginPage;