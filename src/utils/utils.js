/* eslint-disable import/prefer-default-export */
/**
 * Retourne le prochain id à partir d'un tableau d'objets
 * @param {Object[]} dataArray un tableau d'objets (où chaque objet a 
  une propriété id)
 * @returns le prochain id à partir du tableau fourni
 */

export const getNextId = (dataArray) => {
  if (dataArray.length === 0) {
    return 1;
  }

  // voir le projet todo-list pour explication de l'algorithme
  const idsArray = dataArray.map((item) => item.id);
  const idMax = Math.max(...idsArray);
  const nextId = idMax + 1;
  return nextId;
};

/**
 * Build the welcome message to use as subtitle
 * @param {number} recipesCount Le nombre de recettes
 * @returns the welcome message
 */
export const getSubtitle = (recipesCount) => {
  switch (recipesCount) {
    case 0:
      return 'Bienvenue sur oRecipes. Reviens bientôt pour découvrir nos recettes';
    case 1:
      return 'Bienvenue sur oRecipes, découvre notre recette';

    default:
      return `Bienvenue sur oRecipes, découvre nos ${recipesCount} recettes`;
  }
};
