// JavaScript Document
/*swiper作为基础的图片滑动插件
*/
var SwiperPicSlider = {	//初始化对象
	//初始化控件
	initCtrl:function(i_options){
		var this_obj = {};	
		//alert("2343");
		//子元素图片资源数据
		this_obj.sub_el_src = [];
		
		///系统选项
		this_obj.sys_opt = {};
		this_obj.sys_opt.selector			= "";	//父元素选择器表达式
		this_obj.sys_opt.base_el_html		= "";	//基础元素骨架的html


		this_obj.sys_opt.swiper_obj			= "";	//swiper对象 			

		
		/////////////对外接口/////////////////////////////////////
		//初始化
		this_obj.Init = function(i_options){
			//解析配置函数
			this_obj.opt_func.parseOptions(i_options);

			//创建元素
			this_obj.html_dom_func.createEl();

			
		}//	Init
		

		////////////// 内部私有函数集/////////////////////////////////
		//私有函数,配置数据函数
		this_obj.opt_func = {
			//解析配置项
			parseOptions : function (i_options){
				//遍历用户自定义配置项
				$.each(i_options, function(i){
					//alert(this.type );
					switch(this['type'])
					{
						case 'system':
							//调用初始化函数进行初始化操作
							this_obj.opt_func.initSysOptions(this);
						break;
						default:
							this_obj.sub_el_src.push(this);
					}
					
				});//each
					
			},//func parseOptions

			//初始化系统选项
			initSysOptions:function (option_obj)
			{
				//指定父元素的选择器
				this_obj.opt_func.sysOptionsAssign(option_obj,'selector');
					
			},
					
			//系统选项赋值
			sysOptionsAssign : function (option_obj,attr_name)
			{
				//判断当前的属性是否存在,如果存在则进行赋值
				if((attr_name in option_obj))
				{
					this_obj.sys_opt[attr_name] = option_obj[attr_name];
				}
			},
		};//opt func 配置数据相关函数

		/////创建HTML DOM元素函数
		this_obj.html_dom_func = {
			//元素的创建
			createEl : function(){
				//创建基础元素
				this_obj.html_dom_func.createBaseEl();

				//创建用于显示的子元素
				this_obj.html_dom_func.createDisSubEl();
			},
			//创建插件需要的基础元素并添加到父元素中
			createBaseEl : function(){
				//构建html
				this_obj.sys_opt.base_el_html = '\
					<div class="swiper_pic_slider">\
			            <div class="swiper-container">\
			                <div class="swiper-wrapper">\
			                </div>\
			                <div class="swiper-pagination"></div>\
			            </div>\
			        </div>\
			    ';


			    //追加到父元素中
			    $(""+this_obj.sys_opt.selector).append(this_obj.sys_opt.base_el_html);
			},//func createEl

			//创建用于显示的子元素,使用传递的数据创建基础框架之内的子元素
			createDisSubEl : function ()
			{
				//图片框元素对象
				var pic_wapper = $("" + this_obj.item_selector_gen.genWrapperSelr());

				//遍历子元素的数据
				$.each(this_obj.sub_el_src,function(index) {
					var action_url 	= this['action_url'];
					var pic_url 	= this['pic_url'];
					var sub_el_html = '\
						<div class="swiper-slide  slide_item">\
                        	<a target="_top" href="'+action_url+'"><img src="'+pic_url+'"> </a>\
                    	</div>\
					';

					pic_wapper.append(sub_el_html);
				});

				//创建swiper对象,进行图片滚动
				this_obj.sys_opt.swiper_obj = "";
			    this_obj.sys_opt.swiper_obj = new Swiper(this_obj.item_selector_gen.genContainerSelr(), {
			        initialSlide : 0,	//初始化编号
			        pagination : '.swiper-pagination',	//分页器
			        autoplay : 2000,	//自动播放
			        loop:true,		//循环播放
			        paginationClickable :true,
					autoplayDisableOnInteraction : false,	//用户操作后是否终止自动播放
					preventClicks : false,		//点击之后是否阻止跳转
			    });

			    //alert(this_obj.sys_opt.swiper_obj);
			},// func createSubEl
		
			//创建新的子元素
			newSubEl : function (file_src)
			{
		
			},// func newSubEl


		};//创建HTML DOM元素函数结束

		///事件相关绑定函数集
		this_obj.event_bind_func = {

		};//事件相关绑定函数集结束

		////子元素项选择器生成函数集
		this_obj.item_selector_gen = {
			//获取滑动框外层容器选择器
			genContainerSelr:function(){
				return this_obj.sys_opt.selector + " .swiper_pic_slider .swiper-container";
			},//genContainerSelr

			//生成图片包含框选择器
			genWrapperSelr:function(){
				return this_obj.sys_opt.selector + " .swiper_pic_slider .swiper-container .swiper-wrapper";
			},

		};//子元素项选择器获取函数集结束
		
		//////////////////////////////////////////////////////////////
		
		
		//调用初始化,并返回对象
		this_obj.Init(i_options);
	},//initCtrl

}//DisContentSet class
















