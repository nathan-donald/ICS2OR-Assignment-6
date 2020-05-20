    let pricelarge = document.getElementById("large").value;
    let priceexlarge = document.getElementById("exlarge").value;
    let pricetop1 = document.getElementById("top1").value;
    let pricetop2 = document.getElementById("top2").value;
    let pricetop3 = document.getElementById("top3").value;
    let pricetop4 = document.getElementById("top4").value;
    let pricepizza = 0;
    let tax = 0;
    let total = 0;
    
    function myFunction(){
    if((large.checked==true) && (top1.checked==true)) {
        pricepizza = parseFloat(pricelarge) + parseFloat(pricetop1);
    }
    
    else if ((large.checked==true) && (top2.checked==true)) {
        pricepizza = parseFloat(pricelarge) + parseFloat(pricetop2);
    }
    
    else if ((large.checked==true) && (top3.checked==true)) {
        pricepizza = parseFloat(pricelarge) + parseFloat(pricetop3);
    }
    
    else if ((large.checked==true) && (top4.checked==true)) {
        pricepizza = parseFloat(pricelarge) + parseFloat(pricetop4);
    }
    
    else if ((exlarge.checked==true) && (top1.checked==true)) {
        pricepizza = parseFloat(priceexlarge) + parseFloat(pricetop1);
    }
    
    else if ((exlarge.checked==true) && (top2.checked==true)) {
        pricepizza = parseFloat(priceexlarge) + parseFloat(pricetop2);
    }
    
    else if ((exlarge.checked==true) && (top3.checked==true)) {
        pricepizza = parseFloat(priceexlarge) + parseFloat(pricetop3);
    }
    
    else if ((exlarge.checked==true) && (top4.checked==true)) {
        pricepizza = parseFloat(priceexlarge) + parseFloat(pricetop4);
    }
    
    tax = pricepizza * 0.13;
    total = pricepizza + tax;
    pricepizza = pricepizza.toFixed(2);
    tax = tax.toFixed(2);
    total = total.toFixed(2);
    document.getElementById("outputprice").innerHTML = "Your subtotal for the pizza is: " + pricepizza;
    document.getElementById("outputtax").innerHTML = "Your tax for the pizza is: " + tax;
    document.getElementById("outputtotal").innerHTML = "Your total for the pizza is: " + total;
}