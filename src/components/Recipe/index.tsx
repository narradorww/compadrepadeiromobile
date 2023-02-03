import * as React from 'react';
import {FlatList, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {IRecipe} from '../../Interfaces/interfaces';
import styles from './styles';

const Recipe = ({name, ingredients, description, image}: IRecipe) => (
  <Card style={styles.card}>
    <Card.Title titleVariant="titleLarge" title={name} />
    <Card.Cover source={{uri: `${image}`}} />
    <Card.Content>
      <View style={styles.ingredientsView}>
        <Text style={styles.titles}>Ingredientes</Text>

        <FlatList
          data={ingredients}
          keyExtractor={ingredient => ingredient.ingredientId.toString()}
          renderItem={({item}) => (
            <View style={styles.ingredients}>
              <Text variant="bodyMedium">{item.name}</Text>
              <Text variant="bodyMedium">{item.quantity}g</Text>
            </View>
          )}
        />
      </View>
      <Text style={styles.titles}>Modo de Preparo</Text>
      <Text variant="bodyMedium">{description}</Text>
    </Card.Content>
  </Card>
);

export default Recipe;
