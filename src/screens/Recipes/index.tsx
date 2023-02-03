import React, {useState} from 'react';
import useRecipe from './../../hooks/useRecipe';
import {FlatList, Text} from 'react-native';
import Recipe from '../../components/Recipe';

export default function Recipes() {
  const {recipes, getRecipesList} = useRecipe();
  const [loading, setLoading] = useState(false);

  const handleGetRecipes = async () => {
    setLoading(true);
    await getRecipesList();
    setLoading(false);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={recipes}
      keyExtractor={recipe => recipe.id.toString()}
      renderItem={({item}) => (
        <Recipe
          name={item.name}
          image={item.image}
          ingredients={item.ingredients}
          description={item.description}
        />
      )}
      onRefresh={handleGetRecipes}
      refreshing={loading}
    />
  );
}
