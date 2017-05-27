function imc()
{
  var p1 = document.getElementById('peso1').value;
  var a2 = document.getElementById('altura1').value;

  var q2 = (a2*a2);
  var soma = (p1/q2);
  var soma2 = soma.toFixed(1);
  document.getElementById('resultado1').value = ('IMC='+ soma2);
}
