
// 获取页面数据  加载到页面上
var getJson = {
	init: function() {
		this.getUrlId(); // 获取地址栏的彩票id
	},
	getUrlId: function() {
		var url = window.location.href;
		var urlArr = url.split("?");
		getJson.lotId = decodeURI(urlArr[1]);
		
		
		$(".lot_class_name").html(getJson.lotId); // 更换当前显示的彩票名字
		this.initLotData(); // load  json 数据
	},
	initLotData: function() {
		$.get("lotData.json", function(data) {
			getJson.anDataLoad(data);
		});
	},

	anDataLoad: function(data) { // 解析json  数据
		var id = getJson.lotId;
		var index = getJson.lotPanelIsShow(id);
//		var data = JSON.parse(data);
		getJson.proData11sel5(data, index);
	},

	proData11sel5: function(data, index) {
		var _html = ""; // 彩票星数栏
		$.each(data[index].lotInfo, function(i, item) {
			var text = "";
			$.each(item.item, function(i, item) {
				text += item.title + "?";
				$.each(item.info, function(i, item) {
					text += item.val + ",";
				});
				text = text.substring(0, text.length - 1);
				text += "|";
			});
			var text = text.substring(0, text.length - 1);
			_html += '<li class="m_t_1_i" data-id=' + text + '>' + item.title + '</li>';
		});
		$(".menu_type .m_t_1").html(_html);
		// 添加代码之后 默认促发彩票下星号的第一个的点击事件
		$(".menu_type .m_t_1 .m_t_1_i:first-child").trigger("click");
	},

	lotPanelIsShow: function(id) {
		if(id == "山东11选5" || id == "广东11选5" || id == "江西11选5" || id == "多乐11选5") {
			return 0;
		} else if(id == "福彩3D") {
			return 1;
		} else {
			return 2;
		}
	},

};

