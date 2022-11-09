/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "gray-0": "#F9F8FA",
        "gray-1": "#E3E3E3",
        "blue-0": "#CDDCF2",
        "blue-1": "#285CB2",
        "blue-2": "#203C6E",
        "white": "#FFFFFF",
        "green-0": "#00D050",
        "green-1": "#3BA380",
        "yellow-0": "#FDE07F",
        "red-0": "#FD7F7F",
        "red-1": "#E32B2B"
      },
      borderColor: {
        "gray-0": "#F9F8FA",
        "gray-1": "#E3E3E3",
        "blue-0": "#CDDCF2",
        "blue-1": "#285CB2",
        "blue-2": "#203C6E",
        "white": "#FFFFFF",
        "green-0": "#00D050",
        "yellow-0": "#FDE07F",
        "red-0": "#FD7F7F"
      },
      boxShadow: {

      },
      fontFamily: {
        sans: ['Montserrat']
      },
      fontSize: {
        "h1": "56px",
        "h2": "40px",
        "h3": "32px",
        "h4": "24px",
        "paragraph": "16px",
        "small": "12.8px"
      },
      textColor: {
       "heading": "#203C6E",
        "body": "#18161c",
        "error": "#E32B2B"
      }
    },
  },
  plugins: [],
};
