module.exports = {
  lessLoaderOptions: {
    modifyVars: { '@primary-color': 'red' },
  },
  babelLoaderOptions: {
    plugins: [
      // ["import", {"libraryName": "antd-mobile", "style": true}],
    ],
  },
};
