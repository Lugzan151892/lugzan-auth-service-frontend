import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
// import {createNextIntlPlugin} from 'next-intl/plugin';
// const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n/requests.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
