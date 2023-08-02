/** @type {import('next').NextConfig} */

module.exports = {
    assetPrefix:
      process.env.NODE_ENV === "production"
        ? "https://boramyy.github.io/invitation"
        : "",
  };