(function($){               
  jQuery.fn.lightTabs = function(options){

      var createTabs = function(){
          tabs = this;
          i = 0;

          showPage = function(tabs, i){
              $(tabs).children("div").children("div").hide();
              $(tabs).children("div").children("div").eq(i).show();
              $(tabs).children("ul").children("li").removeClass("active");
              $(tabs).children("ul").children("li").eq(i).addClass("active");
          }

          showPage(tabs, 0);              

          $(tabs).children("ul").children("li").each(function(index, element){
              $(element).attr("data-page", i);
              i++;                        
          });

          $(tabs).children("ul").children("li").click(function(){
              showPage($(this).parent().parent(), parseInt($(this).attr("data-page")));
          });             
      };      
      return this.each(createTabs);
  };  
})(jQuery);


// popup settings

function show_services_popup()
{
  $(".service-overlay").fadeIn(200);
  $("body, html").css("overflow-y", "hidden");
}

function close_popup()
{
  $('.overlay').fadeOut(200);
  $("body, html").css("overflow-y", "");
}


$(".popup__close").on("click", function() {
  close_popup();
});

// show service popup (details)

$(".btn-service-view").on("click", function(e) {
  e.preventDefault();

  var that = $(this),
      parent = that.closest(".table-row"),

      popup_title_container = $(".popup .popup__top-title"),
      popup_content_container = $(".popup .popup__content"),

      popup_content = parent.find(".table-popup-content").html(),
      cuurent_service_name = parent.find('.table-col:nth-child(2) .table-col__content').text();

  popup_title_container.text(cuurent_service_name);
  popup_content_container.html(popup_content);

  show_services_popup();
});

// ###################################################################################################



// ready
$(document).ready(function() {

  $(".tabs").lightTabs();

  // hide/show password

$(".form-control.password .form-control__icon").on("click", function() {

  console.log("click")

  let input = $(this).siblings("input");


  if (input.attr('type') == 'password'){

  $(this).parent().addClass('view');
      input.prop('type', 'text');
      
} else {

  $(this).parent().removeClass('view');
      input.prop('type', 'password');
      
}

});

  // burger

  $(".open-menu-js").on("click", function() {
    $(".mobileMenu-overlay").addClass("open");
  });
  
  // add menu items to mobile burger menu

  var header_menu = $("header .header__menu").html(),
      sidebar_menu = $('.sidebar__menu').html(),
      account_link = $('header .logOut-link').clone(),

      mobileMenu_bottom_container = $('.mobileMenu .header__menu-bottom'),
      mobileMenu_container = $(".mobileMenu .header__menu");
      
  mobileMenu_container.html(header_menu);
  mobileMenu_bottom_container.html(sidebar_menu);
  mobileMenu_bottom_container.append(account_link);

  


  // burger close

  $(".mobileMenu__close").on("click", function() {
    $(".mobileMenu-overlay").removeClass("open");
  });

  // faq

$(".faq__item").on("click", function(e) {


  let
      that = $(this),
      submenu = $(".faq__submnenu"),
      that_submenu = that.find(submenu);

  if ( that_submenu.is(":visible") ) {
      that.removeClass("open");
      submenu.slideUp(300)
  } else {
      that.addClass("open");
      that.find(".faq__item-top").addClass("active");
      that.find(submenu).slideDown(300);
  }

});


$("select").styler({
  onSelectOpened: function() {
    $(".jq-selectbox__dropdown ul").mCustomScrollbar({
      axis:"y",
      theme:"dark-thin",
      autoExpandScrollbar:true,
      advanced:{autoExpandHorizontalScroll:true},
      
    });
    console.log("open")
	},
  onSelectClosed: function() {
    $(".jq-selectbox__dropdown ul").mCustomScrollbar("update");
    console.log("close")
  }
});

});


$(window).on("load resize", function() {

  if( $(window).width() <= 1200 ) {

    $('.reviews__slider').not('.slick-initialized').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 300,
      appendDots: $(".reviews__dots"),
      responsive: [
        {
          breakpoint: 1920,
          settings: "unslick"
        },
        {
          breakpoint: 1199.98,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 999.99,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }); 

  } 
});