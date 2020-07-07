// Utilizzando le API Todos di Boolean creiamo un’interfaccia in cui possiamo leggere, creare e rimuovere degli elementi da una todo-list
// Endpoints:
// Read: http://157.230.17.132:{porta}/todos/ Method:GET
// Create: http://157.230.17.132:{porta}/todos/ Method: POST
// Che si aspetta il testo da salvare (nome proprietà ‘text’)
// Delete: http://157.230.17.132:{porta}/todos/{id} Method: DELETE
// Dove id è l’id della risorsa da eliminare
// Ognuno di voi ha un porta assegnata da includere nell’url, questo è il documento con le porte.
// https://docs.google.com/spreadsheets/d/1_Yo6HzbTmZ8NXJtkR4VJ4CetEyxT5ShmH-SWjGzXsaA/edit#gid=0
// Accanto al vostro nome trovate la porta che dovrete utilizzare.
// Buon lavoro!

// mia porta 3034

$(document).ready(function() {

    // creo evento click
    $(document).on('click', '#btn', function() {
        
        creaDato();



    }); // fine evento click

}); // end document ready



function creaDato(valoreImmesso) {

    // vado a leggere il valore immesso nel campo input
    var testoImmesso = $('#input-text').val();

    $.ajax({
        url: 'http://157.230.17.132:3034/todos/',
        method: 'GET',

        success: function(data) {
            console.log(data);
        },

        error: function() {
            alert('qualcosa non va!');
        }
    }) 

    

}