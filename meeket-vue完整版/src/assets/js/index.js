function circle(id, per, title) {
    var canvas = document.getElementById(id),  //获取canvas元素
        context = canvas.getContext('2d'),  //获取画图环境，指明为2d
        // centerX = canvas.width/2,   //Canvas中心点x轴坐标
        // centerY = canvas.height/2,  //Canvas中心点y轴坐标
        // rad = (5/3)*Math.PI/100;//将300度分成100份，那么每一份就是rad度
        rad = Math.PI/300*5
    var  clientWidth = document.documentElement.clientWidth;
    var canvasWidth = Math.floor(clientWidth*200/720);
    var innerR = canvasWidth * 0.6;

    canvas.setAttribute('width',canvasWidth*2);
    canvas.setAttribute('height',canvasWidth*2);
    context.translate(canvasWidth,canvasWidth);
    // 渐变
    var grd=context.createLinearGradient(0,canvasWidth,canvasWidth,0);
    grd.addColorStop(0,"#0f72f5");
    grd.addColorStop(1,"#61b1f8");
    //绘制运动外圈
    function inCircle(per){
        context.save();
        context.strokeStyle = grd; //设置描边样式
        context.lineWidth = 15; //设置线宽
        context.beginPath(); //路径开始
        context.arc(0, 0, innerR , Math.PI/3*2, per*rad+Math.PI/3*2, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，false顺时针/true逆时针)
        context.lineCap="round";
        context.stroke(); //绘制
        context.restore();
    }
    //绘制外圈
    function outCircle(){
        context.save();
        context.strokeStyle = "#e8e8e8"; //设置描边样式
        context.lineWidth = 2; //设置线宽
        context.beginPath();
        context.arc(0, 0, innerR , Math.PI/3, Math.PI-Math.PI/3, true);
        context.stroke();
        context.restore();
    }
    //百分比文字绘制
    function text(per,title){
        context.save();
        context.fillStyle = "#292c34";
        let fontTop = window.innerWidth/375*35+'px'
        context.font = fontTop+ " Arial";
        //绘制字体，并且指定位置
        if(per == 100 ) {
            context.fillText(per+"%", -canvasWidth/2.5, canvasWidth/10);
        }else if( per % 1 !== 0 ) {
            context.fillText(per+"%", -canvasWidth/2.3, canvasWidth/10);
        }else {
            context.fillText(per+"%", -canvasWidth/3.3, canvasWidth/10);
        }

        context.fillStyle = "#858585";
        let fontBot = window.innerWidth/375*24+'px'
        context.font = fontBot + " Arial";
        //绘制字体，并且指定位置
        context.fillText(title, -canvasWidth/5, canvasWidth/2.5);
        context.stroke();
        context.restore();
    }
    context.clearRect(0, 0, canvas.width, canvas.height);
    text(per,title)
    outCircle();
    inCircle(per);

}
export {circle}