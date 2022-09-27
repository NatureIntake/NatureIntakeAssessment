module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "http://natureintakeassessment"
        : "http://localhost:3000",
  },
};
