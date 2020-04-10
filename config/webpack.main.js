const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base')
/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 * 
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 * 
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * We've enabled HtmlWebpackPlugin for you! This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */

module.exports = {
	...baseConfig,
	target:"electron-main",
	//mode: 'development',
	entry: [path.join(process.cwd(),'./src/main/index.js')],
	output: {
		filename: 'index.js',
		libraryTarget: 'commonjs2',
		path: path.join(process.cwd(),'./dist/electron/')
	},
	plugins: [
		//new webpack.ProgressPlugin()
	],
	node: {
		__dirname: process.env.NODE_ENV !== 'production',
		__filename: process.env.NODE_ENV !== 'production'
	  },
	module: {
		rules: [
			{
				test:/.ts$/,
				loader:'babel-loader',
				include: [path.resolve(process.cwd(), 'src')],
				
				options:{
					comments:false,
					plugins: [
						"@babel/plugin-transform-typescript",
						["@babel/plugin-proposal-decorators",{ "legacy": true }]
					],
					presets:[
						[
							'@babel/preset-typescript',
							{
								//"useBuiltIns":"usage",
								"targets": {
									"node": "current"	
								}
							}
						],
						
					]
				}
			},
			{
				test: /.js$/,
                include: [path.resolve(process.cwd(), 'src')],
                exclude: /node_modules/,
				loader: 'babel-loader',
				//enforce: 'pre',
				options: {
					comments:false,
					plugins: [
						'@babel/plugin-syntax-dynamic-import',
						"@babel/plugin-transform-runtime",
						["@babel/plugin-proposal-decorators",{ "legacy": true }]
					],
					//corejs:"2",
					//
					presets: [
							
							[
							"@babel/preset-env",
								{
									//"useBuiltIns":"usage",
									"targets": {
										"node": "current"	
									}
								}
							]
						
					]
				}
			}
		]
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	},

	devServer: {
		open: false
	},
	resolve: {
		alias: {
		  '@': path.join(__dirname, '../src/main'),
		},
		extensions: ['.js', '.json', '.css', '.node',".ts"]
	  },
};
