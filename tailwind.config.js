module.exports = {
  prefix: '',
  purge: {
      enabled: process.env.NODE_ENV === 'production',
      content: [
          './src/**/*.{html,ts}',
      ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
            'primary': '#0073EA',
            'danger': '#FF641C',
            'secondary':'#F0F9FF'
          },
      },
  },
  variants: {
      extend: {
          backgroundColor: ['checked'],
          borderColor: ['checked'],
      },
  },
   plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
  //plugins: [require('tailwind-bootstrap-grid')()],
};
