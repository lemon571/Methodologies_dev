import globals from "globals";


export default [
  {
    files: ["**/*.js"], 
    languageOptions: {
     sourceType: "script"
   },
    plugins: {
      import: importPlugin,
    },
    rules:{
     ...airbnbBase.rules,
      "semi": "error",
      "prefer-const": "warn",
      "no-console": "off",
      "import/extensions": "off",
    }
  }
];
