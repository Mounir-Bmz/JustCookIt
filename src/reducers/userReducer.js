import { CHANGE_LOGIN_FIELD, HANDLE_SUCCESSFUL_LOGIN } from '../actions/user';

// reducer qui gère le tiroir des infos utilisateur
export const initialState = {
  logged: false,
  // contenu du champ email
  email: '',
  // contenu du champ mot de passe
  password: '',
  // pseudo de l'utilisateur (quand il est connecté)
  nickname: '',
  // token JWT (quand l'utilisateur est connecté)
  token: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      /* if (action.identifier === 'email') {
        return {
          ...state,
          email: action.newValue,
        };
      }
      return {
        ...state,
        password: action.newValue,
      }; */

      return {
        ...state,
        // on "calcule" le nom de l'emplacement du state => pour ça il faut mettre
        // des crochets
        // /!\ pour utiliser cette astuce de syntaxe il faut il faut qu'une info
        // du payload de l'action contienne exactement le nom de la propriété
        [action.identifier]: action.newValue,
      };

    case HANDLE_SUCCESSFUL_LOGIN:
      return {
        ...state,
        logged: true,
        nickname: action.nickname,
        token: action.token,
        // sécurité : on efface les identifiants dès qu'on n'en a plus besoin
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default userReducer;
