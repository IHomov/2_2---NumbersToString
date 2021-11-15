let hundreds = ["", "сто", "двісті", "триста", "чотириста", "п'ятсот", "шістьсот", "сімсот", "вісімсот", "дев'ятьсот"];

let twentys = ["", "десять", "двадцять", "тридцять", "сорок", "п'ятьдесят", "шістьдесят", "сімдесят", "вісімдесят", "дев'яносто"];

let teens = ["", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістьнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];

let ones = ["", "одна", "дві", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];

function Transform() {
				let h = t = o = tw = "";
                let n = document.getElementById("n").value;
                let res = document.getElementById("tekst");

                if (n >= 100 && n <= 999) {
                    h = hundreds[n[n.length - 3]] + " ";
                }
                else {
                    h = "";
                }
                if (n >= 10) {
                    tw = twentys[n[n.length - 2]] + " ";
                }
                else { tw = ""; }
    
                o = ones[n[n.length - 1]];
    
                if (n >= 11 && n <= 19) {
                    t = teens[n[n.length - 2]] + " ";
                }
                    else 
                { t = ""; }
    
                res.innerHTML = h + tw + t + o;
                
                if (n == 1) {
                    res.innerHTML += ' гривня';
                }
                else if (n > 1 && n < 5)
                { res.innerHTML += ' гривні'; }
                else {
                res.innerHTML += ' гривень';
                } 
}




