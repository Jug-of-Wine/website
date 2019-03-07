##版本4.0+

##使用webpack
初始化package.json
npm init -y

全区安装（不推荐）
npm install webpack -g

本地安装
npm install webpack webpack-cli -D

##创建webpack.config.js文件,基于node遵循commonjs规范的
module.exports = {
	entry:'',//入口
	output:{},//出口
	devServer:{},//开发服务器
	module:{},//模块配置
	plugins:{},//插件的配置
	mode:'development',//可以更改模式
	resolve:{},//配置解析
}

##安装开发服务器
npm install webpack-dev-server -D
##安装webpack插件将html打包到dist下自动引入生产的js
npm install html-webpack-plugin -D
##安装清除插件
npm install clean-webpack-plugin -D
##css处理
npm install style-loader css-loader less less-loader stylus stylus-loader node-sass sass-loader -D
##抽离样式
npm install extract-text-webpack-plugin@next -D
##安装Hogan
npm install hogan -D
##安装Icons
npm install font-awesome -D