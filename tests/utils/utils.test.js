/* eslint-disable prettier/prettier */

// on importe des outils de vitest
import { expect, test, describe } from 'vitest';

// on importe les morceaux de code à tester
import { getNextId, getSubtitle } from '../../src/utils/utils';

// on pourrait avoir plusieurs fonctions dans le fichier => on regroupe les tests
// en chapitres (pour le compte-rendu)

/*
avec describe on définit "un chapitre" => ça nous permet de structurer le compte-rendu
2 paramètres :
  - un texte qui décrit le bloc de test (qui apparaîtra dans le compte-rendu)
  - une callback qui permet d'exécuter les tests pour ce bloc
*/
describe('function getNextId', () => {
  // ici les différents tests pour la fonction

  /* Extrait du comte-rendu :
  ✓ tests/utils/utils.test.js (1)
    ✓ function getNextId (1)
      ✓ standard case (array not empty)
      ✓ un cas de test
      ✓ un cas de test
    ✓ function kgjjk (1)
      ✓ un cas de test
      ✓ un cas de test
    ✓ function wxvbxfb (1)
      ✓ un cas de test
      ✓ un cas de test
      ✓ un cas de test
      ✓ un cas de test
  */

  test('standard case (array not empty)', () => {
    // on prépare un tableau
    const arrayForTest = [
      {
        id: 8,
        uneInfo: '42',
      },
      {
        id: 5,
        uneInfo: 'coucou',
      },
    ];

    // le résultat avec ce tableau devrait être 9 (on calcule nous-mêmes ce résultat)
    expect(getNextId(arrayForTest)).toBe(9);
  });

  test('with an empty array', () => {
    expect(getNextId([])).toBe(1);
  });
});

// tests ?
// - O recettes
// - 1 recette
// - > 1 recette

// mettre en place un describe pour les tests de la fonction getSubtitle
// dans le describe on aura trois tests (0, 1, > 1), chacune avec une/des assertions
// expect(getSubtitle(/* ici un nombre */)).toBe(/* ici le résultat attendu */)

describe('function getSubtitle', () => {
  test('no recipe', () => {
    expect(getSubtitle(0)).toBe(
      'Bienvenue sur oRecipes. Reviens bientôt pour découvrir nos recettes'
    );
  });

  test('1 recipe', () => {
    expect(getSubtitle(1)).toBe(
      'Bienvenue sur oRecipes, découvre notre recette'
    );
  });

  test('more than 1 recipe', () => {
    expect(getSubtitle(5)).toBe(
      'Bienvenue sur oRecipes, découvre nos 5 recettes'
    );
    expect(getSubtitle(13)).toBe(
      'Bienvenue sur oRecipes, découvre nos 13 recettes'
    );

    /*
    ce qu'a fait Vitest :
    const result = getSubtitle(13);
    if (result === 'Bienvenue sur oRecipes, découvre nos 13 recettes') {
      // écrire pass dans le compte-rendu
    } else {
      // écrire failed dans le compte-rendu
    }
    */
  });
});
