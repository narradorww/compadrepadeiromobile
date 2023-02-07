import {useEffect, useState} from 'react';
import {getRecipeById} from '../services/serviceRecipes';

interface RecipeHook {
  recipe: any;
  getRecipe: () => Promise<void>;
  id: string;
}

export default function useRecipes({id}: RecipeHook) {
  const [recipe, setRecipes] = useState([]);

  const getRecipe = async () => {
    try {
      const response = await getRecipeById(id);
      console.log('response.data', response);
      setRecipes(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return {recipe, getRecipe} as RecipeHook;
}
