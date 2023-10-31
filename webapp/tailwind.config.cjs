const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
        colors: {
            'fontColor': '#f0ede5',
            'accentLight': '#bfdbfe',
            /*--accentDark: #1561bf;*/
            'backgroundDark': '#2E73DC',
            'backgroundLight': '#4C86DF'
        }
    },
  },

  plugins: [],
};

module.exports = config;
