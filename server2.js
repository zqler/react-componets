'use strict'
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require("./webpack.config.debug");
const compiler = webpack(config);
const express = require("express");
const open = require("open")
const app = express();
//代理实现跨域访问
const proxy = [{
    path: '/app', //必须有个文件地址，如果顶层文件夹名字不同用/*代替
    target: 'loaclhost:3000',
    host: '192.168.1.120',
    secure: true
}];
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    progress: true,
    inline: true,
    lazy: false,
    stats: {
        colors: true,
        chunks: false
    },
    noInfo: true,
    watchOptions: {
        poll: true
    },
    index: "index.html",
    serverSideRender: false,
    proxy
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 2000,
}));

findPort(3000);

function findPort(port) {
    if (port > 65535) {
        console.error("没有找到可用的端口");
        return;
    }

    app.listen(port, '0.0.0.0', function() {
        var host = this.address().address;
        var port = this.address().port;

        open('http://' + 'localhost' + ':' + port);

        console.log('listening at http://%s:%s', host, port);
        console.log('process env NODE_ENV = %s', process.env.NODE_ENV);
    }).on('error', function() {
        findPort(port + 1);
    });

};