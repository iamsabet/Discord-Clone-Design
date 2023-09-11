export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        background : {
          dark:"#111214",
          light:"#DCDCDC"
        },
        indigo: {
          100: "#dee0fc",
          200: "#bcc1fa",
          300: "#9ba3f7",
          400: "#7984f5",
          500: "#5865f2",
          600: "#4651c2",
          700: "#353d91",
          800: "#232861",
          900: "#121430"
        },
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        green: {
          100: "#d3edde",
          200: "#a7dbbd",
          300: "#7bc99b",
          400: "#4fb77a",
          500: "#23a559",
          600: "#1c8447",
          700: "#156335",
          800: "#0e4224",
          900: "#072112"
        },
        // green:
        // green: {
        //   100: "#cdeae1",
        //   200: "#9bd5c3",
        //   300: "#69c0a5",
        //   400: "#37ab87",
        //   500: "#059669",
        //   600: "#047854",
        //   700: "#035a3f",
        //   800: "#023c2a",
        //   900: "#011e15"
        // },
       
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
}

