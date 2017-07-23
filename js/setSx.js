(function($){
	document.addEventListener("touchmove",function(e){
		e.preventDefault();
	},{passive:false});
	
	$(".sP_click>a").tap(function(){
		//alert(1)
		$(".motai").css("height","35.5rem")
	})
	$(".motai").tap(function(){
		$(".motai").css("height","0")
	})
	$(".fa-check").tap(function(){
	    //alert(1)
	    if($(this).siblings("input").attr("type")!="text"){
	    	$(this).siblings("input").attr("type","text")
	    }
	    else{
	    	$(this).siblings("input").attr("type","password")
	    }
		
	})
	})(Zepto)

