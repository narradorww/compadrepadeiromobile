import {StyleSheet} from 'react-native';
import {Ingredient} from '../../Interfaces/interfaces';

export default StyleSheet.create({
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '96%',
    margin: 10,
  },
  titles: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  ingredientsView: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  ingredients: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});
