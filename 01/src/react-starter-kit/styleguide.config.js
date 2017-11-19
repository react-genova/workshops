module.exports = {
   sections: [
    {
      name: 'Slides',
      components: 'src/views/Slides/**/components/**/Slide*.js'
    },
    {
      name: 'Slider',
      components: 'src/views/Slider/**/components/**/*.js'
    },
    {
      name: 'Cards',
      components: 'src/views/Slides/**/components/**/Card*.js'
    },
    {
      name: 'Components',
      components: ()=>[
        'src/views/Card/components/Card.js',
        'src/views/Card/components/CardElement.js',
        'src/views/LabelLink/components/LabelLink.js',
        'src/views/LabelTerminal/components/LabelTerminal.js',
      ]
    },
  ],
};