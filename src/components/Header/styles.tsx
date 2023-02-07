import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 120,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#222222',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },

  image: {
    width: 120,
    height: 130,
    marginBottom: 40,
    marginEnd: 20,
  },

  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 40,
  },

  textVoid: {
    color: 'transparent',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 40,
  },
});
