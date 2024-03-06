// (function() {
// 	var countdownElement = document.querySelector('.countdown-timer');
// 	var initialTime = 60*1000;
// 	var currentTime = initialTime;
  
// 	function updateTimer() {
// 	  var minutes = Math.floor(currentTime / 60000);
// 	  var seconds = Math.floor((currentTime % 60000) / 1000);
// 	  console.log({minutes, seconds})
  
// 	  countdownElement.innerHTML = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  
// 	  if (currentTime > 0) {
// 		currentTime -= 1000;
// 		setTimeout(updateTimer, 1000);
// 	  }
// 	}
  
// 	updateTimer();
//   })();