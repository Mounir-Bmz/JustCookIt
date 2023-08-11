/* eslint-disable prettier/prettier */

// on importe des outils de vitest
import { expect, test } from 'vitest';

// on importe le morceau de code à tester
import { sum } from '../../src/utils/math';

// on organise pour avoir un compte-rendu où on s'y retrouve : test() a 2 paramètres :
// - texte qui apparaitra dans le compte-rendu
// - callback à appliquer pour vérifier ce cas
test('standard case', () => {
  // assertion : vérifier que quand on appelle la fonction sum avec 1 et 3, le
  // résultat est bien 3
  // expect(/* code à appliquer */).comparateur(/* résultat attendu */)
  expect(sum(1, 2)).toBe(3);
  // comparateur toBe : vérifier si c'est strictement égal

  // on peut tester avec plein de possibilités (rapide à écrire mais message de
  // compte-rendu pas précis)
  expect(sum(5, -3.5)).toBe(1.5);
});

/* compte-rendu avec assertion OK :
 ✓ tests/utils/math.test.js (1)
   ✓ adds 1 + 2 to equal 3
*/

/* compte-rendu avec assertion qui n'a pas donné le résultat attendu :
 ❯ tests/utils/math.test.js (1)
   × adds 1 + 2 to equal 3

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  tests/utils/math.test.js > adds 1 + 2 to equal 3
AssertionError: expected -1 to be 3 // Object.is equality

- Expected
+ Received

- 3
+ -1
*/

/* Autres tests unitaires qu'on pourrait faire sur la fonction sum ?
- vérifier que ça marche avec les nombres négatifs
=> faisable en tests unitaires
- Nb positifs - Nb positif + négatif - Nombre + 0 - Nombre décimaux - a et b identiques
=> faisables en tests unitaires, et plein d'autres aussi, mais on se limitera, et
si par la suite on rencontre un bug sur la fonction alors on ajoutera le test pour ce cas
- paramètre String dans la somme (=> si un paramètre n'est pas un nombre)
exemple 1 : sum('toto', 14) => mauvais cas d'utilisation de la fonction, compliqué de
prévoir le résultat attendu.
MAIS sum('2', 3) ça peut être un cas d'utilisation pertinent selon ce que fait notre
application => alors on écrit le test unitaire, sinon non
- Test avec des objet pour voir si ça effectue une conversion bien faite avant d'executer l'addition
=> ça dépasse le cadre d'utilisation de notre fonction
- Tester la vitesse d'exécution (la performance)
=> tests de performance, pas test unitaire
*/

// vérifier que ça marche avec les nombrs négatifs
test('works with negative numbers', () => {
  // on peut écrire plusieurs assertions pour le cas de test
  expect(sum(-2, -5)).toBe(-7);
  expect(sum(4, -1)).toBe(3);
});
