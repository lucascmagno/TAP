function subtotal1(){
    var quant1 = parseFloat(document.getElementById("quant1").value)
    var preco1 = parseFloat(document.getElementById("preco1").value)
    var subtotal1 = document.getElementById("subtotal1")

    var total1 = preco1 * quant1;
    subtotal1.innerHTML = total1;
}

function subtotal(){
    //campo 1
    var quant1 = parseFloat(document.getElementById("quant1").value)
    var preco1 = parseFloat(document.getElementById("preco1").value)
    var subtotal1 = document.getElementById("subtotal1")

    var total1 = preco1* quant1;
    subtotal1.innerHTML = total1;

    //campo 2
    var quant2 = parseFloat(document.getElementById("quant2").value)
    var preco2 = parseFloat(document.getElementById("preco2").value)
    var subtotal2 = document.getElementById("subtotal2")

    //campo 3
    var quant3 = parseFloat(document.getElementById("quant3").value)
    var preco3 = parseFloat(document.getElementById("preco3").value)
    var subtotal3 = document.getElementById("subtotal3")

    //campo 4
    var quant4 = parseFloat(document.getElementById("quant4").value)
    var preco4 = parseFloat(document.getElementById("preco4").value)
    var subtotal4 = document.getElementById("subtota4")

    //campo 5
    var quant5 = parseFloat(document.getElementById("quant5").value)
    var preco5 = parseFloat(document.getElementById("quant5").value)
    var subtotal5 = document.getElementById("subtotal5")
}

function calcularTotal(){
    var result = document.getElementById("total");
    var subtotal1= parseFloat(document.getElementById("subtotal1").value);
    var subtotal2= parseFloat(document.getElementById("subtotal2").value);
    var subtotal3= parseFloat(document.getElementById("subtotal3").value);
    var subtotal4= parseFloat(document.getElementById("subtotal4").value);
    var subtotal5= parseFloat(document.getElementById("subtotal5").value);

    var total = subtotal1 + subtotal2 + subtotal3 + subtotal4 + subtotal5;
}

function limparComanda(){
    
}