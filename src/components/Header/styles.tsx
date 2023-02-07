import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#222222',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  button: {
    width: '100%',
  },

  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
