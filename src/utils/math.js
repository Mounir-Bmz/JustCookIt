/* eslint-disable import/prefer-default-export */
// ici des fonctions utilitaires mathématiques
export const sum = (a, b) => {
  // j'optimise mon code avec une astuce trouvée sur stackoverflow (mais j'ai pas tout
  // lu, y'avait trop de commentaire)
  // => la somme de nombres négatifs ne marche plus
  // return Math.abs(a) + Math.abs(b);

  return a + b;
};
