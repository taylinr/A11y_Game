(module.exports = {
  reactStrictMode: true,
}),
  (module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: "svg-sprite-loader",
          options: {
            runtimeCompat: true,
          },
        },
      ],
    },
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
  });