# Challenge à la carte :

- terminer le challenge login
- écrire une fonction et les tests associés (éventuellement en méthodologie TDD)
  => comme pour la fonction getSubtitle, et on peut tenter de mettre en place getSubtitle en méthodologie TDD

On a un bug : pas possible d'afficher le détail d'une recette si on n'est pas passé d'abord par la page d'accueil (copier-coller l'URL dans un nouvel onglet ou F5).

- essayer de comprendre le bug
- (bonus) corriger le bug. Le loader pendant l'attente de la réponse est une première piste...

## getSubtitle en méthodologie TDD

Véritable TDD :

- on crée un fichier de test, avec un premier test "la fonction existe" (étape à zapper parce qu'on ne connaît pas la syntaxe)
- on met en place la fonction (sans instructions dedans)
- option : refactoring
- on écrit un test, par exemple le cas de "1 recette"
- on ajoute le cas "1 recette" dans la fonction
- option : refactoring
- on écrit un test, par exemple le cas de "0 recette"
- on ajoute le cas "0 recette" dans la fonction
- option : refactoring
- on écrit un test, par exemple le cas de "> 1 recette"
- on ajoute le cas "> 1 recette" dans la fonction
