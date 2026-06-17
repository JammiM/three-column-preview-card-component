/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "media-query-no-invalid": null,
    "selector-max-id": 1,
    "max-nesting-depth": [2, { ignore: ["pseudo-classes"] }],
    "declaration-block-single-line-max-declarations": null,
    "selector-max-compound-selectors": 2,
    "selector-max-specificity": null,
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "no-duplicate-selectors": true,
    "unit-disallowed-list": [
      ["px"],
      {
        ignoreProperties: {
          px: ["border", "box-shadow", "/^--/"],
        },
      },
    ],

    "property-no-unknown": [
      true,
      {
        // Keeps the linter safe if you use modern CSS modules or features
        ignoreProperties: ["composes"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.css"],
      rules: {
        "selector-max-specificity": "0,3,0",
      },
    },
  ],
};
