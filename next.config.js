module.exports = {
    webpack: (
      config,
      {  isServer }
    ) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: [
            {
                loader: 'file-loader',
                options: {
                publicPath: '/_next/static/videos/',
                outputPath: `${isServer ? '../' : ''}static/videos/`,
                name: '[name].[hash].[ext]',
                esModule: false,
                },
            },
            ],
        });
      return config
    },
    env: {
      NEXT_PUBLIC_OPEN_WEATHER_API_KEY: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
      NEXT_PUBLIC_IP_FINDER_API_KEY: process.env.NEXT_PUBLIC_IP_FINDER_API_KEY,
    },
    experimental: {
      headers() {
        return [
          {
            source: "/.well-known/apple-app-site-association",
            headers: [{ key: "content-type", value: "application/json" }]
          }
        ];
      }
    }
  }