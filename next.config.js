/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

module.exports = nextConfig
// The above will change the behavior of the next build to produce an out/ folder containing the HTML/CSS/JS assets
// for the application instead of writing them to a .next/ directory specific to Next.js' runtime
