module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  //adicionei esse codigo
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
