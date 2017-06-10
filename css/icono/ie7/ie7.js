/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icono\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-four': '&#xe600;',
		'icon-zero': '&#xe601;',
		'icon-calendar': '&#xe602;',
		'icon-graduate': '&#xe603;',
		'icon-caveat': '&#xe604;',
		'icon-menu': '&#xe605;',
		'icon-world': '&#xe606;',
		'icon-binary': '&#xe607;',
		'icon-calculator': '&#xe608;',
		'icon-twitter': '&#xe609;',
		'icon-youtube': '&#xe60a;',
		'icon-untitled12': '&#xe60b;',
		'icon-facebook': '&#xe60c;',
		'icon-person': '&#xe60d;',
		'icon-judged': '&#xe60e;',
		'icon-cash': '&#xe60f;',
		'icon-books': '&#xe610;',
		'icon-question': '&#xe611;',
		'icon-question1': '&#xe612;',
		'icon-flex-play': '&#xe613;',
		'icon-flex-pause': '&#xe614;',
		'icon-picture': '&#xf012;',
		'icon-bar-chart': '&#xf080;',
		'icon-flex-prev': '&#xf137;',
		'icon-flex-next': '&#xf138;',
		'icon-user': '&#xe616;',
		'icon-group': '&#xf0c0;',
		'icon-suitcase': '&#xf0f2;',
		'icon-envelope': '&#xe615;',
		'icon-flag': '&#xe617;',
		'icon-flag2': '&#xe618;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
