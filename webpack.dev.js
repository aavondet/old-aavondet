const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        before: function(app, server, compiler) {
            app.get('', function(req, res) {
                res.sendFile(path.join(__dirname, '', 'index.html'));
            });
        },
        contentBase: "./src/"
    }
});