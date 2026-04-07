const nextVitals = require("eslint-config-next/core-web-vitals");

module.exports = [
  ...nextVitals,
  {
    ignores: [".next/**", "out/**", "dist/**", "node_modules/**"],
  },
];
