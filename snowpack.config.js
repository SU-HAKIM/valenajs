/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    plugins: [
        /* ... */
        '@snowpack/plugin-sass', '@snowpack/plugin-babel',
    ],
    "mount": {
        "src": "/dist/",
        "public": "/"
    },
};