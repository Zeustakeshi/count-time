var milisecond = 0 ;
var second = 0 ;
var munite = 0;
var reset = false;
var stop2 = false;
var hiden = false;
var timereal = true; 
var alarmClock = false;
var audio = new Audio('sound.mp3');
var playAudio = false;

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
                if (second < 10){
                    second = "0" + second;
                }
            }
            if (second > 59){
                second = 0;
                ++munite;
                if (munite < 10){
                    munite = "0" + munite;
                }
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
    var save = document.getElementById("start")
    if ( save.innerText == "Bắt Đầu" || save.innerText == "Tiếp Tục"){
        save.innerText = "Tạm Dừng"
        if (stop2 == false){
            loop();
        } 
      
    }
    else
    {
        save.innerText = "Tiếp Tục"
        stop2 = true; 
       timereal = false;
    }
}


function Reset (){
    alarmClock = false;
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

function getRealTime(){
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
}

function date_time(id)
{
        getRealTime()
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
        audio.pause()
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
    document.getElementById("infomation").innerHTML = '<div class="ifo" id="infomation"> <button id="info"  class="button-30" onclick="infomation()" style="position: fixed; margin-top: -77vh; z-index: 1000;" >?</button> </div>'

}
function alarm (){
    alarmClock = true;
    var chuyen = true;
   var getAlarm = document.getElementById("alarm")
   if (getAlarm.innerText == "Alarm"){
        var a = confirm ("Có phải bạn đang muốn đặt báo thức không?") 
        
        if (a == true){
            date_time(s,m,h)
            document.getElementById("sum_sub").innerHTML= '<button id="cong" class="button-30 " onclick="cong_tru (this)" value="+" >+</button> <button id="tru" class="button-30 " onclick="cong_tru (this)" value="-">-</button>'

        }else{
            Reset2()
        }
        
        
   }else {
        var save= confirm ("Bạn muốn lưu lại không?") 
        var chuyen = false
        if (save == false){
            hour_Alarm = h
            munite_Alarm = m
            second_Alarm = "00"
            chuyen = false;
        }
        if (save == true)
        {   
            
            document.getElementById("sum_sub").innerHTML=""
            if ((munite_Alarm - m) < 0 ){
                hour_Alarm += 24;
                alert ("Báo thức sẽ đổ chuông sau " + hour_Alarm +" giờ " + munite_Alarm + " phút")
            }  
            else if ((hour_Alarm - h) == 0 ){
                hour_Alarm -= h ;
                alert("Báo thức sẽ đổ chuông sau: " + (munite_Alarm - m)+ " phút nữa !!!")
            }else if ((hour_Alarm - h) != 0 ){
                alert("Báo thức sẽ đổ chuông sau: " + (hour_Alarm - h) + " giờ : " + (munite_Alarm - m)+ " phút nữa !!!")
            }
            second_Alarm = 0;
            if (alarmClock == true){
                dem_nguoc(hour_Alarm, (munite_Alarm -m), second_Alarm)
            }
            
            chuyen = true;
        }
   }
    if (chuyen == true){
        // getAlarm.innerText = getAlarm.innerText == "Alarm" && a == true || getAlarm.innerText == "" && b == true ? "Save" : "Alarm"  
        if (getAlarm.innerText == "Alarm" && a == true){
            getAlarm.innerText = "Save"
        } 
        else if (getAlarm.innerText == "Save" &&  save== true){
            getAlarm.innerText = "Alarm"
        }
    }
   
}
getRealTime()
var hour_Alarm = h;
var munite_Alarm = m;
var second_Alarm = "00";
function cong_tru (obj){
    
    if (obj.value == "+"){
        munite_Alarm += 1;
        
        if (munite_Alarm > 59){
            hour_Alarm += 1;
            munite_Alarm = 0;
        } 
    }else{
        munite_Alarm -= 1;
        
        if (munite_Alarm < 0){
            hour_Alarm -= 1;
            munite_Alarm = 59;
        } 
    }
    timereal = false
    document.getElementById('s').innerHTML = second_Alarm;
    document.getElementById('m').innerHTML = munite_Alarm < 10 ? "0" + munite_Alarm : munite_Alarm;
    document.getElementById('h').innerHTML = hour_Alarm < 10 ? "0" + hour_Alarm : hour_Alarm;
       
}

function dem_nguoc (hour_now, munite_now, second_now){
    var demNguoc = setInterval(function (){
        second_now -= 1;
        if(second_now < 0) {
            second_now = 59
            munite_now -= 1;
        }
        if (munite_now < 0){
            munite_now = 59;
            hour_now -= 1;
        }
        
        if (hour_now <= 0 && munite_now == 0 && second_now == 0){
            audio.play();
            
            getRealTime()
            hour_Alarm = h;
            munite_Alarm = m;
            second_Alarm = "00";
            clearInterval(demNguoc);
            alarmClock = false  
        }
        if(alarmClock == false){
            getRealTime()
            hour_Alarm = h;
            munite_Alarm = m;
            second_Alarm = "00";
            clearInterval(demNguoc);
        }
        document.getElementById('s').innerHTML = second_now;
        document.getElementById('m').innerHTML = munite_now;
        document.getElementById('h').innerHTML = hour_now;
    }, 1000 )
    
}

