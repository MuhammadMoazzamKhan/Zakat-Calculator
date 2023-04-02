function calculate() {
    var gold = parseFloat(document.getElementById("gold").value * 207800);
    var silver = parseFloat(document.getElementById("silver").value * 2521);
    var wealth = parseFloat(document.getElementById("wealth").value);
    if(gold + silver + wealth >= 132352.5){
        var result = document.getElementById("result");
        result.value =  (gold + silver + wealth) * 0.025 ;
    }else{
        alert("Zakat is not due on you");
    }
}











