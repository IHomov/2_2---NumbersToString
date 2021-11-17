let aHoundred = [ "сто", "двісті", "триста", "чотириста", "п'ятсот", "шістьсот", "сімсот", "вісімсот", "дев'ятьсот"];

let aTens = [ "", "двадцять", "тридцять", "сорок", "п'ятьдесят", "шістьдесят", "сімдесят", "вісімдесят", "дев'яносто"];

let aOnes = ["", "одна", "дві", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять", "десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістьнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];


function convertnumbertostring(){
    let num = document.getElementById("n").value;    
    let res = document.getElementById("tekst");    
    let j = 4;
        if( num.length < j ){
                let y = ConvertToWords(num);
                let hrivna = Hrn(num);
            res.innerHTML = `Сума: ${y}  ${hrivna}`;
        } else {
                alert('Enter the number of 3 letters')
        }
};
    
    function ConvertToWords(num) {
            let out = 0;
            let inputNumber = num.split('');
            console.log(inputNumber);

    if (num.lenght == 1) { // числа от 1 то 9 включительно
        out = aOnes[num];
    }

    if (num.length == 2) { // проверка на 2-х значное число
        
        // проверка на диапазон от 10 вкл. до 19 вкл-но
        if (num >= 10 && num < 20) 
            {
                out = aOnes[num];
        }
        // диапазон от 20 до 99
        else { 
            out = aTens[inputNumber[1]] + " " + aOnes[inputNumber[1]];
        }
        }
        // else { // будет диапазон от 100 до 999}
        
    
}
function Hrn(n) {
    let res = document.getElementById("tekst"); 
    if (n == 1) {
        res.innerHTML += ' гривня';
        }
        
        else if (n > 1 && n < 5) {
            res.innerHTML += ' гривні';
        }
        
        else {
            res.innerHTML += ' гривень';
        } 
}



