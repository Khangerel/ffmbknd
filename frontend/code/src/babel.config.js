module.exports = function (api) {
  api.cache(true);

  const presets = [
    "@babel/preset-env", // Transpile modern JS features to older versions for broader compatibility
    "@babel/preset-react", // Transpile JSX syntax
  ];

  const plugins = [
    "macros", // Your existing macro plugin
    "@babel/plugin-transform-runtime", // Allows you to use async/await and other ES6+ features
  ];

  return {
    presets,
    plugins,
  };
};