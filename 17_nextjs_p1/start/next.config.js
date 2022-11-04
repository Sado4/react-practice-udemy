/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ダミーURLを直うちされた際に、実際のページURLを表示するために必要
  async rewrites() {
    return [
      {
        source: '/personal',
        destination: '/08_multipage?step=1',
      },
    ];
  },
};

module.exports = nextConfig;
