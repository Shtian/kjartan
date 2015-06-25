
$( document ).ready(function() {
	function update() {
		var now = moment();
		var isWorking = true;
		var day = now.day();
		var week = now.week();
		if(day == 1 || day == 4 || (day == 3 && week % 2 == 0)) isWorking = false;
			$('#clock').html(isWorking ? 'Ja :D' : 'Nei :(');
	}
	update();
	setTimeout(update, 60000);
});
