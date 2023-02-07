import React, {useState} from 'react';
import {FlatList, Image, View, Text} from 'react-native';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import logo from '../../assets/logo.png';
import styles from './styles';
import useRecipes from '../../hooks/useRecipes';

export default function ListOfRecipes({navigation}) {
  const {recipes, getRecipesList} = useRecipes();
  const [loading, setLoading] = useState(false);

  const handleGetRecipes = async () => {
    setLoading(true);
    await getRecipesList();
    setLoading(false);
  };

  const handleRecipe = id => {
    navigation.navigate('Recipes', {id: id});
  };

  if (loading) {
    return (
      <View>
        <Loader />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />

      <Text style={styles.text}> Receitas </Text>

      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: '100%'}}
        data={recipes}
        keyExtractor={recipe => recipe.id.toString()}
        renderItem={({item}) => (
          <Button
            onPress={() => {
              handleRecipe(`${item.id}`);
            }}>
            {item.name}
          </Button>
        )}
        onRefresh={handleGetRecipes}
        refreshing={loading}
      />
    </View>
  );
}
