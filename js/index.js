
$( document ).ready(function() {
	function update() {
		var now = moment();
		var isWorking = true;
		var day = now.day();
		var hour = now.hour();
		if(day == 7 || day == 6 || (hour < 7 || hour > 16)) isWorking = false;
			$('#clock').html(isWorking ? 'Mest sannsynlig!' : 'Tror ikke det :(');
	}
	
	update();
	setInterval(update, 60000);
});
