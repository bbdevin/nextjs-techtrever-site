/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'lottie.host',
                port: '',
                pathname: '/**',
            },
            // 如果你有其他域名，可以繼續添加
        ],
    },
}

module.exports = nextConfig