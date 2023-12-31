/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdnuploads.aa.com.tr'],
    },
    env: {
        API_KEY: process.env.API_KEY,
    },
}

module.exports = nextConfig
