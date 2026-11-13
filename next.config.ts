import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "fakestoreapi.com", pathname: "/img/**" },
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  compiler: {
    styledComponents: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default withNextIntl(nextConfig);
