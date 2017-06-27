function imc(){
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value;

  var resultado = Math.round(peso / (altura * altura));

  var msg = document.getElementById('saida');
  if (resultado <=17){
    msg.value = ('IMC= '+ resultado + ' Muito abaixo do peso')
  } else if (resultado === 666) {
    msg.value=('~(º?º)~')
  } else if (resultado <18.50) {
    msg.value = ('IMC= '+ resultado + ' Abaixo do peso')
  } else if (resultado <=24.99) {
    msg.value =  ('IMC= '+ resultado + ' Peso normal')
  } else if (resultado <=29.99) {
    msg.value = ('IMC= '+ resultado + ' Acima do peso')
  } else if (resultado <=34.99) {
    msg.value = ('IMC= '+ resultado + ' Obesida 1')
  } else if (resultado <=39.99) {
    msg.value = ('IMC= '+ resultado + ' Obesidade 2 (severa)')
  } else if (resultado >=40) {
    msg.value = ('IMC= '+ resultado + ' Obesidade 3 (morbida)')
  }
  else{
    msg.value=('~(º?º)~')
  }
};
