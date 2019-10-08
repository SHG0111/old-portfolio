
  var makeArabicBtn = function () {
    $('.lang-btn a').addClass('hidden');
    $('.lang-btn .ar').removeClass('hidden');
  }
  var makeEnglishBtn = function () {
    $('.lang-btn a').addClass('hidden');
    $('.lang-btn .en').removeClass('hidden');
  }
  var arabicLayout = function () {
    $('html').attr('dir', 'rtl');
    makeEnglishBtn();
    $('link[href="css/rtl.css"]').prop('disabled', false);
  }
  var englishLayout = function () {
    $('html').attr('dir', 'ltr');
    $('link[href="css/rtl.css"]').prop('disabled', true);
    $('body .toLeft').addClass('toRight').removeClass('toLeft');
    makeArabicBtn();
  }
  var Session =
  {
      //save an item to localStorage
      setItem : function (key, value)
      {
          return localStorage.setItem(key, JSON.stringify(value));
      },
  
      //retrieve an item from localStorage
      getItem : function (key)
      {
          if(localStorage.getItem(key) == undefined)
              return {};
  
          return JSON.parse(localStorage.getItem(key));
      },
  
      //remove one item from localStorage
      removeItem : function (key)
      {
          return Session.setItem(key, {});
      },
  
      //remove all items from localStorage
      clear : function()
      {
          localStorage.clear();
      }
  };
  var session = Session.getItem("session");
  var lang = session.languageKey;
  function doLocalize(lang) {
    session.languageKey = lang;
    Session.setItem("session", session);
    console.log( session.languageKey );
    $("[data-localize]").localize("language/lang", {language: lang});
  }
$(document).ready(function () {


  if(lang === undefined) {
    lang = "ar";
    doLocalize(lang);
  } else {
    $("[data-localize]").localize("language/lang", {language: lang});
  }

  $(".lang-btn .ar").on({
     click: function () {
       lang = 'ar';
       doLocalize(lang);
       arabicLayout();
       return false;
     }
  });
  $(".lang-btn .en").on({
     click: function () {
       lang = 'en';
       doLocalize(lang);
       englishLayout();
       return false;
     }
  });


  if (window.isScroll) {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 10) {
            $('body').addClass('notTop');
        } else {
            $('body').removeClass('notTop');
        }
    });
}
  $('.sidetrigger').click(function(){
    if($(this).attr('data-sidebar-action') === ''){
      // treated as menu trigger 
      $(this).removeAttr('data-sidebar-action');
      $(this).find('svg').addClass('active');
      $(this).attr('data-sidebar-action','close')
    }else{
      // treated as menu close 
      $(this).attr('data-sidebar-action','')
      $('.sidebar').removeClass('visible');
      $('html').removeClass('sidebarShown ');
      $(this).find('svg').removeClass('active');
    }
  });

  $('body').click(function(e){
    if ( $(e.target).is( ".sidetrigger" )  ) {
     return;
    }else{
      $('.sidetrigger').find('svg').removeClass('active');
    }
  });

  // directions of document
  if (  lang === 'ar' ) {
    arabicLayout();
  } else if ( lang === 'en' ) {
    englishLayout();
  };

  // ////////////////////////////
});
$(window).resize(function () {
  $('html').removeClass('sidebarShown ');
});
$(window).on('load',function(){
  $('.loader').fadeOut('slow');
});
