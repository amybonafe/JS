function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 6) {
        img.setAttribute('src', 'babyboy.png')
      } else if (idade >= 7 && idade < 12) {
        img.setAttribute('src', 'criancaboy.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'adolescentemenino.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'homem.png')
      } else {
        img.setAttribute('src', 'idosooo.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 6) {
        img.setAttribute('src', 'babygirl.png')
      } else if (idade >= 7 && idade < 12) {
        img.setAttribute('src', 'criancagirl.png')
      } else if (idade < 21) {
        img.setAttribute('src', 'adolescentemenina.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'mulher.png')
      } else {
        img.setAttribute('src', 'idosaaa.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
