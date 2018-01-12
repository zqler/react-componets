const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.debug");
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    disableHostCheck: true
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