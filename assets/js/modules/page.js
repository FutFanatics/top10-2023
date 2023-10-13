(function($){

	var containerinstruction= $('.instruction__slick')
	var containerstep= $('.slick__step')
	var containertop= $('.slick__top')

	containerinstruction.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,

						}
			
			}]
	});
	
	containerstep.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,

						}
			
			}]
	});

	containertop.slick({
		autoplay: false,
		autoplaySpeed: 4000,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,

						}
			
			}]
	});

	$(document).ready(function() {
        var currentCardTop = 1; 	
        $(".shirt-fav").click(function() {
            var imageUrl = $(this).data("image"); // Obtenha a URL 
            $(".card-top[data-currentposition='" + currentCardTop + "'] .card-image").attr("src", imageUrl);
            currentCardTop++; 
        });
    });
	
		
    

	function copyToClipboard(element) {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($(element).text()).select();
		document.execCommand("copy");
		$temp.remove();
	}

	$('.name-cupom').on('click', function() {
		var $el = $(this)
		copyToClipboard($el .find('.cupom'));
		$($el).addClass('copied');
		setTimeout(function() {
			$($el).removeClass('copied');
		}, 3000);
	});

	$('.selection').on('click', function(){
		$('.selection').addClass('active');
		$('.selection_shirt').addClass('active');
		$('.club').removeClass('active');
		$('.club_shirt').removeClass('active');
		$('.regional').removeClass('active');
		$('.regional_shirt').removeClass('active');
	})

	$('.club').on('click', function(){
		$('.selection').removeClass('active');
		$('.selection_shirt').removeClass('active');
		$('.club').addClass('active');
		$('.club_shirt').addClass('active');
		$('.regional').removeClass('active');
		$('.regional_shirt').removeClass('active');
	})
	$('.regional').on('click', function(){
		$('.selection').removeClass('active');
		$('.selection_shirt').removeClass('active');
		$('.club').removeClass('active');
		$('.club_shirt').removeClass('active');
		$('.regional').addClass('active');
		$('.regional_shirt').addClass('active');
	})

	$('.see-more_selection').on('click', function() {
		console.log($(this).siblings('.selection_shirt').hasClass('all'));

		if (!$(this).siblings('.selection_shirt').hasClass('all')) {
			$(this).html('Mostrar menos -');
			$(this).siblings('.selection_shirt').addClass('all');
		} else { 
			$(this).html('Ver tudo');
			$(this).siblings('.selection_shirt').removeClass('all');
		}
		return false;
	});

	$('.see-more_selection').on('click', function() {
		console.log($(this).siblings('.selection_shirt-content').hasClass('all'));

		if (!$(this).siblings('.selection_shirt-content').hasClass('all')) {
			$(this).html('Ver menos');
			$(this).siblings('.selection_shirt-content').addClass('all');
		} else { 
			$(this).html('Ver tudo');
			$(this).siblings('.selection_shirt-content').removeClass('all');
		}
		return false;
	});

	$('.see-more_club').on('click', function() {
		console.log($(this).siblings('.club_shirt-content').hasClass('all'));

		if (!$(this).siblings('.club_shirt-content').hasClass('all')) {
			$(this).html('Ver menos');
			$(this).siblings('.club_shirt-content').addClass('all');
		} else { 
			$(this).html('Ver tudo');
			$(this).siblings('.club_shirt-content').removeClass('all');
		}
		return false;
	});
	$('.see-more_regional').on('click', function() {
		console.log($(this).siblings('.regional_shirt').hasClass('all'));               

		if (!$(this).siblings('.regional_shirt').hasClass('all')) {
			$(this).html('Ver tudo');
			$(this).siblings('.regional_shirt').addClass('all');
		} else { 
			$(this).html('Ver tudo');
			$(this).siblings('.regional_shirt').removeClass('all');
		}
		return false;
	});

	var produto = [120960,114348,114386,117476,114394,116495];

    var template_produtos =
		'<div class="item">' +
			'<a class="link">' +
				'<div class="foto"><span class="discount d-none"></span>' +
					'<span class="thumb">' +
						'<img class="lozad img-fluid" src="assets/img/pixel-2.png">' +
					'</span>' +
				'</div>' +
				'<div class="tags"></div>' +
				'<h2 class="title"></h2>' +
				'<div class="price"></div>' +
				'<div class="product-variants">' +
					'<div class="variants-slider"></div>' +
				'</div>' +
				'<div class="product-actions"></div>' +
			'</a>' +
		'</div>';

    var vitrine = $('#vitrine-fut');

	
	$.getJSON('https://www.futfanatics.com.br/web_api/products?id=' + produto.join(","), '', function (data) {
		if (data) {
			var variants = [];

			data.Products.forEach(function(dataProduct){

				var product = dataProduct.Product

				if (product.available != 0) {
					var template = jQuery(template_produtos);

					var link = product.url.https;
					var img = product.ProductImage[0].thumbs[180].https;
					var title = product.name;
					var pricePromo = product.promotional_price;
					var price = product.price;
					var percentDiscount = 100 - (pricePromo/price) * 100;
					var payment = product.payment_option;
					var personalization = product.Properties['Permite Personalização'] == 'Sim' ? true : false;
					var release = product.release == "1" ? true : false;

					template.find('.link').attr('href', link);
					template.find('.foto span img').attr('src', img);
					template.find('.title').html(title);

					if (percentDiscount < 100) {
						template.find('.foto .discount').html('▾ ' + percentDiscount.toFixed() + '%').removeClass('d-none');
					}

					// lozad('.lozad', {
					//     load: function(target)
 
					//             target.src = target.dataset.src;
					//             target.onload = function() {
					//                 target.classList.add('fadein');
					//             }
					//     }
					// }).observe();

					if (release && pricePromo != 0 && personalization) {
						template.find('.tags').html('<span class="lancamento">Lançamento</span> <span class="oferta">Oferta</span>');
					} else if (pricePromo != 0 && personalization) {
						template.find('.tags').html('<span class="oferta">Oferta</span> <span class="personalize">Personalize</span>');
					} else if (product.release && pricePromo != 0) {
						template.find('.tags').html('<span class="lancamento">Lançamento</span><span class="oferta">Oferta</span>');
					} else {

						if (release) {
							template.find('.tags').html('<span class="lancamento">Lançamento</span>');
						} else if (pricePromo != 0) {
							template.find('.tags').html('<span class="oferta">Oferta</span>');
						} else if (personalization) {
							template.find('.tags').html('<span class="personalize">Personalize</span>');
						}
					}

					if (pricePromo != 0) {
						template.find('.price').html('<div class="old-price">R$ ' + price.replace('.', ',') + '</div><div class="current-price">R$ ' + pricePromo.replace('.', ',') + '</div>');
					} else {
						template.find('.price').html('<div class="current-price">R$ ' + price.replace('.', ',') + '</div>');
					}
				

					
					// variants[0].forEach(function(row){
					//     if (row) {
					//         template.find('.variants-slider').append(
					//             '<div class="variants-item">' +
					//                 '<button type="button" data-variant="'+ row.Variant.id +'">' + 
					//                     row.Variant.Sku[0].value + 
					//                 '</button>' +
					//             '</div>'
					//         );
					//     }
					// });

					// template.find('.product-actions').html(
					//     '<a href="#" class="bt_comprar d-flex justify-content-center" title="Adicionar este item ao seu carrinho">' +
					//         '<i></i>' +
					//         '<span>Comprar</span>' +
					//     '</a>'
					// );

	//                vitrine.append(template);
					vitrine.slick('slickAdd', template);
				}
			});

			// jQuery.ajax({
			//     url: "https://www.futfanatics.com.br/web_api/variants?product_id=" + product.id,
			//     //context: document.body,
			//     async: false,
			//     method: "GET",
			//     crossDomain: true,
			//   }).done(function(data) {
			//       console.log("Data:",data);
			//     variants.push(data.Variants);
			//   });
				
			
		}
	});

	vitrine.html('');


	if (isMobile()) {
		vitrine.slick({
			autoplay: false,
			infinite: true,
			speed: 500,
			arrows: false,
			dots: true,
			slidesToShow: 2,
			slidesToScroll: 2,
	//        lazyLoad: 'ondemand',
			prevArrow: $('.slick-nav_vitrine').find('.slick-prev'),
			nextArrow: $('.slick-nav_vitrine').find('.slick-next'),
		});

	} else {

		vitrine.slick({
			autoplay: false,
			infinite: true,
			speed: 500,
			arrows: true,
			dots: true,
			slidesToShow: 5,
			slidesToScroll: 2,
	//        lazyLoad: 'ondemand',
			prevArrow: $('.slick-nav_vitrine').find('.slick-prev'),
			nextArrow: $('.slick-nav_vitrine').find('.slick-next'),
		});

	}

	function isMobile() {
		if (window.innerWidth > 991) {
			return false;
		}
		return true;
	}

	$('.c-modalVote form').on('submit', function(event) {
		console.log('clickou');
		event.preventDefault();

		var form = $(this);
		var formData = form.serialize();
		var url = 'https://apiinfra.futfanatics.app/voto-top10';
		// var url = 'http://localhost/api-infra/voto-top10';

		form.find('.msg-resp').html('').removeClass('text-success text-danger text-info').slideUp();

		if (!form.find('select').val()) {
			form.find('.msg-resp').html('Escolha o seu time.').addClass('text-info').slideDown();
			return false;
		}

		console.log(formData);
	
		$.post(url, formData, function(response) {
			if (response.status) {
				form.find('.msg-resp').html('Boa jogada, e-mail cadastrado com sucesso!').addClass('text-success').slideDown();

				setTimeout(function() {
					var selected = $('.list-camisas .item.selected');

					$('#modal-votar').modal('hide');
					$('.col-content').addClass('d-none');
					$('.col-cupom').addClass('active');
					$('html, body').animate({
                		scrollTop: ($('#voto-concluido').offset().top - $('#header').height() - $('.header-nav').height() - 50)
                		// scrollTop: 0
            		}, 800);
				}, 1000);
			} else {
				form.find('.msg-resp').html('Desculpe-nos, ocorreu um erro ao cadastrar.').addClass('text-danger').slideDown();
				console.log('Error form dinamize: ' + response.error_msg.result);
			}
		}).fail(function(response) {
			form.find('.msg-resp').html(response.responseJSON.errorMsg).addClass('text-danger').slideDown();
		});

		return false;
	});

	$(document).ready(function () {
		var apiUrl = "https://apiinfra.futfanatics.app/board-top10/2022";

		$.ajax({
			type: "GET",
			url: apiUrl,
			dataType: "json",
			success: function (data) {
				if (data.status === true && data.data && data.data.votos) {
					var votos = data.data.votos;
					var totalVotos = data.data.total;
					
					// Iterar pelos votos e exibir na página
					$.each(votos, function (index, item) {
						var nome = item.nome;
						var votos = item.votos;
						var porcentagem = (votos / totalVotos) * 100;

						// Criar um novo elemento para cada par nome-porcentagem
						var newItem = $("<div class='col-4 card-ranking d-flex'>"
                                + "<h1 class='ranking-number'>#" + (index + 1) + "</h1>"
                                + "<h1 class='ranking-name'>" + nome + "</h1>"
                                + "<div class='ranking-percent'>"
                                + "<div class='percent-circle'></div>"
                                + "<div class='percent-fill'></div>"
                                + "<div class='percent-text'>" + porcentagem.toFixed(2) + "%</div>"
                                + "</div>"
                                + "</div>");

								// Obtenha a porcentagem desejada (por exemplo, 50%)
							var porcentagem = 50;

							// Calcule o ângulo a ser usado para preencher o círculo
							var anguloPreenchimento = (360 * porcentagem) / 100;

							// Defina o valor da variável CSS --border-fill com base no ângulo de preenchimento
							document.documentElement.style.setProperty('--border-fill', anguloPreenchimento + 'deg');


						// Adicionar o novo elemento à página
						$(".row-ranking").append(newItem);
					});
				} else {
					console.log("A resposta da API não está no formato esperado.");
				}
			},
			error: function () {
				console.log("Erro na solicitação GET.");
			}
		});
	});

})(jQuery);

