require('./index.css');
require('page/common/top/index.js');
require('page/common/header/index.js');
require('page/common/carousel/index.js');
require('page/common/article-content/index.js');

$(document).ready(function (){
	 var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 6,
      //loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

    //搜索根据头部偏移量显示
    $(window).scroll(function(){
      if($('html,body').scrollTop() > $('.contents').offset().top && !$('.header').hasClass('header_fix')){
        $('.header').addClass('header_fix').hide().slideDown();
      }else if($('html,body').scrollTop() < $('.contents').offset().top && $('.header').hasClass('header_fix')){
        $('.header').removeClass('header_fix');
      }
    });

    //轮播图切换右边
    var sw_left = false;
    var sw_right = false;
    $('.switch_right').click(function(){
      if(sw_right){
        return;
      }
      $('.side_nav').toggle(1000);
      //添加类和样式
      $('.gallery-top').hide().addClass('swiper-container-x').fadeToggle(1000);
      $('.swiper-wrapper').addClass('swiper-wrapper-x');
      $('.gallery-thumbs > .swiper-wrapper > .swiper-slide').css({
        width: '88px'
      });
      $(this).addClass('switchcolor');
      $('.switch_left').removeClass('switchcolor');

      var w = 920;//设置最大宽度,也可根据img的外部容器 而动态获得,比如：$("#demo").width();
      $('.gallery-top img').each(function() {//如果有很多图片,使用each()遍历 
        var img_w = $(this).width();//图片宽度 
        var img_h = $(this).height();//图片高度 
        if (img_w > w) {//如果图片宽度超出指定最大宽度 
          var height = (w * img_h) / img_w; //高度等比缩放 
          $(this).css( {
            'width' : w,'height' : height
          });//设置缩放后的宽度和高度 
          $('.gallery-top a').css({
            'width' : w,'height' : height
          });
          $('.switch').addClass('marginleft');
        }
      });
      sw_right = true;
      sw_left = false;
    });
      //轮播图切换左边
     $('.switch_left').click(function(){
      if(sw_left){
        return;
      }
      $('.side_nav').toggle(1000);
      //添加类和样式
      $('.gallery-top').hide().removeClass('swiper-container-x').fadeToggle(1000);
      $('.swiper-wrapper').removeClass('swiper-wrapper-x');
      $('.gallery-thumbs > .swiper-wrapper > .swiper-slide').css({
        width: '88px'
      });
      $(this).addClass('switchcolor');
      $('.switch_right').removeClass('switchcolor');
      $('.gallery-top img').each(function() {
          $(this).css( {
            'width' : 1920,'height' : 510
          });
           $('.gallery-top a').css({
            'width' : 1920,'height' : 510
          });
           $('.switch').removeClass('marginleft');
      });
      sw_left = true;
      sw_right = false;
    });

    //侧边导航移入移出
    var ej = $(".menu_con");//获取二级菜单
    var activeRow;//指向当前一集菜单的行
    var activeMenu;//指向对应的二级菜单内容
    var mouseInSub = false;//标识鼠标是否在子菜单

    ej.on("mouseenter",function(){
      mouseInSub = true;
    }).on("mouseleave",function(){
      mouseInSub = false;
    })

    $('.side').on("mouseenter","li",function(e){
        if(!activeRow){
          ej.removeClass('none');
          activeRow = $(e.target);
          activeMenu = $("#" + activeRow.data("id"));
          activeMenu.removeClass('none');
          return;
        }
        if(mouseInSub){
              return;
            }
        activeMenu.addClass("none");
        activeRow = $(e.target);
        activeMenu = $("#" + activeRow.data("id"));
        activeMenu.removeClass('none');

    }).on("mouseleave",function(e){
        ej.addClass('none');
        if(activeRow){
            activeRow = null;
          }
        if(activeMenu){
          activeMenu.addClass('none');
          activeMenu = null;
        }
    })

});


