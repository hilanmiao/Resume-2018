/*
* 所有动画效果
* */
{

  $(function () {

    // nav click
    $('.nav-wrapper .right a').on('click', function () {
      $('.nav-wrapper .right a').removeClass('active');
      $(this).addClass('active')
      $(this).addClass('flash')
      setTimeout(() => {
        $(this).removeClass('flash')
      }, 1500);
    });

    // glitch
    $( ".content-wrapper" ).mgGlitch({
      // set 'true' to stop the plugin
      destroy : false,
      // set 'false' to stop glitching
      glitch: true,
      // set 'false' to stop scaling
      scale: true,
      // set 'false' to stop glitch blending
      blend : true,
      // select blend mode type
      blendModeType : 'hue',
      // set min time for glitch 1 elem
      glitch1TimeMin : 600,
      // set max time for glitch 1 elem
      glitch1TimeMax : 900,
      // set min time for glitch 2 elem
      glitch2TimeMin : 10,
      // set max time for glitch 2 elem
      glitch2TimeMax : 115,
      //
      zIndexStart: 2
    });

    $( ".glitch-bg" ).mgGlitch({
      // set 'true' to stop the plugin
      destroy : false,
      // set 'false' to stop glitching
      glitch: true,
      // set 'false' to stop scaling
      scale: true,
      // set 'false' to stop glitch blending
      blend : true,
      // select blend mode type
      blendModeType : 'hue',
      // set min time for glitch 1 elem
      glitch1TimeMin : 200,
      // set max time for glitch 1 elem
      glitch1TimeMax : 400,
      // set min time for glitch 2 elem
      glitch2TimeMin : 10,
      // set max time for glitch 2 elem
      glitch2TimeMax : 100,
      //
      zIndexStart: 2
    });

    // gandum right
    const $gandumwrapper = $('#gandum-wrapper');
    $gandumwrapper.addClass('animated bounceInRight');
    setTimeout(() => {
      $gandumwrapper.removeClass('animated bounceInRight');
    }, 1500);

    // glitch-text left
    const $glitchtextwrapper = $('#glitch-text-wrapper');
    $glitchtextwrapper.addClass('animated bounceInLeft');
    setTimeout(() => {
      $glitchtextwrapper.removeClass('animated bounceInRight');
    }, 1500);

    // lightning
    {
      const $lightning1 = $('.lightning1');
      const lightning1Animate = (() => {
        $lightning1[0].style.visibility = 'visible';
        $lightning1.addClass('animated fadeIn');
        $lightning1.addClass('fadeOut');
        setTimeout(() => {
          $lightning1.removeClass('animated fadeIn fadeOut');
          $lightning1[0].style.visibility = 'hidden';
        }, 1500);
      });
      // 先走一波动画
      setTimeout(() => {
        lightning1Animate();
      },500)
      // 然后循环动画
      setInterval(() => {
        lightning1Animate();
      }, 5000)

      const $lightning2 = $('.lightning2');
      const lightning2Animate = (() => {
        $lightning2[0].style.visibility = 'visible';
        $lightning2.addClass('animated fadeIn');
        $lightning2.addClass('fadeOut');
        setTimeout(() => {
          $lightning2.removeClass('animated fadeIn fadeOut');
          $lightning2[0].style.visibility = 'hidden';
        }, 1500);
      });
      // 先走一波动画
      setTimeout(() => {
        lightning2Animate();
      },800)
      // 然后循环动画
      setInterval(() => {
        lightning2Animate();
      }, 5600)

      const $lightning3 = $('.lightning3');
      const lightning3Animate = (() => {
        $lightning3[0].style.visibility = 'visible';
        $lightning3.addClass('animated fadeIn');
        setTimeout(() => {
          $lightning3.addClass('fadeOut');
        }, 800);
        setTimeout(() => {
          $lightning3.removeClass('animated fadeIn fadeOut');
          $lightning3[0].style.visibility = 'hidden';
        }, 1500);
      });
      // 先走一波动画
      setTimeout(() => {
        lightning3Animate();
      },1400)
      // 然后循环动画
      setInterval(() => {
        lightning3Animate();
      }, 5900)

    }

    // gandum lightning
    {
      const $gandumlightning1 = $('.gandum-lightning1');
      const gandumlightning1Animate = (() => {
        $gandumlightning1[0].style.visibility = 'visible';
        $gandumlightning1.addClass('animated fadeIn');
        $gandumlightning1.addClass('fadeOut');
        setTimeout(() => {
          $gandumlightning1.removeClass('animated fadeIn fadeOut');
          $gandumlightning1[0].style.visibility = 'hidden';
        }, 1500);
      });
      // 先走一波动画
      setTimeout(() => {
        gandumlightning1Animate();
      },1400)
      // 然后循环动画
      setInterval(() => {
        gandumlightning1Animate();
      }, 6000);

      const $gandumlightning2 = $('.gandum-lightning2');
      const gandumlightning2Animate = (() => {
        $gandumlightning2[0].style.visibility = 'visible';
        $gandumlightning2.addClass('animated fadeIn');
        $gandumlightning2.addClass('fadeOut');
        setTimeout(() => {
          $gandumlightning2.removeClass('animated fadeIn fadeOut');
          $gandumlightning2[0].style.visibility = 'hidden';
        }, 1500);
      });
      // 先走一波动画
      setTimeout(() => {
        gandumlightning2Animate();
      },1700)
      // 然后循环动画
      setInterval(() => {
        gandumlightning2Animate();
      }, 6100);

      const $gandumlightning3 = $('.gandum-lightning3');
      const gandumlightning3Animate = (() => {
        $gandumlightning3[0].style.visibility = 'visible';
        $gandumlightning3.addClass('animated fadeIn');
        setTimeout(() => {
          $gandumlightning3.addClass('fadeOut');
        }, 800);
        setTimeout(() => {
          $gandumlightning3.removeClass('animated fadeIn fadeOut');
          $gandumlightning3[0].style.visibility = 'hidden';
        }, 1500);
      });
      // 先走一波动画
      setTimeout(() => {
        gandumlightning3Animate();
      },1800)
      // 然后循环动画
      setInterval(() => {
        gandumlightning3Animate();
      }, 6300);
    }

  });

}
