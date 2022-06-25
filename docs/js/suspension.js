function displayImg(image) {  
    var img = document.getElementById(image);  

    //var x = event.clientX + document.body.scrollLeft + 20;  
    //var y = event.clientY + document.body.scrollTop - 5;   
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;  
    img.style.left = x + 10 + "px";  
    img.style.top = y + 10 + "px";  
    img.style.display = "block";  
}  
//图片消失
function vanishImg(image){ //theEvent用来传入事件，Firefox的方式
let imgId = image;
if(typeof(HTMLElement)!="undefined"){    //给firefox定义contains()方法，ie下不起作用     
    HTMLElement.prototype.contains=function(obj){
            while(obj!=null&&typeof(obj.tagName)!="undefind"){ //通过循环对比来判断是不是obj的父元素
            if(obj==this) return true;
            obj=obj.parentNode;
            }
            return false;
        };
}
    var theEvent = arguments.callee.caller.arguments[0] || window.event
    if (theEvent){
        var browser=navigator.userAgent;   //取得浏览器属性
        if (browser.indexOf("Firefox")>0){ //如果是Firefox
        if (document.getElementById(imgId).contains(theEvent.relatedTarget)) { //如果是子元素
            return;   //结束函式
        }
    }
        //if (browser.indexOf("MSIE")>0){ //如果是IE
                //if (document.getElementById(imgId).contains(event.toElement)) { //如果是子元素
                    //return; //结束函式
                //}
    // }
    }
/*要执行的操作*/
    var img = document.getElementById(imgId);
    img.style.display = "none";
}