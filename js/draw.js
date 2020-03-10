var c = document.getElementsByTagName('canvas')[0];
var ctx = c.getContext('2d');


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
    c.width=scale*224;
    c.height=scale*288;
    c.style.width=scale*224;
    c.style.height=scale*288;
    draw()
    console.log(scale)
}

function draw(){
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(document.getElementById('background'),0,0,c.width,c.height);
    setTimeout(draw)
}
