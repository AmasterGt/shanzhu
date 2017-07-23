(function($){
	document.addEventListener("touchmove",function(e){
		e.preventDefault();
	},{passive:false});
	var time=60
	var timer=null;
     $("#fasong").tap(function(){
 		if(time>=60){
 			timer=setInterval(function(){
 				time--;
 			
 				if(time>0){
 					$("#fasong").val(time+"s")
 				}
 			   else if(time<=0){
 					$("#fasong").val("发送验证码")
 					time=60;
 					
 					clearInterval(timer)
 					
 				}
 			},1000)
 			 $("#fasong").val(time+"s")
 		}
 		else{
 			return;
 		}
     })
	})(Zepto)

