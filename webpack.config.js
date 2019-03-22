const path = require('path')
const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
    mode : "development",
    resolve: {
        alias: {
            "vue": "vue/dist/vue.js"
        }
    },
    entry: {
        main: path.resolve(__dirname,"src","index.js")
        // stable: ""
    },
    output: {
        filename: "bundle-[name].js",
        path: path.resolve(__dirname,"target")
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    {loader: 'vue-style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
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
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules|bower_components)/,
            //     use: [
            //         {
            //             loader: 'babel-loader',
            //             options: {
            //                 presets: ['@babel/preset-env']
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
};

