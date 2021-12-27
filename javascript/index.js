function start() {
	const recognition = new webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "pt-br";
    recognition.continuous = true;
    recognition.start();
    // Evento que vai começar quando eu falar
    recognition.onresult = function(event) {
    	for (let i = event.resultIndex; i < event.results.length; i++) {
        	if (event.results[i].isFinal) {
	            // Pego a fala em texto hehehehe
            	const content = event.results[i][0].transcript.trim().toLowerCase();
                console.log(content);
                
                
				switch (content.toLowerCase()) {
				  case 'home':
				    window.location.href = "https://www.veterinario24hrcampinas.com.br/";
				   	break;

				   	case 'empresa':
				   	  window.location.href = "https://www.veterinario24hrcampinas.com.br/empresa";
				   	 	break;

				   	case 'missão':
				   	  window.location.href = "https://www.veterinario24hrcampinas.com.br/missao";
				   	 	break;

				   	case 'serviços':
				   		window.location.href = "https://www.veterinario24hrcampinas.com.br/servicos";
				   	 	break;

				   	case 'contato':
				   	  window.location.href = "https://www.veterinario24hrcampinas.com.br/contato";
				   	 	break;
				  default:
				    console.log(`Sorry, ainda não estamos funcionando sem um link do menu`);
				}
        	}
    	}
	};
}
function whats(){
   ga("send", "event", "WhatsApp", "clicado", "Link clicado");
   if($(window).width() <= 768){
       $(location).attr('href', 'https://api.whatsapp.com/send?phone=5511946704213');
   }else{
       window.open('https://web.whatsapp.com/send?phone=5511946704213', '_blank');
   }
}
function proxAnt(ladoVai){
    if(ladoVai == 'next' && rodaX < rodaXvezes){
        PassaTamanho = "-=" + TamanhoAtual + "px";
        $(".item").animate({left:PassaTamanho});
        rodaX ++;
    }else if(ladoVai == 'back' && rodaX > 0){
        PassaTamanho = "+=" + TamanhoAtual + "px";
        $(".item").animate({left:PassaTamanho});
        rodaX --;
    }
    
}

function hideContato(){
	if (x == 1){
	    $("header nav ul").css("display", "flex");
	    $(".popup-contato").css("display", "flex");
	    x++;
    }else{
    	x--;
        $("header nav ul").css("display", "none");
	    $(".popup-contato").css("display", "none");
    }
}
function expandContent(){
    if(ocultText == 1){
        $(".readMore").addClass("moreOpen");
        $(".readMore").removeClass("readMore");
        $("#Click-for-more").html("Ocultar");
        ocultText = 2;
    }else{
        $(".moreOpen").addClass("readMore");
        $(".moreOpen").removeClass("moreOpen");
        $("#Click-for-more").html("Ler mais...");
        ocultText = 1;
    }
}
var CotacaoGa = {
	eventoCategoria: "Cotação",
	eventoArea: "",
	eventoLocal: "",
	eventoValor: 0,
	enviarCotacao: function () {
		if (typeof ga != "undefined") {
			ga('send', 'event', {
				eventCategory: CotacaoGa.eventoCategoria,
				eventAction: CotacaoGa.eventoArea,
				eventLabel: CotacaoGa.eventoLocal,
				eventValue: CotacaoGa.eventoValor
			});
		}
	},
	enviarCotacaoPaginaHome: function () {
		if (typeof ga != "undefined") {
			ga('send', 'event', {
				eventCategory: "Ação Página Home",
				eventAction: CotacaoGa.eventoArea,
				eventLabel: CotacaoGa.eventoLocal,
				eventValue: CotacaoGa.eventoValor
			});
		}
	},
	enviarHome: function () {
		if (typeof ga != "undefined") {
			ga('send', 'event', {
				eventCategory: "Home",
				eventAction: CotacaoGa.eventoArea,
				eventLabel: CotacaoGa.eventoLocal,
				eventValue: CotacaoGa.eventoValor
			});
		}
	},
	enviarCotacaoPaginaLogo: function () {
		if (typeof ga != "undefined") {
			ga('send', 'event', {
				eventCategory: "Ação Página Logo",
				eventAction: CotacaoGa.eventoArea,
				eventLabel: CotacaoGa.eventoLocal,
				eventValue: CotacaoGa.eventoValor
			});
		}
	},
	enviarLogo: function () {
		if (typeof ga != "undefined") {
			ga('send', 'event', {
				eventCategory: "Logo",
				eventAction: CotacaoGa.eventoArea,
				eventLabel: CotacaoGa.eventoLocal,
				eventValue: CotacaoGa.eventoValor
			});
		}
	},
	enviarIntencaoLogo: function (pagina) {
		CotacaoGa.eventoArea = "PaginaLogo";
		CotacaoGa.eventoLocal = "Intencao " + pagina;
		CotacaoGa.eventoValor = 1;
		CotacaoGa.enviarLogo();
	},
	enviarIntencaoHome: function () {
		CotacaoGa.eventoArea = "xqdele";
		CotacaoGa.eventoLocal = "Intencao " + pagina;
		CotacaoGa.eventoValor = 1;
		CotacaoGa.enviarHome();
	},
	enviarIntencaoPagina: function (pagina) {
		CotacaoGa.eventoArea = "Pagina";
		CotacaoGa.eventoLocal = "Intencao " + pagina;
		CotacaoGa.eventoValor = 0;
		CotacaoGa.enviarCotacao();
	},
	enviarIntencaoPaginaHome: function (pagina) {
		CotacaoGa.eventoArea = "Página Home";
		CotacaoGa.eventoLocal = "Intencao " + pagina;
		CotacaoGa.eventoValor = 0;
		CotacaoGa.enviarCotacaoPaginaHome();
	},
	enviarIntencaoPaginaLogo: function (pagina) {
		CotacaoGa.eventoArea = "Página Logo";
		CotacaoGa.eventoLocal = "Intencao " + pagina;
		CotacaoGa.eventoValor = 0;
		CotacaoGa.enviarCotacaoPaginaLogo();
	},
	enviarIntencaoImagem: function (imagem) {
		CotacaoGa.eventoArea = "Imagem";
		CotacaoGa.eventoLocal = "Intencao " + imagem;
		CotacaoGa.eventoValor = 0;
		CotacaoGa.enviarCotacao();
	},
	enviarSucessoImagem: function (imagem) {
		CotacaoGa.eventoArea = "Imagem";
		CotacaoGa.eventoLocal = "Intencao " + imagem;
		CotacaoGa.eventoValor = 1;
		CotacaoGa.enviarCotacao();
	},
}

