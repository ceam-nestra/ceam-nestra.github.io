/**
 * @package     Joomla.Site
 * @subpackage  Templates.protostar
 * @copyright   Copyright (C) 2005 - 2015 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @since       3.2
 */

(function($)
{
	$(document).ready(function()
	{
		$('*[rel=tooltip]').tooltip()

		// Turn radios into btn-group
		$('.radio.btn-group label').addClass('btn');
		$(".btn-group label:not(.active)").click(function()
		{
			var label = $(this);
			var input = $('#' + label.attr('for'));

			if (!input.prop('checked')) {
				label.closest('.btn-group').find("label").removeClass('active btn-success btn-danger btn-primary');
				if (input.val() == '') {
					label.addClass('active btn-primary');
				} else if (input.val() == 0) {
					label.addClass('active btn-danger');
				} else {
					label.addClass('active btn-success');
				}
				input.prop('checked', true);
			}
		});
		$(".btn-group input[checked=checked]").each(function()
		{
			if ($(this).val() == '') {
				$("label[for=" + $(this).attr('id') + "]").addClass('active btn-primary');
			} else if ($(this).val() == 0) {
				$("label[for=" + $(this).attr('id') + "]").addClass('active btn-danger');
			} else {
				$("label[for=" + $(this).attr('id') + "]").addClass('active btn-success');
			}
		});
	})
})(jQuery);

/*Feito CPD JONATAS*/    
function submenuOn(){
    var query = location.search.slice(1);
    var partes = query.split('&');
    var data = {};
    var chave;
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
    });
    if(chave === "menu" && data[chave] !== ""){
        var submenuson = "item-"+data[chave];
        var menuon = "d"+data[chave];
        var aon = "a"+data[chave];
        document.getElementById(submenuson).classList.remove("collapse");
        document.getElementById(submenuson).classList.add("in");
        document.getElementById(submenuson).classList.add("collapse");
        document.getElementById(submenuson).style = "height:auto;";
        document.getElementById(aon).class = "list-group-item";
        dropdown(menuon);
    }
}

    function dropdown(id){
            document.getElementById(id).classList.toggle("fa-chevron-up");
            document.getElementById(id).classList.toggle("fa-chevron-down");
    }
