import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/logo.png';

import LoginForm from '../LoginForm/LoginForm';

/* Plan d'action pour récupérer les recettes  préférées de l'utilisateur
x quand on est authentifié avec succès, envoyer une requete vers
http://localhost:3001/favorites , en fournissant le token
x traiter la réponse => enregistrer dans le state
- (bonus) utiliser les recettes préférées :
  - ajouter une page qui affiche uniquement les recettes préférées (le lien devra être
    visible seulement si on a des recettes préférées dans le state)
  - sur la page d'accueil, mettre en valeur les recettes préférées (icône étoile, encadrer
    en couleur, ...) cf détails

Détails : il faudrait qu'on mette en place un affichage spécial pour Card, et quand on
affiche une recette avec Card il faut pouvoir déterminer si cette recette fait partie des
préférées.
Pour ça, on pourrait extraire les id des recettes préférées (map) : [12345, 58]
Et on utiliserait contains sur ce tableau avec l'id de la recette
*/

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
      <img src={logo} className="header-logo" alt="Logo oRecipes" />
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
          // TODO effacer dans le state nickname, token et mettre logged à false
          // => dispatch une action
          // pas la peine de prévenir le serveur (contrairement au mécanisme de
          // session) car le serveur n'a pas stocké le JWT
        }}
        isLogged={isLogged}
        loggedMessage={`Bienvenue ${nickname}`}
      />
    </header>
  );
};

// TODO pour le message de bienvenue, ajouter le login de l'utilisateur

export default AppHeader;
