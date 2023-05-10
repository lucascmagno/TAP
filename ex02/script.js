function subtotal(){

}

function calcularTotal(){
    var result = document.getElementById("total");
    var quant1 = parseFloat(document.getElementById("quant1").value)
    var preco1 = parseFloat(document.getElementById("preco1").value)
    var total1 = quant1 * preco1;

    var quant2 = parseFloat(document.getElementById("quant2").value)
    var preco2 = parseFloat(document.getElementById("preco2").value)
    var total2 = quant2 * preco2;

    var quant3 = parseFloat(document.getElementById("quant3").value)
    var preco3 = parseFloat(document.getElementById("preco3").value)
    var total3 = quant3 * preco3;

    var quant4 = parseFloat(document.getElementById("quant4").value)
    var preco4 = parseFloat(document.getElementById("preco4").value)
    var total4 = quant4 * preco4;

    var quant5 = parseFloat(document.getElementById("quant5").value)
    var preco5 = parseFloat(document.getElementById("quant5").value)
    var total5 = quant5 * preco5;

    total_geral = total1 + total2 + total3 + total4 + total5;
    if(total_geral == 0){
        result.innerHTML = "0,00"
    }else{
        result.innerHTML = total_geral ;
    }
}

function limparComanda(){
    document.querySelector('input').value = '0';
    document.getElementById('quant2').value = '0';
    
}