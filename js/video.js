// var video = document.getElementById("player1");
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Auto play is set to " + video.autoplay)
	video.loop = false;
	console.log("Loop is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9
	console.log("Speed is " + video.playbackRate)
	// do we not need to do innerhtml for this one?
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate /= 0.9
	console.log("Speed is " + video.playbackRate)
	// do we not need to do innerhtml for this one?
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	if (video.currentTime == 67.403333) {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime)
	// do we not need to do innerhtml for this one?
	// how do we get it to loop? bc right now it just stops once i get to the end unless i hit skip ahead again 
});

// Speed is 
// Skip ahead
// Video current time is
// Speed up Video