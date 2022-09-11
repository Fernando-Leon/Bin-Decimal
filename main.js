const binariToDecimal = () => {//Function  arrow: convert binary to decimal 
    let binario = document.getElementById("bin-to-decimal").value;
    let regexBinary = /[2-9]e+/; 
    if(!regexBinary.test(binario)){
      let list = binario.split("");
      let listNew = list.reverse();
      let resultado = 0;
      for(let i = 0; i < listNew.length; i++){
          resultado += listNew[i] * Math.pow(2, i);
      }
      document.getElementById("rest-bin-des").value = resultado;
    }else {
      alert("Solo puedes ingrsar los numeros: 0 y 1");
      document.getElementById("bin-to-decimal").value = null;
      document.getElementById("rest-bin-des").value = null;
    }
}

const decimalToBinari = () => {//Function arrow: convert decimal to binary
    let decimal = document.getElementById("decimal-to-bin").value;
    let result = [];
    while(decimal > 1){
      decimal /= 2;
      (Number.isInteger(decimal)) ? result.unshift(0): result.unshift(1);
      decimal = Math.floor(decimal);
      if(decimal < 2 ) result.unshift(1);
    }
    document.getElementById("rest-des-bin").value = result.join("");
}