const HtmlWebpackPlugin       = require('html-webpack-plugin');
const CleanWebpackPlugin      = require('clean-webpack-plugin');
const UglifyJsPlugin          = require('uglifyjs-webpack-plugin');
var path                      = require('path');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, '.'),
    devServer:{
        contentBase: path.join(__dirname, "build"),
        compress: false,
        port: 9000,
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization, x-jwt-assertion, x-trimbleconnect-client"
        }
    },
    entry: {
        app: path.resolve(__dirname, './src/app.js'),
        vendor: ['angular', 'ui.router'] 
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name]-[chunkhash:8].js',
    },
    resolve: {
        alias: {    
            'ui.router': path.resolve(__dirname, './node_modules/angular-ui-router/release/angular-ui-router.min'),
            'angular-mocks': path.resolve(__dirname, './node_modules/angular-mocks/angular-mocks')
        },
        modules: [
            path.resolve(__dirname, './src'),
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        rules: [    
            { 
                test: /\.js$/, exclude: [path.resolve(__dirname, './node_modules')], 
                use: { loader: 'babel-loader', options: { cacheDirectory: true } }  
            },
            { 
                test: /\.html$/, use: [
                    { loader: 'ngtemplate-loader' }, 
                    { loader: 'html-loader' , options: { minimize: true }  } // 
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
             }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build/**/*']),  
        new HtmlWebpackPlugin({   
            hash: false,             
            template: './index.ejs'  
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                //exclude: /[\\/]node_modules[\\/]/ ,
                parallel: true,
                uglifyOptions: {
                    mangle: false
                },
                sourceMap: true
            })
        ]
    }
}
