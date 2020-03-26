// Show Password
var pw = document.getElementById('pw');

var eye = document.getElementById('eye-pw');

eye.addEventListener('click', eyeShow);

function eyeShow(){
	if (pw.getAttribute('type') == 'text') {
		pw.setAttribute('type', 'password');
		eye.style.opacity = ".3";
		eye.setAttribute('class','far fa-eye eye-pw');
	} else {
		pw.setAttribute('type', 'text');
		eye.style.opacity = "1";
		eye.setAttribute('class','far fa-eye-slash eye-pw');
	}

}

// Focus E-mail and Password
var pwDiv = document.getElementById('pwDiv');
var pwIcon = document.getElementById('pwIcon');
var eDiv = document.getElementById('eDiv');
var eIcon = document.getElementById('eIcon');

eDiv.addEventListener('click', eFocus);
function eFocus() {
	var email = document.getElementById('email');
	email.focus();
	eIcon.style.opacity = '1';
}
pwDiv.addEventListener('click', pwFocus);
function pwFocus() {
	var pw = document.getElementById('pw');
	pw.focus();
	pwIcon.style.opacity = '1';
}

function onMouseOutpwIcon() {
		pwIcon.style.opacity = .3;
}
function onMouseOuteIcon() {
	eIcon.style.opacity = .3;
}

function onMouseOverpwIcon() {
	pwIcon.style.opacity = 1;
}
function onMouseOvereIcon() {
	eIcon.style.opacity = 1;
}

// Toogle Click Math
var toggle = document.getElementById('toggle');
var toggleIcon = document.getElementById('toggleIcon');

// Math Captcha
var math = document.getElementById('math');
var calc = document.getElementById('calc');
var result = 0;
// Numbers
toggle.addEventListener('click', toggleFunction);
function toggleFunction() {
	if (toggle.value == 1) {
		// Numbers
		v1 = Math.floor( Math.random() * 10 );
		v2 = Math.floor( Math.random() * 10 );
		result = v1 + v2;
		math.innerHTML = v1 + ' + ' + v2;
		//alert(v1 + ' + ' + v2 + ' = ' + result);
		toggleIcon.setAttribute('class', 'fas fa-toggle-on toggle-off');
		toggle.style.opacity = ('.3');
		toggle.value = 0;
	} else {
		// Numbers
		var v1 = Math.floor( Math.random() * 10 );
		var v2 = Math.floor( Math.random() * 10 );
		result = v1 * v2;
		math.innerHTML = v1 + ' * ' + v2;
		//alert(v1 + ' * ' + v2 + ' = ' + result);
		toggleIcon.setAttribute('class', 'fas fa-toggle-on toggle-on');
		toggle.style.opacity = ('1');
		toggle.value = 1;
	}
}

function calcMath () {
	if (calc.value == result) {
		btnSI.removeAttribute('disabled');
		calc.style.borderColor = "#ccc";
	} else {
		btnSI.setAttribute('disabled', 'disabled');
		calc.style.borderColor = "#f00";
	}
}

// Disabled button sign in
var btnSI = document.getElementById('btnSignIn');

function btnDisabled () {
	if (calc.value == '') {
		btnSI.setAttribute('disabled', 'disabled');
	} else {
		btnSI.setAttribute('disabled', 'none');
	}
}

// Menu
var menu = document.getElementById('menu');
var menuIcon = document.getElementById('menuIcon');

menuIcon.addEventListener('click', alterMenuIcon);

var form = document.getElementById('form');

function alterMenuIcon() {
	if (menu.getAttribute('class') == 'hidden') {
		menu.setAttribute('class', 'show');
		menuIcon.style.opacity = .8;
		form.style.opacity = .6;
	} else {
		menu.setAttribute('class', 'hidden');
		menuIcon.style.opacity = .3;
		form.style.opacity = 1;
	}
}

// Title Animation
var toggleAnimation1 = document.getElementById('toggleAnimation1');

var titleAnimation = document.getElementById('title');

toggleAnimation1.addEventListener('click', function() {
	if (titleAnimation.getAttribute('class') == 'title-play') {
		titleAnimation.setAttribute('class', 'title-paused');
		toggleAnimation1.style.transform = 'rotate(180deg)';
		toggleAnimation1.style.opacity = '.3';
	} else {
		titleAnimation.setAttribute('class', 'title-play');
		toggleAnimation1.style.transform = 'rotate(360deg)';
		toggleAnimation1.style.opacity = '1';
	}
});