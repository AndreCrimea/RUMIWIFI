$(document).ready(function() {
	chrome.storage.local.get("extensionMode", function(results) {
        var mode = results.extensionMode;
        switch(mode) {
                // 0: off; 1: aspect; 2: zoom;
            case 0:
                $("#chatOff").addClass("active");
                break;
            case 1:
                $("#chatOn").addClass("active");
			break;
        }
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
	});
	
	$("#lang").change(function() {
		val = $(this).val();
		chrome.storage.local.set({"rumiLang":val});
	});
});