$(document).foundation()

$('[data-toggle-dia]').click(function (ev) {
	$('#lineup-tabs').foundation('selectTab', $(this).data('toggleDia'));
})

const $offCanvas = $('#offCanvas')
$offCanvas.find('li').click(() => {
	$offCanvas.foundation('close');
})

document.querySelector('li.js-drilldown-back a').innerHTML = "Regresar";