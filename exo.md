# énoncé

Ecrire une fonction pour générer le message de bienvenue du site oRecipes ("lorem ipsum ...").

- si 0 recette => "Bienvenue sur oRecipes. Reviens bientôt pour découvrir nos recettes"
- si 1 recette => "Bienvenue sur oRecipes, découvre notre recette"
- sinon => "Bienvenue sur oRecipes, découvre nos xxxx recettes"

# A propos des tests unitaires

Etapes de mise en place d'une fonction avec des bonnes pratiques :

- écrire le code de la fonction
- écrire des tests unitaires pour la fonction (vérifier que la fonction fournit le résultat attendu, pour différents cas)
- si on trouve des bugs, on corrige le code
- utiliser la fonction dans l'application (pour le titre)

(.... plus tard ....)

- si on change le code de la fonction, on adapte les tests si besoin (si le comportement de la focntion a changé)
- si on détecte un bug on corrige la fonction et on ajoute un test pour ce cas-là
- régulièrement on relance les tests pour vérifier l'absence de régression. Par exemple en temps réel quand on code, une fois par jour, automatiquement chaque nuit ou chaque fois qu'un commit arrive sur Github (=> intégration continue, CI)

# Etapes pour l'exo

1/ écrire la fonction
2/ réfléchir aux tests unitaires
3/ écrire les tests unitaires
4/ utiliser la fonction pour le titre oRecipes
