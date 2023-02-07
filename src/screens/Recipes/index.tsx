import React, {useState} from 'react';
import useRecipe from './../../hooks/useRecipe';
import {FlatList, Text, Image} from 'react-native';
import Recipe from '../../components/Recipe';
import logo from '../../assets/logo.png';
import styles from './styles';

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
    <>
      <Image source={logo} style={styles.image} />

      <FlatList
        data={recipes}
        keyExtractor={recipe => recipe.id.toString()}
        renderItem={({item}) => (
          <Recipe
            name={item.name}
            image={item.image}
            ingredients={item.ingredients}
            description={item.description}
            id={item.id}
          />
        )}
        onRefresh={handleGetRecipes}
        refreshing={loading}
      />
    </>
  );
}
