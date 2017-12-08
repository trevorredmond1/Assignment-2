/*vars*/
var ImageLeft = 7;
var ImageTop = 15;
var ImageWidth = 40;
var i = 0;
var vnewimage = document.getElementById("newimage");

/***controlbar***/

document.getElementById("controldown").addEventListener("click",
function(){
    open_controlbar("click")
});

document.getElementById("controldown").addEventListener("mouseover",
function(){
    open_controlbar("mouseover")
});

/*** functions***/

function image_position(button){
    if((button === "mleft") || (button === 37)){
        ImageLeft = ImageLeft-1;
        document.getElementById("display").style.left = ImageLeft+"%";
    }
    
    else if ((button === "mright") || (button === 39)){
        ImageLeft = ImageLeft+1;
        document.getElementById("display").style.left = ImageLeft+"%";
    }
    
    else if ((button === "mdown")|| (button === 40)){
        ImageTop = ImageTop+1;
        document.getElementById("display").style.top = ImageTop+"%";
    }
    
    else if ((button === "mup") || (button === 38)){
        ImageTop = ImageTop-1;
        document.getElementById("display").style.top = ImageTop+"%";
    }
    
    else if ((button === "mplus") || (button === 107)){
        ImageWidth = ImageWidth+5;
        document.getElementById("displaypic").style.width = ImageWidth+"%";
    }
    
    else if ((button === "mminus") || (button === 109)){
        ImageWidth = ImageWidth-5;
        document.getElementById("displaypic").style.width = ImageWidth+"%";
    }
}

function open_controlbar(input){
    
    if (i === 0){
        document.getElementById("controls").style.top = "0%";
        i = 1;
    }
    
    else if (i === 1){
        document.getElementById("controls").style.top = "-6%";
        i = 0;
    }
}
/***control bar buttons***/

document.getElementById("controls").addEventListener("click",
function(ev){
    image_position(ev.target.id);
});

document.getElementById("controls").addEventListener("keyup",
function(ev){
    image_position(ev.keyCode)
});

/***update title***/

document.getElementById("titleupdate").addEventListener("keyup", function(ev){
    document.getElementById("title").innerHTML = document.getElementById("titleupdate").value;
});

/***update image***/

vnewimage.addEventListener("keyup",
function(ev){
    if (ev.keyCode === 13) {
        document.getElementById("displaypic").src = "'"+ vnewimage.value +"'";
        console.log("worked");
    }
});