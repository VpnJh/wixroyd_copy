module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,vue}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"]
  },
  theme: {
    extend: {
      "custom-chat-bg": "rgb(42, 55, 109)"
    }
  }
};
