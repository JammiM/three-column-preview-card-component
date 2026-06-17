/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "media-query-no-invalid": null,
    "selector-max-id": 1,
    "max-nesting-depth": 1,
    "selector-max-compound-selectors": 1,
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
    overrides: [
      {
        files: ["**/*.css"],
        rules: {
          "selector-max-specificity": "1,0,0",
        },
      },
    ],
  },
};
