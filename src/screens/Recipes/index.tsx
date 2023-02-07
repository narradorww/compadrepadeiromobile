import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import Recipe from '../../components/Recipe';
import styles from './styles';
import {getRecipeById} from '../../services/serviceRecipes';

export default function Recipes({route}) {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});
  const {id} = route.params;

  useEffect(() => {
    async function loadRecipe() {
      setLoading(true);
      const response = await getRecipeById(id);
      setRecipe(response);
      setLoading(false);
    }
    loadRecipe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <Loader />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header back logout />
      </View>

      <ScrollView>
        <Recipe
          name={recipe.name}
          image={recipe.image}
          ingredients={recipe.ingredients}
          description={recipe.description}
          id={recipe.id}
        />
      </ScrollView>
    </View>
  );
}
