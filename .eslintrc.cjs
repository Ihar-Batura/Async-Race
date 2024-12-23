const { configure, presets } = require('eslint-kit');

module.exports = configure({
  presets: [
    presets.typescript({
      // (optional) Project's root
      root: './src',

      // (optional) A path to tsconfig file
      tsconfig: 'tsconfig.json',

      // (optional) Enforce using `type` insead of `interface`
      // Default to `false` in v11, will become `true` in v12, and will be removed in v13
      // ESLint Kit CLI will set `true` on bootstrap
      enforceUsingType: false,
    }),
    presets.prettier({
      semi: false,
      singleQuote: true,
      tabWidth: 2,
      quoteProps: 'consistent',
    }),
  ],
});
