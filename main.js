;(function (win, doc) {
  'use strict'
  const $casas = doc.querySelectorAll('.casa')
  var counter = 1
  const xis = 'X'
  const oh = 'O'
  var arrayCasasX = []
  var arrayCasasO = []

  $casas.forEach((element, index) => {
    element.addEventListener(
      'click',
      event => {
        if (verificWhoTurnIs(counter)) {
          if (element.value === '') {
            element.value = xis
            arrayCasasX.push(element.id)
            verificWinX(arrayCasasX)
            console.log(arrayCasasX)
            counter += 1
            return element.value
          } else {
            alert('outra casa')
          }
        } else {
          if (element.value === '') {
            element.value = oh
            arrayCasasO.push(element.id)
            verificWinO(arrayCasasO)
            console.log(arrayCasasO)
            counter += 1
            return element.value
          } else {
            alert('outra casa')
          }
        }
      },
      false
    )
  })

  function verificWhoTurnIs(counter) {
    if (counter % 2 === 1) {
      return true
    } else {
      return false
    }
  }

  function verificWinX(array) {
    if (array.sort().includes('1' && '2' && '3')) return alert('x win')
    if (array.sort().includes('4' && '5' && '6')) return alert('x win')
    if (array.sort().includes('7' && '8' && '9')) return alert('x win')
    if (array.sort().includes('1' && '5' && '9')) return alert('x win')
    if (array.sort().includes('3' && '5' && '7')) return alert('x win')
    if (array.sort().includes('1' && '4' && '7')) return alert('x win')
    if (array.sort().includes('2' && '5' && '8')) return alert('x win')
    if (array.sort().includes('3' && '6' && '9')) return alert('x win')
  }

  function verificWinO(array) {
    if (array.sort().includes('1' && '2' && '3')) return alert('o win')
    if (array.sort().includes('4' && '5' && '6')) return alert('o win')
    if (array.sort().includes('7' && '8' && '9')) return alert('o win')
    if (array.sort().includes('1' && '5' && '9')) return alert('o win')
    if (array.sort().includes('3' && '5' && '7')) return alert('o win')
    if (array.sort().includes('1' && '4' && '7')) return alert('o win')
    if (array.sort().includes('2' && '5' && '8')) return alert('o win')
    if (array.sort().includes('3' && '6' && '9')) return alert('o win')
  }
})(window, document)
//fazendo testes com jogo da velha
