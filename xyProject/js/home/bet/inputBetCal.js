var inputBetCal = {
	init : function(){
		var textVal = inputBetCal.getTextareaVal(); // 获取输入框输入字符串  去除空格 去除字母
		
		var textVal_1 = inputBetCal.getEachNoteNumber(textVal); // 以|分隔输入的字符串
		
		var textVal_2 = inputBetCal.getEffectiveNum(textVal_1);// 获取有效注单
		return textVal_2.substring(0,textVal_2.length-1);
		
	},
	getTextareaVal : function(){
		var numText = $(".lot_num_input textarea").val();
		numText = numText.replace(/[a-zA-Z]/g, ""); // 去除字符串中的所有字母 
		numText = numText.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\:|\"|\'|\<|\.|\>|\/|\?]/g, ""); // 去除字符串中的特殊符号
		return numText;
	},
	
	getEachNoteNumber : function(textVal){
		var numText = "";
		if(textVal.indexOf(",")>=0) {
			var textVal_arr1 = textVal.split(",");
			$.each(textVal_arr1, function(i,item) {
				if(item.indexOf("；")){
					var textVal_arr2 = item.split("；");
					$.each(textVal_arr2,function(i,item1){
						if(item1.indexOf("\n")){
							var textVal_arr3 = item1.split("\n");
							$.each(textVal_arr3, function(i,item3) {
								numText += item3 + "|";
							});
						}else{
							numText += item1 + "|";
						}
					});
				}else{
					numText += item + "|";
				}
			});
		} else if(textVal.indexOf(";") >= 0) {
			var textVal_arr2 = textVal.split(";");
			$.each(textVal_arr2,function(i,item1){
				if(item1.indexOf("\n")){
					var textVal_arr3 = item1.split("\n");
					$.each(textVal_arr3, function(i,item3) {
						numText += item3 + "|";
					});
				}else{
					numText += item1 + "|";
				}
			});		
				
		} else if(textVal.indexOf("\n") >= 0) {
			var textVal_arr3 = textVal.split("\n");
			$.each(textVal_arr3, function(i,item3) {
				numText += item3 + "|";
			});
		} else {   // 只输入单注的情况下
			numText = textVal;
		}
		return numText;
	},
	
	
	getEffectiveNum : function(textVal_1){
		inputBetCal.betNumText = ""; // 有效注单
		inputBetCal.betNumLen = 0;  // 有效注单数
		var len = inputBetCal.moneyAndBetTotal(textVal_1);
		if(textVal_1.indexOf("|")){
			var textVal_arr = textVal_1.split("|");
			$.each(textVal_arr,function(i,item){
				console.log(item);
				if(item.length == len){
					inputBetCal.specailPro(item);// 如果是任选模式 重新计算注单
				}
			});
		}else{
			if(item.length == len){
				inputBetCal.specailPro(textVal_1);// 如果是任选模式 重新计算注单
//				inputBetCal.betNumLen = 1;
//				inputBetCal.betNumText = textVal_1;			
			}
		}
		lotteryNoteCal.setPanelInfossc(inputBetCal.betNumLen);
		return inputBetCal.betNumText;
	},
	
	moneyAndBetTotal : function(numText){
		if(numText != '') {
				var lotClass = $(".lot_class_name").text();
				if(lotClass == "福彩3D") {
					
				} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
					var text = $(".menu_type .m_t_2 .m_t_2_i.active").text();
					switch(text) {
						case "前三直选单式":return 6;break;
						case "前三组选单式":return 6;break;
						case "前二直选单式":return 4;break;
						case "前二组选单式":return 4;break;
						case "任选一中一":return 2;break;
						case "任选二中二":return 4;break;
						case "任选三中三":return 6;break;
						case "任选四中四":return 8;break;
						case "任选五中五":return 10;break;
						case "任选六中五":return 12;break;
						case "任选七中五":return 14;break;
						case "任选八中五":return 16;break;
					}
				} else {
					var lotModel = $(".menu_type .m_t_2 .m_t_2_i.active").text();
					var selType = $(".menu_type .m_t_1 .m_t_1_i.active").text();
					if (selType.indexOf("任选")<0) {  // 普选模式
						switch(lotModel){
							case "直选单式": switch (selType){
								case "五星":return 5;break;
								case "四星":return 4;break;
								case "后三":return 3;break;
								case "中三":return 3;break;
								case "前三":return 3;break;
								case "后二":return 2;break;
								case "前二":return 2;break;
							} break;
							case "组三单式": switch (selType){
								case "后三":return 3;break;
								case "中三":return 3;break;
								case "前三":return 3;break;
							} break;
							case "组六单式": switch (selType){
								case "后三":return 3;break;
								case "中三":return 3;break;
								case "前三":return 3;break;
							} break;
							case "混合组选": switch (selType){
								case "后三":return 3;break;
								case "中三":return 3;break;
								case "前三":return 3;break;
							} break;
							case "组选单式": switch (selType){
								case "后二":return 2;break;
								case "前二":return 2;break;
							} break;
						}
					} else{  // 任选模式
						var selLen = $(".radio_sel input:checked").length;
						switch(lotModel){
							case "直选单式": switch (selType){
								case "任选二":return 2;break;
								case "任选三":return 3;break;
								case "任选四":return 4;break;
							} break;
							case "组三单式": switch (selType){
								case "任选三":return 3;break;
							} break;
							case "组六单式": switch (selType){
								case "任选三":return 3;break;
							} break;
							case "混合组选": switch (selType){
								case "任选三":return 3;break;
							} break;
							case "组选单式": switch (selType){
								case "任选二":return 2;break;
							} break;
						}
					}
				}
			}
	},

	specailPro : function(item){
		var lotModel = $(".menu_type .m_t_2 .m_t_2_i.active").text();
		var selType = $(".menu_type .m_t_1 .m_t_1_i.active").text();
		if(selType.indexOf("任选")>=0){
			var arr = item.split("");
			$.each(arr, function(i,item) {
				arr[i] = parseInt(item);
			});
			console.log(arr);
			var wei_arr = new Array();
			var arr1 = [arr];
			var temp_arr = new Array();
			$(".radio_sel input").each(function(){
				if($(this).prop("checked")){
					var index = $(this).index(".radio_sel input");
					wei_arr.push(index);
				}
			});

			temp_arr.push(wei_arr);
			temp_arr.push(arr1);
			console.log(temp_arr);
			switch (lotModel){
				case '直选单式':  switch (selType){
					case "任选二":
						var data = game.lottery.betting_note.renx_zhix_danshi(2)(temp_arr,1);
						inputBetCal.betNumLen += data.length;
						break;
					case "任选三":
						var data = game.lottery.betting_note.renx_zhix_danshi(3)(temp_arr,1);
						inputBetCal.betNumLen += data.length;
						break;
					case "任选四":
						var data = game.lottery.betting_note.renx_zhix_danshi(4)(temp_arr);
						inputBetCal.betNumLen += data.length;
						break;
					}
					break;
				case '组选单式':
					var data = game.lottery.betting_note.renx_zux_danshi(2)(temp_arr);
					inputBetCal.betNumLen += data.length;
					break;
				case '组三单式':
					var data = game.lottery.betting_note.renx_zux_danshi3(temp_arr);
					inputBetCal.betNumLen += data.length;
					break;
				case '组六单式':
					var data = game.lottery.betting_note.renx_zux_danshi6(temp_arr);
					inputBetCal.betNumLen += data.length;
					break;
				case '混合组选':
					var data = game.lottery.betting_note.renx_zux_hunhe3(temp_arr);
					inputBetCal.betNumLen += data.length; 
					break;
			}
			
			
			
		}else if(lotModel=="组三单式"){  // 如果是组三单式  组六单式 混合组选时 任选玩法的所有单式下注
			var arr = item.split("");
			if(arr[0]==arr[1]&&arr[1]==arr[2])
				return false;
			else if(arr[0]!=arr[1]&&arr[0]!=arr[2]&&arr[1]!=arr[2])
				return false;
			else{
				inputBetCal.betNumLen++;
				inputBetCal.betNumText += item+"|";
			}
		}else if(lotModel=="组六单式"){
			var arr = item.split("");
			var arr_sort = arr.sort();
			for(var i = 0;i<arr.length;i++){
				if(arr_sort[i]==arr_sort[i+1])
					return false;
			}
			inputBetCal.betNumLen++;
			inputBetCal.betNumText += item+"|";
		}else{
			inputBetCal.betNumLen++;
			inputBetCal.betNumText += item+"|";
		}
	},
};
