$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('.historia').click(function() {
        $('nav1').slideToggle();
    })

    $('.historia2').click(function() {
        $('nav2').slideToggle();
    })

    $('.historia3').click(function() {
        $('nav3').slideToggle();
    })

    $('.historia4').click(function() {
        $('nav4').slideToggle();
    })

    $('.historia5').click(function() {
        $('nav5').slideToggle();
    })

    $('.historia6').click(function() {
        $('nav6').slideToggle();
    })

    $('.historia7').click(function() {
        $('nav7').slideToggle();
    })

    $('.historia8').click(function() {
        $('nav8').slideToggle();
    })

    $('.historia9').click(function() {
        $('nav9').slideToggle();
    })

    $('.historia10').click(function() {
        $('nav10').slideToggle();
    })

    $('.historia11').click(function() {
        $('nav11').slideToggle();
    })

    $('.historia12').click(function() {
        $('nav12').slideToggle();
    })

    $('.historia13').click(function() {
        $('nav13').slideToggle();
    })
})

$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true,
            telefone: true
        },
        cpf: {
            required: true,
            cpf: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true,
            cep: true
        },
        mensagem: {
            required: true,
        }
    },
    messages: {
        nome: 'Por favor, insira o seu nome',
        email: 'Por favor, insira o seu email',
        telefone: 'Por favor, insira o seu telefone',
        cpf: 'Por favor, insira o seu CPF',
        endereco: 'Por favor, insira o seu endereço completo',
        cep: 'Por favor, insira o seu CEP',
        mensagem: 'Escreva aqui uma mensagem motivacional'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})
})