var selecionarIntencaoArea = function (objetoElemento) {
	var texto = "";
	var area = $(objetoElemento).data('area');

	switch (area) {
		case 'pagina':
			texto = document.location.pathname;
			CotacaoGa.enviarIntencaoPagina(texto);
			break;
		case 'imagem':
			texto = $("input[name=produto_nome]").val();
			CotacaoGa.enviarIntencaoImagem(texto);
			break;
		case 'home':
			texto = document.location.pathname;
			CotacaoGa.enviarIntencaoHome(texto);
			break;
		case 'paginaHome':
			texto = document.location.pathname;
			CotacaoGa.enviarIntencaoPaginaHome(texto);
			break;
		case 'logo':
			texto = document.location.pathname;
			CotacaoGa.enviarIntencaoLogo(texto);
			break;
		case 'paginaLogo':
			texto = document.location.pathname;
			CotacaoGa.enviarIntencaoPaginaLogo(texto);
			break;

	}
}
var selecionarSucessoArea = function () {

	var texto = "";
	var produto = $("input[name=produto_nome]").val();

	if (produto != "") {
		texto = $("input[name=produto_nome]").val();
		CotacaoGa.enviarSucessoImagem(texto);
	} else {
		texto = document.location.pathname;
		CotacaoGa.enviarSucessoPagina(texto);
	}
}

function trocarCaptcha() {
	$("#novoNumero").attr("src", "/captcha.php?" + Date.now());
}

function UcWords(campo) {
	val = campo.value;
	newVal = val.toLowerCase().replace(/[^A-Za-zÃ¡Ã¢Ã Ã£Ã¤Ã©ÃªÃ¨Ã«Ã­Ã®Ã¬Ã¯Ã³ÃµÃ²Ã´Ã¶ÃºÃ¹Ã»Ã¼Ã§][A-Za-zÃ¡Ã¢Ã Ã£Ã¤Ã©ÃªÃ¨Ã«Ã­Ã®Ã¬Ã¯Ã³ÃµÃ²Ã´Ã¶ÃºÃ¹Ã»Ã¼Ã§]/g, function (m) {
		return m.toUpperCase()
	}).replace(/[0-9][A-Za-zÃ¡Ã¢Ã Ã£Ã¤Ã©ÃªÃ¨Ã«Ã­Ã®Ã¬Ã¯Ã³ÃµÃ²Ã´Ã¶ÃºÃ¹Ã»Ã¼Ã§]/g, function (m) {
		return m.toUpperCase()
	}).replace(/( (da|das|e|de|do|dos|para|na|nas|no|nos) )/gi, function (m) {
		return m.toLowerCase()
	}).replace(/^./, function (m) {
		return m.toUpperCase()
	})
	if (val != newVal) {
		campo.value = newVal;
	}
}


function mascaras() {

	var formulario = {
		telefone: function () {
			$('.telefone').mask("(99) 99999-9999");
			$('.telefone').on("blur", function (event) {
				var target, phone, element;
				target = (event.currentTarget) ? event.currentTarget : event.srcElement;
				phone = target.value.replace(/\D/g, '');
				element = $(target);
				element.unmask();
				if (phone.length > 10) {
					element.mask("(99) 99999-9999");
				} else {
					element.mask("(99) 9999-9999");
				}
			})
		},
		telefoneSemDDD: function () {
			$('.telefone-sem-ddd').mask("99999-9999");
			$('.telefone-sem-ddd').on("blur", function (event) {
				var target, phone, element;
				target = (event.currentTarget) ? event.currentTarget : event.srcElement;
				phone = target.value.replace(/\D/g, '');
				element = $(target);
				element.unmask();
				if (phone.length > 8) {
					element.mask("99999-9999");
				} else {
					element.mask("9999-9999");
				}
			})
		}
	}
	formulario.telefone();
	formulario.telefoneSemDDD();
}


