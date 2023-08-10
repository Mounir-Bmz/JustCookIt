# tests

On utilise Vitest https://vitest.dev/ (parce que notre React-modele est basé sur Vite).

Autres outils de tests unitaires : Jest, Mocha, Chai...

La syntaxe des tests unitaires avec Vitest est quasiment identique à celle de Jest (outil de tests unitaires Javascript très populaire).

https://jestjs.io/fr/

Installation : `yarn add -D vitest` (-D c'est comme --dev)

Dépendance de dev, parce que les tests unitaires c'est juste pour les développeurs, pour la mise en place du code.

Les fichiers de tests devront avoir l'extension _.test.js_, on peut les placer à côté des fichiers à tester ou tous dans un même dossier => on a créé un dossier _tests_ à côté de src. On peut créer des dossiers pour avoir la même structure que dans src.

On ajoute dans la partie _scripts_ de package.json :

```
"test": "vitest"
```
