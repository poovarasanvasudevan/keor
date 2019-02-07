const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withLESS = require('@zeit/next-less');
const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const offline = require('next-offline');

const {
    PHASE_PRODUCTION_BUILD,
    PHASE_PRODUCTION_SERVER,
    PHASE_DEVELOPMENT_SERVER,
    PHASE_EXPORT,
} = require('next/constants');


const nextConfig = {
    distDir: 'build',
    webpack: (config, options) => {

        config.module.rules.push({test: /\.(mp3|svg)$/,
            use: [
                {loader: 'emit-file-loader', options: {name: 'dist/[path][name].[ext]',},}, {
                loader: 'file-loader',
                options: {},
            },],
        });


        return config;
    },
};

module.exports = withPlugins([
    [withSASS, {
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[local]___[hash:base64:5]',
        },
        [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
            cssLoaderOptions: {
                localIdentName: '[hash:base64:8]',
            },
        },
    }],
    [withLESS, {
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[local]___[hash:base64:5]',
        },
        [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
            cssLoaderOptions: {
                localIdentName: '[hash:base64:8]',
            },
        },
    }],
    [withCSS, {
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[local]___[hash:base64:5]',
        },
        [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
            cssLoaderOptions: {
                localIdentName: '[hash:base64:8]',
            },
        },
    }],
    images,
    [offline, {
        workerName: 'sw.js'
    }]
] , nextConfig);