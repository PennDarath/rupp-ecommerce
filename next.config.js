/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "localhost",
      "i.pinimg.com",
      "fakestoreapi.com",
      "cdn-amz.woka.io",
      "www.apple.com",
      "i.ebayimg.com",
      "encrypted-tbn0.gstatic.com",
      "media.wired.com",
      "img.global.news.samsung.com",
    ],
  },
};

module.exports = nextConfig;
