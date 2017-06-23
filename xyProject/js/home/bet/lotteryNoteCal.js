var lotteryNoteCal = {
	init: function() {
		var lotClassText = $(".lot_class_name ").text();
		if(lotClassText == "福彩3D") {

		} else if(lotClassText == "广东11选5" || lotClassText == "山东11选5" || lotClassText == "江西11选5" || lotClassText == "多乐11选5") {
			lotteryNoteCal.lot11Sel5.getNumArr();
		}else{
			lotteryNoteCal.shishicai.getNumArr();
		}
	},
	lot11Sel5: {
		getNumArr: function() {
			var modelText = $(".menu_type .m_t_2 .m_t_2_i.active").text();
			var menuText = $(".menu_type .m_t_1 .m_t_1_i.active").text();
			switch(modelText) {
				case "前三直选复式":
					lotteryNoteCal.lot11Sel5.zhixuan();
					break;
				case "前三组选复式":
					lotteryNoteCal.lot11Sel5.zuxuan();
					break;
				case "前二组选复式":
					lotteryNoteCal.lot11Sel5.zuxuan();
					break;
				case "前三组选胆拖":
					lotteryNoteCal.lot11Sel5.dantuo(3);
					break;
				case "前二直选复式":
					lotteryNoteCal.lot11Sel5.zhixuan();
					break;
				case "不定位":
					lotteryNoteCal.lot11Sel5.budingwei();
					break;
				case "前二组选胆拖":
					lotteryNoteCal.lot11Sel5.dantuo(2);
					break;
				case "定位胆":
					lotteryNoteCal.lot11Sel5.dingweidan();
					break;
				case "趣味_定单双":
					lotteryNoteCal.lot11Sel5.danshuang();
					break;
				case "趣味_猜中位":
					lotteryNoteCal.lot11Sel5.zhognwei();
					break;
				case "任选一中一":
					lotteryNoteCal.lot11Sel5.renxuan(1);
					break;
				case "任选二中二":
					if(menuText == "任选复式")
						lotteryNoteCal.lot11Sel5.renxuan(2);
					else
						lotteryNoteCal.lot11Sel5.dantuo(2);
					break;
				case "任选三中三":
					if(menuText == "任选复式")
						lotteryNoteCal.lot11Sel5.renxuan(3);
					else
						lotteryNoteCal.lot11Sel5.dantuo(3);
					break;
				case "任选四中四":
					if(menuText == "任选复式")
						lotteryNoteCal.lot11Sel5.renxuan(4);
					else
						lotteryNoteCal.lot11Sel5.dantuo(4);
					break;
				case "任选五中五":
					if(menuText == "任选复式")
						lotteryNoteCal.lot11Sel5.renxuan(5);
					else
						lotteryNoteCal.lot11Sel5.dantuo(5);
					break;
				case "任选六中五":
					if(menuText == "任选复式")
						lotteryNoteCal.lot11Sel5.renxuan(6);
					else
						lotteryNoteCal.lot11Sel5.dantuo(6);
					break;
				case "任选七中五":
					if(menuText == "任选复式")
						lotteryNoteCal.lot11Sel5.renxuan(7);
					else
						lotteryNoteCal.lot11Sel5.dantuo(7);
					break;
				case "任选八中五":
					if(menuText == "任选复式")
						lotteryNoteCal.lot11Sel5.renxuan(8);
					else
						lotteryNoteCal.lot11Sel5.dantuo(8);
					break;
			}
		},

		zhixuan: function() {
			var a = lotteryNoteCal.lot11Sel5.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zhix(a);
			lotteryNoteCal.setPanelInfo(data);
		},

		zuxuan: function() {
			var arrLen = $(".lot_menu1 .lot_b_i_i.active").text();
			var b = 0;
			if(arrLen == "三码") b = 3;
			else if(arrLen == "二码") b = 2;
			else b = 1;
			var a = lotteryNoteCal.lot11Sel5.zuxuanGetNumArr();
			var method = game.lottery.betting_note.zux(b);
			var data = method(a);
			lotteryNoteCal.setPanelInfo(data); 
		},

		dantuo: function(b) {
			var a = lotteryNoteCal.lot11Sel5.zhixuanGetNumArr();
			var method = game.lottery.betting_note.dt(b);
			var data = method(a);
			if(data)
				lotteryNoteCal.setPanelInfo(data);
			else	
				lotteryNoteCal.setPanelInfo([]);
		},
		
		budingwei : function(){
			var a = lotteryNoteCal.lot11Sel5.zhixuanGetNumArr();
			var data = game.lottery.betting_note.bdw(a[0]);
			lotteryNoteCal.setPanelInfo(data);
		},
		
		dingweidan : function(){
			var a = lotteryNoteCal.lot11Sel5.zhixuanGetNumArr();
			var data = game.lottery.betting_note.dwd(a,3);
			lotteryNoteCal.setPanelInfo(data);
		},
		danshuang : function(){
			var a = new Array();
			$(".qu_wei .qu_wei_item").each(function(){
				if($(this).hasClass("active"))
					a.push(parseInt($(this).attr("data-id")));
			});
			var data = game.lottery.betting_note.ds(a);
			lotteryNoteCal.setPanelInfo(data);
		},
		zhognwei : function(){
			var a = lotteryNoteCal.lot11Sel5.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zhongw(a[0]);
			lotteryNoteCal.setPanelInfo(data);
		},
		
		renxuan : function(len){
			var method = game.lottery.betting_note.renx(len);
			var a = lotteryNoteCal.lot11Sel5.zhixuanGetNumArr();
			var data = method(a[0]);
			if(data)
				lotteryNoteCal.setPanelInfo(data);
			else 
				lotteryNoteCal.setPanelInfo([]);
		},
		
		zhixuanGetNumArr: function() { 
			// 获取选中的号码 
			var lotBetNum = new Array();
			$(".lot_panel .lot_b_i_i").each(function() {
				if($(this).css("display") == "block") {
					var text = new Array();
					$(this).find(".lot_qiu_item").each(function() {
						if($(this).hasClass("active")) {
							text.push(parseInt($(this).text()));
						}
					});
					lotBetNum.push(text);
				}
			});
			return lotBetNum;
		},

		zuxuanGetNumArr: function() {
			var text = [];
			$(".lot_panel .lot_b_i_i").each(function() {
				if($(this).css("display") == "block") {
					$(this).find(".lot_qiu_item").each(function() {
						if($(this).hasClass("active")) {
							text.push(parseInt($(this).text()));
						}
					});
				}
			});
			return text;
		},
	},


	shishicai : {
		getNumArr : function(){
			var modelText = $(".menu_type .m_t_2 .m_t_2_i.active").text();
			var menuText = $(".menu_type .m_t_1 .m_t_1_i.active").text();
			switch (modelText){
				case "直选复式":if(menuText=="任选二"){
						lotteryNoteCal.shishicai.renxuan_zhixuan(2);
					}else if(menuText=="任选三"){
						lotteryNoteCal.shishicai.renxuan_zhixuan(3);
					}else if(menuText=="任选四"){
						lotteryNoteCal.shishicai.renxuan_zhixuan(4);
					}
					else{
						lotteryNoteCal.shishicai.zhixuan(); 
					}
				break;
				case "直选单式":if(menuText=="任选二"){
						lotteryNoteCal.shishicai.renxuan_danshi(2);
					}else if(menuText=="任选三"){
						lotteryNoteCal.shishicai.renxuan_danshi(3);
					}else if(menuText=="任选四"){
						lotteryNoteCal.shishicai.renxuan_danshi(4);
					}
				case "五星组合":lotteryNoteCal.shishicai.wuxing_zuhe();break;
				case "组选120": lotteryNoteCal.shishicai.zuxuanNum120(5); break;
				case "组选60": lotteryNoteCal.shishicai.zuxuanNum60(2); break;
				case "组选30":lotteryNoteCal.shishicai.zuxuanNum60(2,2);break;
				case "组选20": lotteryNoteCal.shishicai.zuxuanNum60(2,2);break;
				case "组选10": lotteryNoteCal.shishicai.zuxuanNum10(3,2);break;
				case "组选5": lotteryNoteCal.shishicai.zuxuanNum60(4);break;
				case "一帆风顺": lotteryNoteCal.shishicai.wuxingteshu();break;
				case "好事成双": lotteryNoteCal.shishicai.wuxingteshu();break;
				case "三星报喜": lotteryNoteCal.shishicai.wuxingteshu();break;
				case "四季发财": lotteryNoteCal.shishicai.wuxingteshu();break;
				case "四星组合":lotteryNoteCal.shishicai.zuhe(4);break;
				case "组选24":
					if(menuText == "任选四"){
						lotteryNoteCal.shishicai.rex_zuxuan24();
					}
					else
						lotteryNoteCal.shishicai.zuxuanNum120(4); break;
				case "组选12": 
					if(menuText == "任选四"){
						lotteryNoteCal.shishicai.rex_zuxuan12();
					}
					else
						lotteryNoteCal.shishicai.zuxuanNum60(2,1,4); break;
				case "组选6":
					if(menuText == "任选四"){
						lotteryNoteCal.shishicai.rex_zuxuan6();
					}
					else
						lotteryNoteCal.shishicai.zuxuanNum6_xxx(2,2); break;
				case "组选4": 
					if(menuText == "任选四"){
						lotteryNoteCal.shishicai.rex_zuxuan4();
					}
					else
						lotteryNoteCal.shishicai.zuxuanNum60(3,1,4); break;
				case "重复号":lotteryNoteCal.shishicai.bajia(); break;
				case "顺子号":lotteryNoteCal.shishicai.bajia();break;
				case "单双号":lotteryNoteCal.shishicai.bajia();break;
				case "大小号":lotteryNoteCal.shishicai.bajia();
					break;
				case "后三组合":lotteryNoteCal.shishicai.zuhe(3);break;
				case "直选和值":
					if(menuText == "后三")
						lotteryNoteCal.shishicai.zhixuanhezhi();
					else if(menuText == "中三")
						lotteryNoteCal.shishicai.zhixuanhezhi();
					else if(menuText == "前三")
						lotteryNoteCal.shishicai.zhixuanhezhi();
					else if(menuText == "后二")
						lotteryNoteCal.shishicai.zhixuanhezhi2();
					else if(menuText == "前二")
						lotteryNoteCal.shishicai.zhixuanhezhi2();
					else if(menuText == "任选二")
						lotteryNoteCal.shishicai.renxuan_zhixuan_2();
					else if(menuText == "任选三")
						lotteryNoteCal.shishicai.renxuan_zhixuan_3();
					break;
				case "直选跨度":
					if(menuText == "后三")
						lotteryNoteCal.shishicai.zhixuankuadu();
					else if(menuText == "中三")
						lotteryNoteCal.shishicai.zhixuankuadu();
					else if(menuText == "前三")
						lotteryNoteCal.shishicai.zhixuankuadu();
					else if(menuText == "前二")
						lotteryNoteCal.shishicai.zhixuankuadu2();
					else if(menuText == "后二")
						lotteryNoteCal.shishicai.zhixuankuadu2();
					break;
					break;
				case "组三复式":
					if(menuText=="任选三")
						lotteryNoteCal.shishicai.renx_zusanfushi();
					else
						lotteryNoteCal.shishicai.zusan();
					break;
				case "组六复式":
					if(menuText=="任选三")
						lotteryNoteCal.shishicai.renx_zuliufushi();
					else
						lotteryNoteCal.shishicai.zusan6(3);
					break;
				case "组选和值":
					if(menuText == "后三")
						lotteryNoteCal.shishicai.zuxuanhezhi();
					else if(menuText == "中三")
						lotteryNoteCal.shishicai.zuxuanhezhi();
					else if(menuText == "前三")
						lotteryNoteCal.shishicai.zuxuanhezhi();
					else if(menuText == "后二")
						lotteryNoteCal.shishicai.zuxuanhezhi2();
					else if(menuText == "前二")
						lotteryNoteCal.shishicai.zuxuanhezhi2();
					else if(menuText == "任选二")
						lotteryNoteCal.shishicai.renx_zuxuanhezhi_2();
					else if(menuText == "任选三")
						lotteryNoteCal.shishicai.renx_zuxuanhezhi_3();
					break;
				case "组选包胆":
					if(menuText == "后三")
						lotteryNoteCal.shishicai.zuxuanbaodan();
					else if(menuText == "中三")
						lotteryNoteCal.shishicai.zuxuanbaodan();
					else if(menuText == "前三")
						lotteryNoteCal.shishicai.zuxuanbaodan();
					else if(menuText == "前二")
						lotteryNoteCal.shishicai.zuxuanbaodan(9);
					else if(menuText == "后二")
						lotteryNoteCal.shishicai.zuxuanbaodan(9);
					break;
				case "和值尾数": lotteryNoteCal.shishicai.wuxingteshu();
					break;
				case "特殊号":lotteryNoteCal.shishicai.teshu();
					break;
				case "中三组合":lotteryNoteCal.shishicai.zuhe(3);break;
					break;
				case "前三组合":lotteryNoteCal.shishicai.zuhe(3);break;
					break;
				case "组选复式":
					if(menuText == "任选二"){
						lotteryNoteCal.shishicai.renx_zux_fus();
					}else{
						lotteryNoteCal.shishicai.zuxuanfushi();
					}
					break;
				case "定位胆":lotteryNoteCal.shishicai.dingweidan();
					break;
				case "后三一码":lotteryNoteCal.shishicai.zusan6(1);
					break;
				case "前三一码":lotteryNoteCal.shishicai.zusan6(1);
					break;
				case "后三二码":lotteryNoteCal.shishicai.zusan6(2);
					break;
				case "前三二码":lotteryNoteCal.shishicai.zusan6(2);
					break;
				case "四星一码":lotteryNoteCal.shishicai.zusan6(1);
					break;
				case "四星二码":lotteryNoteCal.shishicai.zusan6(2);
					break;
				case "五星二码":lotteryNoteCal.shishicai.zusan6(2);
					break;
				case "五星三码":lotteryNoteCal.shishicai.zusan6(3);
					break;
				case "前二大小单双":lotteryNoteCal.shishicai.zhixuan();
					break;
				case "后二大小单双":lotteryNoteCal.shishicai.zhixuan();
					break;
				case "前三大小单双":lotteryNoteCal.shishicai.zhixuan();
					break;
				case "后三大小单双":lotteryNoteCal.shishicai.zhixuan();
					break;
			}
		},
		
		zhixuan : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zhix1_m(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		
		renxuan_zhixuan : function(len){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var method = game.lottery.betting_note.renx_zhix_fushi(len);
			var data = method(a);
			lotteryNoteCal.setPanelInfossc(data.length);
		},
		
		renxuan_danshi : function(len){
			var text = $(".lot_num_input textarea").val();
			var text = lotteryGme.lotteryBetting.inputAddNumBetting11sel5(numText, selLen);
		},
		
		renxuan_zhixuan_2 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			a.unshift(wei_arr)
			console.log(a);
			var data = game.lottery.betting_note.renx_zhixhe2(a,1);
			lotteryNoteCal.setPanelInfossc(data);
		},
		
		renxuan_zhixuan_3 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			a.unshift(wei_arr)
			var data = game.lottery.betting_note.renx_zhixhe3(a,1);
			lotteryNoteCal.setPanelInfossc(data);
		},
		
		renx_zux_fus : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			a.unshift(wei_arr);
			var data = game.lottery.betting_note.renx_zux_fushi(2)(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		
		renx_zuxuanhezhi_2 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			a.unshift(wei_arr);
			var data = game.lottery.betting_note.renx_zuxhe2(a,1);
			if(data)
				lotteryNoteCal.setPanelInfossc(data);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		renx_zuxuanhezhi_3 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			a.unshift(wei_arr);
			var data = game.lottery.betting_note.renx_zuxhe3(a,1);
			if(data)
				lotteryNoteCal.setPanelInfossc(data);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		
		renx_zusanfushi : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			a.unshift(wei_arr);
			var data = game.lottery.betting_note.renx_zux_fushi3(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		
		renx_zuliufushi : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			a.unshift(wei_arr);
			var data = game.lottery.betting_note.renx_zux_fushi6(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		
		rex_zuxuan24 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			a.unshift(wei_arr);
			var data = game.lottery.betting_note.renx_zux24(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		rex_zuxuan12 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			temp_arr.push(wei_arr);
			temp_arr.push(a);
			a = temp_arr;
			var data = game.lottery.betting_note.renx_zux12(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		rex_zuxuan6 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			a.unshift(wei_arr);
			var data = game.lottery.betting_note.renx_zux6(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		rex_zuxuan4 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var wei_arr = new Array();
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});
			temp_arr.push(wei_arr);
			temp_arr.push(a);
			a = temp_arr;
			var data = game.lottery.betting_note.renx_zux4(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		wuxing_zuhe : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.xingzu5_m(a,1);
//			console.log(data);
			if(data)
				lotteryNoteCal.setPanelInfossc(data);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		zuhe : function(len){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var method = game.lottery.betting_note.xingzu(len);
			var data = method(a,1);
			if(data)
				lotteryNoteCal.setPanelInfossc(data);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		zuxuanNum120 : function(len){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var menthod = game.lottery.betting_note.renx(len)
			var data = menthod(a[0]);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		zuxuanNum60 : function(len1,len2,len3){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var menthod = game.lottery.betting_note.zuxuanchongdan(len1,len2,len3)
			var data = menthod(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		zuxuanNum10 : function(len1,len2){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var menthod = game.lottery.betting_note.zuxuan2chong(len1,len2)
			var data = menthod(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		zuxuanNum30 : function(len,len1){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var menthod = game.lottery.betting_note.zuxuanchongdan(len,len1)
			var data = menthod(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		zuxuanNum6_xxx : function(len1,len2){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var method = game.lottery.betting_note.zuxuanchong_xxx(len1,len2);
			var data = method(a[0]);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		wuxingteshu : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			lotteryNoteCal.setPanelInfossc(a[0].length);
		},
		
		zhixuanhezhi : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zhixhe3(a[0],1);
			lotteryNoteCal.setPanelInfossc(data);
		},
		zhixuanhezhi2 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zhixhe2(a[0],1);
			lotteryNoteCal.setPanelInfossc(data);
		},
		zhixuankuadu : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zhixkd3(a[0],1);
			lotteryNoteCal.setPanelInfossc(data);
		},
		zhixuankuadu2 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zhixkd2(a[0],1);
			lotteryNoteCal.setPanelInfossc(data);
		},
		zusan : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zuxfushi3(a[0]);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		zusan6 : function(len){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var method = game.lottery.betting_note.zux(len);
			var data = method(a[0]);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		zuxuanhezhi : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zuxhe3(a[0],1);
			lotteryNoteCal.setPanelInfossc(data);
		},
		zuxuanhezhi2 : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zuxhe2(a[0],1);
			lotteryNoteCal.setPanelInfossc(data);
		},
		zuxuanbaodan : function(len){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var method = game.lottery.betting_note.zuxbaodan(len);
			var data = method(a[0],1);
			lotteryNoteCal.setPanelInfossc(data);
		},
		
		zuxuanfushi : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.zuxfushi2(a[0]);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		
		dingweidan : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			console.log(a);
			var data = game.lottery.betting_note.dwd(a);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		bajia : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			var data = game.lottery.betting_note.baijia(a[0]);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		teshu : function(){
			var a = lotteryNoteCal.shishicai.zhixuanGetNumArr();
			console.log(a);
			var data = game.lottery.betting_note.teshuhao(a[0]);
			if(data)
				lotteryNoteCal.setPanelInfossc(data.length);
			else
				lotteryNoteCal.setPanelInfossc(0);
		},
		zhixuanGetNumArr: function() { 
			// 获取选中的号码 
			var lotBetNum = new Array();
			if($(".lot_panel_3d").css("display") == "block"){
				$(".lot_panel_3d .lot_b_i_i").each(function() {
					if($(this).css("display") == "block") {
						var text = new Array();
						$(this).find(".lot_qiu_item").each(function() {
							if($(this).hasClass("active")) {
								text.push(parseInt($(this).text()));
							}
						});
						lotBetNum.push(text);
					}
				});
			}else if($(".lot_panel_3d_size").css("display") == "block"){  // 大小单双
				$(".lot_panel_3d_size .lot_b_i_i").each(function() {
					if($(this).css("display") == "block") {
						var text = new Array();
						$(this).find(".lot_qiu_item").each(function() {
							if($(this).hasClass("active")) {
								text.push($(this).text());
							}
						});
						lotBetNum.push(text);
					}
				});
			}else if($(".qu_wei").css("display") == "block"){   // 趣味
				var text = new Array();
				$(".qu_wei .qu_wei_item").each(function() {
					if($(this).hasClass("active")) {
							text.push($(this).text());
					}
				});
				lotBetNum.push(text);
			}
			return lotBetNum;
		},

		zuxuanGetNumArr: function() {
			var text = [];
			$(".lot_panel_3d .lot_b_i_i").each(function() {
				if($(this).css("display") == "block") {
					$(this).find(".lot_qiu_item").each(function() {
						if($(this).hasClass("active")) {
							text.push(parseInt($(this).text()));
						}
					});
				}
			});
			return text;
		},
	},
	setPanelInfo: function(data) {
		$(".bet_order_number").text(data.length);
		
		var money = $(".money_model span").attr("data-id"); // 获取元 角 分 厘 模式
		var mu = $(".bet_info .money_mu").val();// 倍数
		$(".bet_order_money").text((data.length * mu * (money * 2 - 0)).toFixed(4));
		
		if(data>0){
			$(".bet_info").css("display","block");
		}else{
			$(".bet_info").css("display","none");
		}
	},
	
	setPanelInfossc : function(data){
		$(".bet_order_number").text(data);
		var money = $(".money_model span").attr("data-id"); // 获取元 角 分 厘 模式
		var mu = $(".bet_info .money_mu").val();// 倍数
		$(".bet_order_money").text((data * mu * (money * 2 - 0)).toFixed(4));
		if(data>0){
			$(".bet_info").css("display","block");
		}else{
			$(".bet_info").css("display","none");
		}
	},
};