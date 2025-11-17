/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        plan_phone:  "url('/docs/img/phone.png')",
        plan_desktop:  "url('/docs/img/desktop.png')"
      }
    },
  },
  plugins: [],
}

