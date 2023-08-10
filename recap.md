# CORS

https://kourou.oclock.io/ressources/fiche-recap/cross-origin-ressource-sharing/

Une erreur du genre `Access to XMLHttpRequest at 'xxxxxx' from origin 'xxxxxx' has been blocked by CORS policy`.

n serveur web n’accepte des requêtes que si elles sont émises par une page ou un script appartenant au domaine dont il a la charge, sauf indication contraire.

    Le standard CORS, défini par HTTP/1.1, est implémenté et automatiquement activé dans la plupart des serveurs et clients web modernes. Seule la version du serveur est véritablement importante : un vieux client web (navigateur, CURL…) ne supportant pas CORS mais dialoguant avec un serveur web supportant CORS ne crée pas de risque de sécurité. L’inverse n’est pas vrai !

=> Filtrer quel(s) client(s) (quels domaines) ont accès au serveur. De base, si on ne configure rien, seul le domaine du server sera autorisé.

Ici notre serveur autorise uniquement http://localhost:8080 à le contacter, mais nous on est sur http://localhost:5173 .

Pour autoriser d'autres domaines, on rajoute des headers.

Exemple d'erreur qui indique le header manquant : `No 'Access-Control-Allow-Origin' header is present on the requested resource.`

Les erreurs de CORS ne peuvent être résolues que côté back-end (ou alors en déployant le front sur un autre domaine qui est autorisé) => le développeur front doit indiquer quelle(s) URL(s) autoriser.

# Return implicite avec fonction fléchée

Fonction fléchée : quand la seule instruction c'est un return on peut omettre le mot return et les accolades.

```js
const Component = ({ a }) => {
  return <div>{a}</div>;
};
```

return implicite :

```js
const Component = ({ a }) => <div>{a}</div>;
```

Si on veut rajouter une instruction en plus du return (par exemple useSelector), il faut passer en return explicite.

Note : ESLint va souligner le code entier du composant tant qu'il n'y a pas encore d'instrucion avant le return.

```js
const Component = ({ a }) => {
  // ici on peut ajouter une instruction
  return <div>{a}</div>;
};
```

# square bracket property accessor

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

```js
let unObjet = { truc: 'toto', a: 5 };

console.log(unObjet.a); // 5
console.log(unObjet['a']); // 5

// la notation avec crochets permet d'utiliser une valeur contenue dans une variable
let propertyName = 'a';

console.log(unObjet.propertyName); // undefined => cherche la propriété 'propertyName' de l'objet

console.log(unObjet[propertyName]); // 5

// et donc on peut utiliser cette notation avec crochets pour la création d'un objet
let anotherObjet = { [propertyName]: 14 };
console.log(anotherObjet); // {a: 14}

propertyName = 'machin';
let anotherObjet2 = { [propertyName]: 14 };
console.log(anotherObjet2); // {machin: 14}
```

Pour nos actions avec payload :

```js
const action = { identifier: 'email' };

let newState = { [action.identifier]: 'toto' };
```

Résultat newState :

```js
{
    email: toto,
}
```

```js
const action = { identifier: 'password' };

let newState = { [action.identifier]: 'toto' };
```

Résultat newState :

```js
{
    password: toto,
}
```
