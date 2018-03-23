$(document).ready(function() {
	chrome.storage.local.get("extensionMode", function(results) {
        var mode = results.extensionMode;
		if (mode === undefined || mode == 1) $("#chatOn").addClass("active");
		else if (mode == 0) $("#chatOff").addClass("active");
    });
	$("#chatOff").click(function() {
        chrome.storage.local.set({"extensionMode": 0}, function() {
			$("button").removeClass("active");
			$("#chatOff").addClass("active");
        });
    });
	$("#chatOn").click(function() {
        chrome.storage.local.set({"extensionMode":1},function (){
			$("button").removeClass("active");
			$("#chatOn").addClass("active");
        });
    });
	
	chrome.storage.local.get("rumiLang", function(results) {
		var mode = results.rumiLang;
		if (mode) {
			$("#lang").val(mode);
		}
		//Если не выбран выбираем дефольный
		else $("#lang").val("ru");
	});
	
	$("#lang").change(function() {
		val = $(this).val();
		chrome.storage.local.set({"rumiLang":val});
	});
});