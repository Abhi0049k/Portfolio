/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.dribbble.com'
            },
            {
                protocol: 'https',
                hostname: 'fontawesome.com'
            },
            {
                protocol: 'https',
                hostname: 'camo.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'i1.wp.com'
            },
            {
                protocol: 'https',
                hostname: 'd19fbfhz0hcvd2.cloudfront.net'
            },
            {
                protocol: 'https',
                hostname: 'www.pngitem.com'
            },
            {
                protocol: 'https',
                hostname: '1000logos.net'
            },
            {
                protocol: 'https',
                hostname: 'github.com'
            },
            {
                protocol: 'https',
                hostname: 'd2v8elt324ukrb.cloudfront.net'
            }
        ]
    }
};

export default nextConfig;
