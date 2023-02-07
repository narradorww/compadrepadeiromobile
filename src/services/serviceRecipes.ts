import apiRecipes from './apiRecipes';
export async function getRecipes() {
  try {
    const response = await apiRecipes.get('/recipes');
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getRecipeById(id: number) {
  try {
    const response = await apiRecipes.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
