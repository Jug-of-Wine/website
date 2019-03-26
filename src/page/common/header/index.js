require('./index.css');
var _mm = require('util/comm.js');
var tempindex = require('./index.string');

var topmenu = {
	option : {
		menuList : [
			{title : '最新新闻',href : '',content : [{name : '内容1',href : ''},{name : '内容1',href : ''},{name : '内容1',href : ''},{name : '内容1',href : ''}]},
			{title : '社区报道',href : '',content : [{name : '内容2',href : ''},{name : '内容2',href : ''},{name : '内容2',href : ''}]},
			{title : '媒体在线',href : '',content : [{name : '内容3',href : ''},{name : '内容3',href : ''}]},
			{title : '在线商城',href : '',content : [{name : '内容4',href : ''},{name : '内容4',href : ''},{name : '内容4',href : ''}]},
			{title : '重要信息',href : ''},
			{title : '游戏下载',href : '',content : [{name : '内容5',href : ''},{name : '内容5',href : ''},{name : '内容5',href : ''},{name : '内容5',href : ''}]}
		]
	},
	init : function(){
		this.readerMenu();
		this.moveMenu();
	},
	//渲染菜单
	readerMenu : function(){
		var menuHtml = _mm.renderHtml(tempindex,{
			menuList : this.option.menuList
		});
		$('.header_ul').html(menuHtml);
	},
	//移入移出
	moveMenu : function(){
		$('.header_u').on('mouseenter','.header_li',function(){
			$(this).children('.inside_ul').removeClass('none');
		});
		$('.header_u').on('mouseleave','.header_li',function(){
			$(this).children('.inside_ul').addClass('none');
		});
	}

}

module.exports = topmenu.init();