(function ($) {
  var containerinstruction = $(".instruction__slick");
  var containerstep = $(".slick__step");
  var containertop = $(".slick__top");

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.name-cupom').on('click', function () {
    var $el = $(this);

    var texto = $el.find('.cupom').text();

    $('.input-transfer').val(texto).select();

    document.execCommand("copy");


    $el.addClass('copied');
    setTimeout(function () {
        $el.removeClass('copied');
    }, 3000);
});
  
  $(document).ready(function () {
    var currentCardTop = 1;

    $(".shirt-fav").click(function () {
      var imageUrl = $(this).data("image");
      var prodName = $(this).data("name");
      var prodId = $(this).data("id");

      var imgElement = $("<img>").addClass("card-image").attr("src", imageUrl);

      var $currentCardTop = $(
        ".card-top[data-currentposition='" + currentCardTop + "']"
      );
      if ($currentCardTop.find(".card-image").length === 0) {
        $currentCardTop.append(imgElement);
      } else {
        $currentCardTop.find(".card-image").attr("src", imageUrl);
      }

      $("#voteModal [name='prodName']").val(prodName);
      $("#voteModal [name='prodId']").val(prodId);
    });

    $(".vote-top").click(function () {
      var $currentCardTop = $(".card-top[data-currentposition='1']");
      var hasImage = $currentCardTop.find(".card-image").length > 0;

      if (hasImage) {
        var imageUrl = $currentCardTop.find(".card-image").attr("src");
        $("#voteModal .col-img img").attr("src", imageUrl);

        $("#voteModal").modal("show");
      } else {
        alert("Escolha a sua camisa favorita antes.");
      }
    });
  });

  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  $(".name-cupom").on("click", function () {
    var $el = $(this);
    copyToClipboard($el.find(".cupom"));
    $($el).addClass("copied");
    setTimeout(function () {
      $($el).removeClass("copied");
    }, 3000);
  });

  $(".selection").on("click", function () {
    $(".selection").addClass("active");
    $(".selection_shirt").addClass("active");
    $(".club").removeClass("active");
    $(".club_shirt").removeClass("active");
    $(".regional").removeClass("active");
    $(".regional_shirt").removeClass("active");
  });

  $(".club").on("click", function () {
    $(".selection").removeClass("active");
    $(".selection_shirt").removeClass("active");
    $(".club").addClass("active");
    $(".club_shirt").addClass("active");
    $(".regional").removeClass("active");
    $(".regional_shirt").removeClass("active");
  });
  $(".regional").on("click", function () {
    $(".selection").removeClass("active");
    $(".selection_shirt").removeClass("active");
    $(".club").removeClass("active");
    $(".club_shirt").removeClass("active");
    $(".regional").addClass("active");
    $(".regional_shirt").addClass("active");
  });

  $(".see-more_selection").on("click", function () {
    console.log($(this).siblings(".selection_shirt").hasClass("all"));

    if (!$(this).siblings(".selection_shirt").hasClass("all")) {
      $(this).html("Mostrar menos -");
      $(this).siblings(".selection_shirt").addClass("all");
    } else {
      $(this).html("Ver tudo");
      $(this).siblings(".selection_shirt").removeClass("all");
    }
    return false;
  });

  $(".see-more_selection").on("click", function () {
    console.log($(this).siblings(".selection_shirt-content").hasClass("all"));

    if (!$(this).siblings(".selection_shirt-content").hasClass("all")) {
      $(this).html("Ver menos");
      $(this).siblings(".selection_shirt-content").addClass("all");
    } else {
      $(this).html("Ver tudo");
      $(this).siblings(".selection_shirt-content").removeClass("all");
    }
    return false;
  });

  $(".see-more_club").on("click", function () {
    console.log($(this).siblings(".club_shirt-content").hasClass("all"));

    if (!$(this).siblings(".club_shirt-content").hasClass("all")) {
      $(this).html("Ver menos");
      $(this).siblings(".club_shirt-content").addClass("all");
    } else {
      $(this).html("Ver tudo");
      $(this).siblings(".club_shirt-content").removeClass("all");
    }
    return false;
  });
  $(".see-more_regional").on("click", function () {
    console.log($(this).siblings(".regional-shirt-content").hasClass("all"));

    if (!$(this).siblings(".regional-shirt-content").hasClass("all")) {
      $(this).html("Ver menos");
      $(this).siblings(".regional-shirt-content").addClass("all");
    } else {
      $(this).html("Ver tudo");
      $(this).siblings(".regional-shirt-content").removeClass("all");
    }
    return false;
  });

  var produto = [120960, 114348, 114386, 117476, 114394, 116495];

  var template_produtos =
    '<div class="item">' +
    '<a class="link">' +
    '<div class="foto"><span class="discount d-none"></span>' +
    '<span class="thumb">' +
    '<img class="lozad img-fluid" src="assets/img/pixel-2.png">' +
    "</span>" +
    "</div>" +
    '<div class="tags"></div>' +
    '<h2 class="title"></h2>' +
    '<div class="price"></div>' +
    '<div class="product-variants">' +
    '<div class="variants-slider"></div>' +
    "</div>" +
    '<div class="product-actions"></div>' +
    "</a>" +
    "</div>";

  var vitrine = $("#vitrine-fut");

  $.getJSON(
    "https://www.futfanatics.com.br/web_api/products?id=" + produto.join(","),
    "",
    function (data) {
      if (data) {
        var variants = [];

        data.Products.forEach(function (dataProduct) {
          var product = dataProduct.Product;

          if (product.available != 0) {
            var template = jQuery(template_produtos);

            var link = product.url.https;
            var img = product.ProductImage[0].thumbs[180].https;
            var title = product.name;
            var pricePromo = product.promotional_price;
            var price = product.price;
            var percentDiscount = 100 - (pricePromo / price) * 100;
            var payment = product.payment_option;
            var personalization =
              product.Properties["Permite Personalização"] == "Sim"
                ? true
                : false;
            var release = product.release == "1" ? true : false;

            template.find(".link").attr("href", link);
            template.find(".foto span img").attr("src", img);
            template.find(".title").html(title);

            if (percentDiscount < 100) {
              template
                .find(".foto .discount")
                .html("▾ " + percentDiscount.toFixed() + "%")
                .removeClass("d-none");
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
              template
                .find(".tags")
                .html(
                  '<span class="lancamento">Lançamento</span> <span class="oferta">Oferta</span>'
                );
            } else if (pricePromo != 0 && personalization) {
              template
                .find(".tags")
                .html(
                  '<span class="oferta">Oferta</span> <span class="personalize">Personalize</span>'
                );
            } else if (product.release && pricePromo != 0) {
              template
                .find(".tags")
                .html(
                  '<span class="lancamento">Lançamento</span><span class="oferta">Oferta</span>'
                );
            } else {
              if (release) {
                template
                  .find(".tags")
                  .html('<span class="lancamento">Lançamento</span>');
              } else if (pricePromo != 0) {
                template
                  .find(".tags")
                  .html('<span class="oferta">Oferta</span>');
              } else if (personalization) {
                template
                  .find(".tags")
                  .html('<span class="personalize">Personalize</span>');
              }
            }

            if (pricePromo != 0) {
              template
                .find(".price")
                .html(
                  '<div class="old-price">R$ ' +
                    price.replace(".", ",") +
                    '</div><div class="current-price">R$ ' +
                    pricePromo.replace(".", ",") +
                    "</div>"
                );
            } else {
              template
                .find(".price")
                .html(
                  '<div class="current-price">R$ ' +
                    price.replace(".", ",") +
                    "</div>"
                );
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
            vitrine.slick("slickAdd", template);
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
    }
  );

  vitrine.html("");

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
      prevArrow: $(".slick-nav_vitrine").find(".slick-prev"),
      nextArrow: $(".slick-nav_vitrine").find(".slick-next"),
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

      prevArrow: $(".slick-nav_vitrine").find(".slick-prev"),
      nextArrow: $(".slick-nav_vitrine").find(".slick-next"),
    });
  }

  function isMobile() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  $(document).ready(function () {
    var apiUrl = "https://apiinfra.futfanatics.app/board-top10/2023";

    $.ajax({
      type: "GET",
      url: apiUrl,
      dataType: "json",
      success: function (data) {
        if (data.status === true && data.data && data.data.votos) {
          var votos = data.data.votos;
          var totalVotos = data.data.total;

          $.each(votos, function (index, item) {
            var nome = item.nome;
            var votos = item.votos;
            var porcentagem = (votos / totalVotos) * 100;

			var newItem = $("<div class='col-md-10 card-ranking d-flex justify-content-between align-items-center'>"
			+ "<h1 class='ranking-number'>#" + (index + 1) + "</h1>"
			+ "<h1 class='ranking-name'>" + nome + "</h1>"
			+ "<div class='ranking-percent'>"
			+ "<div class='percent-circle'>"
			+ "<svg class='progress-ring' width='70' height='70'>"
			+ "<circle class='progress-ring__circle progress-ring__circle--unfilled' r='30' cx='35' cy='35'></circle>"
			+ "<circle class='progress-ring__circle progress-ring__circle--filled' r='30' cx='35' cy='35'></circle>"
			+ "</svg>"
			+ "<div class='percent-text'>" + porcentagem.toFixed(2) + "%</div>"
			+ "</div>"
			+ "</div>"
			+ "</div>");
		
		var circle = newItem.find('.progress-ring__circle--filled');
		var percent = porcentagem / 100;
		var circumference = 2 * Math.PI * 30;
		var strokeDashoffset = circumference * (1 - percent);
		
		circle.css('stroke-dasharray', circumference);
		circle.css('stroke-dashoffset', strokeDashoffset);

            if (index < 3) {
              newItem.addClass("special-style");
              $(".first-three").append(newItem);
            } else {
              $(".rest-of-elements").append(newItem);
            }
          });

          $(".rest-of-elements").slick({
            slidesToShow: 6,
            slidesToScroll: 6,
            prevArrow: $(".prev"),
            nextArrow: $(".next"),
			dots:true,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
				  dots:false,
                },
              },
            ],
          });
        } else {
          console.log("A resposta da API não está no formato esperado.");
        }
      },
      error: function () {
        console.log("Erro na solicitação GET.");
      },
    });
  });
  $(".shirt-fav").on("click", function () {
    $(this).toggleClass("active");

    var starImg = $(this).find(".star");

    if ($(this).hasClass("active")) {
      starImg.attr("src", "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/star-enable.svg");
    } else {

      starImg.attr("src", "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/star-shirt.svg");
    }
    return false;
  });


  const objetos = [
    /* alemanha fem */
    {
      nome: "Adidas alemanha fem. III",
      descricao:
        "A campanha na Copa do Mundo Feminina pode ter sido decepcionante, mas uma coisa não se pode negar: a camisa da Alemanha é uma das coisas mais lindas que foi vista em 2023. O manto verde ficou maravilhoso, não é?",
      preco: "R$ 99,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasAlemanhaFemininoIII.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-alemanha-away-2023-feminina",
    },

    /* Adidas Espanha Fem. III */
    {
      nome: "Adidas Espanha Fem. III",
      descricao:
        "As campeãs do Mundo também não podiam ficar de fora. A camisa away da Espanha no Mundial da Austrália também fez bastante sucesso. Com cores em azul e vermelho, a camisa também faz parte das dez mais bonitas de 2023.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasEspanhaFemininoIII.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-espanha-away-2023-feminina",
    },

    /* Adidas Suécia Fem. III */
    {
      nome: "Adidas Suécia Fem. III",
      descricao:
        "A camisa da Seleção Sueca de Futebol facilmente está entre as 10 mais bonitas do ano de 2023. Com detalhes em azul, contrapondo tons diferentes, a camisa da terceira colocada no Mundial da Austrália fez sucesso.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasSueciaFemininoIII.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-suecia-away-2023-feminina",
    },

    /* Adidas Itália Away */
    {
      nome: "Adidas Itália Away",
      descricao:
        "Esculpida para os deuses do cálcio, a camisa Away da Azzurra para 2023, criada pela Adidas, celebra o legado da cultura italiana. O manto traz visual na cor branca, exibindo padrão marmorizado ao longo de seu corpo, além de possuir, na nuca, o nome 'Italia'.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasItaliaAway.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-italia-away-2023",
    },

    /* Adidas Colombia Feminina Away*/
    {
      nome: "Adidas Colombia Feminina Away",
      descricao:
        "Do Rio Caño Cristales para a Terra do Canguru! A camisa away da Colômbia na Copa do Mundo Feminina da Austrália foi uma homenagem a um dos fenômenos mais incríveis da natureza, as cores do Rio Cinco Cores. Vale a pesquisa e vale o voto nessa beleza da Adidas.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasColombiaFemininaAway.png",
      link: "https://www.futfanatics.com.br/camisa-joma-romenia-away-2024",
    },

    /* Adidas México Away */
    {
      nome: "Adidas México Away",
      descricao:
        "Inspirada na deslumbrante beleza da natureza mexicana, a Adidas apresenta a nova versão feminina da camisa Away do México para 2023. O manto exibe design na cor branca e estampa com manchas verdes representando o tubarão-baleia que habita as costas do país.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasMexicoAway.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-mexico-away-2023-feminina",
    },

    /* Adidas Itália Home*/
    {
      nome: "Adidas Itália Home",
      descricao:
        "A média do preço do mármore é de R$800. Mas nesse mármore italiano chamado “Mantello dell'Azzurra”, uma tradução simples de “Manto da Azzurra”, é certamente uma das camisas mais bonitas do ano. Além disso, é o retorno da marca alemã como fornecedora da seleção.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasItaliaHome.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-italia-home-2023",
    },
    /* Joma Romênia Away*/
    {
      nome: "Joma Romênia Away",
      descricao:
        "A média do preço do mármore é de R$800. Mas nesse mármore italiano chamado “Mantello dell'Azzurra”, uma tradução simples de “Manto da Azzurra”, é certamente uma das camisas mais bonitas do ano. Além disso, é o retorno da marca alemã como fornecedora da seleção.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/jomaRomeniaAway.png",
      link: "https://www.futfanatics.com.br/camisa-joma-romenia-away-2024",
    },
    /* Adidas Jamaica Away */
    {
      nome: "Adidas Jamaica Away",
      descricao:
        "Essa aqui além de linda, é representativa. Valeu tanto a pena e foi tão bem produzida pela Adidas que foi lançada na semana de moda de Milão. A camisa está linda e conta com detalhes marcantes da cultura jamaicana.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasJamaicaAway.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-jamaica-away-2023",
    },

    /* Joma Honduras Home */
    {
      nome: "Joma Honduras Home",
      descricao:
        "'Garra catracha' A camisa Home de Honduras para 2024, da Joma, é o manto perfeito para os admiradores da Seleção Hondurenha vestirem toda a paixão. Com design pensando na história da Seleção Hondurenha, a peça traz o escudo aplicado, além da bandeira do país destacada abaixo da nuca.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/jomaHondurasHome.png",
      link: "https://www.futfanatics.com.br/camisa-joma-honduras-home-2024",
    },

    /* Brasileiros */

    /* Volt Criciúma III */
    {
      nome: "Volt Criciúma III",
      descricao:
        "Passado e presente se unem ao manto três do clube catarinense. A camisa desenvolvida pela Volt lembra a origem do clube. A camisa conquistou fãs no Brasil todo e claro, trouxe sorte ao Tigre, que conseguiu o acesso para a Série A de 2024.",
      preco: "R$ 99,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/voltCriciumaIII.png",
      link: "https://www.futfanatics.com.br/camisa-volt-criciuma-iii-2023",
    },

    /* Kappa Vasco III */
    {
      nome: "Kappa Vasco III",
      descricao:
        "Um time histórico, vestindo um manto para sempre. A camisa três do Vasco da Gama foi pensando naquele time de 1942, que lutou pelo direito de negros ter a permissão de serem jogadores de futebol profissionais. Após o time dos “Camisas Negras” o futebol nunca mais foi o mesmo e de uma vez por todas e Cruzmaltino passou a ser o Time do Povo.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/kappaVascoIII.png",
      link: "https://www.futfanatics.com.br/camisa-kappa-vasco-iii-2023",
    },

    /* Onça Amazonas I */
    {
      nome: "Onça Amazonas I",
      descricao:
        "Que a onça pintada é linda e imponente você já sabia. O que você não fazia ideia é que a marca própria do Amazonas produziria mantos tão lindos como os da temporada 2023. A camisa I do clube de Manaus foi sucesso de vendas e de crítica e uma das favoritas para levar o Top 10 de Clubes Brasileiros.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/oncaAmazonasI.png",
      link: "https://www.futfanatics.com.br/camisa-onca-amazonas-fc-i-2023-no10",
    },

    /* Umbro Fluminense III */
    {
      nome: "Umbro Fluminense III",
      descricao:
        "'Deixe-me ir, preciso andar, estou aqui, a procurar'. O mestre Cartola procurou por muito tempo uma camisa tão linda quanto a camisa III do Tricolor nesta temporada. O manto desenhado pela Umbro é uma homenagem à lenda da música brasileira e encantou torcedores do Brasil inteiro, como Cartola fez e ainda faz com suas canções históricas.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/umbroFluminenseIII.png",
      link: "https://www.futfanatics.com.br/",
    },

    /* Kappa Bangu III*/
    {
      nome: "Kappa Bangu III",
      descricao:
        "Das origens da Escócia, ao Estádio de Moça Bonita. A camisa III do Bangu celebra a origem do clube banguense. Fundado por operários de uma fábrica escocesa, o manto azul homenageia o país europeu e os fundadores do clube do subúrbio do Rio.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/kappabanguIII.png",
      link: "https://www.futfanatics.com.br/camisa-kappa-bangu-iii-2023",
    },

    /* 1909 Coritiba III */
    {
      nome: "1909 Coritiba III",
      descricao:
        "Rock é rock, isso não se discute. O Coritiba lançou o manto mais Rock n' Roll de 2023. A camisa III do clube paranaense faz referência ao Green Hell, festa da torcida Côxa Branca quando pelas ruas do Alto da Glória em dia de jogos.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/1909CuritibaIII.png",
      link: "https://www.futfanatics.com.br/camisa-1909-sports-coritiba-iii-2023",
    },

    /* Camisa Puma Palmeiras I*/
    {
      nome: "Camisa Puma Palmeiras I",
      descricao:
        "A Terceira Academia! Essa camisa do Palmeiras, desenhada pela Puma, foi uma das mais bonitas da temporada. A camisa é uma homenagem e a sequencia de times históricos do Alviverde. A Terceira Academia chegou como favorita!",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/pumaPalmeirasI.png",
      link: "https://www.futfanatics.com.br/camisa-puma-palmeiras-i-2023",
    },

    /* Camisa Adidas Flamengo III*/
    {
      nome: "Camisa Adidas Flamengo III",
      descricao:
        "Que prazer vê-lo brilhar! A camisa do Fla traz design na cor preta com aplicação em furta-cor, que muda o tom de acordo com a luz refletida O grande destaque do uniforme fica para a aplicação do escudo do remo, que assim como o logo da Adidas e as três listras nos ombros, ganham aplicações iridescentes.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasflamengoIII.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-flamengo-iii-2023",
    },

    /* Esquadrão Bahia I */
    {
      nome: "Esquadrão Bahia I",
      descricao:
        "As pulseiras do Senhor do Bonfim mereciam estar cravadas no o peito da camisa do Bahia em algum momento da história. Ele chegou, na temporada 2023 o Esquadrão lançou a camisa braba que está entre as dez mais tops deste ano.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/esquadraobahiaI.png",
      link: "https://www.futfanatics.com.br/",
    },

    /* Camisa Adidas São Paulo III */
    {
      nome: "Camisa Adidas São Paulo III",
      descricao:
        "Com trabalho você pode conquistar tudo! A camisa três do São Paulo para essa temporada exaltou o Tri Brasileiros em 2006, 2007 e 2008. A camisa relembrou os times históricos comandados pelo ídolo Tricolor Muricy Ramalho.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidassaopauloIII.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-sao-paulo-iii-2023",
    },

    /* Internacionais  */

    /* Adidas Nashville Third */
    {
      nome: "Adidas Nashville Third",
      descricao:
        "A referência de milhões. Na terra da Country Music, a Adidas resolveu homenagear a lenda Johnny Cash e certamente é uma das camisas mais bonitas da temporada. A camisa conta até com o autógrafo do cantor.",
      preco: "R$ 99,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasNashvilleThird.png",
      link: "https://www.futfanatics.com.br/",
    },

    /* Adidas Seattle Providence Third */
    {
      nome: "Adidas Seattle Providence Third",
      descricao:
        "Das telas de Hollywood para o manto do Seattle Sounders. A camisa III da equipe Norte Americana é uma homenagem ao mito das lutas e do cinema mundial: Bruce Lee. A camisa faz referência aos dragões chineses, amplamente divulgado pela arte de Lee.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasSeatleProvidenceThird.png",
      link: "https://www.futfanatics.com.br/",
    },

    /* Adidas Real Madrid Third */
    {
      nome: "Adidas Real Madrid Third",
      descricao:
        "Clássica e moderna. A camisa Third do Real Madrid exalta a elegância de ser um torcedor Merengue. A camisa conta com detalhes amarelos e a sigla do clube mais campeão do futebol mundial.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasRealMadridThird.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-real-madrid-third-2024",
    },

    /* Adidas Arsenal Home */
    {
      nome: "Adidas Arsenal Home",
      descricao:
        "Após 20 anos do título invicto da temporada 2003/04 o Arsenal relembra a conquista histórica daquele time liderado por Henry, Viera e Wenger. A camisa home da equipe inglesa conta com raios espalhados pelo corpo, símbolo frequentemente usado nos últimos anos.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasArsenalHome.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-arsenal-home-2024",
    },

    /* Puma Milan Away*/
    {
      nome: "Puma Milan Away",
      descricao:
        "Alta costura milanista assinada pela Puma. Essa é a camisa away do Milan. O rossoneri é marcado em detalhes na camisa. Além disso, o corpo conta com toques da mais bela e moderna grife italiana de roupas. Como diriam os especialistas em moda: ESSA CAMISA FICOU BABADO!",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasMilanAway.png",
      link: "https://www.futfanatics.com.br/camisa-puma-milan-away-2024",
    },

    /* Adidas Roma Third 2024 */
    {
      nome: "Adidas Roma Third 2024",
      descricao:
        "A escolha do estagiário. A camisa third da Roma marca a volta da Adidas ao clube da Cidade Eterna. Com detalhes em vermelho e amarelo, o preto clássico não passa batido. A camisa conta também com o escudo da Loba, usado nos anos 80 pelo time romanista.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasRomaHome.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-roma-third-2024",
    },

    /* Adidas Manchester United Home*/
    {
      nome: "Adidas Manchester United Home",
      descricao:
        "A camisa do Manchester United homenageia a icônica rosa vermelha da cidade (Lancashire) e se inspira na ponte sobre o rio Irwell, que conecta Manchester e Salford, um símbolo da força da cidade e seu profundo impacto no mundo durante a revolução industrial.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasManchesterUnitedHome.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-manchester-united-home-2024",
    },

    /* Adidas Celtic Home*/
    {
      nome: "Adidas Celtic Home",
      descricao:
        "Inspirada nos vitrais do Parkhead, a camisa I do Celtic chegou forte na disputa entre as camisas mais bonitas de 2023. O clube escocês conta com o fornecimento de material esportivo da Adidas, que caprichou na camisa home.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasCelticHome.png",
      link: "https://www.futfanatics.com.br/camisa-adidas-celtic-home-2024",
    },

    /* Adidas Benfica Home */
    {
      nome: "Adidas Benfica Home",
      descricao:
        "Os encarnados de Lisboa. A nova camisa titular do Benfica celebra os 120 anos de fundação do clube. Além disso, segue a tendência dos uniformes assinados pela Adidas em 2023. Garanto que você curtiu muito também a camisa do Benfica.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/adidasBenficaHome.png",
      link: "https://www.futfanatics.com.br/",
    },

    /* Kappa Racing Home */
    {
      nome: "Kappa Racing Home",
      descricao:
        "A camisa I do Racing é um deboche. Chegou na Fut para fazer todos os fãs do bom futebol sulamericano ficarem malucos. Assinado pela Kappa, o manto conta lembranças do primeiro título mundial de clubes da história, conquistado pelo clube de Avellaneda.",
      preco: "R$ 79,99",
      img: "https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/top102023/shirt/kappaRacingHome.png",
      link: "https://www.futfanatics.com.br/camisa-kappa-racing-club-home-2022-jogador",
    },
  ];

  
  $(".more-content").on("click", function () {
    const target = $(this).data("index");
    renderModal(objetos[target]);
  });

  function renderModal(objeto) {
    $("#modal-data").html(`
				<div class='col-md-6 col-img '>
				<img class='modal-img' src="${objeto.img}"/>
				</div>
				<div class='col-md-6 d-flex flex-column align-items-center justify-content-center col-content'>			
                <h2 class="modal-title">${objeto.nome}</h2>
                <p class="modal-describe">${objeto.descricao}</p>
                <a href="${objeto.link}" class="modal-button">Ir para a loja</a>
				</div>
            
            `);
  }


  $(".c-modal-vote form").on("submit", function (event) {
    console.log("clickou");
    event.preventDefault();

    var form = $(this);
    var formData = form.serialize();
    var url = "https://apiinfra.futfanatics.app/voto-top10";
    // var url = 'http://localhost/api-infra/voto-top10';

    form
      .find(".msg-resp")
      .html("")
      .removeClass("text-success text-danger text-info")
      .slideUp();

    if (!form.find("select").val()) {
      form
        .find(".msg-resp")
        .html("Escolha o seu time.")
        .addClass("text-info")
        .slideDown();
      return false;
    }

    console.log(formData);

    $.post(url, formData, function (response) {
      if (response.status) {
        form
          .find(".msg-resp")
          .html("Boa jogada, e-mail cadastrado com sucesso!")
          .addClass("text-success")
          .slideDown();

        setTimeout(function () {
          var selected = $(".list-camisas .item.selected");

          $("#modal-votar").modal("hide");
          $(".col-content_vote").addClass("d-none");
          $(".col-content-cupom").addClass("active");
          $("html, body").animate(
            {
              scrollTop:
                $("#voto-concluido").offset().top -
                $("#header").height() -
                $(".header-nav").height() -
                50,
              // scrollTop: 0
            },
            800
          );
        }, 1000);
      } else {
        form
          .find(".msg-resp")
          .html("Desculpe-nos, ocorreu um erro ao cadastrar.")
          .addClass("text-danger")
          .slideDown();
        console.log("Error form dinamize: " + response.error_msg.result);
      }
    }).fail(function (response) {
      form
        .find(".msg-resp")
        .html(response.responseJSON.errorMsg)
        .addClass("text-danger")
        .slideDown();
    });

    return false;
  });
})(jQuery);
