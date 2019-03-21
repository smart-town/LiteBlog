const path = require('path')

module.exports = {
    mode : "development",
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
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            // {
            //     test: /\.vue$/,
            //     use: [
            //         {
            //             loader: 'vue-loader'
            //         }
            //     ]
            // }
        ]
    }
};

