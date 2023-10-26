/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-strongly-recommended", "eslint:recommended"],
  rules: {
    "semi": [1, "never"],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 5,
      },      
      "multiline": {
        "max": 5,
      },
    }],
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore",
    }],
  },
  env: {
    "vue/setup-compiler-macros": true,
  },
}
