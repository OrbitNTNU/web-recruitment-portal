/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 */
import "./src/env.js";

/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    qualities: [60, 70, 80],
  },

  async rewrites() {
    return [
      {
        source: "/Form",
        destination: "/FormPage",
      },
      {
        source: "/Applicants",
        destination: "/ApplicantArchive",
      },
    ];
  },

};

export default nextConfig;