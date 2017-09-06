			
//			//侧边栏效果
			$(document).ready(function(){
				
				var h = $(window).height();
				var sh = $(".side-ad").height();
				// 上边滑动的距离
				var offsetTop = $(window).scrollTop();
				var top = (h-sh)/2;
				$(".side-ad").css("top",top+offsetTop+"px");
				
				$(document).scroll(function(){
					offsetTop = $(window).scrollTop();
					$(".side-ad").animate({top:top+offsetTop+"px"},50);
				});
			});
			
				
//		<!--banner效果-->
			$(document).ready(function(){
				var ul = $(".box ul");
				var count = $(".box li").length;//图片的数量
				var imageWidth = $(".box").width();// 图片宽度
				var index = 0;//图片轮播索引
				var  points = $(".points");
				
				for(var i=0;i<count;i++){
					points.append("<span></span>");
				}
				
				points.css("margin-left",-12*count+"px").children("span").eq(0).addClass("active");				
				
				var first = $(".box ul li:first-child").clone();// 克隆第一张图
				var last  = $(".box ul li:last-child").clone();// 克隆最后一张图
				ul.append(first);
				last.insertBefore($(".box ul li:first-child"));
				// 设置 ul宽度
				ul.width((count+2)*imageWidth);
				var t = setInterval(function(){
					index = (index+1)%count;
					imageSwitch(index);
				},1000);
				
				
				$(".box").hover(function(){
					clearInterval(t);
				},function(){
					t = setInterval(function(){
						index = (index+1)%count;
						imageSwitch(index);
					},1000);
				});
				
				// 点上添加悬停事件，进行图片的切换
				points.children("span").hover(function(){
					index = $(this).index();
					imageSwitch(index);
				});
				// 图片切换处理函数
				function imageSwitch(i){
					// 停掉没有执行完成的动画
					ul.stop(true,true);
					// 下面点的状态切换
					points.children("span").removeClass("active").eq(i).addClass("active");	
					
					if((i == 0)&&(parseInt(ul.css("left"))<(imageWidth*-2))){
						// 针对第一张做特殊处理
						ul.animate({
							left:(count+1)*imageWidth*-1+"px"
						},500,function(){
							ul.css("left",-1*imageWidth+"px");
						});
					}else if((i==(count-1))&&(parseInt(ul.css("left"))>(imageWidth*-2))){
						// 针对最后一张做特殊处理
						ul.animate({
							left:'0px'
						},500,function(){
							ul.css("left",-1*count*imageWidth+"px");
						});
						
					}else{
						ul.animate({
							left:(i+1)*imageWidth*-1+"px"
						},500);
					}
				}
				
			});
			//热门课程
					$(".popular-courses li").hover(function(){
					$(this).children(".popular-courses-pos").stop(true,true).animate({
						width:"200px",
						height:"70px",
					},200,function(){});
				},function(){
					$(".popular-courses-pos").animate({
						width:"200px",
						height:"30px",
					},200,function(){});
				});
				//图片放大
				$(".classimg-box").hover(function(){
$(this).children("img").stop(true,true).animate({
						width:"150%",
						height:"150%",
						top:"-25%",
						left:"-25%",
					},1000,function(){});
				},function(){
					$(".classlist li img").animate({
						width:"100%",
						height:"100%",
						top:"0",
						left:"0",
					},1000,function(){});
				});
				//切换
				var tab = $(".newsbar-nav li");
			var items = $(".newsbar-list .item");
//			console.log(tab);
			tab.hover(function(){
				var index = $(this).index();
				tab.removeClass("active");
				$(this).addClass("active");
				
				items.hide();
				items.eq(index).show();
				
			});
			//分类切换
			var cats = $(".course ul li");
			var catsa = $(".course ul li a");
			
			$(".course").hover(function(){},function(){
				cats.removeClass("active");
				$(".sub-category").hide();
			});
			catsa.hover(function(){
				var index = $(this).index();
				catsa.removeClass("active");
				$(this).addClass("active");
			});
			cats.hover(function(){
				var index = $(this).index();
				cats.removeClass("active");
				$(this).addClass("active");
				$(".sub-category").show();
				$(".sub-category .item").hide().eq(index).show();
			});
			//文字滚动
			var list = $(".textscrollsr ul li");
			var ul = $(".textscrollsr ul");
			
			ul.width(list.length*260);
			
			
			ul.animate({
				left:-1*ul.width()+"px",
			},50000,"linear",function(){
				ul.css("left","1000px");
			});
			var t=setInterval(function(){
				ul.animate({
				left:-1*ul.width()+"px",
			},50000,"linear",function(){
				ul.css("left","1000px");
			});
			},50000);
			$(".textscrollsr").hover(function() {
				clearInterval(t);
			}, function() {
				 t=setInterval(function(){
				ul.animate({
				left:-1*ul.width()+"px",
			},50000,"linear",function(){
				ul.css("left","1000px");
			});
			},50000);
			});
//用js引用首部跟尾部
           $("#nav").load("./nav.html");
$(".footer").load("./footer.html");