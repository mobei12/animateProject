import $ from "jquery";
import SVGMorpheus from "../../static/js/svg-morpheus";
var eleGs = document.querySelectorAll("g");
var myIcons = new SVGMorpheus("#icon");

var index = 0;
var funMorpheus = function () {
	myIcons.to(eleGs[index].id);
	index++;
	if (!eleGs[index]) {
		index = 0;
		document.body.style.fill = "#" + (Math.random() + "").slice(-6);
	}
	setTimeout(funMorpheus, 2000);
};
funMorpheus();
