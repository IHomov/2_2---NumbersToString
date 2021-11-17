aHoundred = ["", "сто", "двісті", "триста", "чотириста", "п'ятсот", "шістьсот", "сімсот", "вісімсот", "дев'ятьсот"]
aTens = ["",  "двадцять", "тридцять", "сорок", "п'ятьдесят", "шістьдесят", "сімдесят", "вісімдесят", "дев'яносто"];

aOnes = ["", "одна", "дві", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять", "десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістьнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];

var aUnits = "Thousand";
    function convertnumbertostring(){
       var num=prompt('','enter the number');
       var j =6;
       if(num.length<j){
       var y = ConvertToWords(num);
       alert(y);
       }else{
          alert('Enter the number of 5 letters')
       }
    };
    function ConvertToHundreds(num)
    {
       var cNum, nNum;
       var cWords = "";
       if (num > 99) {
          /* Hundreds. */
          cNum = String(num);
          nNum = Number(cNum.charAt(0));
          cWords += aOnes[nNum] + " Hundred";
          num %= 100;
          if (num > 0){
             cWords += " and "
          }
       }

       if (num > 19) {
          /* Tens. */
          cNum = String(num);
          nNum = Number(cNum.charAt(0));
          cWords += aTens[nNum - 2];
          num %= 10;
          if (num > 0){
             cWords += "-";
          }
       }
       if (num > 0) {
          /* Ones and teens. */
          nNum = Math.floor(num);
          cWords += aOnes[nNum];
       }
       return(cWords);

    }
    function ConvertToWords(num)
    {
       var cWords;
       for (var i = 0; num > 0; i++) { 
           if (num % 1000 > 0) {
              if (i != 0){
                 cWords = ConvertToHundreds(num) + " " + aUnits + " " + cWords;
              }else{
                 cWords = ConvertToHundreds(num) + " ";
              }        
           }
           num = (num / 1000);
       }
         return(cWords);
    }