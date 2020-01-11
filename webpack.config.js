"use strict";
const mode = "development";
const debug = mode !== "production";
const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode:mode,
    context:path.join(__dirname,"/js/src"),//ベースのディレクトリー
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
                            plugins: ['@babel/plugin-transform-runtime']
                            //async await を使用する場合別途babel runtimeが必要
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

/*
npm i @babel/preset-env @babel/plugin-transform-runtime 
@babel/runtime --save-dev
*/