var LogBet = {
	init : function(){
		getJson.init();
		
		this.addEvent();
	},
	
	addEvent : function(){
		// 返回按钮
		$(".return_img").click(function(){ window.history.back();  }); 
		$(".return_text").click(function(){ window.history.back();  }); 
		
		// 右侧帮助按钮
		$(".menu_help").click(function(){
			if($(this).hasClass("active")){
				$(".play_help").css("display","none");
				$(this).removeClass("active");
			}else{
				$(".play_help").css("display","block");
				$(this).addClass("active");
			}
		});
		
		
		// 向下按钮  选择更多玩法
		$(".menu_more").click(function(){
			if($(this).hasClass("active")){
				$(".menu_type").css("display","none");
				$(this).removeClass("active").attr("src","../../img/bet/lotBet/menu_down.png");
			}else{
				$(".menu_type").css("display","block");
				$(this).addClass("active").attr("src","../../img/bet/lotBet/menu_up.png");
			}
		});
		
		// 点击查看完整走势
		$(".look_more").click(function(){
			window.location.href = "../../home/lotRecord/lotItemRecord.html";
		});
		
		// 查看开机历史记录
		$(".lot_down").click(function(){
			if($(this).hasClass("active")){
				$(".record_more").css("display","none");
				$(this).removeClass("active").attr("src","../../img/bet/lotBet/lc_down.png");
			}else{
				$(".record_more").css("display","block");
				$(this).addClass("active").attr("src","../../img/bet/lotBet/lc_up.png");
			}
		});
		
		
		// 彩票玩法面板  玩法按钮点击  左边栏
		$("body").delegate(".menu_type .m_t_1 .m_t_1_i","click",function(){
			$(".menu_type .m_t_1 .m_t_1_i").removeClass("active");
			$(this).addClass("active");
			var data = $(this).attr("data-id");
			LogBet.method.getModelClass(data);
		});
		
		//  彩票具体玩法项点击事件
		$("body").delegate(".menu_type .m_t_2 .m_t_2_i","click",function(){
			$(".menu_type .m_t_2 .m_t_2_i").removeClass("active");
			$(this).addClass("active");
			changeLotteryPanel.panelShow();
			$(".menu_type").css("display","none");
			$(".menu_more").removeClass("active").attr("src","../../img/bet/lotBet/menu_down.png");
			$(".title .title_val").text($(".menu_type .m_t_1 .m_t_1_i.active").text()+"-"+$(this).text());
		});
		
		// 全 大 小 奇 偶 清
		$(".lot_quick_item").click(function(){
			LogBet.method.lotTextClick($(this));
		});
		
		//  彩票球点击事件
		$(".lot_qiu_item").click(function(){
			if($(this).hasClass("active"))
				$(this).removeClass("active");
			else
				$(this).addClass("active");
		});
		
		// 趣味型点击事件
		$(".qu_wei .qu_wei_item").click(function(){
			if($(this).hasClass("active"))
				$(this).removeClass("active");
			else
				$(this).addClass("active");
		});
		
		
		
		
	},
	method: {
		getModelClass: function(data) {
			var dataArr = data.split("|");
			var _html = "";
			$.each(dataArr, function(i, item) {
				var item_html = "";
				var itemArr = item.split("?");
				item_html += '<div class="m_t_2_title">' + itemArr[0] + '</div>';
				var itemSonArr = itemArr[1].split(",");
				$.each(itemSonArr, function(i, item) {
					item_html += '<span class="m_t_2_i">' + item + '</span>';
				});
				_html += item_html;
			})
			$(".menu_type .m_t_2").html(_html);
			$(".menu_type .m_t_2 .m_t_2_i:nth-child(2)").addClass("active");
			$(".title .title_val").text($(".menu_type .m_t_1 .m_t_1_i.active").text()+"-"+$(".menu_type .m_t_2 .m_t_2_i.active").text());
			changeLotteryPanel.panelShow();
		},
			
		lotTextClick: function($obj) {
			// 如果点击的 清  按钮  则不添加样式
			$obj.parent(".lot_quick").find(".lot_quick_item").removeClass("active");
			var id = $obj.text();
			var numObj = $obj.parent(".lot_quick").next();
			numObj.find(".lot_qiu_item").removeClass("active");
			var specialT = $(".menu_type .m_t_2 .m_t_2_i.active").text();
			var lot_class_name = $(".lot_class_name").text();
			switch(id) {
				case "全":
					numObj.find(".lot_qiu_item").addClass("active");
					LogBet.method.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "大":
					numObj.find(".lot_qiu_item:gt(4)").addClass("active");
					LogBet.method.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "小":
					numObj.find(".lot_qiu_item:lt(5)").addClass("active");
					LogBet.method.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "奇":
					if(lot_class_name=="山东11选5"||lot_class_name=="广东11选5"||lot_class_name=="江西11选5"||lot_class_name=="多乐11选5"){
						numObj.find(".lot_qiu_item:nth-child(1)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(3)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(5)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(8)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(10)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(12)").addClass("active");
					}else{
						numObj.find(".lot_qiu_item:nth-child(2)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(4)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(7)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(9)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(11)").addClass("active");
					}
					LogBet.method.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "偶":
					if(lot_class_name=="山东11选5"||lot_class_name=="广东11选5"||lot_class_name=="江西11选5"||lot_class_name=="多乐11选5"){
						numObj.find(".lot_qiu_item:nth-child(2)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(4)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(7)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(9)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(11)").addClass("active");
					}else{
						numObj.find(".lot_qiu_item:nth-child(1)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(3)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(5)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(8)").addClass("active");
						numObj.find(".lot_qiu_item:nth-child(10)").addClass("active");
					}
					LogBet.method.lotTextSpeacil(specialT, numObj);
					$obj.addClass("active");
					break;
				case "清":
					break;
			}
		},
		lotTextSpeacil: function(specialT, numObj) {
			if(specialT == "前三组选胆拖" || specialT == "前二组选胆拖" || specialT == "任选二中二" || specialT == "任选三中三" || specialT == "任选四中四" || specialT == "任选五中五" || specialT == "任选六中五" || specialT == "任选七中五" || specialT == "前三组选胆拖" || specialT == "任选八中五") {
				numObj.find(".lot_qiu_item.active").each(function() {
					var $obj = $(this);
					numObj.parent(".lot_b_i_i").prev(".lot_b_i_i").find(".lot_qiu_item.active").each(function() {
						if($obj.text() == $(this).text()) {
							$(this).removeClass("active");
						}
					});
				});
			}
		},
		
		
		
		
	},
};

LogBet.init();
