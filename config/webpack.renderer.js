const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const baseConfig = require('./webpack.base')



module.exports = {
	...baseConfig,
	target:"electron-renderer",
	//mode: 'development',
	entry: [path.join(process.cwd(),'./src/renderer/index.jsx')],
	output: {
		filename: 'renderer.js',
		libraryTarget: 'umd',
		path: path.join(process.cwd(),'./dist/electron/renderer'),
		publicPath:''
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename:'index.html',
			template: path.resolve(__dirname, '../src/renderer/index.ejs'),
			nodeModules: process.env.NODE_ENV !== 'production'
			? path.resolve(__dirname, '../node_modules')
			: false
		}),
		new webpack.DefinePlugin({
			'__static': `"${path.join(__dirname, '../static').replace(/\\/g, '\\\\')}"`
		}),
		new VueLoaderPlugin()
	],
	node: {
		__dirname: process.env.NODE_ENV !== 'production',
		__filename: process.env.NODE_ENV !== 'production'
	  },
	module: {
		rules: [
			{
				test:/.(ts|tsx)$/,
				loader:'babel-loader',
				include: [path.resolve(process.cwd(), 'src')],
				options:{
					comments:false,
					plugins: [
						"@babel/plugin-transform-typescript",
						["@babel/plugin-proposal-decorators",{ "legacy": true }]
					],
					presets:[
						//[
							'@babel/preset-typescript',
							"@babel/preset-react"
						//],
						
					]
				}
			},
			{
				test: /\.js?$/,
                include: [path.resolve(process.cwd(), 'src/renderer')],
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
					presets: [
							
							[
							"@babel/preset-env"
							,{
								modules:false
							}
							]
						
					]
				}
			},
			{
				test: /\.jsx?$/,
                include: [path.resolve(process.cwd(), 'src/renderer')],
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
					presets: [
							
							//[
							"@babel/preset-env","@babel/preset-react"
							//]
						
					]
				}
			},
			{
				test:/\.vue?$/,
				loader:'vue-loader',
				options:{
					extractCSS: process.env.NODE_ENV === 'production',
					loaders: {
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax=1',
						scss: 'vue-style-loader!css-loader!sass-loader'
					}
				}
			},
			
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				exclude: [path.join(__dirname, '../src/renderer/icons')],
				use: {
				  loader: 'url-loader',
				  query: {
					limit: 10000,
					name: 'imgs/[name]--[folder].[ext]'
				  }
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
				  limit: 10000,
				  name: 'media/[name]--[folder].[ext]'
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: {
				  loader: 'url-loader',
				  query: {
					limit: 10000,
					name: 'fonts/[name]--[folder].[ext]'
				  }
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
	resolve: {
		alias: {
		  '@': path.join(__dirname, '../src/renderer'),
		  'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['.js', '.vue', '.json', '.css', '.node','.jsx',".ts",".tsx"]
	  },
};
