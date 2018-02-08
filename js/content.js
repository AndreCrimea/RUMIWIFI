(function () {
	
	//Функция замены текста
	$myfn = function(target, result, selector) {
		var object = $(selector+":contains("+target+")");
		if (object.text()) {
			text = object.html();
			text = text.replace(target, result);
			object.html(text);
		}
	}
	
	//Функция ожидания переменной
	function check(val) {
		if (!val) {
			return setTimeout(check, 1000);
		}
	}
	
	good = 0;
	
	domain = location.host;
	if (domain == "miwifi.com") good = 1;
	
	title = $(document).find("title").text();
	if (title == "小米路由器") good = 2;
	
	if ($("#wechatcode").text() == "官方微信") good = 3;
	
	if ($(".flash-tips h3").text() == "正在升级中") good = 4;
	
	if (good >= 1) {
	
	//Язык
	chrome.storage.local.get("rumiLang",function (results){
		lang = results.rumiLang;
		if (!lang) lang = "ru";
		
		langFile = chrome.extension.getURL("lang/" + lang + ".json");
		$.get(langFile, function(response) {
			obj = JSON.parse(response);
			//span.v:contains('小'), span.v:contains('分'), span:contains('特'), .d-bd:contains('重'), p:contains('手'),
			listOf = ".devnetinfo li span.v:contains('小'), h3:contains('更'), #smartvpnurlTbody td:contains('还'), .d-bd:contains('只'), td.center:contains('优'), .num:contains('无'), p:contains('优'), #testBand:contains('开'), p:contains('自'), h4:contains('家'), #qosmode ul li:contains('模'), #qosmode ul li:contains('先'), h4:contains('根'), em.error:contains('地'), .bsd-ground:contains('选'), .dummy:contains('穿'), .devices5gempty p:contains('是运行'), h4:contains('注'), .qa p:contains('通'), h3:contains('常'), .what p:contains('写'), h3:contains('什'), .d-bd:contains('你'), #ft p:contains('小'), .btn span:contains('备'), .btn span:contains('应'), label.k:contains('请'), th:contains('客'), h3:contains('状'), h4:contains('设'), th:contains('用'), #dmzinfo:contains('开'), h3:contains('范'), th:contains('协'), th:contains('目'), th:contains('口'), h3:contains('协'), h3:contains('口'), em:contains('分'), em:contains('小'), label.k:contains('状'), label.k:contains('强'), th:contains('最'), th:contains('状'), h4:contains('服'), #banditems span:contains('移'), .btns span:contains('增'), .btns span:contains('键'), h4:contains('已'), h3:contains('静'), h3:contains('智'), #qosoff:contains('当'), .mod-set-nav span:contains('其'), .mod-set-nav span:contains('端'), .mod-set-nav span:contains('智'), .mod-set-nav span:contains('静'), h4:contains('外'), .item-more span:contains('置'), label.k:contains('速'), label.k:contains('账'), .btn span:contains('切'), .btn span:contains('恢'), .btn span:contains('克'), .bd p:contains('在'), #dialogdeviceslist td:contains('小'), th:contains('设备信息'), th:contains('连接时长'),  tr td:contains('正在查询中'), #deviceslist td:contains('还没有'), th:contains('称'), th:contains('作'), th:contains('地'), h4:contains('黑'), h4:contains('控'), h3:contains('率'), h3:contains('换'), h3:contains('隆'), h3:contains('服'), label.k:contains('开'), label.k:contains('结'), label.k:contains('址'), label.k:contains('租'), label.k:contains('局'), label.k:contains('系'), .dummy:contains('简'), .bd p:contains('备'), .btn span:contains('上'), .btn span:contains('更'), .btn span:contains('新'), label.k:contains('位'),h3:contains('升'), h3:contains('上'), h3:contains('备'), h3:contains('设'), h4:contains('系'), option:contains('韩'), option:contains('欧'), option:contains('区'), option:contains('中'), .bd p:contains('请'), option:contains('标'), option:contains('穿'), option:contains('节'), option:contains('體'), .bd p:contains('开'), h3:contains('频'), .inner p:contains('手'), .inner p:contains('问'), h4:contains('安'), h4:contains('文'), .btn span:contains('立'), h2:contains('未'), .manual:contains('测'), h3:contains('网'), .first dt:contains('带'), #statusDevices:contains('台'), .ft:contains('核'), .mod-netmap .inner .nav-tab p:contains('互'), .mod-netmap .inner .nav-tab p:contains('终'), .ft:contains('总'), .ft:contains('内'), .ft:contains('总'), .hd p:contains('当'), .hd p:contains('实'), h3:contains('终'), h3:contains('实'), h3:contains('路'), .ft:contains('带'), .bd tr:contains('路'), .mod-set-nav:contains('设'), #dropmenu:contains('修'), .form-item:contains('密'), #ft p:contains('官'), #nav a:contains('置'), #nav a:contains('态'), #nav a:contains('由'), p:contains('其他情况下关闭此功能'), .flash-tips span.t:contains('请勿断开路由器电源'), .flash-tips span.t:contains('升级过程大约需要'), .linetext-aplink:contains('无线中继'), .mod-aprouterswitch .bd p:contains('切换其'), .d-bd:contains('开启该功能后'), .btn span:contains('同'), .privacy label:contains('加'), p.agree:contains('请'), span.k:contains('连'), label.k:contains('加'), label.k:contains('名'), label.k:contains('密'), label.k:contains('准'), span.k:contains('开关'), span.k:contains('地'), span.k:contains('网'), option:contains('密'), button span:contains('保存'), option:contains('静'), option:contains('自动'), h3:contains('当'), em:contains('当'), button span:contains('开'), .first dt:contains('当'), #upgradeinfo:contains('正在检测更新'), #upgradeinfo:contains('无需升级'), #wanType:contains('测'), #manageFilterList tr td:contains('本机'), .d-bd:contains('设置成功'), #bandlist tr td:contains('查询中'), #vpnlist tr td:contains('没有设置信息'), .d-bd:contains('WiFi双频合'), .form-item span:contains('隐藏网络不被发现'), .rom-ver:contains('系'), .item span.v:contains('中继模式下不允许关闭'), .content p:contains('检测到最新版本为'), #upgradeinfo:contains('发现新版'), .mod-downflash:contains('请注意'), .loading-text:contains('小米路由器正在下载升级包'), #qoseditform thead tr:contains('设备名称'), .router p:contains('本机'), div.panel-content:contains('端口转发开启了'), #apqualityval:contains('良'), label span:contains('开启'), .mod-wifi label span:contains('关闭'), em.t:contains('填'), .ipt-text:contains('自'), .ipt-text:contains('准'), .ipt-text:contains('混'), .item p:contains('当'), .isoff p:contains('开'), #datetiemval:contains('日'), #timezoneval:contains('齐'), #timezoneval:contains('(UTC+3)加里宁格勒'), .btn span:contains('重'), .btn span:contains('手'),  .btn span:contains('同'), span.con:contains('带'), #upgradeinfo:contains('当'), th:contains('网'), span.muted:contains('机'), #routermodel:contains('小'), #routerversion:contains('开'), #routerversion:contains('稳'), dt:contains('地'), dt:contains('型'), label.k:contains('无'), label.k:contains('信'), #serviceTbody td:contains('还'), .btn span:contains('删'), .btn span:contains('好'), .btn span:contains('添'), h3:contains('重'), h3:contains('确'), h3:contains('设'), p.text:contains('路'), .btn span:contains('确'), .btn span:contains('取'), h3:contains('载'), td a:contains('户'), em.error:contains('入'), em.error:contains('字'), button span:contains('解'), h3:contains('修'), h3:contains('提'), h3:contains('添'), h3:contains('推'), label.k:contains('服'), label.k:contains('协'), h3:contains('手'), label.k:contains('上'), label.k:contains('下'), label.k:contains('频段带宽'), h3:contains('外'), .mod-speed-testing p:contains('正'), td.con:contains('无限制'), a.btn span:contains('编'), h4:contains('访'), h4:contains('路'), span.con:contains('速'), h3:contains('访'), #smartvpnmodedesc p:contains('可'), #smartvpnmode ul li:contains('按'), #addbyurl p:contains('请'), .tit:contains('路'), .vas-tip:contains('提'), .p1:contains('延'), .p2:contains('关'), #statusInternet:contains('带'), .btn span:contains('处'), .strong:contains('正'), .ft:contains('您还可'), p:contains('请在它'), .tip:contains('使'), .detail:contains('下'), .title:contains('欢'), #rangeForm label.k:contains('起始端口'), #rangeForm label.k:contains('目标IP'), #natlist_range tr td:contains('TCP和UDP'), .panel-content .d-bd:contains('确定要删'), .panel-content .d-bd:contains('请等待'), .beautify:contains('和'), label.k:contains('口'), .panel-content .d-bd:contains('确'), #natlist_port tr td:contains('TCP和UDP')";
		
			//Базовые замены
			$(listOf).each(function() {
				text = $(this).html();
				$.each(obj, function (index, value) {
					text = text.replace(index, value);
				});
				$(this).html(text);
			});
			
			//Динамические заголовки .panel-content .bd .d-bd, .d-is-open .panel-content .bd .d-bd
			function replaceInterval() {
				var x = 0;
				translateInterval = setInterval(function() {
					if (++x === 5) {
						//Остановка репиттера
						clearInterval(translateInterval);
						console.log("Stop translator");
					}
					$(listOf).each(function() {
						text = $(this).html();
						$.each(obj, function (index, value) {
							text = text.replace(index, value);
						});
						$(this).html(text);
					});
					//Убираем мигание времени
					$("#datetiemval:contains('г')").removeAttr('id');
					$("#routerversion:contains('и')").removeAttr('id');
					$("#routermodel:contains('XIAOMI')").removeAttr('id');
				}, 1000);
			}
			
			replaceInterval();
			
			//Если на странице движняк
			$(document).keyup(function (e){
				clearInterval(translateInterval);
				replaceInterval();
			});
			
			//Для Мышки
			$(document).click(function() {
				clearInterval(translateInterval);
				replaceInterval();
			});
			
			//Делаем фон видимым
			$("#doc").css({"opacity": "1"});
		});
		
	});
	
	//VK чат
		chrome.storage.local.get("extensionMode",function (results){
			var mode = results.extensionMode;
			if (mode != 0) {
				(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.9&appId=797768023732660";
				fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));
				
				$("#ft").append('<div style="background: #FFF;border-radius: 10px;padding: 20px;width: 1120px;margin: 0 auto;margin-top: 50px;margin-bottom:50px;"><h1 style="text-align: center;margin: 0 0 20px 0px;font-family: Segoe UI, Arial;font-size: 22px;color: #FFF;background: #1782dd;padding: 10px;border-radius: 5px;">Чат RUMIWIFI</h1><p>В этом чате Вы можете задать любой вопрос, или помочь улучшить перевод RUMIWIFI. На некоторых страницах чат может не загружаться.</p><div class="fb-comments" data-order-by="reverse_time" data-href="http://miwifi.com/cgi-bin/luci/web" data-width="100%" data-numposts="10"></div></div>');
			}
		});
		
		//Меняем заголовок
		$('title').text('RUMIWIFI');

		//Меняем логотип
		var imgURL = chrome.extension.getURL("img/page_logo.png");
		$('#bd .mod-login .title img').attr( "src", imgURL );
		$('.mod-guide-hd .icons img').attr( "src", imgURL );
		
		//Главная
		$("#password").attr("placeholder", "Пароль маршрутизатора");
		
		$("#wechatcode").attr("href", "//4pda.ru/forum/index.php?showtopic=596689");
		$("a:contains('RUMIWIFI')").attr("href", "//pedanto.com/news/rumiwifi-plagin-rusifikacii-proshivki-xiaomi-routera.html");
		
		//Правка стилей
		$(".mod-set .hd h3").css("width", "auto");
		
	}
})()
