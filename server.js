const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.debug");
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    inline: true,
    progress: true,
    compress: true,
    quiet: false,
    noInfo: false,
    open: true,
    stats: { colors: true },
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    before: function(app) {
        // Here you can access the Express app object and add your own custom middleware to it.
        // For example, to define custom handlers for some paths:
        // app.get('/some/path', function(req, res) {
        //   res.json({ custom: 'response' });
        // });
    },
    historyApiFallback: true,
    disableHostCheck: true
        //设置反向代理实现跨域
        // proxy: {
        //     '/api': {    //项目可以用的接口
        //         target: '******',//代理配置接口地址
        //         secure: false,
        //         changeOrigin: true,
        //         // pathRewrite: {'^/manhour' : ''},
        //     }
        // }
}).listen(3000, "localhost", function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log("Listening at localhost:3000");
});