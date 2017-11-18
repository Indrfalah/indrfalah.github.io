		var open=["09.00","X","08.00","08.00","08.00","09.00","09.00"]; // Edit this line Sun - Sat (closed friday/sat)
	   var close=["16.00","X","16.00","16.00","16.00","16.00","16.00"]; // Edit this line Sun - Sat (closed friday/sat)
	   
	   var currentTime = new Date()
	   var day = currentTime.getDay();
	   var openTime = open[day];
	   var closeTime = close[day];
	   createHours(openTime,closeTime);
	   function createHours(openTime, closeTime){ // Build the hours string
		 var _html = '';
		 if(openTime == "X") {
		  _html += "Closed today";
		 } else {
		  var _current_time = parseFloat(currentTime.getHours()+'.'+currentTime.getMinutes());
		  var _open_time = parseFloat(openTime.replace('u','.'));
		  var _close_time = parseFloat(closeTime.replace('u','.'));
		  if(_current_time < _close_time && _current_time > _open_time ){
			  _html += '<span style="color:#81cc60; font-weight:bold; font-size:18px;" > Open now </span>';
		  }else {
			  _html += '<span style="color:#FE2E2E; font-weight:bold; font-size:18px"> Closed </span>';
		  }  
		 }
	   document.write(_html);
	   }