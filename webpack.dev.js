const path = require('path')
let webpack = require("webpack") ;
let merge = require("webpack-merge") ;
let common = require("./webpack.common") ;

module.exports = merge(common,{
    mode : "development",
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: { 
        contentBase: "./dist",
        hot: true,
        disableHostCheck: true,
        // inline: true,
    },
});

