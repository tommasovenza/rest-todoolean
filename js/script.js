$(document).ready(function () {

    ottieniDato();

    // creo evento click
    $(document).on('click', '#btn', function () {

        inserisciDato();

    }); // fine evento click

    // funzione che elimina elementi della lista al click 
    $(document).on('click', '.btn-elimina', function () {


        var questoId = $(this).parent().attr('data-todo');

        $.ajax({

            url: 'http://157.230.17.132:3034/todos/' + questoId,

            method: 'DELETE',

            success: function (data) {
                ottieniDato();
            },

            error: function () {
                alert('qualcosa non va');
            }

        });


    }); // fine evento click



}); // end document ready


// funzione con metodo GET, 
// --> all'avvio scarica i dati dal server e li stampa in un UL
function ottieniDato() {

    // reset della funzione
    $('#stampa-lista').html('');

    // chiamata ajax di test con metodo GET
    $.ajax({

        url: 'http://157.230.17.132:3034/todos/',

        method: 'GET',

        success: function (data) {

            console.log(data);

            // handlebars
            var source = $('#lista-template').html();
            var template = Handlebars.compile(source);

            // ciclo for per stampare gli elementi che torna l'API
            for (var i = 0; i < data.length; i++) {

                var elementoListaCorrente = data[i];

                console.log(elementoListaCorrente)

                var html = template(elementoListaCorrente);

                $('#stampa-lista').append(html);
            }
        },

        error: function () {
            alert('qualcosa non va!');
        }
    });

} // fine funzione ottieniDato

// funzione con metodo POST che aggiunge dati sul server
function inserisciDato(valoreDaImmettere) {


    // vado a leggere il valore immesso nel campo input
    var valoreDaImmettere = $('#input-text').val();

    console.log(valoreDaImmettere);

    if (valoreDaImmettere != '') {

        // chiamata ajax di test con metodo GET
        $.ajax( // oggetto interno a chiamata ajax
            {

                url: 'http://157.230.17.132:3034/todos/',

                method: 'POST',

                data: {
                    text: valoreDaImmettere
                },

                success: function (data) {

                    ottieniDato();

                },

                error: function () {
                    alert('non ho salvato il nuovo elemento');
                }
            });


    }   else {
        
        alert('stringa vuota, immetti un valore');
    }


} // fine funzione inserisciDato