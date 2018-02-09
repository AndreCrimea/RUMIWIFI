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
			listOf = ".devnetinfo li span.v:contains('小'),";
			listOf += "h3:contains('更'),";
			listOf += "#smartvpnurlTbody td:contains('还'),";
			listOf += ".d-bd:contains('只'),";
			listOf += "td.center:contains('优'),";
			listOf += ".num:contains('无'),";
			listOf += "p:contains('优'),";
			listOf += "#testBand:contains('开'),";
			listOf += "p:contains('自'),";
			listOf += "h4:contains('家'),";
			listOf += "span#sysmenu:contains('家'),";
			listOf += ".router.nav-tab.active p:contains('家'),";
			listOf += "#qosmode ul li:contains('模'),";
			listOf += "#qosmode ul li:contains('先'),";
			listOf += "h4:contains('根'),";
			listOf += "em.error:contains('地'),";
			listOf += ".bsd-ground:contains('选'),";
			listOf += ".dummy:contains('穿'),";
			listOf += ".devices5gempty p:contains('是运行'),";
			listOf += "h4:contains('注'),";
			listOf += ".qa p:contains('通'),";
			listOf += "h3:contains('常'),";
			listOf += ".what p:contains('写'),";
			listOf += "h3:contains('什'),";
			listOf += ".d-bd:contains('你'),";
			listOf += "#ft p:contains('小'),";
			listOf += ".btn span:contains('备'),";
			listOf += ".btn span:contains('应'),";
			listOf += "label.k:contains('请'),";
			listOf += "th:contains('客'),";
			listOf += "h3:contains('状'),";
			listOf += "h4:contains('设'),";
			listOf += "th:contains('用'),";
			listOf += "#dmzinfo:contains('开'),";
			listOf += "h3:contains('范'),";
			listOf += "th:contains('协'),";
			listOf += "th:contains('目'),";
			listOf += "th:contains('口'),";
			listOf += "h3:contains('协'),";
			listOf += "h3:contains('口'),";
			listOf += "em:contains('分'),";
			listOf += "em:contains('小'),";
			listOf += "label.k:contains('状'),";
			listOf += "label.k:contains('强'),";
			listOf += "th:contains('最'),";
			listOf += "th:contains('状'),";
			listOf += "h4:contains('服'),";
			listOf += "#banditems span:contains('移'),";
			listOf += ".btns span:contains('增'),";
			listOf += ".btns span:contains('键'),";
			listOf += "h4:contains('已'),";
			listOf += "h3:contains('静'),";
			listOf += "h3:contains('智'),";
			listOf += "#qosoff:contains('当'),";
			listOf += ".mod-set-nav span:contains('其'),";
			listOf += ".mod-set-nav span:contains('端'),";
			listOf += ".mod-set-nav span:contains('智'),";
			listOf += ".mod-set-nav span:contains('静'),";
			listOf += "h4:contains('外'),";
			listOf += ".item-more span:contains('置'),";
			listOf += "label.k:contains('速'),";
			listOf += "label.k:contains('账'),";
			listOf += ".btn span:contains('切'),";
			listOf += ".btn span:contains('恢'),";
			listOf += ".btn span:contains('克'),";
			listOf += ".bd p:contains('在'),";
			listOf += "#dialogdeviceslist td:contains('小'),";
			listOf += "th:contains('设备信息'),";
			listOf += "th:contains('连接时长'),";
			listOf += " tr td:contains('正在查询中'),";
			listOf += "#deviceslist td:contains('还没有'),";
			listOf += "th:contains('称'),";
			listOf += "th:contains('作'),";
			listOf += "th:contains('地'),";
			listOf += "h4:contains('黑'),";
			listOf += "h4:contains('控'),";
			listOf += "h3:contains('率'),";
			listOf += "h3:contains('换'),";
			listOf += "h3:contains('隆'),";
			listOf += "h3:contains('服'),";
			listOf += "label.k:contains('开'),";
			listOf += "label.k:contains('结'),";
			listOf += "label.k:contains('址'),";
			listOf += "label.k:contains('租'),";
			listOf += "label.k:contains('局'),";
			listOf += "label.k:contains('系'),";
			listOf += ".dummy:contains('简'),";
			listOf += ".bd p:contains('备'),";
			listOf += ".btn span:contains('上'),";
			listOf += ".btn span:contains('更'),";
			listOf += ".btn span:contains('新'),";
			listOf += "label.k:contains('位'),h3:contains('升'),";
			listOf += "h3:contains('上'),";
			listOf += "h3:contains('备'),";
			listOf += "h3:contains('设'),";
			listOf += "h4:contains('系'),";
			listOf += "option:contains('韩'),";
			listOf += "option:contains('欧'),";
			listOf += "option:contains('区'),";
			listOf += "option:contains('中'),";
			listOf += ".bd p:contains('请'),";
			listOf += "option:contains('标'),";
			listOf += "option:contains('穿'),";
			listOf += "option:contains('节'),";
			listOf += "option:contains('體'),";
			listOf += ".bd p:contains('开'),";
			listOf += "h3:contains('频'),";
			listOf += ".inner p:contains('手'),";
			listOf += ".inner p:contains('问'),";
			listOf += "h4:contains('安'),";
			listOf += "h4:contains('文'),";
			listOf += ".btn span:contains('立'),";
			listOf += "h2:contains('未'),";
			listOf += ".manual:contains('测'),";
			listOf += "h3:contains('网'),";
			listOf += ".first dt:contains('带'),";
			listOf += "#statusDevices:contains('台'),";
			listOf += ".ft:contains('核'),";
			listOf += ".mod-netmap .inner .nav-tab p:contains('互'),";
			listOf += ".mod-netmap .inner .nav-tab p:contains('终'),";
			listOf += ".ft:contains('总'),";
			listOf += ".ft:contains('内'),";
			listOf += ".ft:contains('总'),";
			listOf += ".hd p:contains('当'),";
			listOf += ".hd p:contains('实'),";
			listOf += "h3:contains('终'),";
			listOf += "h3:contains('实'),";
			listOf += "h3:contains('路'),";
			listOf += ".ft:contains('带'),";
			listOf += ".bd tr:contains('路'),";
			listOf += ".mod-set-nav:contains('设'),";
			listOf += "#dropmenu:contains('修'),";
			listOf += ".form-item:contains('密'),";
			listOf += "#ft p:contains('官'),";
			listOf += "#nav a:contains('置'),";
			listOf += "#nav a:contains('态'),";
			listOf += "#nav a:contains('由'),";
			listOf += "p:contains('其他情况下关闭此功能'),";
			listOf += ".flash-tips span.t:contains('请勿断开路由器电源'),";
			listOf += ".flash-tips span.t:contains('升级过程大约需要'),";
			listOf += ".linetext-aplink:contains('无线中继'),";
			listOf += ".mod-aprouterswitch .bd p:contains('切换其'),";
			listOf += ".d-bd:contains('开启该功能后'),";
			listOf += ".btn span:contains('同'),";
			listOf += ".privacy label:contains('加'),";
			listOf += "p.agree:contains('请'),";
			listOf += "span.k:contains('连'),";
			listOf += "label.k:contains('加'),";
			listOf += "label.k:contains('名'),";
			listOf += "label.k:contains('密'),";
			listOf += "label.k:contains('准'),";
			listOf += "span.k:contains('开关'),";
			listOf += "span.k:contains('地'),";
			listOf += "span.k:contains('网'),";
			listOf += "option:contains('密'),";
			listOf += "button span:contains('保存'),";
			listOf += "option:contains('静'),";
			listOf += "option:contains('自动'),";
			listOf += "h3:contains('当'),";
			listOf += "em:contains('当'),";
			listOf += "button span:contains('开'),";
			listOf += ".first dt:contains('当'),";
			listOf += "#upgradeinfo:contains('正在检测更新'),";
			listOf += "#upgradeinfo:contains('无需升级'),";
			listOf += "#wanType:contains('测'),";
			listOf += "#manageFilterList tr td:contains('本机'),";
			listOf += ".d-bd:contains('设置成功'),";
			listOf += "#bandlist tr td:contains('查询中'),";
			listOf += "#vpnlist tr td:contains('没有设置信息'),";
			listOf += ".d-bd:contains('WiFi双频合'),";
			listOf += ".form-item span:contains('隐藏网络不被发现'),";
			listOf += ".rom-ver:contains('系'),";
			listOf += ".item span.v:contains('中继模式下不允许关闭'),";
			listOf += ".content p:contains('检测到最新版本为'),";
			listOf += "#upgradeinfo:contains('发现新版'),";
			listOf += ".mod-downflash:contains('请注意'),";
			listOf += ".loading-text:contains('小米路由器正在下载升级包'),";
			listOf += "#qoseditform thead tr:contains('设备名称'),";
			listOf += ".router p:contains('本机'),";
			listOf += "div.panel-content:contains('端口转发开启了'),";
			listOf += "#apqualityval:contains('良'),";
			listOf += "label span:contains('开启'),";
			listOf += ".mod-wifi label span:contains('关闭'),";
			listOf += "em.t:contains('填'),";
			listOf += ".ipt-text:contains('自'),";
			listOf += ".ipt-text:contains('准'),";
			listOf += ".ipt-text:contains('混'),";
			listOf += ".item p:contains('当'),";
			listOf += ".isoff p:contains('开'),";
			listOf += "#datetiemval:contains('日'),";
			listOf += "#timezoneval:contains('齐'),";
			listOf += "#timezoneval:contains('(UTC+3)加里宁格勒'),";
			listOf += ".btn span:contains('重'),";
			listOf += ".btn span:contains('手'),";
			listOf += " .btn span:contains('同'),";
			listOf += "span.con:contains('带'),";
			listOf += "#upgradeinfo:contains('当'),";
			listOf += "th:contains('网'),";
			listOf += "span.muted:contains('机'),";
			listOf += "#routermodel:contains('小'),";
			listOf += "#routerversion:contains('开'),";
			listOf += "#routerversion:contains('稳'),";
			listOf += "dt:contains('地'),";
			listOf += "dt:contains('型'),";
			listOf += "label.k:contains('无'),";
			listOf += "label.k:contains('信'),";
			listOf += "#serviceTbody td:contains('还'),";
			listOf += ".btn span:contains('删'),";
			listOf += ".btn span:contains('好'),";
			listOf += ".btn span:contains('添'),";
			listOf += "h3:contains('重'),";
			listOf += "h3:contains('确'),";
			listOf += "h3:contains('设'),";
			listOf += "p.text:contains('路'),";
			listOf += ".btn span:contains('确'),";
			listOf += ".btn span:contains('取'),";
			listOf += "h3:contains('载'),";
			listOf += "td a:contains('户'),";
			listOf += "em.error:contains('入'),";
			listOf += "em.error:contains('字'),";
			listOf += "button span:contains('解'),";
			listOf += "h3:contains('修'),";
			listOf += "h3:contains('提'),";
			listOf += "h3:contains('添'),";
			listOf += "h3:contains('推'),";
			listOf += "label.k:contains('服'),";
			listOf += "label.k:contains('协'),";
			listOf += "h3:contains('手'),";
			listOf += "label.k:contains('上'),";
			listOf += "label.k:contains('下'),";
			listOf += "label.k:contains('频段带宽'),";
			listOf += "h3:contains('外'),";
			listOf += ".mod-speed-testing p:contains('正'),";
			listOf += "td.con:contains('无限制'),";
			listOf += "a.btn span:contains('编'),";
			listOf += "h4:contains('访'),";
			listOf += "h4:contains('路'),";
			listOf += "span.con:contains('速'),";
			listOf += "h3:contains('访'),";
			listOf += "#smartvpnmodedesc p:contains('可'),";
			listOf += "#smartvpnmode ul li:contains('按'),";
			listOf += "#addbyurl p:contains('请'),";
			listOf += ".tit:contains('路'),";
			listOf += ".vas-tip:contains('提'),";
			listOf += ".p1:contains('延'),";
			listOf += ".p2:contains('关'),";
			listOf += "#statusInternet:contains('带'),";
			listOf += ".btn span:contains('处'),";
			listOf += ".strong:contains('正'),";
			listOf += ".ft:contains('您还可'),";
			listOf += "p:contains('请在它'),";
			listOf += ".tip:contains('使'),";
			listOf += ".detail:contains('下'),";
			listOf += ".title:contains('欢'),";
			listOf += "#rangeForm label.k:contains('起始端口'),";
			listOf += "#rangeForm label.k:contains('目标IP'),";
			listOf += "#natlist_range tr td:contains('TCP和UDP'),";
			listOf += ".panel-content .d-bd:contains('确定要删'),";
			listOf += ".panel-content .d-bd:contains('请等待'),";
			listOf += ".beautify:contains('和'),";
			listOf += "label.k:contains('口'),";
			listOf += ".panel-content .d-bd:contains('确'),";
			listOf += "#natlist_port tr td:contains('TCP和UDP'),";
			listOf += "#bandlist tr td:contains('没有设置信息'),";
			listOf += "#upnplist tr td:contains('没有UPnP设备'),";
			listOf += "#btnBandset span:contains('限速设置')";
		
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
