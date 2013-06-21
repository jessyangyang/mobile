// JavaScript Document
function $(element){
    return element = document.getElementById(element);
    }
    function $D(){
    var d=$('class1content');
    var h=d.offsetHeight;
    var maxh=300;
    function dmove(){
    h+=50; //层展开速度
    if(h>=maxh){
    d.style.height='300px';
    clearInterval(iIntervalId);
    }else{
    d.style.display='block';
    d.style.height=h+'px';
    }
    }
    iIntervalId=setInterval(dmove,2);
    }
    function $D2(){
    var d=$('class1content');
    var h=d.offsetHeight;
    var maxh=300;
    function dmove(){
    h-=50;//层收缩速度
    if(h<=0){
    d.style.display='none';
    clearInterval(iIntervalId);
    }else{
    d.style.height=h+'px';
    }
    }
    iIntervalId=setInterval(dmove,2);
    }
    function $use(){
    var d=$('class1content');
    var sb=$('stateBut');
    if(d.style.display=='none'){
    $D();
    sb.innerHTML='展开';
    }else{
    $D2();
    sb.innerHTML='收缩';
    }
    }