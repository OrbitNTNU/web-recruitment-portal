/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/Home',
        destination: '/HomePage/HomePage',
      },
      {
        source: '/Form',
        destination: '/FormPage/FormPage',
      },
      {
        source: "/Applicants",
        destination: "/ApplicantArchive/ApplicantArchive",
      }
    ];
  },
};

export default nextConfig;