$(document).ready(function () {
		start();
        $("body").append('<div class="link-wpp"></div>'); $(".link-wpp").append('<button onclick="whats()"></button>');
            carrosselTamanho = ($(".item").width() * $(".item").length);
            rodaXvezes =  Math.round(carrosselTamanho / $(".box-categorias").width());
            TamanhoAtual = $(".box-categorias").width();
            rodaX = 0;
            x = 1;
            $('.seguranca .carrossel').css('width', (carrosselTamanho* 2));
        $('.forth').click(function(){
        proxAnt("next");
    });

    $('.back').click(function(){
        proxAnt("back");
    });
        
        $(window).scroll(function(){
        if ($(this).scrollTop() > $(".categorias-home").position().top) {
            $('#flutuante').css('display',"flex");
        } else {
            $('#flutuante').css('display',"none");
        }
    });
        
    ocultText = 1;
	var url_atual = window.location.href;

	$(".url-atual").each(function () {
		$(this).val(url_atual);
	});

	if ($("#sucesso_mensagem").html() != "") {
		$("#sucesso_mensagem").addClass("success-message");
	}

	var elemento = null;
	mascaras();
	$(".cssmenu").accordion({
		accordion: false,
		speed: 500
	});
	$("#servicosTabs").organicTabs();

	$("#servicosTabsDois").organicTabs();

	$("#novoNumero").click(function () {
		trocarCaptcha();
	});

	$(this).on("click", ".btn-cotacao", function (e) {
		e.preventDefault();
		var palavra = $(".fancybox-outer h2").html();
		var nome_produto = $(".fancybox-outer h3").html();
		var referencia = $(".lightbox-fixed-ref").html();
		var imagem = $(".fancybox-image").attr("src");

		$("#form-cotacao").removeClass('hidden');
		$("#box-cotacao-enviada").addClass('hidden');

		if ($(".fancybox-inner:visible").length >= 1) {
			$.fancybox.close();
		}
		$('html, body').animate({
			scrollTop: $("#faca-sua-cotacao").offset().top
		}, 500);

		$(".error-message").html("");
		$("#sucesso_mensagem").html("");
//                console.log(this)
//                var palavra = this.title;
		$("textarea[name=mensagem]").val("");
		this.title = "Cotação do produto " + palavra;

		$("#title-empresa").html("<h2>" + palavra + "</h2>");
		$("#title-keyword").html("<h3>Cotando o produto: " + palavra + "</h3>");
		$("#fancyalter").attr({"alt": palavra, "title": palavra});

		$("#produto_nome").html(nome_produto);
		$("input[name=imagem]").val(imagem);
		$("input[name=produto_nome]").val(nome_produto);
		$("input[name=produto_url]").val(window.location.href);
		$("input[name=produto_ref]").val(referencia);

		selecionarIntencaoArea(this);
	});


	$(this).on("click", ".btn-home", function (e) {
		selecionarIntencaoArea(this);
	});
	$(this).on("click", ".pagina-logo", function (e) {
		selecionarIntencaoArea(this);
	});
	$(".follow-click").click(function (e) {

		var clickOrigem = $(this).data("origem")
		var clickConteudo = $(this).html()
		elemento = $.ajax({
			url: document.URL,
			dataType: "text",
			type: "POST",
			data: {
				acao: "click",
				origem: clickOrigem,
				conteudo: clickConteudo,
				url: document.URL,
				pagina: $("body").data("pagina"),
				categoria: $("body").data("categoria")
			},
			beforeSend: function () {
			},
			complete: function () {
				elemento = null;
			}
		});

	});
	$(this).on('click', "#btn-enviar-cotacao", function (e) {
		e.preventDefault();
		console.log($("#formulario-cotacao").serialize());
		$.ajax({
			url: $("#formulario-cotacao").attr("action"),
			dataType: "json",
			type: "POST",
			data: $("#formulario-cotacao").serialize(),
			beforeSend: function () {
				$(".error-message").html("");
				$("#sucesso_mensagem").html("");
				$("#loader-ajax").show();
				$("#btn-enviar-cotacao").hide();
			},
			success: function (data) {
				trocarCaptcha();
				$("#btn-enviar-cotacao").show();
				$("#loader-ajax").hide();

				if (typeof data.error !== "undefined") {
					for (var i in data.error) {
						if ($("#erro_" + i).length > 0) {
							$("#erro_" + i).html(data.error[i]);
						}
					}

				} else if (typeof data.resultado !== "undefined") {
					$("#form-cotacao").addClass("hidden");
					$("#box-cotacao-enviada").removeClass("hidden");
					selecionarSucessoArea();
				}
			},
			complete: function () {
				elemento = null;
			}
		});
	});

})
