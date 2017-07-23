(function($){
	document.addEventListener("touchmove",function(e){
		e.preventDefault();
	},{passive:false});
	console.log(document.clientWidth)
	$(".sw_sib").tap(function(){
		$(".motai").css("display","block")
	})
	$(".motai").tap(function(){
		$(".motai").css("display","none")
	})
	
})(Zepto)
