// {}是ES6作用域
/*
* 数据面板canvas
* */
{
  // 颜色配置
  const COLOR = {
    lightGreen: '#00d7af',
    lightWhite: '#F8F8FF',
    lightGrey: '#E0E0E0',
    lightBlack: '#343a42',
    black: '#000000',
    white: '#ffffff',
    red: '#dc3547',
    blue: '#007bfb',
    yellow: '#ffc108',
    cyan: '#17a2b9',
    grey: '#6c757e',
    green: '#28a748',
    orange: '#ffa500',
    transparent: 'rgba(255, 255, 255, 0)'
  };

  // Global FPS setting
  zeu.Settings.fps = 120;

  /*
  * Digital Clock
  * */
  let digitalClock = new zeu.DigitalClock('digital-clock', {
    numberColor: COLOR.orange,
    dashColor: COLOR.transparent,
  });
}
