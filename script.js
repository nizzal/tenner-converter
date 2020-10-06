baseCurrency = document.getElementById('base-currency').value.toUpperCase()

document.getElementById('final-currency').addEventListener("input", doThis)


function doThis(){
    fetch('https://api.exchangeratesapi.io/latest?base=' + baseCurrency)
    .then(res => res.json())
    .then((data) => {
        var inputFrom = document.getElementById('input-from').value;
        
        var finalCurrency = document.getElementById('final-currency').value.toUpperCase()

        var finalRes = data['rates'][finalCurrency]

        var finalCalc = (finalRes * inputFrom).toFixed(2);

        document.getElementById('input-to').value = finalCalc;
    });
}