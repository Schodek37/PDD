var name_wal = 0;
var towar_code_wal = 0;
var netto_wal = 0;
var vat_wal = 0;
var brutto_wal = 0;
var opcje_wal = 0;
var photo_wal = 0;
var ocena_wal = 1;
var node_to_delete = 999;

function sprawdzTowarName() {

    var formularz_obj = document.getElementById("towar_name");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("towar_name_blad");


    var objRegExp = /^[a-zA-Z\s]+$/;

    if (t_name === "") {
        blad.innerHTML = "Podaj nazwe towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else if (t_name.length > 10) {
        blad.innerHTML = "Zadluga nazwa (max 10 znakow)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else if (!formularz_obj.value.match(objRegExp)) {
        blad.innerHTML = "Cyfry 0-9 są niedozwolone";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
        name_wal = 1;
    }
    return blad_danych;
}


function sprawdzTowarCode() {
    var formularz_obj = document.getElementById("towar_code");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("towar_code_blad");


    var objRegExp = /^[A-Za-z0-9]{2}-[A-Za-z0-9]{2}$/;

    if (t_name === "") {
        blad.innerHTML = "Podaj kod towaru XX-XX";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else if (t_name.length > 6) {
        blad.innerHTML = "Dozwolony format to XX-XX";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else if (!formularz_obj.value.match(objRegExp)) {
        blad.innerHTML = "Dozwolony format to XX-XX";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
        towar_code_wal = 1;
    }
    return blad_danych;
}


function sprawdzNettoPrice() {
    var formularz_obj = document.getElementById("netto_price");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("netto_price_blad");


    var objRegExp = /^\d+\.{0,1}\d{0,}/;

    if (t_name === "") {
        blad.innerHTML = "Podaj cenę netto towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else if (!formularz_obj.value.match(objRegExp)) {
        blad.innerHTML = "Dozwolone format to 123,456";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
        var cena = parseFloat(t_name);
        cena = cena.toFixed(2);
        document.getElementById("netto_price").value = cena;
        netto_wal = 1;
    }


    return blad_danych;
}

function sprawdzVAT() {

    var formularz_obj = document.getElementById("vat_stake");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("vat_stake_blad");


    var objRegExp = /^[1-9][0-9]?$|^100$/;

    if (t_name === "") {
        blad.innerHTML = "Podaj stawkę VAT";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else if (!formularz_obj.value.match(objRegExp)) {
        blad.innerHTML = "Dozwolona stawka 1-100%";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
        vat_wal = 1;
        document.getElementById("vat_stake").value = t_name;

    }


    return blad_danych;
}

function bruttoUpdate() {

    var formularz_obj1 = document.getElementById("brutto_price");
    var formularz_obj2 = document.getElementById("netto_price");
    var formularz_obj3 = document.getElementById("vat_stake");
    var blad = document.getElementById("brutto_stake_blad");

    var stawka = formularz_obj3.value;
    console.log(stawka);
    var netto = formularz_obj2.value;
    console.log(netto);

    var brutto = parseFloat(netto) * (100 + (parseFloat(stawka))) / 100;

    brutto_wal = 0;
    if (stawka == "") {
        blad.innerHTML = "Stawka Netto i VAT musi być uzupełniony";
        blad.style.color = "red";
        blad_danych = true;
    } else if (netto == "") {
        blad.innerHTML = "Stawka Netto i VAT musi być uzupełniony";
        blad.style.color = "red";
        blad_danych = true;
    } else {
        formularz_obj1.value = brutto.toFixed(2);
        blad_danych = false
        brutto_wal = 1;
        blad.innerHTML = "";
    }



    return blad_danych;
}


function categoryCheck() {
    var group = document.formularz.customRadioInline1;
    var blad = document.getElementById("checkbox_blad");

    var x = 0;
    for (var i = 0; i < group.length; i++) {
        if (group[i].checked) {
            x++;
        }
    }
    console.log(x);

    opcje_wal = 0;
    if (x != "2") {
        blad.innerHTML = "Wymagane jest zaznaczenie dwóch pól!";
        blad.style.color = "red";
    } else {
        blad.innerHTML = "";
        opcje_wal = 1;
    }

    return blad_danych;
}

function ocenaTowaru() {
    var group = document.formularz.inlineRadioOptions;
    var blad = document.getElementById("radiobutton_blad");


    var x = 0;
    for (var i = 0; i < group.length; i++) {
        if (group[i].checked) {
            x++;
        }
    }


    if (x === 1) {
        blad.innerHTML = "";
        ocena_wal = 1;
    } else {
        blad.innerHTML = "Zaznaczona może być JEDNA ocena!";
        ocena_wal = 1;
    }

    return blad_danych;

}

function checkPhoto() {
    var formularz_obj = document.getElementById("photo");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("photo_blad");


    var objRegExp = /^[a-zA-Z0-9\s]+$/;

    if (t_name === "") {
        blad.innerHTML = "Dodaj obraz(nazwę)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = false;
    } else if (t_name.length > 30) {
        blad.innerHTML = "Zadluga nazwa (max 30 znakow)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else if (!formularz_obj.value.match(objRegExp)) {
        blad.innerHTML = "Znaki specjalne niedozwolone";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
        photo_wal = 1;
    }

    return blad_danych;


}

function submitForm() {

    var blad = document.getElementById("submit_blad");


    var check = ifExist();

    console.log("ifExist: ", check);

    if (name_wal == 1 && towar_code_wal == 1 && netto_wal == 1 && vat_wal == 1 && brutto_wal == 1 && opcje_wal == 1 && ocena_wal == 1 && photo_wal == 1 && check == false) {



        if (node_to_delete != 999) {
            blad.innerHTML = "Towar został edytowany";
            blad.style.color = "green";
            document.getElementById("submit_edit").style.visibility = "hidden";
            document.getElementById("submit_from").style.visibility = "visible";
        } else {
            blad.innerHTML = "Towar został dodany";
            blad.style.color = "green";
        }





        var nazwa = document.getElementById("towar_name").value;
        var kod = document.getElementById("towar_code").value;
        var netto = document.getElementById("netto_price").value;
        var vat = document.getElementById("vat_stake").value;
        var brutto = document.getElementById("brutto_price").value;
        var kategoria = document.getElementById("inputState").value;
        var zdjęcie = document.getElementById("photo").value;
        var wybrane_opcje = "";
        var opcje = document.formularz.customRadioInline1;
        for (var i = 0; i < opcje.length; i++) {
            if (opcje[i].checked) {
                if (i == 0) wybrane_opcje = wybrane_opcje + "" + "Brzydki" + ",";
                if (i == 1) wybrane_opcje = wybrane_opcje + "" + "Przeciętny" + ",";
                if (i == 2) wybrane_opcje = wybrane_opcje + "" + "Ładny" + ",";
                if (i == 3) wybrane_opcje = wybrane_opcje + "" + "Piękny" + ",";
                if (i == 4) wybrane_opcje = wybrane_opcje + "" + "Majestatyczny" + ",";

            }
        }
        wybrane_opcje = wybrane_opcje.slice(0, -1);

        wybrana_ocena = "";
        var ocena = document.formularz.inlineRadioOptions;
        for (var i = 0; i < ocena.length; i++) {
            if (ocena[i].checked) {
                wybrana_ocena = ocena[i].value;
            }
        }

        var row = "<tr><td>" + nazwa + "</td><td>" + kod + "</td><td>" + netto + "</td><td>" + vat + "</td><td>" + brutto + "</td><td>" + kategoria + "</td><td>" + wybrane_opcje + "</td><td>" + wybrana_ocena + "</td><td>" + zdjęcie + '</td><td><button onclick="editRow(this)">Edycja</button> <button onclick="delete_Row(this)">Usuń</button> <button onclick="add_shop(this)">Dodaj do Koszyka</button></td></tr>';
        $row = $(row),
            resort = true;
        $("#myTable")
            .find('tbody').append($row)
            .trigger('addRows', [$row, resort]);


        wybrane_opcje = "";
        if (node_to_delete != 999) {
            delete_Row(node_to_delete);
            node_to_delete = 999;
        }

    } else if (check == true) {
        console.log("node to delete index: ", node_to_delete);
        blad.innerHTML = "Towar o takiej nazwie znajduje sie w tabeli";
        blad.style.color = "red";
    } else {
        blad.innerHTML = "Uzupełnij poprawnie wszystkie pola";
        blad.style.color = "red";

        if (name_wal == 0) {
            var blad = document.getElementById("towar_name_blad");
            blad.innerHTML = "Wpisz poprawną nazwę"
            blad.style.color = "red";
        }
        if (towar_code_wal == 0) {
            var blad = document.getElementById("towar_code_blad");
            blad.innerHTML = "Wpisz poprawny kod (xx-xx)"
            blad.style.color = "red";
        }
        if (netto_wal == 0) {
            var blad = document.getElementById("netto_price_blad");
            blad.innerHTML = "Wpisz poprawną cenę"
            blad.style.color = "red";
        }
        if (vat_wal == 0) {
            var blad = document.getElementById("vat_stake_blad");
            blad.innerHTML = "Wpisz poprawną stawkę"
            blad.style.color = "red";
        }
        if (opcje_wal == 0) {
            var blad = document.getElementById("checkbox_blad");
            blad.innerHTML = "Zaznacz poprawne opcje"
            blad.style.color = "red";
        }
        if (ocena_wal == 0) {
            var blad = document.getElementById("towar_name_blad");
            blad.innerHTML = "Wpisz poprawną nazwę"
            blad.style.color = "red";
        }
        if (photo_wal == 0) {
            var blad = document.getElementById("photo_blad");
            blad.innerHTML = "Wpisz poprawną nazwę"
            blad.style.color = "red";
        }
        if (brutto_wal == 0) {
            var blad = document.getElementById("brutto_stake_blad");
            blad.innerHTML = "Kliknij aby uzupełnić (brutto i netto muszą być uzupełnione)"
            blad.style.color = "red";
        }

    }



}



function myFunction() {
    $("#myTable").trigger("sorton", [
        [
            [0, 0]
        ]
    ]);
}

function sortFunction() {

    var kategoria = document.getElementById("sort").value;
    switch (kategoria) {
        case 'Nazwa Rosnąco':

            $("#myTable").trigger("sorton", [
                [
                    [0, 0]
                ]
            ]);

            break;

        case 'Nazwa Malejąco':
            $("#myTable").trigger("sorton", [
                [
                    [0, 1]
                ]
            ]);

            break;

        case 'Netto Rosnąco':
            $("#myTable").trigger("sorton", [
                [
                    [2, 0]
                ]
            ]);

            break;

        case 'Netto Malejąco':
            $("#myTable").trigger("sorton", [
                [
                    [2, 1]
                ]
            ]);

            break;

        case 'Brutto Rosnąco':
            $("#myTable").trigger("sorton", [
                [
                    [4, 0]
                ]
            ]);

            break;

        case 'Brutto Malejąco':
            $("#myTable").trigger("sorton", [
                [
                    [4, 1]
                ]
            ]);

            break;



        case 'Ocena Rosnąco':
            $("#myTable").trigger("sorton", [
                [
                    [7, 0]
                ]
            ]);

            break;

        case 'Ocena Malejąco':
            $("#myTable").trigger("sorton", [
                [
                    [7, 1]
                ]
            ]);

            break;


        default:
            break;


    }


}

function ifExist() {

    var nazwa = document.getElementById("towar_name").value;
    var blad = document.getElementById("test_blad");
    var temp = "";
    blad.innerHTML = "";



    var myTab = document.getElementById('myTable');

    for (i = 1; i < myTab.rows.length; i++) {
        var objCells = myTab.rows.item(i).cells;
        for (var j = 0; j <= 0; j++) {
            if (nazwa == objCells.item(j).innerHTML) {
                temp = true;
                break;
            } else {
                temp = false;
            }
            if (temp == true) break;
        }
        if (temp == true) break;
    }

    return temp;
}

function delete_Row(r) {
    console.log("wezel ktory chcemy usunac ma numer r = ", r);

    if (node_to_delete == 999) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
    } else {
        console.log("tu gdzie chcemy");
        document.getElementById("myTable").deleteRow(r);
    }
}

function editRow(r) {

    var blad = document.getElementById("submit_blad");
    blad.innerHTML = "";
    document.getElementById("submit_edit").style.visibility = "visible";
    document.getElementById("submit_from").style.visibility = "hidden";
    var row_index = r.parentNode.parentNode.rowIndex;
    node_to_delete = row_index;
    var myTab = document.getElementById("myTable");

    //var i = r.parentNode.parentNode.rowIndex; // pobranie indeksu wiersza
    //var objCells = myTab.rows.item(i).cells; pobranie całego wiersza
    //objCells.item(0).innerHTML // odnoszenie się do konkretnej komórki pobranego wiersza
    /*
        var row = myTab.rows.item(row_index).cells; //pobranie całego wiersza
        alert(row.item(6).innerHTML); pobiera 2,3  trzeba rozbić i iterować wtedy po tamtym formularzu
     */
    var row = myTab.rows.item(row_index).cells;
    var nazwa = row.item(0).innerHTML; // odnoszenie się do konkretnej komórki pobranego wiersza
    var kod = row.item(1).innerHTML;
    var netto = row.item(2).innerHTML;
    var vat = row.item(3).innerHTML;
    var brutto = row.item(4).innerHTML;
    var kategoria = row.item(5).innerHTML;
    var opcje = row.item(6).innerHTML;
    var ocena = row.item(7).innerHTML;
    var zdjęcie = row.item(8).innerHTML;

    var nazwa_towaru = document.getElementById("towar_name");
    nazwa_towaru.value = nazwa;

    var kod_towaru = document.getElementById("towar_code");
    kod_towaru.value = kod;

    var netto_price = document.getElementById("netto_price");
    netto_price.value = netto;

    var vat_stake = document.getElementById("vat_stake");
    vat_stake.value = vat;

    var brutto_price = document.getElementById("brutto_price");
    brutto_price.value = brutto;

    var inputState = document.getElementById("inputState");
    inputState.selectedIndex = kategoria - 1;

    {
        var customRadioInline1 = document.getElementById("customRadioInline1");
        var customRadioInline2 = document.getElementById("customRadioInline2");
        var customRadioInline3 = document.getElementById("customRadioInline3");
        var customRadioInline4 = document.getElementById("customRadioInline4");
        var customRadioInline5 = document.getElementById("customRadioInline5");

        var opcje_towarowe = opcje;
        console.log("opcje:", opcje_towarowe);
        var nameArr = opcje_towarowe.split(',');


        var opcja_pierwsza = nameArr[0];
        console.log("opcja pierwsza:", opcja_pierwsza);
        var opcja_druga = nameArr[1];
        console.log("opcja druga:", opcja_druga);

        customRadioInline1.checked = false;
        customRadioInline2.checked = false;
        customRadioInline3.checked = false;
        customRadioInline4.checked = false;
        customRadioInline5.checked = false;

        if (opcja_pierwsza == "Brzydki" || opcja_druga == "Brzydki") customRadioInline1.checked = true;
        if (opcja_pierwsza == "Przeciętny" || opcja_druga == "Przeciętny") customRadioInline2.checked = true;
        if (opcja_pierwsza == "Ładny" || opcja_druga == "Ładny") customRadioInline3.checked = true;
        if (opcja_pierwsza == "Majestatyczny" || opcja_druga == "Majestatyczny") customRadioInline4.checked = true;
        if (opcja_pierwsza == "Piękny" || opcja_druga == "Piękny") customRadioInline5.checked = true;
    }



    var radio1 = document.getElementById("inlineRadio1");
    var radio2 = document.getElementById("inlineRadio2");
    var radio3 = document.getElementById("inlineRadio3");
    var radio4 = document.getElementById("inlineRadio4");
    var radio5 = document.getElementById("inlineRadio5");
    if (ocena == 1) radio1.checked = true;
    if (ocena == 2) radio2.checked = true;
    if (ocena == 3) radio3.checked = true;
    if (ocena == 4) radio4.checked = true;
    if (ocena == 5) radio5.checked = true;

    var photo = document.getElementById("photo");
    photo.value = zdjęcie;

    sprawdzTowarName();
    sprawdzTowarCode();
    sprawdzNettoPrice();
    sprawdzVAT();
    bruttoUpdate();
    categoryCheck();
    checkPhoto();
}

var row_indexTmp = 0;
let koszyk = [];

function add_shop(r) {


    var row_index = r.parentNode.parentNode.rowIndex;
    var myTab = document.getElementById("myTable");
    var row = myTab.rows.item(row_index).cells;

    if (row_index != row_indexTmp) {
        var nazwa = row.item(0).innerHTML;
        var brutto = row.item(4).innerHTML;

        var vals = { 'name': nazwa, 'brutto_price': brutto };
        koszyk.push(vals);
        localStorage.setItem('myElement', JSON.stringify(koszyk));
        var row = '<tr><td>' + vals.name + '</td><td class="costProduct">' + vals.brutto_price + '</td><td>' + '<input onchange="calculationCart()" type="number" name="quantity" value="1" min="1" max="10">' + '</td></tr>';
        console.log(row);
        $row = $(row),
            resort2 = true;

        $('#myTable2')
            .find('tbody').append($row)
            .trigger('addRows', [$row, resort2]);

    }
    row_indexTmp = row_index;


}


function Buy_items() {
    localStorage.removeItem('myElement');
    alert("Zamówienie zostało przekazane do realizacji");
    $("#myTable2 tbody tr").remove();
    var allProductsCost = document.getElementById('allProducts');
    var costCurierInput = document.getElementById('costCurier');
    var allCostInput = document.getElementById('costAll');
    costCurierInput.value = "";
    allCostInput.value = "";
    allProductsCost.value = "";

}


let allProductsCost = 0;
let allCost = 0;
let costCurier = 0;
let inCartProducts = [];
let valueProductsInCart = [];

function calculationCart() {

    var allProductInput = document.getElementById('allProducts');

    allProductsCost = 0;
    inCartProducts = [...document.getElementsByName('quantity')];
    valueProductsInCart = [...document.getElementsByClassName('costProduct')];

    for (var i = 0; i < inCartProducts.length; i++) {
        let tmpCostOneProduct = inCartProducts[i].value * valueProductsInCart[i].innerHTML;
        allProductsCost += tmpCostOneProduct;

    }
    allProductInput.value = allProductsCost + '.00 zł';


}

function selectedCurier() {


    var costCurierInput = document.getElementById('costCurier');
    var allCostInput = document.getElementById('costAll');

    let curierBox = document.getElementById("curier");
    var checkCurier =
        curierBox.options[curierBox.selectedIndex].text;
    console.log(checkCurier);
    switch (curierBox.value) {
        case "15":
            console.log(costCurierInput.value);
            costCurierInput.value = curierBox.value + '.00 zł';
            break;
        case "12":
            console.log(curierBox.value);
            costCurierInput.value = curierBox.value + '.00 zł';
            break;
        case "0":
            console.log(curierBox.value);
            costCurierInput.value = curierBox.value + '.00 zł';
            break;

    }

    allCostInput.value = (parseFloat(allProductsCost) + parseFloat(curierBox.value)).toFixed(2) + ' zł';

}