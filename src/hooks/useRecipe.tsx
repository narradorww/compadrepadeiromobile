import {useEffect, useState} from 'react';
import {getRecipes} from '../services/serviceRecipes';

interface RecipeHook {
  recipes: any[];
  getRecipesList: () => Promise<void>;
}

export default function useRecipe() {
  const [recipes, setRecipes] = useState([]);

  const getRecipesList = async () => {
    try {
      const response = await getRecipes();
      console.log('response.data', response);
      setRecipes(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipesList();
  }, []);

  return {recipes, getRecipesList} as RecipeHook;
}
