module.exports = {
  extends: ['@choosemycar/config/eslint-preset'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
}
