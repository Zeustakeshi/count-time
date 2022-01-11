var milisecond = 0 ;
var second = 0 ;
var munite = 0;
var reset = false;
var stop2 = false;
var hiden = false;
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
            document.getElementById('screen2').innerHTML = munite+ " : " + second + " : " + milisecond
        }else{
            document.getElementById('screen2').innerHTML = munite+ " : " + second 
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
    reset = false
    stop2 = false
    var b = document.getElementById("start")
    if ( b.innerText == "Bắt Đầu" || b.innerText == "Tiếp Tục"){
        b.innerText = "Tạm Dừng"
        if (stop2 == false){
            loop();
           
        }else if (stop2 == true){
            
            document.getElementById('screen2').innerHTML = munite + " : " + second + " : " + milisecond
              
        }
        
    }
    else
    {
        b.innerText = "Tiếp Tục"
        stop2 = true; 
       
    }
}


function Reset (){
    
    reset = true;
    milisecond = 0;
    second = 0;
    munite = 0;
    

    document.getElementById('screen2').innerHTML = "0 : 0 : 0"
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
