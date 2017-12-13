module.exports = {
   sections: [
    {
      name: 'Components',
      components: 'src/views/**/components/**/*.js'
    },
    {
      name: 'Containers',
      components: 'src/views/**/containers/**/*.js'
    }
  ],
  require: [
    'semantic-ui-css/semantic.min.css'
  ]
};