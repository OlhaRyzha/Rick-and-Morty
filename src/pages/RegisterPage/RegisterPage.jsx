import {
  Wrapper,
  Background,
  CabbageTop,
} from 'pages/HomePage/HomePage.styled';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/user/userOperations';

import {
  RegisterPageWrapper,
  RegisterForm,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterButton,
  LoginNavLink,
  Regtext,
  Notification,
} from './RegisterPage.styled';
import { useAuth } from 'hook/useAuth';

function RegisterPage() {
  const { errorRegisterMessage } = useAuth();
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(register(user));
  };

  return (
    <Background>
      <CabbageTop>
        <div>
          <Wrapper>
            <div>
              <RegisterPageWrapper>
                <Regtext>Enter your login and password to register</Regtext>
                <RegisterForm onSubmit={handleSubmit}>
                  <RegisterFormLabel>
                    Email:
                    <RegisterFormInput
                      type="text"
                      name="email"
                      placeholder="your@email.com"
                      required
                    />
                    {errorRegisterMessage && (
                      <Notification>{errorRegisterMessage}</Notification>
                    )}
                  </RegisterFormLabel>
                  <RegisterFormLabel>
                    Password:
                    <RegisterFormInput
                      type="password"
                      name="password"
                      placeholder="password"
                      required
                    />
                  </RegisterFormLabel>
                  <RegisterButton path="/expenses" type="submit">
                    Registration
                  </RegisterButton>
                </RegisterForm>
                <LoginNavLink>
                  <NavLink to="/login" style={{ padding: '12px 14px' }}>
                    Log in
                  </NavLink>
                </LoginNavLink>
              </RegisterPageWrapper>
            </div>
          </Wrapper>
        </div>
      </CabbageTop>
    </Background>
  );
}

export default RegisterPage;