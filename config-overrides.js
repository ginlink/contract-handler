const { override, fixBabelImports, addWebpackExternals, addWebpackAlias, addLessLoader } = require('customize-cra')
const path = require('path')
// 修改打包路径除了output，这里也要修改
const paths = require('react-scripts/config/paths')
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// const myPlugin = [
//     new UglifyJsPlugin({
//         uglifyOptions: {
//             warnings: false,
//             compress: {
//                 drop_debugger: true,
//                 drop_console: true,
//             },
//         },
//     }),
// ]

module.exports = override(
    fixBabelImports('import', {
        //配置按需加载
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addWebpackAlias({
        //路径别名
        '@': path.resolve(__dirname, 'src'),
    }),
    (config) => {
        //暴露webpack的配置 config ,evn
        // 去掉打包生产map 文件
        // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
        if (process.env.NODE_ENV === 'production') config.devtool = false
        // if (process.env.NODE_ENV !== 'development') config.plugins = [...config.plugins]

        //！ 这里尽量不要以赋值的方式覆盖原有配置
        config.output.path = path.resolve(__dirname, 'dist')
        config.output.filename = '[hash].[name].js'
        config.output.chunkFilename = 'static/js/[contenthash].[name].js'

        config.module.rules = [
            ...config.module.rules,
            {
                test: /\.worker\.(ts|js)$/,
                use: { loader: "worker-loader" },
            },
        ]

        return config
    }
)
