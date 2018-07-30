//设置根元素字体
var win = window,
doc = document;
function setFontSize() {
　　var winWidth = $(window).width();
 
　　//750这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
　　var size = (winWidth / 720) * 100;
　　doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
};
//这里我们给个定时器来实现页面加载完毕再进行字体设置
setTimeout(function() {
　　//初始化
　　setFontSize();
}, 100);



.注册 {
    font-size: 32px;
    font-family: "STHeitiSC";
    color: rgb(255, 255, 255);
    line-height: 0.351;
    -moz-transform: matrix( 0.44444444444444,0,0,0.44453125,0,0);
    -webkit-transform: matrix( 0.44444444444444,0,0,0.44453125,0,0);
    -ms-transform: matrix( 0.44444444444444,0,0,0.44453125,0,0);
    position: absolute;
    left: 259.947px;
    top: 43.981px;
    z-index: 9;
  }
  