module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "prettier"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // js/ts
    camelcase: ["error", { properties: "never" }],
    "no-console": ["warn", { allow: ["error"] }],
    "no-debugger": "warn",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-return-await": "error",
    "no-var": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "prefer-const": ["warn", { destructuring: "all", ignoreReadBeforeAssign: true }],
    "prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],
    "object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",

    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "vue/valid-v-slot": "off",

    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",

    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],

    // stylistic-issues
    "prefer-exponentiation-operator": "error",

    // ts
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/consistent-type-imports": ["error", { disallowTypeAnnotations: false }],
    "@typescript-eslint/ban-ts-comment": ["off", { "ts-ignore": false }],

    // vue
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "off",
    "vue/multi-word-component-names": "off",
    "vue/prefer-import-from-vue": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],

    // prettier
    "prettier/prettier": "error",
  },
};
