module.exports = {
  'plugins': {
    'postcss-import': {},
    'postcss-url': {},
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': { 
      'rootValue': 32,
      'propList': ['*']
    }
  }
}
