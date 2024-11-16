module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./index.html"],
  plugins: [require("daisyui")],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ["light"] // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  },
  darkMode: ["selector"]
};
