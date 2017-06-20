var Common = {
	init : function(){
		this.addEvent();
	},
	addEvent : function(){
		$("#more_sel").click(function(){
				if($(this).hasClass("active")){
					$(this).addClass("active");
					$(".more_s").css("display","none");
				}else{
					$(this).removeClass("active");
					$(".more_s").css("display","block");
				}
			});
			
			$(".more_s_i").click(function(e){
				$(".more_sel_val").text($(this).find("span").text());
				$("#more_sel").removeClass("active");
				$(".more_s").css("display","none");
				e.stopPropagation();
			});
			
			$(window).click(function(e){
				if($(e.target).parents("#more_sel").length==0)
					$(".more_s").css("display","none");
			});
	}
};
Common.init();
