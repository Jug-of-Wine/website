require('./index.css');
var _mm = require('util/comm.js');
var tempmenu = require('./menu_one.string');
var tempmenutwo = require('./menu_two.string');

var menu = {
	option : {
		navList : [
			{tid : '1',name : '用户管理A',href : ''},
			{tid : '2',name : '用户管理B',href : ''},
			{tid : '3',name : '用户管理C',href : ''},
			{tid : '4',name : '用户管理D',href : ''},
			{tid : '5',name : '用户管理E',href : ''}
		],
		navtwoList : [
			{
				tmid : '1',list : [
					{title : '个人中心1',content : [{name : '修改密码1',href : ''},{name : '修改密码2',href : ''},{name : '修改密码3',href : ''}]},
					{title : '个人中心2',content : [{name : '基本信息1',href : ''},{name : '基本信息2',href : ''},{name : '基本信息3',href : ''}]},
					{title : '个人中心3',content : [{name : '个人动态1',href : ''},{name : '个人动态2',href : ''},{name : '个人动态3',href : ''}]}
				]
			},
			{
				tmid : '2',list : [
					{title : '最新活动1',content : [{name : '活动详情1',href : ''},{name : '活动详情2',href : ''},{name : '活动详情3',href : ''}]},
					{title : '最新活动2',content : [{name : '活动详情4',href : ''},{name : '活动详情5',href : ''},{name : '活动详情6',href : ''}]},
					{title : '最新活动3',content : [{name : '活动详情7',href : ''},{name : '活动详情8',href : ''},{name : '活动详情9',href : ''}]}
				]
			},
			{
				tmid : '3',list : [
					{title : '解决方案1',content : [{name : '方案动态1',href : ''},{name : '方案动态2',href : ''},{name : '方案动态3',href : ''}]},
					{title : '解决方案2',content : [{name : '方案动态1',href : ''},{name : '方案动态2',href : ''},{name : '方案动态3',href : ''}]},
					{title : '解决方案3',content : [{name : '方案动态1',href : ''},{name : '方案动态2',href : ''},{name : '方案动态3',href : ''}]}
				]
			},
			{
				tmid : '4',list : [
					{title : '合作伙伴1',content : [{name : '伙伴资料1',href : ''},{name : '伙伴资料2',href : ''},{name : '伙伴资料3',href : ''}]},
					{title : '合作伙伴2',content : [{name : '伙伴资料1',href : ''},{name : '伙伴资料2',href : ''},{name : '伙伴资料3',href : ''}]},
					{title : '合作伙伴3',content : [{name : '伙伴资料1',href : ''},{name : '伙伴资料2',href : ''},{name : '伙伴资料3',href : ''}]}
				]
			},
			{
				tmid : '5',list : [
					{title : '商城中心1',content : [{name : '商品动态1',href : ''},{name : '商品动态2',href : ''},{name : '商品动态3',href : ''}]},
					{title : '商城中心2',content : [{name : '商品动态1',href : ''},{name : '商品动态2',href : ''},{name : '商品动态3',href : ''}]},
					{title : '商城中心3',content : [{name : '商品动态1',href : ''},{name : '商品动态2',href : ''},{name : '商品动态3',href : ''}]}
				]
			}
		]
	},
	init : function(){
		this.readerMenu();
	},
	//渲染菜单
	readerMenu : function(){
		//渲染数据
		var navHtml = _mm.renderHtml(tempmenu,{
			navList : this.option.navList
		});
		var navtwoHtml = _mm.renderHtml(tempmenutwo,{
			navtwoList : this.option.navtwoList
		});
		//把html放入容器
		$('.side_nav').html(navHtml);
		$('.menu_con').html(navtwoHtml);
	}
};

module.exports = menu.init();
