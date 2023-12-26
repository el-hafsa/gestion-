// script.js

function enregistrerAchat() {
    var idf = document.getElementById("idf").value;
    var date = document.getElementById("d").value;
    var q = document.getElementById("q").value;
    var prix = document.getElementById("prix").value;

    if (date && idf && q && prix) {
        var tableAchat = document.getElementById("tableAchat").getElementsByTagName('tbody')[0];
        var newRow = tableAchat.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = date;
        cell2.innerHTML = idf;
        cell3.innerHTML = q;
        cell4.innerHTML = prix;
    } else {
        alert("Veuillez remplir tous les champs");
    }
}

function enregistrerVente() {
    var idClient = document.getElementById("Id_client").value;
    var dateVente = document.getElementById("Date_vent").value;
    var qVente = document.getElementById("Quantite_vent").value;
    var prixVente = document.getElementById("pv").value;

    if (dateVente && idClient && qVente && prixVente) {
        var tableVente = document.getElementById("tableVente").getElementsByTagName('tbody')[0];
        var newRowVente = tableVente.insertRow();
        var cell1Vente = newRowVente.insertCell(0);
        var cell2Vente = newRowVente.insertCell(1);
        var cell3Vente = newRowVente.insertCell(2);
        var cell4Vente = newRowVente.insertCell(3);

        cell1Vente.innerHTML = idClient;
        cell2Vente.innerHTML = dateVente;
        cell3Vente.innerHTML = qVente;
        cell4Vente.innerHTML = prixVente;
    } else {
        alert("Veuillez remplir tous les champs");
    }
}


