

let img=document.querySelector('.img0');

let container=document.querySelector('.container');

function phones(phone) {
	img.src=phone;
}
function colors(color) {
	container.style.background=color;
	
}
function wolves() {

	document.getElementById('para').innerHTML='Wolves are legendary because of their spine-tingling howl, which they use to communicate. A lone wolf howls to attract the attention of his pack, while communal howls may send territorial messages from one pack to another. Some howls are confrontational.';
	document.getElementById('title').innerHTML='Wolves';
	
}
function lion() {

	document.getElementById('para').innerHTML='The lion inhabits grasslands, savannahs and shrublands. It is usually more diurnal than other wild cats, but when persecuted, it adapts to being active at night and at twilight.';
	document.getElementById('title').innerHTML='Lions';
	
}
function panda() {

	document.getElementById('para').innerHTML=' Baby pandas are born pink and measure about 15cm – that’s about the size of a pencil! They are also born blind and only open their eyes six to eight weeks after birth.';
	document.getElementById('title').innerHTML='panda';
	
}
function girafe(){
	document.getElementById('para').innerHTML='A giraffe’s tongue is 45-50 cm long and “prehensile”, which means it can twist and grip things. This is very useful if you’re trying to pick delicious leaves out from thorns. Giraffes also have mouth armour! Their mouth is covered in hard, finger-like papillae to protect it from sharp thorns.';
	document.getElementById('title').innerHTML='Girafe';
}
function tiger(){
	document.getElementById('para').innerHTML='There is only one tiger species and six tiger subspecies: the Siberian tiger, the Bengal tiger, the South China tiger, the Sumatran tiger, the Indochinese tiger, and the Malayan tiger.';
	document.getElementById('title').innerHTML=' white Tigers';
}


