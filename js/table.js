
function resposta(){
  var imc = document.getElementById('imcvalor').value;

  var msg = document.getElementById('go-msg');
  if (imc <=17){
    msg.value = ('Muito abaixo do peso')
  } else if (imc == 666) {
    msg.value=('~(º?º)~')
  } else if (imc <18.50) {
    msg.value = ('Abaixo do peso')
  } else if (imc <=24.99) {
    msg.value =  ('Peso normal')
  } else if (imc <=29.99) {
    msg.value = ('Acima do peso')
  } else if (imc <=34.99) {
    msg.value = ('Obesida 1')
  } else if (imc <=39.99) {
    msg.value = ('Obesidade 2 (severa)')
  } else if (imc >=40) {
    msg.value = ('Obesidade 3 (morbida)')
  }
  else{
    msg.value=('~(º?º)~')
  }
}
