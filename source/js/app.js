'use strict';

function textBlockDisplaySetVisibility(textBlock, setVisible) {

	if (setVisible) {
		textBlock.style.display = "block";
	}
	else {
		textBlock.style.display = "none";
	}

};

function autorization() {
	var textBlock;
	var textMainBlock;

  textBlock = document.getElementById("animated-block");
  if (textBlock!==null) {
    textBlock.classList.toggle("wrap-animation-flip");
  }

  textMainBlock = document.getElementById("main-block");
  if (textMainBlock!==null) {
  	if (textMainBlock.style.display === "none") {
  		setTimeout(textBlockDisplaySetVisibility, 100, textMainBlock, true);
  	}
  	else {
  		setTimeout(textBlockDisplaySetVisibility, 200, textMainBlock, false);
  	}
  }
};

function setMainBlock() {
	var textMainBlock;
	var textBlock;


};