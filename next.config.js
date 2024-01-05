const withNextIntl = require('next-intl/plugin')(
    './i18n/i18n.ts'
);

/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        swcPlugins: [['@swc-jotai/react-refresh', {}]],
    }
}

module.exports = withNextIntl(nextConfig)
