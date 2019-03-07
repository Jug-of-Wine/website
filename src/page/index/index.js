require('./index.css');
require('page/common/top/index.js');
require('page/common/header/index.js');

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

    //轮播图切换
    $('.switch').click(function(){
      $('.side_nav').toggle(1000);
      //添加类和样式
      $('.gallery-top').hide().addClass('swiper-container-x').fadeToggle(1000);
      $('.swiper-wrapper').addClass('swiper-wrapper-x');
      $('.gallery-thumbs > .swiper-wrapper > .swiper-slide').css({
        width: '88px'
      });
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


