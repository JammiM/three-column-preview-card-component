/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-declaration-strict-value"],
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
    "scale-unlimited/declaration-strict-value": [
      ["box-shadow", "background-color", "color", "background"],
      {
        ignoreValues: ["none", "transparent", "inherit"],
      },
    ],
    "declaration-property-value-allowed-list": {
      ["font-size"]: [
        "/clamp\\(/",
        "/min\\(/",
        "/max\\(/",
        "/calc\\(/",
        "0",
        "auto",
        "inherit",
        "initial",
      ],
      margin: [
        "/clamp\\(/",
        "/min\\(/",
        "/max\\(/",
        "/calc\\(/",
        "0",
        "auto",
        "inherit",
        "initial",
      ],
      padding: [
        "/clamp\\(/",
        "/min\\(/",
        "/max\\(/",
        "/calc\\(/",
        "0",
        "inherit",
        "initial",
      ],
      severity: "warning",
      message:
        "Consider using fluid functions like clamp(), min(), or max() for responsive layouts.",
    },
    "media-feature-name-disallowed-list": [
      ["max-width"],
      {
        message:
          "Use a mobile-first approach with min-width instead of max-width.",
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
