function getUUID(){
	const randomString= 'div'+String(new Date().getTime())+''+String(Math.floor(Math.random() * (99) ) + 1)
	console.log(randomString)
	return randomString
}
function appendWidget(divId,interval){
	const widget = $(
		'<div class="tradingview-widget-container">' +
		'  <div id="'+divId+'"></div>' +
		'  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL stock chart</span></a> by TradingView</div>' +
		'  <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>' +
		'  <script type="text/javascript">' +
		"  new TradingView.widget(" +
		"  {" +
		'  "width": 600,'+
		'  "height": 600,'+
		'  "symbol": "NASDAQ:AAPL",' +
		'  "interval": "'+interval+'",' +
		'  "timezone": "Etc/UTC",' +
		'  "theme": "light",' +
		'  "style": "1",' +
		'  "locale": "en",' +
		'  "toolbar_bg": "#f1f3f6",' +
		'  "enable_publishing": false,' +
		// '  "hide_legend": true,' +
		'  "allow_symbol_change": true, '+//symbol
		'  "hide_side_toolbar": false, '+//drawing
		'  "save_image": false,' +
		' "studies": ['+
		'	"MACD@tv-basicstudies",'+
		'	"RSI@tv-basicstudies"'+
		'],'+
		'  "container_id": "'+divId+'"' +
		"}" +
		"  );" +
		"  </script>" +
		"</div>" +
		""
	);
	$("#container").append(widget);
}
function changeInterval(interval) {
	$("#container").empty();
	appendWidget(getUUID(), interval);
	appendWidget(getUUID(), interval);
}

$(document).ready(function(){
appendWidget(getUUID(),'1');
appendWidget(getUUID(),'1');

$("#in1mn").click(function(){
	changeInterval('1');
})
$("#in3mn").click(function(){
	changeInterval('3');
})
$("#in5mn").click(function(){
	changeInterval('5');
})
$("#in15mn").click(function(){
	changeInterval('15');
})
$("#in30mn").click(function(){
	changeInterval('30');
})
$("#in1h").click(function(){
	changeInterval('60');
})
$("#in2h").click(function(){
	changeInterval('120');
})
$("#in3h").click(function(){
	changeInterval('180');
})
$("#in4h").click(function(){
	changeInterval('240');
})
$("#in1d").click(function(){
	changeInterval('D');
})
})

