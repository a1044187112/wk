var Index = {
	init : function(){
		this.addEvent();
	},
	
	addEvent : function(){
		// 彩种点击事件
		$(".lot_m_i").click(function(){
			var lot_class_name = $(this).find(".lot_m_text_i:first-child").text();
			window.location.href = "home/bet/lotBet.html?"+lot_class_name;
		});
	},
};
Index.init();
