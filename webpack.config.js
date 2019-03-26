var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// 环境变量配置，dev / online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
//获取html-webpack-plugin参数方法
var getHtmlConfig = function(title,name){
	return {
		template : './src/view/'+ name +'.html',
		filename : 'view/'+ name +'.html',
		title : title,
		inject : true,
		hash : true,
		chunks : ['common',name]
	}
}

var config = {
	mode : 'dev' === WEBPACK_ENV ? 'development' : 'production',
	entry : {
		'common' : './src/page/common/index.js',
		'index' : './src/page/index/index.js',
		'ar-list' : './src/page/ar-list/index.js',
		'user-login' : './src/page/user-login/index.js',
	},
	output : {
		publicPath : 'dev' === WEBPACK_ENV ? '/dist/' : '//s.happymmall.com/mmall-fe/dist/',
		filename : 'js/[name].js'
	},
	//开发服务器
	devServer : {
		port: 8080,//更改端口号
		inline: true,
		//compress: true,//服务器压缩
		//open:true//自动打开浏览器
	},
	externals : {
        'jquery' : 'window.jQuery',
    },
	//模块配置
	module : {
		rules : [
			// css文件的处理
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					//fallback:编译后用什么loader来提取css文件
					//use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			// 图片的配置
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 2048,
						name: 'resource/[name].[ext]'
					}
				}]
			},
			// 字体图标的配置
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            // 模板文件的处理
            {
                test: /\.string$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize : true,
                        removeAttributeQuotes : false
                    }
                }
            }
		]
	},
	//打包公共模块
	 optimization: {
      runtimeChunk: false,
     	splitChunks: {
       		cacheGroups: {
         	// 注意: priority属性
         	// 其次: 打包业务中公共代码
         		common: {
           			name: "common",
           			chunks: "all",//表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all
           			minChunks: 2,//表示被引用次数，默认为1
           			minSize: 1,//表示在压缩前的最小模块大小，默认为0
           			priority: 0//表示缓存的优先级
         		}
       		}
     	}
   },
	//插件的配置
	plugins : [
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin(getHtmlConfig('首页','index')),
		new HtmlWebpackPlugin(getHtmlConfig('文章列表页','ar-list')),
		new HtmlWebpackPlugin(getHtmlConfig('用户登录','user-login')),
	],
	resolve : {
		alias : {
			node_modules    : __dirname + '/node_modules',
			util : __dirname + '/src/util',
        	page : __dirname + '/src/page',
        	service : __dirname + '/src/service',
        	image : __dirname + '/src/image'
		}
	},

};

module.exports = config;

