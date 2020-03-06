//224 x 288 px
//28 x 36 blocks
// 8px blocks

function resize(){
    var width = document.body.clientWidth-50;
    var height = document.body.clientHeight-50;
    var wscale = Math.floor(width/224);
    var hscale = Math.floor(height/288);
    var scale;
    if(wscale<hscale){
        scale=wscale;
    }else{
        scale=hscale;
    }
    scale = 'scale('+scale+')'
    document.getElementsByTagName('canvas')[0].style.transform=scale;
}

window.addEventListener('resize',resize);
resize();