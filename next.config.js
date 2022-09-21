module.exports = {
  reactStrictMode: true,
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
