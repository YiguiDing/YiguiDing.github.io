$(document).ready(function () {

  'use strict';

  /* =======================
  // Simple Search Settings
  ======================= */

  SimpleJekyllSearch({
    searchInput: document.getElementById('js-search-input'),
    resultsContainer: document.getElementById('js-results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: '<li>No results found</li>'
  })

  /* =======================
  // Responsive videos
  ======================= */

  $('.c-wrap-content').fitVids({
    'customSelector': ['iframe[src*="ted.com"]']
  });

  /* =======================================
  // Switching between posts and categories
  ======================================= */

  $('.c-nav__list > .c-nav__item').click(function() {
    $('.c-nav__list > .c-nav__item').removeClass('is-active');
    $(this).addClass('is-active');
    if ($('.c-nav__item:last-child').hasClass('is-active')) {
      $('.c-posts').css('display', 'none').removeClass('o-opacity');
      $('.c-load-more').css('display', 'none')
      $('.c-categories').css('display', '').addClass('o-opacity');
    } else {
      $('.c-posts').css('display', '').addClass('o-opacity');
      $('.c-load-more').css('display', '')
      $('.c-categories').css('display', 'none').removeClass('o-opacity');
    }
  });

  /* =======================
  // Adding ajax pagination
  ======================= */

  $(".c-load-more").click(loadMorePosts);

  function loadMorePosts() {
    var _this = this;
    var $postsContainer = $('.c-posts');
    var nextPage = parseInt($postsContainer.attr('data-page')) + 1;
    var totalPages = parseInt($postsContainer.attr('data-totalPages'));

    $(this).addClass('is-loading').text("Loading...");

    $.get('/page/' + nextPage, function (data) {
      var htmlData = $.parseHTML(data);
      var $articles = $(htmlData).find('article');

      $postsContainer.attr('data-page', nextPage).append($articles);

      if ($postsContainer.attr('data-totalPages') == nextPage) {
        $('.c-load-more').remove();
      }

      $(_this).removeClass('is-loading');
    });
  }

  /* ==============================
  // Smooth scroll to the tags page
  ============================== */

  $('.c-tag__list a').on('click', function (e) {
    e.preventDefault();

    var currentTag = $(this).attr('href'),
      currentTagOffset = $(currentTag).offset().top;

    $('html, body').animate({
      scrollTop: currentTagOffset - 10
    }, 400);

  });

  /* =======================
  // Scroll to top
  ======================= */

  $('.c-top').click(function () {
    $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $('.c-top').addClass("c-top--active");
    } else {
      $('.c-top').removeClass("c-top--active");
    };
  });


  $(".c-submit_btn").click(
    function ()
    {
      var PostURL=document.getElementById('POST_URL').value;
      var Redirect_URL=document.getElementById('Redirect_URL').value;      
      var data=
      {
        name:     document.getElementById('form-name').value,
        email:    document.getElementById('form-email').value,
        tittle:   document.getElementById('form-subject').value,
        context:  document.getElementById('form-text').value
      };      
      if(data["name"]=="")
      {
        alert("姓名为必填字段");
      }   
      else if(data["email"].indexOf("@")==-1)
      {
        alert("请正确填写您的Email地址");
      }
      else if(data["context"]=="")
      {
        alert("请填写邮件内容");
      }
      else
      {
        // $.post(
        //   PostURL,
        //   data,
        //   function(data,status){
        //     alert("即将重定向");
        //     window.location.replace(Redirect_URL);
        //   }
        // );

        //上述函数是本函数的简写，返回值为302时被视为错误，于是回调函数不能执行不能重定向，只能用下列函数
        $.ajax(
          {
            url:              PostURL,
            type:             'POST',
            data:             data,
            crossDomain:      true,                                     //允许跨域
            //dataType:       'jsonp',
            success:          function(result,status,xhr)
                              {
                                //alert("请求成功");
                              },
            error:            function(xhr,status,error)
                              {
                                //alert('请求失败');
                              },          
            complete:         function(xhr,status)//因为收到302重定向后被视为错误，所以执行下面的
                              {
                                //alert('无论请求成功失败或失败都执行跳转');
                                window.location.replace(Redirect_URL);
                              }
          }
        );
        
      }
    }
  );

});