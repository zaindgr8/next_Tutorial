export const API_BASE_URL =
  process.env.NODE_ENV == "development"
    ? "www.api.dev.example.com"
    : "www.api.prod.example.com";