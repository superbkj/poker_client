module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    tsconfigRootDir: __dirname, // root directory for relative TSConfig paths specified in the project option
    project: './tsconfig.json', // path to your project's tsconfig.json
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/no-misused-promises': [
      "error",
      {
        checksVoidReturn: false
      }
    ]
  },
  ignorePatterns: [
    'vite.config.ts'
  ]
}
