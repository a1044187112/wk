var dateSelect  = {
	init :function(id1,id2){
		dateSelect.id1 = id1;
		dateSelect.id2 = id2;
		
		this.initDom();
		this.initInput();
		this.initDate();
		this.addEvent();
	},
	
	addEvent : function(){
		$("body").delegate(".date_year_l","click",function(){ // 年份减少按钮
			var thisYear = parseInt($(".date_year").text());
			$(".date_year span").text((thisYear-1)+"年");
			var moth = parseInt($(".date_moth").text());
			dateSelect.initDay((thisYear-1),moth,1);
		});
		
		$("body").delegate(".date_year_r","click",function(){ // 年份减少按钮
			var thisYear = parseInt($(".date_year").text());
			$(".date_year span").text((thisYear+1)+"年");
			var moth = parseInt($(".date_moth").text());
			dateSelect.initDay((thisYear+1),moth,1);
		});
		
		$("body").delegate(".date_moth_l","click",function(){ // 月份减少按钮
			var thisMoth = parseInt($(".date_moth").text());
			var thisYear = parseInt($(".date_year").text());
			if(thisMoth-1<1){
				$(".date_moth span").text("12月");
				dateSelect.initDay((thisYear-1),12,1);
				$(".date_year span").text((thisYear-1)+"年");
			}else{
				$(".date_moth span").text((thisMoth-1)+"月");
				dateSelect.initDay(thisYear,(thisMoth-1),1);
			}
			
		});
		
		$("body").delegate(".date_moth_r","click",function(){ // 月份增加按钮
			var thisMoth = parseInt($(".date_moth").text());
			if(thisMoth+1>12){
				$(".date_moth span").text("1月");
				var thisYear = parseInt($(".date_year").text());
				$(".date_year span").text((thisYear+1)+"年");
				dateSelect.initDay((thisYear+1),1,1);
			}else{
				$(".date_moth span").text((thisMoth+1)+"月");
				dateSelect.initDay(thisYear,(thisMoth+1),1);
			}
		});
		
		$("body").delegate(".year_sel_i","click",function(){ // 年份列表点击
			$(".date_year>span").text($(this).text());
			dateSelect.initDay(parseInt($(this).text()), parseInt($(".date_moth").text()),1);
		});
		
		$("body").delegate(".moth_sel_i","click",function(){ // 月份列表点击
			$(".date_moth>span").text($(this).text());
			dateSelect.initDay(parseInt($(".date_year").text()), parseInt($(".date_moth").text()),1);
		});
		
		// 上月日期选择
		$("body").delegate("#date_table .moth_old","click",function(){ 
			var year = parseInt($(".date_year").text());
			var moth = parseInt($(".date_moth").text());
			var day = $(this).text();
			if(moth == 1){
				moth = 12;
				year = year - 1;
			}else{
				moth = moth - 1;
			}
			if(moth<10)
			moth = "0"+moth;
			if(day<10)
				day = "0"+day;
			$($(".date_f").attr("data-id")).val(year+'-'+moth+'-'+day);
			$(".date_f").css("display","none");
			if($(".date_f").attr("data-id")==dateSelect.id1)
				$(dateSelect.id2).trigger("focus");
		});
		//本月
		$("body").delegate("#date_table .moth_this","click",function(){ 
			var year = parseInt($(".date_year").text());
			var moth = parseInt($(".date_moth").text());
			var day = $(this).text();
			if(moth<10)
			moth = "0"+moth;
			if(day<10)
				day = "0"+day;
			$($(".date_f").attr("data-id")).val(year+'-'+moth+'-'+day);
			$(".date_f").css("display","none");
			if($(".date_f").attr("data-id")==dateSelect.id1)
				$(dateSelect.id2).trigger("focus");
		});
		// 下月
		$("body").delegate("#date_table .moth_new","click",function(){ 
			var year = parseInt($(".date_year").text());
			var moth = parseInt($(".date_moth").text());
			var day = $(this).text();
			if(moth == 12){
				moth = 1;
				year = year + 1;
			}else{
				moth = moth + 1;
			}
			if(moth<10)
			moth = "0"+moth;
			if(day<10)
				day = "0"+day;
			$($(".date_f").attr("data-id")).val(year+'-'+moth+'-'+day);
			$(".date_f").css("display","none");
			if($(".date_f").attr("data-id")==dateSelect.id1)   // 如果当期选中的是date1的  选完之后让date2获取焦点
				$(dateSelect.id2).trigger("focus");
		});
		
		$(dateSelect.id1).focus(function(){
			dateSelect.setDatePopusPosition($(this));
			$(".date_f").attr("data-id",dateSelect.id1);
			$(".date_f").css("display","block");
		});
		
		$(dateSelect.id2).focus(function(){
			dateSelect.setDatePopusPosition($(this));
			$(".date_f").attr("data-id",dateSelect.id2);
			$(".date_f").css("display","block");
		});
		
		$("html").click(function(e){
			if($(e.target).parents(".date_f").length == 0 )
				if(e.target.nodeName != "INPUT")
					$(".date_f").css("display","none");
			
		});
		
		$(window).scroll(function(){
			if(dateSelect.showObj)
				dateSelect.setDatePopusPosition(dateSelect.showObj);
		});
		
		
	},
		setDatePopusPosition : function($obj){
			dateSelect.showObj = $obj;
			var scrollTop = $(window).scrollTop();
			var offsetTop = $obj.offset().top;
			var offsetLeft = $obj.offset().left/2;
			var height = parseInt($obj.height());
			$(".date_f").css({left:offsetLeft+"px",top:(offsetTop+height+6-scrollTop)+"px"});
		},
		
		
		
	initDom : function(){
		var f_html = '<div class="date_f"><div class="date_t"><span class="date_year_l"></span><span class="date_year"><span>2017年</span></span><span class="date_year_down"></span><span class="date_year_r"></span></div>'+
		'<div class="date_t"><span class="date_moth_l"></span><span class="date_moth"><span>06月</span></span><span class="date_moth_down"></span><span class="date_moth_r"></span></div></div>';
		$("body").append(f_html);
		
		var p_year = '<ul class="year_sel"><li class="year_sel_i">2017年</li></ul>';
		$(".date_year").append(p_year);
		
		var p_moth = '<ul class="moth_sel"><li class="moth_sel_i">01月</li><li class="moth_sel_i">02月</li><li class="moth_sel_i">03月</li><li class="moth_sel_i">04月</li>'+
		'<li class="moth_sel_i">05月</li><li class="moth_sel_i">06月</li><li class="moth_sel_i">07月</li><li class="moth_sel_i">08月</li><li class="moth_sel_i">09月</li>'+
		'<li class="moth_sel_i">10月</li><li class="moth_sel_i">11月</li><li class="moth_sel_i">12月</li></ul>';
		$(".date_moth").append(p_moth);
		
		var t_html = '<table cellpadding="0" cellspacing="0" id="date_table"><tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr></table>';
		$(".date_f").append(t_html);
	},
	
	initDate :function(){
		var d_time = new Date();
		$(".date_year span").text(d_time.getFullYear()+"年");
		$(".date_moth span").text(d_time.getMonth()+1+"月");
		
		var p_year = '';
		for(var i = -5; i<=5; i++){
			p_year += '<li class="year_sel_i">'+(d_time.getFullYear()+i)+'年</li>';
		}
		$(".year_sel").html(p_year);
		
		var year = d_time.getFullYear();
		var moth = d_time.getMonth()+1;
		var day = d_time.getDate();
		dateSelect.initDay(year,moth,day);
	},
	
	initDay : function(year,moth,thisDay){
		var day = dateSelect.getMonthDayNum(year,moth); // 获取当月天数
		var nextMonthDay =  dateSelect.getMonthDayNum(year,moth-1); // 获取上月天数
		var getday =  new Date(year+"-"+moth+"-"+1).getDay();  //获取当月第一天是星期几
		var forNum = day+getday;
		if((day+getday)%7!=0)//  遍历的次数
			var forNum = (parseInt((day+getday)/7) + 1)*7;
		var _html = '<tr class="date_table_item">';
		for(var i = 1; i <= forNum; i++ ){
			if(i<=getday){  //  上月的天数代码
				_html += "<td class='moth_old'>"+(nextMonthDay+i-getday)+"</td>"
			}else if(i > getday && i <= (day+getday)){   // 本月的天数代码
				if((i-getday) == thisDay)
					_html += "<td class='moth_this active'>"+(i-getday)+"</td>";
				else
					_html += "<td class='moth_this'>"+(i-getday)+"</td>"
				if(i%7==0){  // 下月的天数代码
					_html += '</tr><tr class="date_table_item">';
				}
			}else{
				_html += "<td class='moth_new'>"+(i-(day+getday))+"</td>"
			}
			
		}
		$("#date_table tr:gt(0)").remove();
		$("#date_table tr:first-child").after(_html);
	},
	
	getMonthDayNum  :　function(year,moth){
		if(moth == 2){
			if(year%4 ==0 && year%400!=0)
				return 28;
			else
				return 29;
		}else if(moth == 4 || moth == 6 || moth == 9 || moth == 11){
			return 30;
		}else{
			return 31;
		}
	}, 
	
	initInput : function(){
		var thisDate =  new Date();
		var year = thisDate.getFullYear();
		var moth = thisDate.getMonth()+1;
		var day = thisDate.getDate();
		if(moth<10)
			moth = "0"+moth;
		if(day<10)
			day = "0"+day;
		$(dateSelect.id2).val(year+"-"+moth+"-"+day);
		if(day==1){
			if(moth==1){
				day = dateSelect.getMonthDayNum(year-1,12); // 获取当月天数
				moth = 12;
			}else{
				day = dateSelect.getMonthDayNum(year,moth-1); // 获取当月天数
				moth = moth - 1; 
			}
		}else{
			day = day - 1;
		}
		$(dateSelect.id1).val(year+"-"+moth+"-"+day);
	},
};
