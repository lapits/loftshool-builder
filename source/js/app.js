'use strict';

function autorization() {
	var textBlock;
  textBlock = document.getElementById("autorization-block");
  if (textBlock!==null) {
    textBlock.style.display = "none";
  }

  textBlock = document.getElementById("main-block");
  if (textBlock!==null) {
	  textBlock.style.transitionDelay = "2";
	  textBlock.style.transitionDuration = "2s";
	  textBlock.style.transitionTimingFunction = "linear";

    textBlock.style.display = "block";

  }

};