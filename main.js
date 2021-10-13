;(function (win, doc) {
  'use strict'
  const $casas = doc.querySelectorAll('.casa')
  var counter = 1
  const xis = 'X'
  const oh = 'O'
  var arrayCasasX = []
  var arrayCasasO = []
  const regex1 = new RegExp('1,2,3', 'g')
  const regex2 = new RegExp('4,5,6', 'g')
  const regex3 = new RegExp('7,8,9', 'g')
  const regex4 = new RegExp('1([,\\d+]{1,})?,5([,\\d+]{1,})?,9', 'g')
  const regex5 = new RegExp('3([,\\d+]{1,})?,5([,\\d+]{1,})?,7', 'g')
  const regex6 = new RegExp('1([,\\d+]{1,})?,4([,\\d+]{1,})?,7', 'g')
  const regex7 = new RegExp('2([,\\d+]{1,})?,5([,\\d+]{1,})?,8', 'g')
  const regex8 = new RegExp('3([,\\d+]{1,})?,6([,\\d+]{1,})?,9', 'g')

  $casas.forEach((element, index) => {
    element.addEventListener(
      'click',
      event => {
        if (verificWhoTurnIs(counter)) {
          if (element.value === '') {
            element.value = xis
            arrayCasasX.push(element.id)
            verificWinX(arrayCasasX)
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
    if (regex1.test(array.sort().join(','))) {
      return endGame(xis)
    }
    if (regex2.test(array.sort().join(','))) {
      return endGame(xis)
    }
    if (regex3.test(array.sort().join(','))) {
      return endGame(xis)
    }
    if (regex4.test(array.sort().join(','))) {
      return endGame(xis)
    }
    if (regex5.test(array.sort().join(','))) {
      return endGame(xis)
    }
    if (regex6.test(array.sort().join(','))) {
      return endGame(xis)
    }
    if (regex7.test(array.sort().join(','))) {
      return endGame(xis)
    }
    if (regex8.test(array.sort().join(','))) {
      return endGame(xis)
    }
  }

  function verificWinO(array) {
    if (regex1.test(array.sort().join(','))) {
      return endGame(oh)
    }

    if (regex2.test(array.sort().join(','))) {
      return endGame(oh)
    }
    if (regex3.test(array.sort().join(','))) {
      return endGame(oh)
    }
    if (regex4.test(array.sort().join(','))) {
      return endGame(oh)
    }
    if (regex5.test(array.sort().join(','))) {
      return endGame(oh)
    }
    if (regex6.test(array.sort().join(','))) {
      return endGame(oh)
    }
    if (regex7.test(array.sort().join(','))) {
      return endGame(oh)
    }
    if (regex8.test(array.sort().join(','))) {
      return endGame(oh)
    }
  }

  function endGame(string) {
    if (string === xis) {
      arrayCasasX = []
      arrayCasasO = []
      counter = 1
      $casas.forEach(element => {
        element.value = ''
      })
      return alert('Fim de jogo, X venceu!')
    }
    if (string === oh) {
      arrayCasasX = []
      arrayCasasO = []
      counter = 0
      $casas.forEach(element => {
        element.value = ''
      })
      return alert('Fim de jogo, O venceu!')
    }
  }
})(window, document)
//fazendo testes com jogo da velha
