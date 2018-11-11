
function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
	} : null;
}

function getStopData() {
	//var json = JSON.parse('{{ data | tojson | safe}}');
	//var json2 = JSON.parse('{{ title | tojson | safe}}');
	title = json2['stops'][0]['stop_name'];
	$("#title").append(title);
	departures = json['departures'];
	for (i = 0; i < departures.length; i++) {
		route = departures[i]['headsign'];
		route_short = route.split(" ")[0];
		route_name = route.substr(route.indexOf(" ") + 1);
		route_color = departures[i]['route']['route_color'];
		route_color_r = hexToRgb(route_color).r;
		route_color_g = hexToRgb(route_color).g;
		route_color_b = hexToRgb(route_color).b; 
		route_text_color = departures[i]['route']['route_text_color'];
		eta = departures[i]['expected_mins'];
		$("#insert").append("<div class='departure' style='color: " + "#" + route_text_color + ";'>" + "<div class='departure-wrapper'>" + "<span class='route-short' style='" + "background-color: rgba(" + route_color_r + ", " + route_color_g + ", " + route_color_b + ", " + "0.75)" + ";'>" + route_short + "</span>" + "<span class='route-name'>" + route_name + "</span>" + "<span class='time'>" + eta + " Min" + "</span>" + "</div>" + "</div>");
	}
	if ($('#insert').html() == "") {
		$("#insert").append("<p>No buses coming...</p>");
	}
}