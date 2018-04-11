const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const webpack=require('webpack')
module.exports={
	mode:'development',
	entry:'./src/index.js',
	devtool: 'inline-source-map',
	devServer:{
		contentBase:'./dist',
		hot:true
	},
	plugins:[
	    new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'Output Management',
			template:'./index.html'
		}),
		new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
	],
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	resolve:{
        alias:{
        	'vue$':'vue/dist/vue.js'
        }
	},
	module:{
		rules:[
		{
			test:/\.css$/,
			use:[
			'style-loader',
			'css-loader'
			]
		},
		{
			test:/\.vue$/,
			use:'vue-loader'
		},
		{
			test:/\.(png|svg|jpg|gif)$/,
			use:[
				{
					loader: 'url-loader',
					options:{
						limit:18888
					}
				}
			]
		},
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [
			 'file-loader'
			]
		},
		{
			test: /\.less$/,
		    use: [
			    {
			        loader: "style-loader" // creates style nodes from JS strings
			    }, 
			    {
			        loader: "css-loader" // translates CSS into CommonJS
			    }, 
			    {
			        loader: "less-loader" // compiles Less to CSS
			    }
		    ]
		},
		{
			      test: /\.js$/,
			      exclude: /(node_modules|bower_components)/,
			      use: {
			      loader: 'babel-loader',
			      options: {
			      presets: ['@babel/preset-env']
        }
      }
    }
		]
	}
}