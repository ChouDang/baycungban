module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
      })
    },

  },
  plugins: [],
}