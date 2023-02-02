export interface Ingredient {
  name: string;
  quantity: number;
}

export interface Ingredients {
  ingredients: Ingredient[];
}

export interface IRecipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
  description: string;
  image: string;
}
