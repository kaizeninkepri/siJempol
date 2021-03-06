const mix = require('laravel-mix');

const ASSET_PATH = process.env.MIX_WEBPACK || '/';
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': __dirname + '/resources'
        }
    },
    output: {
        chunkFilename: 'js/chunks/[name].js',
        // publicPath: "http://appkepri.com/testjempol/"
        publicPath: "http://appkepri.com/siJempol/"
        // publicPath: "http://18.136.129.193/siJempol/"
        // publicPath: "https://dpmptsp.kepriprov.go.id/testSijempol/"
        // publicPath: "http://localhost/siJempol/"
    }
});



mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');
