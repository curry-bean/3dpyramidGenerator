var eps = elem('pyramid').style;
eps.setProperty("--width", '35' );
eps.setProperty("--height", '30' );
eps.setProperty("--hypo", '34.73' );
eps.setProperty("--alpha", '59.74deg' );

function elem(id) {
	return document.getElementById(id);
}

function setBase(val) {
	eps.setProperty("--width", val );
	setAngle(); 
	elem('base').nextElementSibling.innerText=val;
}

function setApex(val) {
	eps.setProperty("--height", val );
	setAngle();
	elem('apex').nextElementSibling.innerText=val;
}

function setAngle() {
	var width = eps.getPropertyValue("--width"); //get base width
	var height = eps.getPropertyValue("--height"); //get apex height
	var hypo = Math.sqrt((width/2 * width/2) + (height * height)); //calculate hypotenuse
	var alpha = Math.asin(height / hypo) * (180 / Math.PI) //calculate alpha angle
	eps.setProperty("--hypo", hypo); // set hypotenuse
	eps.setProperty("--alpha", alpha + 'deg'); //set alpha angle
	elem('base-width').innerText=elem('cp-width').innerText=width; //set info width
	elem('apex-height').innerText=elem('cp-height').innerText=height; //set info height
	elem('hypotenuse').innerText=hypo.toFixed(2); //set info hypotenuse
	elem('alpha-angle').innerText=alpha.toFixed(2); //set info alpha
	elem('cp-hypo').innerText=hypo; //set code hypotenuse
	elem('cp-alpha').innerText=alpha+'deg'; //set code alpha
}

function setWall(id) {
	elem('pyramid').className=id+" pyramid";
	elem('w-pyramid').innerText=id;
}

function copyCode(id){
	elem('hidden-copy-text').value=elem('hidden-'+id).innerText;
	elem('hidden-copy-text').select();
	document.execCommand("copy");
}

function hideInfo() {
	elem('info-panel').classList.toggle('hide');
	elem('info-btn').classList.toggle('hide');
}

function animatePyramid(){
    (elem("anim").innerText=="running") ? elem("anim").innerText = "paused" : elem("anim").innerText = "running"; 
}

function moreWalls() {
	elem('w-more').classList.toggle('minus');
	elem('w-mores').classList.toggle('down');
}

document.body.addEventListener('click', function(e) {
	if ( !elem('w-more').contains(e.target) && !elem('w-mores').contains(e.target) ) {
		elem('w-mores').classList.add('down');
		elem('w-more').classList.remove('minus');
	}
})