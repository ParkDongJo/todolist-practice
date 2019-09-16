module.exports = {
  extends: [
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'jest'
  ],
  env: {
    'browser': true,
    'jest/globals': true,
  },
}