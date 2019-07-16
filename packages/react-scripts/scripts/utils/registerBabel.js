module.exports.registerBabel = function() {
  require('@babel/register')({
    // eslint-disable-line
    presets: [
      [
        '@babel/env',
        {
          targets: {
            node: true,
          },
          useBuiltIns: 'usage',
        },
      ],
    ],
    plugins: ['@babel/transform-runtime'],

    // plugins: [require.resolve('babel-plugin-add-module-exports'), require.resolve('@babel/plugin-transform-modules-commonjs')],
    // only,
    // ignore,
    // babelrc: false,
    // cache: false
  });
};
