require('./index.css');
var _mm = require('util/comm.js');

var article = {
	init : function(){
		this.moveContent();
		this.rollContent();
	},
	//移入移出
	moveContent : function(){
		$('.article_box_lower').on('mouseenter',function(){
			$('.lower_hide').stop(true,false).slideDown(300).removeClass('arhide');
		});
		$('.article_box_lower').on('mouseleave',function(){
			$('.lower_hide').stop(true,false).slideUp(300).addClass('arhide');
		});

		$(function(){
    		$('.article_box').mouseenter(function(e){
        		var _this = $(this);
        		var px = e.offsetX;
        		var py = e.offsetY;

        		var id=parseInt(Math.random()*1000);
        		_this.append('<div class="water-btn-style" style="top:'+py+'px;left:'+px+'px;background:'+_this.attr('data-clickColor')+'" id="wb_'+id+'"></div>');
        		setTimeout(function(){
            		_this.find('#wb_'+id).remove()
        		},3000)
    		});
		});

	},
	//内容滚动
	rollContent : function(){
		setInterval(function(){
			$('.lower_ol').animate({
				marginTop:'-41px'
			},function(){
				$(this).css("marginTop","0px").find('.lower_li:first').appendTo(this);
			});
		},1500);
	}
}

module.exports = article.init();