function imc()
{
  var peso = document.getElementById('peso1').value;
  var altura = document.getElementById('altura1').value;
  var imc = peso / (altura*altura);
  document.getElementById('resultado1').value = ('IMC='+ imc.toFixed(2));
}
