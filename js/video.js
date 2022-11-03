// var video = document.getElementById("player1");
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("Auto play is set to", video.autoplay);
	video.loop = false;
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate /= 0.9;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10;
	// 67.403333
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is", video.currentTime);
});

// Mute and Unmute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted==true) {
		console.log("Unmute");
		video.muted = false;
		this.innerHTML = 'Mute';
	}
	else {
		console.log("Mute");
		video.muted = true;
		this.innerHTML = 'Unmute';
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value/100;
	console.log("The current value is", video.volume);
	console.log(document.querySelector("#volume"));
	document.querySelector("#volume").innerHTML= video.volume*100 + "%";
});

// Styled
// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Styled");
	video.classList.add("oldSchool");
});

// Original
// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});

// Deeper Questions:
// 1. Yes, I could add something that shows the current runtime of the video. The currentTime property sets or returns the current position (in seconds) of the audio/video playback.

// 2. Yes, I believe it is possible to have the video element show a thumbnail. I am not entirely sure how that would work, but stack overflow and google say it is possible.

// 3. Yes, we can use a different video and get it to work.

// 4. The player and slider are keyboard-accessible. But, they are hard to navigate with and for mouse users, the buttons are too far apart and inconvenient. We also should allow the slider to come into focus, which it does not currently do. So, ultimately I would say they are not accessible.