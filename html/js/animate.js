/*
* 所有动画效果
* */
{

  $(function () {

    // nav click
    $('.nav-wrapper .right a').on('click',function () {
      $('.nav-wrapper .right a').removeClass('active');
      $(this).addClass('active')
      $(this).addClass('flash')
      setTimeout(()=> {
        $(this).removeClass('flash')
      }, 1500)
    });

    // // glitch
    // $( ".content-wrapper" ).mgGlitch({
    //   // set 'true' to stop the plugin
    //   destroy : false,
    //   // set 'false' to stop glitching
    //   glitch: true,
    //   // set 'false' to stop scaling
    //   scale: true,
    //   // set 'false' to stop glitch blending
    //   blend : true,
    //   // select blend mode type
    //   blendModeType : 'hue',
    //   // set min time for glitch 1 elem
    //   glitch1TimeMin : 600,
    //   // set max time for glitch 1 elem
    //   glitch1TimeMax : 900,
    //   // set min time for glitch 2 elem
    //   glitch2TimeMin : 10,
    //   // set max time for glitch 2 elem
    //   glitch2TimeMax : 115,
    //   //
    //   zIndexStart: 2
    // });
    //
    // $( ".glitch-bg" ).mgGlitch({
    //   // set 'true' to stop the plugin
    //   destroy : false,
    //   // set 'false' to stop glitching
    //   glitch: true,
    //   // set 'false' to stop scaling
    //   scale: true,
    //   // set 'false' to stop glitch blending
    //   blend : true,
    //   // select blend mode type
    //   blendModeType : 'hue',
    //   // set min time for glitch 1 elem
    //   glitch1TimeMin : 200,
    //   // set max time for glitch 1 elem
    //   glitch1TimeMax : 400,
    //   // set min time for glitch 2 elem
    //   glitch2TimeMin : 10,
    //   // set max time for glitch 2 elem
    //   glitch2TimeMax : 100,
    //   //
    //   zIndexStart: 2
    // });

    // gandum right
    const $gandumwrapper = $('#gandum-wrapper');
    $gandumwrapper.addClass('animated bounceInRight');
    setTimeout(()=> {
      $gandumwrapper.removeClass('animated bounceInRight');
    }, 1500);

    // glitch-text left
    const $glitchtextwrapper = $('#glitch-text-wrapper');
    $glitchtextwrapper.addClass('animated bounceInLeft');
    setTimeout(()=> {
      $glitchtextwrapper.removeClass('animated bounceInRight');
    }, 1500);

  })

}
