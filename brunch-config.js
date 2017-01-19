module.exports = {

  paths: {
    public: 'public',
    watched: ['src']
  },

  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^src\/js/
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css' : /^src/
      }
    }
  },

  plugins: {
    babel: {presets: ['es2015']}
  }

};
