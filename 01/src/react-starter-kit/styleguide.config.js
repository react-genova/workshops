module.exports = {
   sections: [
    {
      name: 'Cards',
      components: 'src/views/Slides/**/components/**/Card*.js'
    },
    {
      name: 'Components',
      components: ()=>[
        'src/views/Card/components/Card.js',
        'src/views/Card/components/CardElement.js',
        'src/views/LabelLink/components/LabelLink.js'
      ]
    },
  ],
};