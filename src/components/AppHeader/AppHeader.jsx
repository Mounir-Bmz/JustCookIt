import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/logo.png';

import LoginForm from '../LoginForm/LoginForm';

import './style.scss';
import { changeLoginField, submitLogin } from '../../actions/user';

const AppHeader = () => {
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const isLogged = useSelector((state) => state.user.logged);
  const nickname = useSelector((state) => state.user.nickname);

  const dispatch = useDispatch();

  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Logo JustCookIt" />
      <LoginForm
        email={emailValue}
        password={passwordValue}
        changeField={(newValue, identifier) => {
          // console.log(
          //   `changeField: newValue=${newValue}, identifier=${identifier}`
          // );
          const action = changeLoginField(newValue, identifier);
          dispatch(action);
        }}
        handleLogin={() => {
          // console.log('handleLogin');
          // ici le traitement à appliquer quand on soumet le formulaire
          dispatch(submitLogin());
        }}
        handleLogout={() => {
          console.log('handleLogout');
        }}
        isLogged={isLogged}
        loggedMessage={`Bienvenue ${nickname}`}
      />
    </header>
  );
};

export default AppHeader;
