"use strict";
const mode = "development";
const debug = mode !== "production";
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require('webpack-node-externals');//for node environment

module.exports = {
    mode:mode,
    externals: [nodeExternals()],
    target:"node",
    /*Nodeの環境をここで指定しないとNode,ネイティブモジュール等がうまく動かない。ただしAdobeCEPはドキュメントによるとNode-web-kitベースで作られている
    らしいのでnode-webkitの指定の方が合っているかもしれない。
    */
    context:path.join(__dirname,"/js/src"),//base directory
    entry:"./main.js",
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use :[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["@babel/preset-react","@babel/preset-env"],
                            plugins: ['@babel/plugin-transform-runtime',//async await用プラグイン
                            "@babel/plugin-proposal-class-properties",//アローファンクション用プラグイン
                        ]
                        }
                    }
                ]
            }
        ]
    },
    output:{
        path:__dirname+"/js/",
        filename:"main.min.js"
    },
    plugins:debug ? []:[
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
