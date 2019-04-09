//common config
const path = require("path") ;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanPlugin = require("clean-webpack-plugin") ;
const VueLoaderPlugin = require("vue-loader/lib/plugin") ;

const outputdir = 'dist';

module.exports = {
    entry:{
        main: './src/index.js',
        loaders: ['vue'],
    },
    output:{
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname,outputdir),
    },
    optimization:{
        splitChunks:{
            chunks: 'all'
        }
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    'file-loader',
                ]
            },
            {
                test:/\.(woff|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ]
            }, 
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
        ]
    },
    plugins:[
        new CleanPlugin({"outputdir":outputdir}),
        new HtmlWebpackPlugin({
            title:'App',
        }) ,
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },

}