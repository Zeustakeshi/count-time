var milisecond = 0 ;
var second = 0 ;
var munite = 0;
var reset = false;
var stop2 = false;
var hiden = false;
var timereal = true; 
function loop(){
    var demdung  = setInterval (function  (){
        if (reset == true){
            document.getElementById("start").innerText = "Bắt Đầu"
            clearInterval (demdung)
            milisecond = 0;
            second = 0;
            munite = 0;
        }
        if (hiden == false){
            document.getElementById('s').innerHTML = munite;
            document.getElementById('m').innerHTML = milisecond;
            document.getElementById('h').innerHTML = second;

        }else{
            document.getElementById('s').innerHTML = munite;
            document.getElementById('m').innerHTML = "[:] ";
            document.getElementById('h').innerHTML = second;
        }
    
        if (stop2 == false){
            ++milisecond;
            if (milisecond >99 ){
                milisecond = 0;
                ++second;
            }
            if (second > 59){
                second = 0;
                ++munite;
            }  
        }else{
            clearInterval(demdung)
        }
    
    },10)
}
function start(){
    timereal = false
    reset = false
    stop2 = false
    var b = document.getElementById("start")
    if ( b.innerText == "Bắt Đầu" || b.innerText == "Tiếp Tục"){
        b.innerText = "Tạm Dừng"
        if (stop2 == false){
            loop();
        } 
      
    }
    else
    {
        b.innerText = "Tiếp Tục"
        stop2 = true; 
       timereal = false;
    }
}


function Reset (){
    timereal = false;
    reset = true;
    milisecond = 0;
    second = 0;
    munite = 0;
    document.getElementById('s').innerHTML = munite;
    document.getElementById('m').innerHTML = milisecond;
    document.getElementById('h').innerHTML = second;
}





function hiden_mls (){
    
    var a= document.getElementById("hiden_mls");
    if (a.innerText == "Ẩn Mili Giây"){
        a.innerText = "Hiện Mili Giây"
        hiden = true;
    }
    else{
        a.innerText = "Ẩn Mili Giây"
        hiden = false;
    }
   
}

function ghi (){
    alert (munite+ " : " + second + " : " + milisecond)
}

function date_time(id)
{
        date = new Date;
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        if (timereal == true){
            document.getElementById("s").innerHTML = ''+s;
            document.getElementById("m").innerHTML = ''+m;
            document.getElementById("h").innerHTML = ''+h;
            setTimeout('date_time("'+"s"+'");','1000');
            return true;
        }
        
}

function realtime(){
    timereal = true;
    window.onload = date_time('s');
    
}


function Reset2 (){
        timereal = false;
        reset = true;
        milisecond = 0;
        second = 0;
        munite = 0;
        document.getElementById('s').innerHTML = "?";
        document.getElementById('m').innerHTML = "?";
        document.getElementById('h').innerHTML = "?";
}



function infomation (){
    document.getElementById("infomation").innerHTML = '<div class="mess"> <button id="close1" class="button-35" onclick="close1()">X</button> <p id="messen"><b>Hướng dẫn sử dụng :</b> <br> <div style="text-align: left; margin-left: 5px;"> <ul> <li> Click <b>Bắt Đầu/Tạm dừng</b>  để bắt đầu đếm giờ hoặc tạm dừng đếm giờ. </li> <li> Click <b>Đặt lại</b>  để đặt thời gian lại như ban đầu.</li> <li>Có thể <b>Ẩn/Hiện mili gây</b> để đỡ rối mắt hơn :)</li> <li>Click <b>Time real</b> để xem thời gian thực</li> <li> Click <b>Bắt Đầu</b>  để bắt đầu đếm giờ.</li> </ul> </div> <b style="text-align: center;">Chúc cậu trải nghiệm vui vẻ !!!!</b> <br> </p> </div>'
    
}
function copyright(){
    document.getElementById('s').innerHTML = "P";
    document.getElementById('m').innerHTML = "H";
    document.getElementById('h').innerHTML = "M";
}

function close1 (){
    alert("vui thì sài không vui thì thôi ai mượn sài")
    document.getElementById("infomation").innerHTML = '<div class="ifo" id="infomation"> <button id="info"  class="button-30" onclick="infomation()">?</button> </div>'

}
function alarm (){
    document.getElementById("nut")
    
}
function checkInput() {
    var hour = document.getElementById("hour").value;
    alert (hour)
}