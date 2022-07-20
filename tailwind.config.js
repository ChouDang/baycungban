module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {

      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/img/home/bg.png')",
        "vietnam-icon": "url('/src/assets/img/home/vietnam-icon.png')",
        "usa-icon": "url('/src/assets/img/home/usa-icon.png')",
        "phone-icon": "url('/src/assets/img/home/phone-icon.png')",
        "email-icon": "url('/src/assets/img/home/email-icon.png')",
        "facebook-icon": "url('/src/assets/img/home/facebook-icon.png')",
        "instagram-icon": "url('/src/assets/img/home/instagram-icon.png')",
        "vector-icon": "url('/src/assets/img/home/Vector-icon.png')",
        "calendar-icon": "url('/src/assets/img/home/calendar-icon.png')",
        "arrow-icon": "url('/src/assets/img/home/Frame-arrowicon.png')",
        "s-icon": "url('/src/assets/img/list/search-icon.png')",
        "bamboo-icon": "url('/src/assets/img/list/bammo-icon-logo.png')",
        "dad-icon": "url('/src/assets/img/list/dad.png')",
        "bag-icon": "url('/src/assets/img/list/bag-icon.png')",
        "cutlery-icon": "url('/src/assets/img/list/cutlery-icon.png')",
      })
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}