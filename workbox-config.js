module.exports = {
    "globDirectory": "build/",
    "globPatterns": [
        "**/*.{html,js,css,png,jpg,gif,svg,eot,ttf,woff}"
    ],
    "swDest": "build/service-worker.js",
    "clientsClaim": true,
    "skipWaiting": true,
};