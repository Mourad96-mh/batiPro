import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export → produces an `out/` folder you can upload to any
  // traditional host (cPanel/FTP). The whole site is static, so this is safe.
  output: "export",
  // Emit folder/index.html (e.g. /services/index.html) so Apache serves clean
  // URLs like /services/ without needing MultiViews or rewrites.
  trailingSlash: true,
  images: { unoptimized: true },
  // Pin the project root so Next doesn't pick a parent lockfile (the home dir is
  // a git repo with its own package-lock.json).
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
