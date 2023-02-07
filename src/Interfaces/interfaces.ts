export interface Ingredient {
  ingredientId: string;
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

export interface IInputProps {
  label: string;
  value: string;
  onChangeText: (value: any) => void;
  style?: any;
  error?: boolean;
  messageError?: string;
  secureTextEntry?: boolean;
}

export interface IAlert {
  message: string;
  error: boolean;
  setError: any;
  duration: number;
}
