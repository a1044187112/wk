/*
 彩票面板显示类  点击按钮之后 改变彩票面版的显示内容
 * */
var changeLotteryPanel = {
		panelShow: function() {
			$(".lot_quick").css("display","inline-block");
			$(".lot_num_input textarea").val("");
			var lotClass = $(".lot_class_name").text();
			if(lotClass == "福彩3D") {
				$(".lot_num_input textarea").attr("placeholder","每一注号码之间请用一个 空格[ ]、逗号[,] 或者 分号[;] 隔开");
				changeLotteryPanel.lotMenuClick.fc3d();
			} else if(lotClass == "山东11选5" || lotClass == "广东11选5" || lotClass == "江西11选5" || lotClass == "多乐11选5") {
				$(".lot_num_input textarea").attr("placeholder","每注号码之间请使用逗号（，）、分号（；）或回车键隔开，每注内间隔使用空格即可。");
				changeLotteryPanel.lotMenuClick.item11Sel5();
			} else {
				$(".lot_num_input textarea").attr("placeholder","每一个号码之间请用一个 空格[ ]、逗号[,] 或者 分号[;] 隔开");
				changeLotteryPanel.lotMenuClick.shishicai();
			}

		},
	

	lotMenuClick : {
		fc3d : function(){
			var selText = $(".menu_type .m_t_2 .m_t_2_i.active").text();
			$(".lot_panel_3d li").css("display","none");
			$(".lot_panel_3d li:gt(2)").css("display","block");
			switch(selText){
				case "直选复式": changeLotteryPanel.panelFC3D.six(); 
						changeLotteryPanel.panel11sel5.ten("1800.000", "从百位、十位、个位各选一个号码组成一注。","投注方案：345, 开奖号码：345，即中后三直选。从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。 ");
				break;
				case "直选单式": changeLotteryPanel.panelFC3D.two();
					changeLotteryPanel.panel11sel5.ten("1800.000", "手动输入号码，至少输入1个三位数号码组成一注。","投注方案：345, 开奖号码：345，即中后三直选。从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。 ");
				break;
				case "直选和值": changeLotteryPanel.panelFC3D.three();
					changeLotteryPanel.panel11sel5.ten("1800.000", " 从0-27中任意选择1个或1个以上号码。","投注方案：和值1开奖号码：后三位001，010，100，即中后三直选。所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。 ");
				break;
				case "组三复式": changeLotteryPanel.panelFC3D.four("组三");
					changeLotteryPanel.panel11sel5.ten("600", " 从0-9中任意选择2个或2个以上号码。","投注方案：588,开奖号码：后三位588（顺序不限），即可中后三组选三。从0-9中选择2个数字组成两注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。");
				break;
				case "组三单式": changeLotteryPanel.panelFC3D.two();
					changeLotteryPanel.panel11sel5.ten("600", " 手动输入号码，至少输入1个三位数号码（三个数字中必须有二个数字相同）。","投注方案：001开奖号码：后三位 010（顺序不限），即中后三组选三。手动输入一个3位数号码组成一注，三个数字中必须有二个数字相同，输入号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。");
				break;
				case "组六复式": changeLotteryPanel.panelFC3D.four("组六");
					changeLotteryPanel.panel11sel5.ten("300", " 从0-9中任意选择3个或3个以上号码。","投注方案：258,开奖号码：后三位 852（顺序不限），即中后三组选六。从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。");
				break;
				case "组六单式": changeLotteryPanel.panelFC3D.two();
					changeLotteryPanel.panel11sel5.ten("300", " 手动输入号码，至少输入1个三位数号码（三个数字完全不相同）。","投注方案：123,开奖号码：后三位 321（顺序不限），即中后三组选六。手动输入一个3位数号码组成一注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。");
				break;
				case "混合组选": changeLotteryPanel.panelFC3D.two();
					changeLotteryPanel.panel11sel5.ten("", "  手动输入号码，至少输入1个三位数号码。 ","投注方案：001 和 123,开奖号码：后三位 010（顺序不限）即中后三组选三，或者后三位 312（顺序不限）即中后三组选六。手动输入一个3位数号码组成一注（不含豹子号），开奖号码的百位、十位、个位符合后三组三或者组六均为中奖。");
				break;
				case "组选和值": changeLotteryPanel.panelFC3D.three();
					changeLotteryPanel.panel11sel5.ten("", "  从1-26中选择1个号码。  ","投注方案：和值3,开奖号码：后三位 003（顺序不限）即中后三组选三，或者后三位 012（顺序不限）即中后三组选六。所选数值等于开奖号码百位、十位、个位三个数字相加之和(非豹子号)，即为中奖。");
				break;
				case "(前二)直选复式":changeLotteryPanel.panelFC3D.five("百位","十位");
					changeLotteryPanel.panel11sel5.ten("180", " 从百位、十位中至少各选1个号码组成一注。  ","投注方案：58,开奖号码：前二位 58，即中前二直选。从百位、十位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。");
				break;
				case "(前二)直选单式":changeLotteryPanel.panelFC3D.two();
					changeLotteryPanel.panel11sel5.ten("180", " 手动输入号码，至少输入1个二位数号码组成一注。  ","投注方案：58,开奖号码：前二位 58，即中前二直选。手动输入一个2位数号码组成一注，输入号码的百位、十位与开奖号码相同，且顺序一致，即为中奖。");
				break;
				case "(后二)直选复式":changeLotteryPanel.panelFC3D.five("十位","个位");
					changeLotteryPanel.panel11sel5.ten("180", " 从十位、个位中至少各选1个号码组成一注。  ","投注方案：58,开奖号码：后二位 58，即中后二直选。从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。");
				break;
				case "(后二)直选单式":changeLotteryPanel.panelFC3D.two();
					changeLotteryPanel.panel11sel5.ten("180", "  手动输入号码，至少输入1个二位数号码组成一注。 ","投注方案：58开奖号码：后二位 58，即中后二直选。手动输入一个2位数号码组成一注，输入号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。");
				break;
				case "(前二)组选复式":changeLotteryPanel.panelFC3D.four("组选");
					changeLotteryPanel.panel11sel5.ten("90", " 从0-9中任意选择2个或2个以上号码。","投注方案：58,开奖号码：前二位 85 或者 58（顺序不限，不含对子号），即中前二组选。从0-9中选2个号码组成一注，所选号码与开奖号码的百位、十位相同，顺序不限，即为中奖。");
				break;
				case "(前二)组选单式":changeLotteryPanel.panelFC3D.two();
					changeLotteryPanel.panel11sel5.ten("90", "手动输入号码，至少输入1个二位数号码组成一注。","投注方案：58开奖号码：前二位 85 或者 58（顺序不限，不含对子号），即中前二组选。手动输入一个2位数号码组成一注，输入号码的万位、千位与开奖号码相同，顺序不限，即为中奖。");
				break;
				case "(后二)组选复式":changeLotteryPanel.panelFC3D.four("组选");
					changeLotteryPanel.panel11sel5.ten("90", "  从0-9中任意选择2个或2个以上号码。 ","投注方案：58,开奖号码：后二位 85 或者 58（顺序不限，不含对子号），即中后二组选。。从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同（不含对子号），顺序不限，即中奖。");
				break;
				case "(后二)组选单式":changeLotteryPanel.panelFC3D.two();
					changeLotteryPanel.panel11sel5.ten("90", "  手动输入号码，至少输入1个二位数号码组成一注。  ","投注方案：58,开奖号码：前二位 85 或者 58（顺序不限，不含对子号），即中前二组选。手动输入一个2位数号码组成一注，输入号码的十位、个位与开奖号码相同（不含对子号），顺序不限，即为中奖。");
				break;
				
				case "定位胆":changeLotteryPanel.panelFC3D.six();
					changeLotteryPanel.panel11sel5.ten("18", "  在百位、十位、个位任意位置上任意选择1个或1个以上号码。 ","投注方案：百位 1,开奖号码：百位 1，即中定位胆百位。从百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。");
				break;
				case "一码不定位":changeLotteryPanel.panelFC3D.four("一码");
					changeLotteryPanel.panel11sel5.ten("6.6", " 从0-9中任意选择1个以上号码。","投注方案：1,开奖号码：后三位至少出现1个1，即中后三一码不定位。从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。");
				break;
				case "二码不定位":changeLotteryPanel.panelFC3D.four("二码");
					changeLotteryPanel.panel11sel5.ten("33.0", " 从0-9中任意选择2个以上号码。 ","投注方案：12,开奖号码：至少出现1和2各1个，即中二码不定位。从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。");
				break;
				case "前二大小单双":changeLotteryPanel.panelFC3D.seven("百位","十位");
					changeLotteryPanel.panel11sel5.ten("7.2", "从百位、十位中的“大、小、单、双”中至少各选一个组成一注。","投注方案：小双,开奖号码：百位与十位“小双”，即中前二大小单双。对百位和十位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。");
				break;
				case "后二大小单双":changeLotteryPanel.panelFC3D.seven("十位","个位");
					changeLotteryPanel.panel11sel5.ten("7.2", "  从十位、个位中的“大、小、单、双”中至少各选一个组成一注。 ","投注方案：大单,开奖号码：十位与个位“大单”，即中后二大小单双。对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。");
				break;
			}
		},
		
		item11Sel5 : function() {
			var selText = $(".menu_type .m_t_2 .m_t_2_i.active").text();
			$(".lot_panel").find("li:first-child").find(".lot_b_i_i_1:last-child").css("display","inline-block");
			switch(selText) {
				case "前三直选复式":
					changeLotteryPanel.panel11sel5.six();
					changeLotteryPanel.panel11sel5.ten("1811.000", "一注：从第一、二、三位中至少各选择1个号码", "开奖号码5个号中的前3个号码顺序和数字相同即中奖。投：01 02 03 开:01 02 03 * * 即中奖");
					break;
				case "前三直选单式":
					changeLotteryPanel.panel11sel5.two();
					changeLotteryPanel.panel11sel5.ten("1811.000", "一注：从第一、二、三位中至少各选择1个号码", "开奖号码5个号中的前3个号码顺序和数字相同即中奖。投：01 02 03 开:01 02 03 * * 即中奖");
					break;
				case "前三组选复式":
					changeLotteryPanel.panel11sel5.three("组选");
					changeLotteryPanel.panel11sel5.ten("301.000", "一注：从01-11中任意选择3个或3个以上号码", "开奖号码5个号中的前3个号码数字相同（顺序不限）即中奖。投：01 02 03 开:03 02 01 * * 即中奖");
					break;
				case "前三组选单式":
					changeLotteryPanel.panel11sel5.two();
					changeLotteryPanel.panel11sel5.ten("301.000", "一注：从01-11中任意选择3个或3个以上号码", "开奖号码5个号中的前3个号码数字相同（顺序不限）即中奖。投：01 02 03 开:03 02 01 * * 即中奖");
					break;
				case "前三组选胆拖":
					changeLotteryPanel.panel11sel5.four();
					changeLotteryPanel.panel11sel5.ten("301.950", "一注：从01-11中，选取3个及以上的号码，每注需至少包括1个胆码及两个拖码", "开奖号码5个号中的前3个号码数字相同的号码正好符合一个胆码和两个拖码（顺序不限）即中奖，投：胆码：01 拖码：03 04 开:03 02 01 * * 不中奖开:03 04 01 * * 中奖");
					break;

				case "前二直选复式":
					changeLotteryPanel.panel11sel5.five();
					changeLotteryPanel.panel11sel5.ten("201.000", "一注：从第一、二位中至少各选择1个号码", "开奖号码5个号中的前两个号码顺序和数字相同即中奖，投：01 02 开:01 02 * * * 即中奖");
					break;
				case "前二直选单式":
					changeLotteryPanel.panel11sel5.two();
					changeLotteryPanel.panel11sel5.ten("201.000", "一注：从第一、二位中至少各选择1个号码", "开奖号码5个号中的前两个号码顺序和数字相同即中奖，投：01 02 开:01 02 * * * 即中奖");
					break;
				case "前二组选复式":
					changeLotteryPanel.panel11sel5.three("组选");
					changeLotteryPanel.panel11sel5.ten("100.000", "一注：输入01-11范围内两个不同号码", "开奖号码5个号中的前两个号码数字相同（顺序不限）即中奖，投：02 03开:03 02 * * * 即中奖");
					break;
				case "前二组选单式":
					changeLotteryPanel.panel11sel5.two();
					changeLotteryPanel.panel11sel5.ten("100.000", "一注：输入01-11范围内两个不同号码", "开奖号码5个号中的前两个号码数字相同（顺序不限）即中奖，投：02 03开:03 02 * * * 即中奖");
					break;
				case "前二组选胆拖":
					changeLotteryPanel.panel11sel5.four();
					changeLotteryPanel.panel11sel5.ten("100.650", "一注：从01-11中，选取个两个以上的号码每注需至少包括1个胆码及一个拖码", "开奖号码5个号中的前两个号码数字相同的号码正好符合一个胆码和一个拖码（顺序不限）即中奖，投：胆码：01 拖码：03 04 开:03 02 01 * * 不中奖开:03 04 01 * * 中奖");
					break;

				case "不定位":
					changeLotteryPanel.panel11sel5.three("前三位");
					changeLotteryPanel.panel11sel5.ten("6.600", ".一注：从01-11中任意选择一个或一个以上号码", "开奖号码5个号中的前3个号码中包含所选号码即中奖，投:01 开:* 01 * * * 中奖");
					break;
				case "定位胆":
					changeLotteryPanel.panel11sel5.six();
					changeLotteryPanel.panel11sel5.ten("19.800", "一注：从第一、二、三位中选择1个号码(3选1即可)", "开奖号码5个号中的前3个号码与所选号码位置数字相同即中奖，投:第一位01 开：01 * * * *中奖");
					break;

				case "任选一中一":
					changeLotteryPanel.panel11sel5.seven(selText);
					changeLotteryPanel.panel11sel5.ten("3.500", "一注：选择任意一个数字", "开奖号码5个号中包含所选所选号码即中奖，投:01开:01 02 03 04 05 中奖");
					break;
				case "任选二中二":
					changeLotteryPanel.panel11sel5.seven(selText);
					changeLotteryPanel.panel11sel5.ten("10.000", "一注：选择任意两个数字", "开奖号码5个号中包含所选所选号码即中奖，投:01 02开:01 02 03 04 05 中奖");
					break;
				case "任选三中三":
					changeLotteryPanel.panel11sel5.seven(selText);
					changeLotteryPanel.panel11sel5.ten("29.400", "一注：选择任意三个数字", "开奖号码5个号中包含所选所选号码即中奖", "投:01 02 03开:01 02 03 04 05 中奖");
					break;
				case "任选四中四":
					changeLotteryPanel.panel11sel5.seven(selText);
					changeLotteryPanel.panel11sel5.ten("119.000", "一注：选择任意四个数字", "开奖号码5个号中包含所选所选号码即中奖，投:01 02 03 04开:01 02 03 04 05 中奖");
					break;
				case "任选五中五":
					changeLotteryPanel.panel11sel5.seven(selText);
					changeLotteryPanel.panel11sel5.ten("845.460", "一注：选择任意五个数字", "开奖号码5个号中包含所选所选号码即中奖，投:01 02 03 04 05开:01 02 03 04 05 中奖");
					break;
				case "任选六中五":
					changeLotteryPanel.panel11sel5.seven(selText);
					changeLotteryPanel.panel11sel5.ten("140.300", "一注：选择任意六个数字", "开奖号码5个号中包含所选所选号码即中奖，投:01 02 03 04 05 06开:01 02 03 04 05 中奖");
					break;
				case "任选七中五":
					changeLotteryPanel.panel11sel5.seven(selText);
					changeLotteryPanel.panel11sel5.ten("39.650", "一注：选择任意七个数字", "开奖号码5个号中包含所选所选号码即中奖，投:01 02 03 04 05 06 07开:01 02 03 04 05 中奖");
					break;
				case "任选八中五":
					changeLotteryPanel.panel11sel5.seven(selText);
					changeLotteryPanel.panel11sel5.ten("14.700", "一注：选择任意八个数字", "开奖号码5个号中包含所选所选号码即中奖，投:01 02 03 04 05 06 07 08开:01 02 03 04 05 中奖");
					break;
				case "趣味_定单双":
					changeLotteryPanel.panel11sel5.zero(["5单0双","4单1双","3单2双","2单3双","1单4双","0单5双"]);
					changeLotteryPanel.panel11sel5.ten("一注：选择任意一个特殊投注", "开奖号码5个号单双比例与所选特殊投注一致即中奖，投：5单 开：01 03 09 07 11 中奖");
					break;
				case "趣味_猜中位":
					changeLotteryPanel.panel11sel5.eight();
					changeLotteryPanel.panel11sel5.ten("一注：选择任意一个数字", "开奖号码中第三大的号码与所选号码相同即中奖，投:05开 ：11 05 09 02 01 中奖");
					break;
				}
			},
		
		shishicai : function(){
			var selText = $(".menu_type .m_t_2 .m_t_2_i.active").text();
			$(".lot_panel_3d li").css("display","none");
			$(".lot_panel_3d li:gt(0)").css("display","block");
			$(".qu_wei").css("display", "none");
			$(".radio_sel").css("display","none");
			switch(selText){
				case "直选复式": changeLotteryPanel.shishicai.three();break;
				case "直选单式": changeLotteryPanel.shishicai.two();
				break;
				case "五星组合": changeLotteryPanel.shishicai.three(); 
					changeLotteryPanel.panel11sel5.ten("", "  从万位、千位、百位、十位、个位各选一个号码组成五注。", "投注方案：购买4+5+6+7+8，该票共10元，由以下5注：45678(五星)、5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：45678，即可中五星、四星、三星、二星、一星各1注,从万位、千位、百位、十位、个位中至少各选一个号码组成1-5星的组合，共五注，所选号码的个位与开奖号码全部相同，则中1个5等奖；所选号码的个位、十位与开奖号码相同，则中1个5等奖以及1个4等奖，依此类推，最高可中5个奖。");
				break;
				case "组选120": changeLotteryPanel.shishicai.four("组选120"); 
					changeLotteryPanel.panel11sel5.ten("1500", "  从0-9中选择5个号码组成一注。", "投注方案：10568,开奖号码：10568（顺序不限），即可中五星组选120。,从0-9中任意选择5个号码组成一注，所选号码与开奖号码的万位、千位、百位、十位、个位相同，顺序不限，即为中奖。");
				break;
				case "组选60": changeLotteryPanel.shishicai.five("二重号","单号"); 
					changeLotteryPanel.panel11sel5.ten("3000", "从“二重号”选择一个号码，“单号”中选择三个号码组成一注。", "投注方案：二重号：8；单号：016,开奖号码：01688（顺序不限），即可中五星组选60。选择1个二重号码和3个单号号码组成一注，所选的单号号码与开奖号码相同，且所选二重号码在开奖号码中出现了2次，即为中奖。");
				break;
				case "组选30": changeLotteryPanel.shishicai.five("二重号","单号"); 
					changeLotteryPanel.panel11sel5.ten("6000", "  从“二重号”选择两个号码，“单号”中选择一个号码组成一注。", "投注方案：二重号：68；单号：0,开奖号码：06688（顺序不限），即可中五星组选30。选择2个二重号和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选的2个二重号码分别在开奖号码中出现了2次，即为中奖。");
				break;
				case "组选20": changeLotteryPanel.shishicai.five("三重号","单号"); 
					changeLotteryPanel.panel11sel5.ten("9000", "  从“三重号”选择一个号码，“单号”中选择两个号码组成一注。", "投注方案：三重号：8；单号：01,开奖号码：01888（顺序不限），即可中五星组选20。选择1个三重号码和2个单号号码组成一注，所选的单号号码与开奖号码相同，且所选三重号码在开奖号码中出现了3次，即为中奖。");
				break;
				case "组选10": changeLotteryPanel.shishicai.five("三重号","二重号"); 
					changeLotteryPanel.panel11sel5.ten("18000", "  从“三重号”选择一个号码，“二重号”中选择一个号码组成一注。", "投注方案：三重号：8；二重号：1,开奖号码：11888（顺序不限），即可中五星组选10。选择1个三重号码和1个二重号码，所选三重号码在开奖号码中出现3次，并且所选二重号码在开奖号码中出现了2次，即为中奖。");
				break;
				case "组选5": changeLotteryPanel.shishicai.five("四重号","单号"); 
					changeLotteryPanel.panel11sel5.ten("36000", " 从“四重号”选择一个号码，“单号”中选择一个号码组成一注。", "投注方案：四重号：8；单号：1,开奖号码：18888（顺序不限），即可中五星组选5。选择1个四重号码和1个单号号码组成一注，所选的单号号码与开奖号码相同，且所选四重号码在开奖号码中出现了4次，即为中奖。");
				break;
				case "组选4": changeLotteryPanel.shishicai.five("三重号","单号"); 
					if($(".lot_menu1_ssc .active").text()=="任选四"){
						$(".radio_sel").css("display","block");
						changeLotteryPanel.shishicai.showSelRadio(4);
						changeLotteryPanel.panel11sel5.ten("4500.00", "  从万位、千位、百位、十位、个位中至少选择四个位置,号码区至少选择四个号码构成一注。 ", "投注方案：位置选择千位、百位、十位、个位,号码选择0568,开奖号码：10568(指定位置号码顺序不限)，即可中任四组选24。从万位、千位、百位、十位、个位中至少选择四个位置,号码区至少选择四个号码构成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
					}else{
						changeLotteryPanel.panel11sel5.ten("4500.00", "  从万位、千位、百位、十位、个位中至少选择四个位置,从“三重号”中选择一个号码，“单号”中选择一个号码组成一注。", "投注方案：位置选择千位、百位、十位、个位,三重号：8；单号：2，开奖号码：18828(指定位置号码顺序不限)，即可中任四组选4。从万位、千位、百位、十位、个位中至少选择四个位置,从“三重号”中选择一个号码，“单号”中选择一个号码组成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
					}
				break;
				case "一帆风顺": changeLotteryPanel.shishicai.four("一帆风顺"); 
					changeLotteryPanel.panel11sel5.ten("4.38", " 从0-9中任意选择1个以上号码", "投注方案：8,开奖号码：至少出现1个8，即中一帆风顺。从0-9中任意选择1个号码组成一注，只要开奖号码的万位、千位、百位、十位、个位中包含所选号码，即为中奖。");
				break;
				case "好事成双": changeLotteryPanel.shishicai.four("好事成双"); 
					changeLotteryPanel.panel11sel5.ten("22", "从0-9中任意选择1个以上的二重号码。  ", "投注方案：8,开奖号码：至少出现2个8，即中好事成双。从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现2次，即为中奖。");
				break;
				case "三星报喜":	changeLotteryPanel.shishicai.four("三星报喜"); 
					changeLotteryPanel.panel11sel5.ten("210", " 从0-9中任意选择1个以上的三重号码。 ", "投注方案：8,开奖号码：至少出现3个8，即中三星报喜。从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现3次，即为中奖。");
				break;
				case "四季发财": changeLotteryPanel.shishicai.four("四季发财"); 
					changeLotteryPanel.panel11sel5.ten("3900", " 从0-9中任意选择1个以上的四重号码。 ", "投注方案：8,开奖号码：至少出现4个8，即中四季发财。从0-9中任意选择1个号码组成一注，只要所选号码在开奖号码的万位、千位、百位、十位、个位中出现4次，即为中奖。");
				break;
				case "四星组合": changeLotteryPanel.shishicai.three();
					changeLotteryPanel.panel11sel5.ten("", "  从千位、百位、十位、个位各选一个号码组成四注。", "投注方案：购买5+6+7+8，该票共8元，由以下4注：5678(四星)、678(三星)、78(二星)、8(一星)构成。开奖号码：5678，即可中四星、三星、二星、一星各1注，从千位、百位、十位、个位中至少各选一个号码组成1-4星的组合，共四注，所选号码的个位与开奖号码相同，则中1个4等奖；所选号码的个位、十位与开奖号码相同，则中1个4等奖以及1个3等奖，依此类推，最高可中4个奖。");
				break;
				case "组选24": changeLotteryPanel.shishicai.four("组选24"); 
					if($(".lot_menu1_ssc .active").text()=="任选四"){
						$(".radio_sel").css("display","block");
						changeLotteryPanel.shishicai.showSelRadio(4);
						changeLotteryPanel.panel11sel5.ten("750", "  从万位、千位、百位、十位、个位中至少选择四个位置,号码区至少选择四个号码构成一注。 ", "投注方案：位置选择千位、百位、十位、个位,号码选择0568,开奖号码：10568(指定位置号码顺序不限)，即可中任四组选24。从万位、千位、百位、十位、个位中至少选择四个位置,号码区至少选择四个号码构成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
					}else{
						changeLotteryPanel.panel11sel5.ten("750", " 从0-9中选择4个号码组成一注。 ", "投注方案：0568，开奖号码：*0568（顺序不限），即可中四星组选24。从0-9中任意选择4个号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且顺序不限，即为中奖。");
					}
				break;
				case "组选12": changeLotteryPanel.shishicai.five("二重号","单号");
					if($(".lot_menu1_ssc .active").text()=="任选四"){
						$(".radio_sel").css("display","block");
						changeLotteryPanel.shishicai.showSelRadio(4);
						changeLotteryPanel.panel11sel5.ten("1500", " 从万位、千位、百位、十位、个位中至少选择四个位置,从“二重号”选择一个号码，“单号”中选择两个号码组成一注。 ", "投注方案：位置选择千位、百位、十位、个位,二重号：8；单号：06,开奖号码：10688(指定位置号码顺序不限)，即可中任四组选12。从万位、千位、百位、十位、个位中至少选择四个位置,从“二重号”选择一个号码，“单号”中选择两个号码组成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
					}else{
						changeLotteryPanel.panel11sel5.ten("1500", "从“二重号”选择一个号码，“单号”中选择两个号码组成一注。 ", "投注方案：二重号：8；单号：06，开奖号码：*0688（顺序不限），即可中四星组选12。选择1个二重号码和2个单号号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且所选二重号码在开奖号码中出现了2次，即为中奖。");
					}
				break;
				case "组选6": changeLotteryPanel.shishicai.four("二重号"); 
					if($(".lot_menu1_ssc .active").text()=="任选四"){
						$(".radio_sel").css("display","block");
						changeLotteryPanel.shishicai.showSelRadio(4);
						changeLotteryPanel.panel11sel5.ten("3000", " 从万位、千位、百位、十位、个位中至少选择四个位置,从“二重号”中选择两个号码组成一注。 ", "投注方案：位置选择千位、百位、十位、个位,二重号：28,开奖号码：12288(指定位置号码顺序不限)，即可中任四组选6。从万位、千位、百位、十位、个位中至少选择四个位置,从“二重号”中选择两个号码组成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
					}else{
						changeLotteryPanel.panel11sel5.ten("3000", " 从“二重号”中选择两个号码组成一注。  ", "投注方案：二重号：28，开奖号码：*2288（顺序不限），即可中四星组选6。，选择2个二重号码组成一注，所选的2个二重号码在开奖号码的千位、百位、十位、个位中分别出现了2次，即为中奖。");
					}
				break;
				case "组选12": changeLotteryPanel.shishicai.five("三重号","单号"); 
					changeLotteryPanel.panel11sel5.ten("4500", "从“三重号”中选择一个号码，“单号”中选择一个号码组成一注。 ", "投注方案：三重号：8；单号：2，开奖号码：*8828（顺序不限），即可中四星组选4。选择1个三重号码和1个单号号码组成一注，所选号码与开奖号码的千位、百位、十位、个位相同，且所选三重号码在开奖号码中出现了3次，即为中奖。");
				break;
				case "后三组合": changeLotteryPanel.shishicai.three();
					changeLotteryPanel.panel11sel5.ten("", "从百位、十位、个位各选一个号码组成三柱。  ", "投注方案：购买：6+7+8，该票共6元，由以下3注：678(三星)、78(二星)、8(一星)构成开奖号码：678，即可中三星、二星、一星各1注。从百位、十位、个位中至少各选择一个号码组成1-3星的组合共三注，当个位号码与开奖号码相同，则中1个3等奖；如果个位与十位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。");
				break;
				case "直选和值": changeLotteryPanel.shishicai.six(); break;
				case "直选跨度": changeLotteryPanel.shishicai.four("跨度");
					var activeText = $(".lot_menu1 .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("1800", "从0-9中任意选择1个号码组成一注。", "投注方案：跨度8，开奖号码：中三位0,8,X，其中X不等于9；或者中三位1,9,X，其中X不等于0，即可中中三直选。所选数值等于开奖号码的中3位最大与最小数字相减之差，即为中奖。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("1800", "从0-9中任意选择1个号码组成一注。", "投注方案：跨度8，开奖号码：后三位0,8,X，其中X不等于9；或者后三位1,9,X，其中X不等于0，即可中后三直选。所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("1800", "从0-9中任意选择1个号码组成一注。", "投注方案：跨度8，开奖号码：前三位0,8,X，其中X不等于9；或者前三位1,9,X，其中X不等于0，即可中前三直选。所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖。");
						break;
						case"后二":
						changeLotteryPanel.panel11sel5.ten("180", "从0-9中任意选择1个号码组成一注。", "投注方案：跨度9，开奖号码：后二位 90或09，即中后二直选。所选数值等于开奖号码的后2位最大与最小数字相减之差，即为中奖。");
						break;
						case"前二":
						changeLotteryPanel.panel11sel5.ten("180", "从0-9中任意选择1个号码组成一注。 ", "投注方案：跨度9，开奖号码：前二位 90或09，即中前二直选。所选数值等于开奖号码的前2位最大与最小数字相减之差，即为中奖。");
						break;
					}
					break;
				case "组三复式": changeLotteryPanel.shishicai.four("组三"); 
					var activeText = '';
					if($(".lot_menu1").css("display") == "block")
						activeText = $(".lot_menu1 .active").text(); // 直选单式 在不同星数是显示不一样  
					else
						activeText = $(".lot_menu1_ssc .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("600", " 从0-9中任意选择2个或2个以上号码。  ", "投注方案：588，开奖号码：中三位588（顺序不限），即可中中三组选三。从0-9中选择2个数字组成两注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("600", "从0-9中任意选择2个或2个以上号码。  ", "投注方案：345，开奖号码：345，即中后三直选。从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("600", " 从0-9中任意选择2个或2个以上号码。  ", "投注方案：588，开奖号码：前三位588（顺序不限），即可中前三组选三。从0-9中选择2个数字组成两注，所选号码与开奖号码的万位、千位、百位相同，且顺序不限，即为中奖。");
						break;
						default : if($(".lot_menu1_ssc .active").text() == "任选三"){
							$(".radio_sel").css("display","block");
							changeLotteryPanel.shishicai.showSelRadio(3);
							changeLotteryPanel.panel11sel5.ten("600", " 从万位、千位、百位、十位、个位中至少选择三个位置,号码区至少选择两个号码构成一注。  ", "投注方案：选择位置万位、十位、个位,选择号码12,开奖号码：11812，即中任三组三。从万位、千位、百位、十位、个位中至少选择三个位置,号码区至少选择两个号码构成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
						}
						break;
					}
				break;
				case "组三单式": changeLotteryPanel.shishicai.two(); 
					changeLotteryPanel.panel11sel5.ten("", " 手动输入号码，至少输入1个三位数号码（三个数字中必须有二个数字相同）。 ", "投注方案：001，开奖号码：后三位 010（顺序不限），即中后三组选三。手动输入一个3位数号码组成一注，三个数字中必须有二个数字相同，输入号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。");
					var activeText = '';
					if($(".lot_menu1").css("display") == "block")
						activeText = $(".lot_menu1 .active").text(); // 直选单式 在不同星数是显示不一样  
					else
						activeText = $(".lot_menu1_ssc .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("600", "  手动输入号码，至少输入1个三位数号码（三个数字中必须有二个数字相同）。  ", "投注方案：001，开奖号码：中三位 010（顺序不限），即中中三组选三。手动输入一个3位数号码组成一注，三个数字中必须有二个数字相同，输入号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("600", " 手动输入号码，至少输入1个三位数号码（三个数字中必须有二个数字相同）。  ", "投注方案：001，开奖号码：后三位 010（顺序不限），即中后三组选三。手动输入一个3位数号码组成一注，三个数字中必须有二个数字相同，输入号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("600", "  手动输入号码，至少输入1个三位数号码（三个数字中必须有二个数字相同）。  ", "投注方案：588，开奖号码：前三位588（顺序不限），即可中前三组选三。手动输入一个3位数号码组成一注，三个数字当中必须有二个数字相同，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。");
						break;
						default : if($(".lot_menu1_ssc .active").text() == "任选三"){
							$(".radio_sel").css("display","block");
							changeLotteryPanel.shishicai.showSelRadio(3);
							changeLotteryPanel.panel11sel5.ten("600", "从万位、千位、百位、十位、个位中至少选择三个位置,手动至少输入两个号码构成一注。", "投注方案：选择位置万位、十位、个位,输入号码12,开奖号码：11812，即中任三组三(单式)。从万位、千位、百位、十位、个位中至少选择三个位置,手动至少输入两个号码构成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
						}
						break;
					}
				break;
				case "组六复式": changeLotteryPanel.shishicai.four("组六"); 
					var activeText = '';
					if($(".lot_menu1").css("display") == "block")
						activeText = $(".lot_menu1 .active").text(); // 直选单式 在不同星数是显示不一样  
					else
						activeText = $(".lot_menu1_ssc .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("300", "  从0-9中任意选择3个或3个以上号码。  ", "投注方案：258，开奖号码：中三位 852（顺序不限），即中中三组选六。从0-9中任意选择3个号码组成一注，所选号码与开奖号码的千位、百位、十位相同，顺序不限，即为中奖。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("300", " 从0-9中任意选择3个或3个以上号码。 ", "投注方案：258，开奖号码：后三位 852（顺序不限），即中后三组选六。从0-9中任意选择3个号码组成一注，所选号码与开奖号码的百位、十位、个位相同，顺序不限，即为中奖。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("300", " 从0-9中任意选择3个或3个以上号码。  ", "投注方案：258，开奖号码：前三位 852（顺序不限），即中前三组选六。从0-9中任意选择3个号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。");
						break;
						default : if($(".lot_menu1_ssc .active").text() == "任选三"){
							$(".radio_sel").css("display","block");
							changeLotteryPanel.shishicai.showSelRadio(3);
							changeLotteryPanel.panel11sel5.ten("300", "从万位、千位、百位、十位、个位中至少选择三个位置,号码区至少选择三个号码构成一注。", "投注方案：选择位置万位、十位、个位,选择号码512，开奖号码：51812，即中任三组六。从万位、千位、百位、十位、个位中至少选择三个位置,号码区至少选择三个号码构成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
						}
						break;
					}
				break;
				case "组六单式": changeLotteryPanel.shishicai.two(); 
					var activeText = '';
					if($(".lot_menu1").css("display") == "block")
						activeText = $(".lot_menu1 .active").text(); // 直选单式 在不同星数是显示不一样  
					else
						activeText = $(".lot_menu1_ssc .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("300", "  手动输入号码，至少输入1个三位数号（三个数字全不相同）。 ", "投注方案：123，开奖号码：后三位 321（顺序不限），即中后三组选六。手动输入一个3位数号码组成一注，所选号码与开奖号码的百位、十位、个位相同，且顺序不限，即为中奖。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("300", " 手动输入号码，至少输入1个三位数号（三个数字全不相同）。", "投注方案：123，开奖号码：中三位 321（顺序不限），即中中三组选六。手动输入一个3位数号码组成一注，所选号码与开奖号码的千位、百位、十位相同，且顺序不限，即为中奖。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("300", " 手动输入号码，至少输入1个三位数号（三个数字全不相同）。  ", "投注方案：123，开奖号码：前三位 312（顺序不限），即中前三组选六。手动输入一个3位数号码组成一注，所选号码与开奖号码的万位、千位、百位相同，顺序不限，即为中奖。");
						break;
						default : if($(".lot_menu1_ssc .active").text() == "任选三"){
							$(".radio_sel").css("display","block");
							changeLotteryPanel.shishicai.showSelRadio(3);
							changeLotteryPanel.panel11sel5.ten("300", " 从万位、千位、百位、十位、个位中至少选择三个位置,手动至少输入三个号码构成一注。", "投注方案：选择位置万位、十位、个位,输入号码512，开奖号码：51812，即中任三组六(单式)。从万位、千位、百位、十位、个位中至少选择三个位置,手动至少输入三个号码构成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
						}
						break;
					}
				break;
				case "混合组选": changeLotteryPanel.shishicai.two(); 
					var activeText = '';
					if($(".lot_menu1").css("display") == "block")
						activeText = $(".lot_menu1 .active").text(); // 直选单式 在不同星数是显示不一样  
					else
						activeText = $(".lot_menu1_ssc .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("", " 手动输入号码，至少输入1个三位数号码。 ", "投注方案：001 和 123，开奖号码：中三位 010（顺序不限）即中中三组选三，或者中三位 312（顺序不限）即中中三组选六。手动输入一个3位数号码组成一注（不含豹子号），开奖号码的千位、百位、十位符合中三组三或者组六均为中奖。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("", "手动输入号码，至少输入1个三位数号码。", "投注方案：001 和 123，开奖号码：后三位 010（顺序不限）即中后三组选三，或者后三位 312（顺序不限）即中后三组选六。手动输入一个3位数号码组成一注（不含豹子号），开奖号码的百位、十位、个位符合后三组三或者组六均为中奖。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("", "手动输入号码，至少输入1个三位数号码。 ", "投注方案：001 和 123，开奖号码：前三位 010（顺序不限）即中前三组选三，或者前三位 312（顺序不限）即中前三组选六。手动输入一个3位数号码组成一注（不含豹子号），开奖号码的万位、千位、百位符合前三组三或组六均为中奖。");
						break;
						default : if($(".lot_menu1_ssc .active").text() == "任选三"){
							$(".radio_sel").css("display","block");
							changeLotteryPanel.shishicai.showSelRadio(3);
							changeLotteryPanel.panel11sel5.ten("", "  从万位、千位、百位、十位、个位中至少选择三个位置,手动至少输入三个号码构成一注(不包含豹子号)。", "投注方案：选择位置万位、十位、个位,输入号码512，开奖号码：51812，即中任三混合组选。从万位、千位、百位、十位、个位中至少选择三个位置,手动至少输入三个号码构成一注(不包含豹子号)，所选号码与开奖号码的指定位置上的号码相同，且顺序不限，即为中奖。");
						}
						break;
					}
				break;
				case "组选和值": changeLotteryPanel.shishicai.ten12(); 
					var activeText = '';
					if($(".lot_menu1").css("display") == "block")
						activeText = $(".lot_menu1 .active").text(); // 直选单式 在不同星数是显示不一样  
					else
						activeText = $(".lot_menu1_ssc .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("", " 从1-26中选择1个号码。 ", "投注方案：和值3，开奖号码：中三位 003（顺序不限）即中中三组选三，或者中三位 012（顺序不限）即中中三组选六。所选数值等于开奖号码千位、百位、十位三个数字相加之和(非豹子号)，即为中奖。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("", "从1-26中选择1个号码。", "投注方案：和值3，开奖号码：后三位 003（顺序不限）即中后三组选三，或者后三位 012（顺序不限）即中后三组选六。所选数值等于开奖号码百位、十位、个位三个数字相加之和(非豹子号)，即为中奖。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("", "从1-26中选择1个号码。 ", "投注方案：和值3，开奖号码：前三位 003（顺序不限）即中前三组选三，或者前三位 012（顺序不限）即中前三组选六。所选数值等于开奖号码万位、千位、百位三个数字相加之和(非豹子号)，即为中奖。");
						break;
						case"后二":
						changeLotteryPanel.panel11sel5.ten("90", " 从1-17中任意选择1个或者1个以上号码。 ", "投注方案：和值 1开奖号码：后二位 10 或者 01（顺序不限，不含对子号），即中后二组选。所选数值等于开奖号码的十位、个位二个数字相加之和（不含对子号），即为中奖。");
						break;
						case"前二":
						changeLotteryPanel.panel11sel5.ten("90", " 从1-17中任意选择1个或者1个以上号码。 ", "投注方案：和值 1开奖号码：前二位 10 或者 01（顺序不限，不含对子号），即中前二组选。所选数值等于开奖号码的万位、千位二个数字相加之和（不含对子号），即为中奖。");
						break;
						default : if($(".lot_menu1_ssc .active").text() == "任选三"){
							$(".radio_sel").css("display","block");
							changeLotteryPanel.shishicai.showSelRadio(3);
							changeLotteryPanel.panel11sel5.ten("600", " 从万位、千位、百位、十位、个位中至少选择三个位置,至少选择一个和值号码构成一注。", "投注方案：选择位置万位、十位、个位,选择和值号码8，开奖号码：51812，即中任三组选和值。从万位、千位、百位、十位、个位中至少选择两个位置,至少选择一个和值号码构成一注，所选号码与开奖号码的和值(不包含豹子号)相同，即为中奖。");
						}else{
							$(".radio_sel").css("display","block");
							changeLotteryPanel.shishicai.showSelRadio(2);
							changeLotteryPanel.panel11sel5.ten("600", " 从万位、千位、百位、十位、个位中至少选择两个位置,至少选择一个和值号码构成一注。", "投注方案：选择位置万位、十位、个位,选择和值号码8，开奖号码：51812，即中任三组选和值。从万位、千位、百位、十位、个位中至少选择两个位置,至少选择一个和值号码构成一注，所选号码与开奖号码的和值(不包含豹子号)相同，即为中奖。");
						}
						break;
					}
				break;
				case "组选包胆": changeLotteryPanel.shishicai.ten("包胆"); 
					var activeText = $(".lot_menu1 .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("600", "  从0-9中任选1个号码。 ", "投注方案：包胆3，开奖号码：中三位 3XX 或者 33X，即中中三组选三，中三位 3XY，即中中三组选六。从0-9中任意选择1个包胆号码，开奖号码的千位、百位、十位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("600", " 从0-9中任选1个号码。", "投注方案：包胆3，开奖号码：后三位 3XX 或者 33X，即中后三组选三，后三位 3XY，即中后三组选六。从0-9中任意选择1个包胆号码，开奖号码的百位、十位、个位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("600", "  从0-9中任选1个号码。 ", "投注方案：包胆3，开奖号码：前三位 3XX 或者 33X，即中前三组选三，或者前三位 3XY，即中前三组选六。从0-9中任意选择1个包胆号码，开奖号码的万位、千位、百位中任意1位只要和所选包胆号码相同，即为中奖。");
						break;
						case"后二":
						changeLotteryPanel.panel11sel5.ten("90", " 从0-9中任选1个号码。", "投注方案：包胆 8，开奖号码：后二位 8X，且X不等于8，即中后二组选。从0-9中任意选择1个包胆号码，开奖号码的十位，个位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。");
						break;
						case"前二":
						changeLotteryPanel.panel11sel5.ten("90", " 从0-9中任选1个号码。 ", "投注方案：包胆 8，开奖号码：前二位 8X，且X不等于8，即中前二组选。从0-9中任意选择1个包胆号码，开奖号码的万位，千位中任意1位包含所选的包胆号码相同（不含对子号），即为中奖。");
						break;
					}
				break;
				case "和值尾数": changeLotteryPanel.shishicai.four("和值尾数"); 
					var activeText = $(".lot_menu1 .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("18", "  从0-9中选择1个号码。 ", "投注方案：和值尾数 8，开奖号码：中三位 936，和值位数为8，即中和值尾数。所选数值等于开奖号码的千位、百位、十位三个数字相加之和的尾数，即为中奖。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("18", "从0-9中选择1个号码。", "投注方案：和值尾数 8，开奖号码：后三位 936，和值位数为8，即中和值尾数。所选数值等于开奖号码的百位、十位、个位三个数字相加之和的尾数，即为中奖。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("18", " 从0-9中选择1个号码。 ", "投注方案：和值尾数 8开奖号码：前三位 936，和值位数为8，即中和值尾数。所选数值等于开奖号码的万位、千位、百位三个数字相加之和的尾数，即为中奖。");
						break;
					}
				break;
				case "特殊号": changeLotteryPanel.shishicai.seven(selText,["豹子","顺子","对子"]);
					var activeText = $(".lot_menu1 .active").text();
					switch(activeText){
						case"中三":
						changeLotteryPanel.panel11sel5.ten("", "  选择一个号码形态。 ", "投注方案：豹子顺子对子,开奖号码：中三位 888，即中豹子；中三位 678，即中顺子；中三位 558，即中对子。所选的号码特殊属性和开奖号码中3位的属性一致，即为中奖。其中：1.顺子号的个、百、千位不分顺序；2.对子号指的是开奖号码的中三位当中，任意2位数字相同的三位数号码。");
						break;
						case"后三":
						changeLotteryPanel.panel11sel5.ten("", "选择一个号码形态。", "投注方案：豹子顺子对子,开奖号码：后三位 888，即中豹子；后三位 678，即中顺子；后三位 558，即中对子。所选的号码特殊属性和开奖号码后3位的属性一致，即为中奖。其中：1.顺子号的个、十、百位不分顺序；2.对子号指的是开奖号码的后三位当中，任意2位数字相同的三位数号码。");
						break;
						case"前三":
						changeLotteryPanel.panel11sel5.ten("", " 选择一个号码形态。", "投注方案：豹子顺子对子,开奖号码：前三位 888，即中豹子；前三位 678，即中顺子；前三位 558，即中对子。所选的号码特殊属性和开奖号码前3位的属性一致，即为中奖。其中：1.顺子号的万、千、百位不分顺序；2.对子号指的是开奖号码的前三位当中，任意2位数字相同的三位数号码。");
						break;
					}
				break;
				case "中三组合": changeLotteryPanel.shishicai.three(); 
					changeLotteryPanel.panel11sel5.ten("", " 从千位、百位、十位各选一个号码组成三注。 ", "投注方案：购买：6+7+8，该票共6元，由以下3注：678(三星)、78(二星)、8(一星)构成开奖号码：678，即可中三星、二星、一星各1注。从千位、百位、十位中至少各选择一个号码组成1-3星的组合共三注，当十位号码与开奖号码相同，则中1个3等奖；如果十位与百位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。");
				break;
				case "前三组合": changeLotteryPanel.shishicai.three(); 
					changeLotteryPanel.panel11sel5.ten("", " 从万位、千位、百位各选一个号码组成三注。 ", "投注方案：购买：6+7+8，该票共6元，由以上3注：678(三星)、78(二星)、8(一星)构成开奖号码：前三位 678，即可中三星、二星、一星各1注。从万位、千位、百位中至少各选择一个号码组成1-3星的组合共三注，当百位号码与开奖号码相同，则中1个3等奖；如果百位与千位号码与开奖号码相同，则中1个3等奖以及1个2等奖，依此类推，最高可中3个奖。");
				break;
				case "组选复式": changeLotteryPanel.shishicai.four("组选"); 
					var activeText = '';
					if($(".lot_menu1").css("display") == "block")
						activeText = $(".lot_menu1 .active").text(); // 直选单式 在不同星数是显示不一样  
					else
						activeText = $(".lot_menu1_ssc .active").text(); 
					switch(activeText){
						case"后二":
						changeLotteryPanel.panel11sel5.ten("90", "  从0-9中任意选择2个或2个以上号码。 ", "投注方案：58，开奖号码：后二位 85 或者 58（顺序不限，不含对子号），即中后二组选。。从0-9中选2个号码组成一注，所选号码与开奖号码的十位、个位相同（不含对子号），顺序不限，即中奖。");
						break;
						case"前二":
						changeLotteryPanel.panel11sel5.ten("90", " 从0-9中任意选择2个或2个以上号码。", "投注方案：58，开奖号码：前二位 85 或者 58（顺序不限，不含对子号），即中前二组选。从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限，即中奖。");
						break;
						default : if($(".lot_menu1_ssc .active").text() == "任选二"){
							$(".radio_sel").css("display","block");
							changeLotteryPanel.shishicai.showSelRadio(2);
							changeLotteryPanel.panel11sel5.ten("90", " 从0-9中任意选择2个或2个以上号码。", "投注方案：58，开奖号码：前二位 85 或者 58（顺序不限，不含对子号），即中前二组选。从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限，即中奖。");
						}
					}
				break;
				case "组选单式": changeLotteryPanel.shishicai.two(); 
					var activeText = '';
					if($(".lot_menu1").css("display") == "block")
						activeText = $(".lot_menu1 .active").text(); // 直选单式 在不同星数是显示不一样  
					else
						activeText = $(".lot_menu1_ssc .active").text();
					switch(activeText){
						case"后二":
						changeLotteryPanel.panel11sel5.ten("90", "手动输入号码，至少输入1个二位数号码组成一注。", "投注方案：58，开奖号码：前二位 85 或者 58（顺序不限，不含对子号），即中前二组选。手动输入一个2位数号码组成一注，输入号码的十位、个位与开奖号码相同（不含对子号），顺序不限，即为中奖。");
						break;
						case"前二":
						changeLotteryPanel.panel11sel5.ten("90", " 手动输入号码，至少输入1个二位数号码组成一注。", "投注方案：58，开奖号码：前二位 85 或者 58（顺序不限，不含对子号），即中前二组选。手动输入一个2位数号码组成一注，输入号码的万位、千位与开奖号码相同，顺序不限，即为中奖。");
						break;
						default : if($(".lot_menu1_ssc .active").text() == "任选二"){
							$(".radio_sel").css("display","block");
							changeLotteryPanel.shishicai.showSelRadio(2);
							changeLotteryPanel.panel11sel5.ten("90", " 从0-9中任意选择2个或2个以上号码。", "投注方案：58，开奖号码：前二位 85 或者 58（顺序不限，不含对子号），即中前二组选。从0-9中选2个号码组成一注，所选号码与开奖号码的万位、千位相同，顺序不限，即中奖。");
						}
					}
				break;
				case "定位胆": changeLotteryPanel.shishicai.three(); 
					changeLotteryPanel.panel11sel5.ten("18", " 在万位、千位、百位、十位、个位任意位置上任意选择1个或1个以上号码。 ", "投注方案：万位 1，开奖号码：万位 1，即中定位胆万位。从万位、千位、百位、十位、个位任意位置上至少选择1个以上号码，所选号码与相同位置上的开奖号码一致，即为中奖。");
				break;
				
				case "后三一码": changeLotteryPanel.shishicai.four("不定位"); 
					changeLotteryPanel.panel11sel5.ten("6.6", "从0-9中任意选择1个以上号码。 ", "投注方案：1，开奖号码：后三位至少出现1个1，即中后三一码不定位。从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的百位、十位、个位中包含所选号码，即为中奖。");
				break;
				case "前三一码": changeLotteryPanel.shishicai.four("不定位"); 
					changeLotteryPanel.panel11sel5.ten("6.6", "从0-9中任意选择1个以上号码。 ", "投注方案：1，开奖号码：前三位，至少出现1个1，即中前三一码不定位。从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的万位、千位、百位中包含所选号码，即为中奖。");
				break;
				case "后三二码": changeLotteryPanel.shishicai.four("不定位"); 
					changeLotteryPanel.panel11sel5.ten("33", " 从0-9中任意选择2个以上号码。 ", "投注方案：12，开奖号码：后三位，至少出现1和2各1个，即中后三二码不定位。从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的百位、十位、个位中同时包含所选的2个号码，即为中奖。");
				break;
				case "前三二码": changeLotteryPanel.shishicai.four("不定位");
					changeLotteryPanel.panel11sel5.ten("33", "从0-9中任意选择2个以上号码。 ", "投注方案：12，开奖号码：前三位，至少出现1和2各1个，即中前三二码不定位。从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位中同时包含所选的2个号码，即为中奖。");
				break;
				case "四星一码": changeLotteryPanel.shishicai.four("不定位"); 
					changeLotteryPanel.panel11sel5.ten("5.2", " 从0-9中任意选择1个以上号码。 ", "投注方案：1，开奖号码：后四位，至少出现1个1，即中四星一码不定位。从0-9中选择1个号码，每注由1个号码组成，只要开奖号码的千位、百位、十位、个位中包含所选号码，即为中奖。");
				break;
				case "四星二码": changeLotteryPanel.shishicai.four("不定位"); 
					changeLotteryPanel.panel11sel5.ten("18.4", "从0-9中任意选择2个以上号码。 ", "投注方案：12，开奖号码：后四位，至少出现1和2各一个，即中四星二码不定位。从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。");
				break;
				case "五星二码": changeLotteryPanel.shishicai.four("不定位"); 
					changeLotteryPanel.panel11sel5.ten("12", " 从0-9中任意选择2个以上号码。  ", "投注方案：12，开奖号码：至少出现1和2各一个，即中五星二码不定位。从0-9中选择2个号码，每注由2个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的2个号码，即为中奖。");
				break;
				case "五星三码": changeLotteryPanel.shishicai.four("不定位");
					changeLotteryPanel.panel11sel5.ten("41", " 从0-9中任意选择3个以上号码。 ", "投注方案：123，开奖号码：至少出现1、2、3各1个，即中五星三码不定位。从0-9中选择3个号码，每注由3个不同的号码组成，开奖号码的万位、千位、百位、十位、个位中同时包含所选的3个号码，即为中奖。");
				break;
				
				case "前二大小单双": changeLotteryPanel.shishicai.eight("万位","千位"); 
					changeLotteryPanel.panel11sel5.ten("7.2", " 从万位、千位中的“大、小、单、双”中至少各选一个组成一注。 ", "投注方案：小双，开奖号码：万位与千位“小双”，即中前二大小单双。对万位、千位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。");
				break;
				case "后二大小单双": changeLotteryPanel.shishicai.eight("十位","个位");
					changeLotteryPanel.panel11sel5.ten("7.2", "从十位、个位中的“大、小、单、双”中至少各选一个组成一注。 ", "投注方案：大单，开奖号码：十位与个位“大单”，即中后二大小单双。对十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。");
				break;
				case "前三大小单双": changeLotteryPanel.shishicai.nine("万位","千位","百位");
					changeLotteryPanel.panel11sel5.ten("14.4", " 从万位、千位、百位中的“大、小、单、双”中至少各选一个组成一注。 ", "投注方案：小双小，开奖号码：万位、千位、百位“小双小”，即中前三大小单双。对万位、千位和百位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。");
				break;
				case "后三大小单双": changeLotteryPanel.shishicai.nine("百位","十位","个位");
					changeLotteryPanel.panel11sel5.ten("14.4", " 从百位、十位、个位中的“大、小、单、双”中至少各选一个组成一注。 ", "投注方案：大单大，开奖号码：百位、十位、个位“大单大”，即中后三大小单双。对百位、十位和个位的“大（56789）小（01234）、单（13579）双（02468）”形态进行购买，所选号码的位置、形态与开奖号码的位置、形态相同，即为中奖。");
				break;
				case "重复号": changeLotteryPanel.shishicai.seven(selText,["4条","3条","3带2","两对","一对","全不同"]);
					changeLotteryPanel.panel11sel5.ten("", "4条、3条、3带2、两对、一对、全不同号，任选一个即可投注； ", "4条：例如，30000，01000，…，59999，11111(5条)，…3条：例如，32000，55000(3条+2条)，01000（4条），…，99999（5条），…3带2：例如，10001，20200，…,00000（5条）。两对：例如，12100、00000(5条)、11112(4条)、55522(3条+2条)…一对：例如，84853、00000(5条)、11112(4条)、55522(3条+2条)、12100(2条+2条)，…全不同号：例如，13248、15768，…4条：5星中有4星号码相同（其中包括5条），顺序不限，即为中奖。3条：5星中有3星号码相同，顺序不限，即为中奖（其中包括5条、4条、3条+2条）。3带2：5星中有3星同号，剩下2星也同号（包括5条），顺序不限，即为中奖。两对：5星中出现2个双星号，顺序不限，即为中奖（包括5条、4条、3条+2条）。一对：5星中出现1个双星号，顺序不限，即为中奖（包括5条、4条、3条+2条、2条+2条）。全不同号：5星中有5个号码全不相同，即为中奖。例如，13248、15768。");
				break;
				case "顺子号": changeLotteryPanel.shishicai.seven(selText,["顺子"]); 
					changeLotteryPanel.panel11sel5.ten("250", " 顺子，任选一个即可投注； ", "顺子号，例如， 12345、21354、….；其中67890、78901、90123均不是顺子号，顺子：5星号码能给按照顺序连起来，顺序不限，即为中奖。");
				break;
				case "单双号": changeLotteryPanel.shishicai.seven(selText,["全单","全双","4单1双","1单4双","3单2双","2单3双"]);
					changeLotteryPanel.panel11sel5.ten("", " 全单、全双、4单1双、1单4双、3单2双、2单3双，任选一个即可投注； ", "全单：例如， 13579、11375（有重复的号）….全双：例如， 02468、 62220（有重复的号）….4单1双：例如， 13578、 56555（有重复的号）….1单4双：例如， 12468、 66445（有重复的号）….3单2双：例如， 13568、 56455（有重复的号）….2单3双：例如， 13468、 56445（有重复的号）….全单：5星由1、3、5、7、9共5个数字所能组成所有号（不同位数的号可以重复，例如，11375），称为全单号全双：5星由0、2、4、6、8共5个数字所能组成所有号（不同位数的号可以重复，例如，62220），称为全双号4单1双：5星由4个单数和1个双数组成号（不同位数的号可以重复，例如，56555），称为4单1双，顺序不限，即为中奖1单4双：5星由1个单数和4个双数组成号（不同位数的号可以重复，例如，66445），称为1单4双，顺序不限，即为中奖3单2双：5星由3个单数和2个双数组成号（不同位数的号可以重复，例如，56455），称为3单2双，顺序不限，即为中奖。2单3双：5星由2个单数和3个双数组成号（不同位数的号可以重复，例如，56445），称为2单3双，顺序不限，即为中奖");
				break;
				case "大小号": changeLotteryPanel.shishicai.seven(selText,["全大","全小","4大1小","1大4小","3大2小","2大3小"]); 
					changeLotteryPanel.panel11sel5.ten("", "全大、全小、4大1小、1大4小、3大2小、2大3小，任选一个即可投注； ", "全大号：例如， 56789、55589（有重复的号）….全小号：例如， 01234、 00120（有重复的号）….4大1小：例如， 19578、 51555（有重复的号）….1大4小：例如， 13028、 52210（有重复的号）….3大2小：例如， 13578、 52255（有重复的号）….2大3小：例如， 13078、 52215（有重复的号）….全小号：5星由5、6、7、8、9共5个数字所能组成所有号（不同位数的号可以重复，例如，55589），称为全大号全小号：5星由0、1、2、3、4共5个数字所能组成所有号（不同位数的号可以重复，例如，00120），称为全小号4大1小：5星由4个大号和1个小号组成号（不同位数的号可以重复，例如，51555），称为4大1小，顺序不限，即为中奖1大4小：5星由1个大号和4个小号组成号（不同位数的号可以重复，例如，52210），称为1大4小，顺序不限，即为中奖3大2小：5星由3个大号和2个小号组成号（不同位数的号可以重复，例如，52255），称为3大2小，顺序不限，即为中奖。2大3小：5星由2个大号和3个小号组成号（不同位数的号可以重复，例如，52215），称为2大3小，顺序不限，即为中奖");
				break;
			}
		}
	},
		
		shishicai : {
			one : function(){  // 彩票面板
				$(".lot_panel_3d li:nth-child(2) .lot_b_i_i_1:nth-child(3)").css("display","inline-block");
				$(".lot_num_input").css("display","none");
				$(".lot_panel_3d").css("display","block");
				$(".lot_panel_3d_size").css("display","none");
			}, 
			two : function(){  // 单式  
				$(".lot_num_input").css("display","block");
				$(".lot_panel_3d").css("display","none");
				$(".lot_panel_3d_size").css("display","none");
				var activeText = $(".menu_type .m_t_1 .m_t_1_i.active").text(); // 直选复式 在不同星数是显示不一样  
				switch(activeText){
					case"五星":  
						changeLotteryPanel.panel11sel5.ten("180000", " 手动输入号码，至少输入1个五位数号码组成一注(一次最大可投注100000注)。", "投注方案：23456，开奖号码：23456，即中五星直选。手动输入一个5位数号码组成一注，所选号码的万位、千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。");
						break;
					case"四星":  
					changeLotteryPanel.panel11sel5.ten("18000", "手动输入号码，至少输入1个四位数号码组成一注。", "投注方案：3456，开奖号码：3456，即中四星直选。手动输入一个4位数号码组成一注，所选号码的千位、百位、十位、个位与开奖号码相同，且顺序一致，即为中奖。");
						break;
					case"后三":  
					changeLotteryPanel.panel11sel5.ten("1800", "  手动输入号码，至少输入1个三位数号码组成一注。", "投注方案：345，开奖号码：345，即中后三直选。手动输入一个3位数号码组成一注，所选号码与开奖号码的百位、十位、个位相同，且顺序一致，即为中奖。");
						break;
					case"中三":  
					changeLotteryPanel.panel11sel5.ten("1800", "手动输入号码，至少输入1个三位数号码组成一注。 ", "投注方案：345，开奖号码：345，即中中三直选。手动输入一个3位数号码组成一注，所选号码与开奖号码的千位、百位、十位相同，且顺序一致，即为中奖。");
						break;
					case"前三":  
					changeLotteryPanel.panel11sel5.ten("1800", "  从万位、千位、百位各选一个号码组成一注。 ", "投注方案：345，开奖号码：前三位 345，即中前三直选。从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码前3位相同，且顺序一致，即为中奖。");
						break;
					case"后二":  
					changeLotteryPanel.panel11sel5.ten("180", "  手动输入号码，至少输入1个二位数号码组成一注。", "投注方案：58，开奖号码：后二位 58，即中后二直选。手动输入一个2位数号码组成一注，输入号码的十位、个位与开奖号码相同，且顺序一致，即为中奖。");
						break;
					case"前二":  
						changeLotteryPanel.panel11sel5.ten("180", " 手动输入号码，至少输入1个二位数号码组成一注。 ", "投注方案：58，开奖号码：前二位 58，即中前二直选。手动输入一个2位数号码组成一注，输入号码的万位、千位与开奖号码相同，且顺序一致，即为中奖。");
						break;
					default : if($(".lot_menu1_ssc .active").text() == "任选二"){
						$(".radio_sel").css("display","block");
						changeLotteryPanel.shishicai.showSelRadio(2);
						changeLotteryPanel.panel11sel5.ten("180", "  从万位、千位、百位、十位、个位中至少选择两个位置,至少手动输入一个两位数的号码构成一注。", "投注方案：位置选择万位、百位，输入号码58开奖号码：51812，即中任二直选(单式)。从万位、千位、百位、十位、个位中至少选择两个位置,至少手动输入一个两位数的号码构成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。");
					}else if($(".lot_menu1_ssc .active").text() == "任选三"){
						$(".radio_sel").css("display","block");
						changeLotteryPanel.shishicai.showSelRadio(3);
						changeLotteryPanel.panel11sel5.ten("1800", "从万位、千位、百位、十位、个位中至少选择三个位置,至少手动输入一个三位数的号码构成一注。", "投注方案：位置选择万位、百位,个位，输入号码582,开奖号码：51812，即中任三直选(单式)。从万位、千位、百位、十位、个位中至少选择三个位置,至少手动输入一个三位数的号码构成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。");
					}else{
						$(".radio_sel").css("display","block");
						changeLotteryPanel.shishicai.showSelRadio(4);
						changeLotteryPanel.panel11sel5.ten("18000", "从万位、千位、百位、十位、个位中至少选择四个位置,至少手动输入一个四位数的号码构成一注。", "投注方案：选择万位、千位、百位、十位，输入号码5181,开奖号码：51812，即中任四直选(单式)。从万位、千位、百位、十位、个位中至少选择四个位置,至少手动输入一个四位数的号码构成一注，所选号码与开奖号码的指定位置上的号码相同，且顺序一致，即为中奖。");
					}
				}
			},
			
			three : function(){
				var activeText = $(".menu_type .m_t_1 .m_t_1_i.active").text(); // 直选复式 在不同星数是显示不一样  
				$(".lot_panel_3d li:nth-child(2) .lot_title").text("万位");
				$(".lot_panel_3d li:nth-child(3) .lot_title").text("千位");
				$(".lot_panel_3d li:nth-child(4) .lot_title").text("百位");
				$(".lot_panel_3d li:nth-child(5) .lot_title").text("十位");
				$(".lot_panel_3d li:nth-child(6) .lot_title").text("个位");
				$(".lot_panel_3d li").css("display","none");  
				changeLotteryPanel.shishicai.one();
				switch(activeText){
					case"五星":  
						$(".lot_panel_3d li:gt(0)").css("display","block");
						$(".lot_panel_3d li:gt(5)").css("display","none");
						changeLotteryPanel.panel11sel5.ten("180000", " 从万位、千位、百位、十位、个位各选一个号码组成一注。", "投注方案：13456,开奖号码：13456，即中五星直选。从万位、千位、百位、十位、个位中选择一个5位数号码组成一注，所选号码与开奖号码全部相同，且顺序一致，即为中奖。");
						break;
					case"四星":  
						$(".lot_panel_3d li:gt(1)").css("display","block");
						$(".lot_panel_3d li:gt(5)").css("display","none");
					changeLotteryPanel.panel11sel5.ten("18000", " 从千位、百位、十位、个位各选一个号码组成一注。", "投注方案：3456，开奖号码：3456，即中四星直选。，从千位、百位、十位、个位中选择一个4位数号码组成一注，所选号码与开奖号码相同，且顺序一致，即为中奖。");
						break;
					case"后三":  
						$(".lot_panel_3d li:gt(2)").css("display","block");
						$(".lot_panel_3d li:gt(5)").css("display","none");
					changeLotteryPanel.panel11sel5.ten("1800", " 从百位、十位、个位各选一个号码组成一注。", "投注方案：345，开奖号码：345，即中后三直选。从百位、十位、个位中选择一个3位数号码组成一注，所选号码与开奖号码后3位相同，且顺序一致，即为中奖。");
						break;
					case"中三":  
						$(".lot_panel_3d li:gt(1)").css("display","block"); 
						$(".lot_panel_3d li:nth-child(6)").css("display","none");
						$(".lot_panel_3d li:gt(5)").css("display","none");
					changeLotteryPanel.panel11sel5.ten("1800", " 从千位、百位、十位各选一个号码组成一注。", "投注方案：345，开奖号码：345，即中中三直选。从千位、百位、十位中选择一个3位数号码组成一注，所选号码与开奖号码中3位相同，且顺序一致，即为中奖。");
						break;
					case"前三":  
						$(".lot_panel_3d li:gt(0)").css("display","block"); 
						$(".lot_panel_3d li:nth-child(5)").css("display","none");
						$(".lot_panel_3d li:nth-child(6)").css("display","none");
						$(".lot_panel_3d li:gt(5)").css("display","none");
					changeLotteryPanel.panel11sel5.ten("1800", " 从万位、千位、百位各选一个号码组成一注。", "投注方案：345，开奖号码：前三位 345，即中前三直选。从万位、千位、百位中选择一个3位数号码组成一注，所选号码与开奖号码前3位相同，且顺序一致，即为中奖。");
						break;
					case"后二":  
						$(".lot_panel_3d li:gt(3)").css("display","block");  
						$(".lot_panel_3d li:gt(5)").css("display","none");
					changeLotteryPanel.panel11sel5.ten("180", " 从十位、个位各选一个号码组成一注。", "投注方案：58，开奖号码：后二位 58，即中后二直选。从十位、个位中选择一个2位数号码组成一注，所选号码与开奖号码的后2位相同，且顺序一致，即为中奖。");
						break;
					case"前二":  
						$(".lot_panel_3d li:gt(0)").css("display","block");  
						$(".lot_panel_3d li:gt(2)").css("display","none"); 
						changeLotteryPanel.panel11sel5.ten("180", " 从万位、千位中至少各选1个号码组成一注。 ", "投注方案：58，开奖号码：前二位 58，即中前二直选。从万位、千位中选择一个2位数号码组成一注，所选号码与开奖号码的前2位相同，且顺序一致，即为中奖。");
						break;
					case"定位胆":  
						$(".lot_panel_3d li:gt(0)").css("display","block");
						$(".lot_panel_3d li:gt(5)").css("display","none");
						break;
					case"任选二":
						$(".lot_panel_3d li:gt(0)").css("display","block");
						$(".lot_panel_3d li:gt(5)").css("display","none");break;
					case"任选三":
						$(".lot_panel_3d li:gt(0)").css("display","block");
						$(".lot_panel_3d li:gt(5)").css("display","none");break;
					case"任选四":
						$(".lot_panel_3d li:gt(0)").css("display","block");
						$(".lot_panel_3d li:gt(5)").css("display","none");break;
				}
			},
			four : function(text1){
				changeLotteryPanel.shishicai.one();
				$(".lot_panel_3d li:gt(1)").css("display","none");
				$(".lot_panel_3d li:nth-child(2) .lot_title").text(text1);
			},
			five : function(text1,text2){
				changeLotteryPanel.shishicai.one();
				$(".lot_panel_3d li:gt(2)").css("display","none");
				$(".lot_panel_3d li:nth-child(2) .lot_title").text(text1);
				$(".lot_panel_3d li:nth-child(3) .lot_title").text(text2);
			},
			six : function(){
				changeLotteryPanel.shishicai.one();
				$(".lot_panel_3d li:gt(0)").css("display","none");
				var activeText = $(".menu_type .m_t_1 .m_t_1_i.active").text(); // 直选复式 在不同星数是显示不一样  
				switch(activeText){
					case"中三":$(".lot_panel_3d li:nth-child(7)").css("display","block");
					changeLotteryPanel.panel11sel5.ten("1800", " 从0-27中任意选择1个或1个以上号码。 ", "投注方案：和值1，开奖号码：中三位001，010，100，即中中三直选。所选数值等于开奖号码的千位、百位、十位三个数字相加之和，即为中奖。");
					break;
					case"后三":$(".lot_panel_3d li:nth-child(7)").css("display","block");
					changeLotteryPanel.panel11sel5.ten("1800", " 从0-27中任意选择1个或1个以上号码。 ", "投注方案：和值1，开奖号码：后三位001，010，100，即中后三直选。所选数值等于开奖号码的百位、十位、个位三个数字相加之和，即为中奖。");
					break;
					case"前三":$(".lot_panel_3d li:nth-child(7)").css("display","block");
					changeLotteryPanel.panel11sel5.ten("1800", " 从0-27中任意选择1个或1个以上号码。 ", "投注方案：和值 1，开奖号码：前三位 001、010、100，即中前三直选。所选数值等于开奖号码的万位、千位、百位三个数字相加之和，即为中奖。");
					break;
					case"后二":$(".lot_panel_3d li:nth-child(8)").css("display","block");
					changeLotteryPanel.panel11sel5.ten("180", "  从0-18中任意选择1个或1个以上的和值号码。 ", "投注方案：和值1，开奖号码：后二位 01，10，即中后二直选。所选数值等于开奖号码的十位、个位二个数字相加之和，即为中奖");
					break;
					case"前二":$(".lot_panel_3d li:nth-child(8)").css("display","block");
					changeLotteryPanel.panel11sel5.ten("180", " 从0-18中任意选择1个或1个以上号码。 ", "投注方案：和值1，开奖号码：前二位 01，10，即中前二直选。所选数值等于开奖号码的万位、千位二个数字相加之和，即为中奖。");
					break;
					default : if($(".lot_menu1_ssc .active").text() == "任选二"){
						$(".radio_sel").css("display","block");
						changeLotteryPanel.shishicai.showSelRadio(2);
						changeLotteryPanel.panel11sel5.ten("180", " 从万位、千位、百位、十位、个位中至少选择两个位置,至少选择一个和值号码构成一注。", "投注方案：位置选择万位、百位，选择和值号码13，开奖号码：51812，即中任二直选(单式)。从万位、千位、百位、十位、个位中至少选择两个位置,至少选择一个和值号码构成一注，所选号码与开奖号码的和值相同，即为中奖。");
						$(".lot_panel_3d li:nth-child(8)").css("display","block");break;
					}else{
						$(".radio_sel").css("display","block");
						changeLotteryPanel.shishicai.showSelRadio(3);
						changeLotteryPanel.panel11sel5.ten("1800", "  从万位、千位、百位、十位、个位中至少选择三个位置,至少选择一个和值号码构成一注。", "投注方案：位置选择万位、百位、个位，选择和值号码15，开奖号码：51812，即中任二直选(单式)。从万位、千位、百位、十位、个位中至少选择三个位置,至少选择一个和值号码构成一注，所选号码与开奖号码的和值相同，即为中奖。");
						$(".lot_panel_3d li:nth-child(7)").css("display","block");break;
					}
						
				}
			},
			ten12 : function(){
				changeLotteryPanel.shishicai.one();
				var activeText = $(".menu_type .m_t_1 .m_t_1_i.active").text(); // 直选复式 在不同星数是显示不一样  
				$(".lot_panel_3d li:gt(0)").css("display","none");
				switch(activeText){
					case"中三":$(".lot_panel_3d li:nth-child(1)").css("display","block");break;
					case"后三":$(".lot_panel_3d li:nth-child(1)").css("display","block");break;
					case"前三":$(".lot_panel_3d li:nth-child(1)").css("display","block");break;
					case"后二":$(".lot_panel_3d li:nth-child(9)").css("display","block");break;
					case"前二":$(".lot_panel_3d li:nth-child(9)").css("display","block");break;
					default:if($(".lot_menu1_ssc .active").text() == "任选二"){
						$(".lot_panel_3d li:nth-child(9)").css("display","block");break;
					}else{
						$(".lot_panel_3d li:nth-child(1)").css("display","block");break;
					}
				}
			},
			seven : function(text,arr){
				$(".lot_panel_3d_size").css("display","none");
				$(".lot_num_input").css("display","none");
				$(".lot_panel_3d").css("display","none");
				$(".qu_wei").css("display", "block");
				$(".qu_wei .qu_wei_item").css("display","inline-block");
				$(".qu_wei .qu_wei_item").each(function(i,item){
					$(this).text(arr[i]);
				});
				if(text == "顺子号"){
					$(".qu_wei .qu_wei_item:gt(0)").css("display","none");
				}
				if(text == "特殊号"){
					$(".qu_wei .qu_wei_item:gt(2)").css("display","none");
				}
			},
			eight : function(text1,text2){
				$(".lot_num_input").css("display","none");
				$(".lot_panel_3d").css("display","none");
				$(".lot_panel_3d_size").css("display","block");
				$(".lot_panel_3d_size li").css("display","none");
				$(".lot_panel_3d_size li:first-child").css("display","block").find(" .lot_title").text(text1);
				$(".lot_panel_3d_size li:nth-child(2)").css("display","block").find(" .lot_title").text(text2);
			},
			nine : function(text1,text2,text3){
				$(".lot_panel_3d_size li:first-child").css("display","block").find(" .lot_title").text(text1);
				$(".lot_panel_3d_size li:nth-child(2)").css("display","block").find(" .lot_title").text(text2);
				$(".lot_panel_3d_size li:nth-child(3)").css("display","block").find(" .lot_title").text(text3);
			},
			
			ten : function(text1){
				changeLotteryPanel.shishicai.one();
				$(".lot_panel_3d li:gt(1)").css("display","none");
				$(".lot_panel_3d li:nth-child(2) .lot_title").text(text1);
				$(".lot_panel_3d li:nth-child(2) .lot_b_i_i_1:nth-child(3)").css("display","none");
			},
			showSelRadio : function(index){  // 任选显示位数选择面板
				$(".radio_sel input").each(function(i,item){
					$(this).prop("checked","");
					if(i>=(5-index)){
						$(this).prop("checked","true");
					}
					$(".radio_sel_i2_1").text(index);
					$(".radio_sel_i2_2").text(1);
				});
			},
		},


		// 定义初始化显示面板 1 . 11选5   2  时时彩  3  福彩3d
		panel11sel5: { // 11 选 5
			all: function() { // 保证彩票面板li  所有的都是在显示状态再操作
				$(".lot_panel").find("li").css("display", "block");
				$(".lot_panel").find("li:last-child").css("display","none");
			},

			zero: function(arr) { // 显示趣味面板
				$(".qu_wei").css("display", "block");
				$(".lot_panel").css("display", "none");
				$(".lot_num_input").css("display", "none");
				$(".qu_wei .qu_wei_item").each(function(i,item){
					$(this).text(arr[i]);
				});
			},

			two: function() { // 显示单式面板
				$(".lot_panel").css("display", "none");
				$(".lot_num_input").css("display", "block");
				$(".qu_wei").css("display", "none");
			},

			one: function() { // 显示选号面板 
				changeLotteryPanel.panel11sel5.all();
				$(".lot_panel").css("display", "block");
				$(".lot_num_input").css("display", "none");
				$(".qu_wei").css("display", "none");
				$(".cai_zhong_wei").css("display", "inline-block");
			},

			three: function(text) {
				changeLotteryPanel.panel11sel5.one();
				$(".lot_panel").find("li:gt(0)").css("display", "none");
				$(".lot_panel").find("li:first-child").find(".lot_title").text(text);
			},

			four: function() {
				changeLotteryPanel.panel11sel5.one();
				$(".lot_panel").find("li:gt(1)").css("display", "none");
				$(".lot_panel").find("li:first-child").find(".lot_title").text("胆码");
				$(".lot_panel").find("li:first-child").find(".lot_quick").css("display","none");
				$(".lot_panel").find("li:nth-child(2)").find(".lot_title").text("拖码");
			},

			five: function() {
				changeLotteryPanel.panel11sel5.one();
				$(".lot_panel").find("li:gt(1)").css("display", "none");
				$(".lot_panel").find("li:first-child").find(".lot_title").text("第一位");
				$(".lot_panel").find("li:nth-child(2)").find(".lot_title").text("第二位");

			},
			six: function() {
				changeLotteryPanel.panel11sel5.one();
				$(".lot_panel").find("li:first-child").find(".lot_title").text("第一位");
				$(".lot_panel").find("li:nth-child(2)").find(".lot_title").text("第二位");
				$(".lot_panel").find("li:nth-child(3)").find(".lot_title").text("第三位");
			},

			seven: function(text1) {
				var text = $(".menu_type .m_t_1 .m_t_1_i.active").text();
				if(text == "任选复式") {
					changeLotteryPanel.panel11sel5.three(text1)
				} else if(text == "任选单式") {
					changeLotteryPanel.panel11sel5.two()
				} else {
					changeLotteryPanel.panel11sel5.four()
				}
			},

			eight: function() { 
				changeLotteryPanel.panel11sel5.one();
				$(".lot_panel").find("li").css("display", "none");
				$(".lot_panel").find("li:last-child").css("display","block").find(".lot_b_i_i_1:first-child").text("猜中位");
			},

			ten: function(text0, text1, text2) { // 修改彩票 选号规则 和中奖说明
				$(".play_help .play_help_item:nth-child(1) span:nth-child(2)").text(text1);
				$(".play_help .play_help_item:nth-child(2) span:nth-child(2)").text(text2);
			},
		},

		panelFC3D : { 
			one : function(){  // 单式改面板
				$(".lot_num_input").css("display", "none");
				$(".lot_panel_3d").css("display","block");
				$(".lot_panel_3d_size").css("display","none");
			},
			two : function(){  // 面板改单式
				$(".lot_num_input").css("display", "block");
				$(".lot_panel_3d").css("display","none");
				$(".lot_panel_3d_size").css("display","none");
			},
			three : function(){  // 组选和值
				changeLotteryPanel.panelFC3D.one();
				$(".lot_panel_3d li").css("display","none");
				$(".lot_panel_3d li:first-child").css("display","block");
			},
			four : function(text1){
				changeLotteryPanel.panelFC3D.one();
				$(".lot_panel_3d li").css("display","none");
				$(".lot_panel_3d li:nth-child(3)").css("display","block").find(".lot_title").text(text1);
			},
			five : function(text1,text2){
				changeLotteryPanel.panelFC3D.one();
				$(".lot_panel_3d li").css("display","none");
				$(".lot_panel_3d li:nth-child(3)").css("display","block").find(".lot_title").text(text1);
				$(".lot_panel_3d li:nth-child(4)").css("display","block").find(".lot_title").text(text2);
			},
			six : function(){
				changeLotteryPanel.panelFC3D.one();
				$(".lot_panel_3d li").css("display","none");
				$(".lot_panel_3d li:nth-child(3)").css("display","block").find(".lot_title").text("百位");
				$(".lot_panel_3d li:nth-child(4)").css("display","block").find(".lot_title").text("十位");
				$(".lot_panel_3d li:nth-child(5)").css("display","block").find(".lot_title").text("个位");
			},
			
			seven : function(text1,text2){
				$(".lot_num_input").css("display", "none");
				$(".lot_panel_3d").css("display","none");
				$(".lot_panel_3d_size").css("display","block");
				$(".lot_panel_3d_size li:nth-child(1)").find(".lot_title").text(text1);
				$(".lot_panel_3d_size li:nth-child(2)").find(".lot_title").text(text2);
			}
		},

};