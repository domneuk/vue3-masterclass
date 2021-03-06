module.exports = {
  extends: [
    "plugin:vue/vue3-essential",
    '@vue/airbnb',
    'airbnb',
    'prettier'
  ],
  plugins: ['prettier'],
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};