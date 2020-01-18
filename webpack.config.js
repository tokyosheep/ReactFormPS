"use strict";
const mode = "development";//after you developed app you should change to production
const debug = mode !== "production";
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode:mode,
    externals: [nodeExternals()],
    target:"node",
    /*set Node enviironment, default is "web"(for browser) but it might be "node-webkit" 
    because Adobe cep based on node-webkit
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
                            plugins: ['@babel/plugin-transform-runtime',//you need it to use async await on React
                            "@babel/plugin-proposal-class-properties",//It makes possible to use arrow function on class method
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
