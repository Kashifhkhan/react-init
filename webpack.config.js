const path = require("path");
const srcPath = "./src";
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(
            "../app_react_storefront_kashif/cartridge/client/default/js/"
        ),
        filename: "HomeComponent.js",
        chunkFilename: "ReactDependencies.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(s*)css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial"
                }
            }
        }
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {
            actions: path.resolve(__dirname, `${srcPath}/actions/`),
            components: path.resolve(__dirname, `${srcPath}/components/`),
            reducers: path.resolve(__dirname, `${srcPath}/reducers/`),
            containers: path.resolve(__dirname, `${srcPath}/containers/`),
            services: path.resolve(__dirname, `${srcPath}/services/`),
            config: path.resolve(__dirname, `${srcPath}/config/`),
            library: path.resolve(__dirname, `${srcPath}/library/`),
            properties: path.resolve(__dirname, `${srcPath}/properties/`),
            validators: path.resolve(__dirname, `${srcPath}/validators/`)
        }
    }
};
