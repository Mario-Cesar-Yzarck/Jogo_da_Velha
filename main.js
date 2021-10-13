;(function (win, doc) {
  'use strict'
  const $casas = doc.querySelectorAll('.casa')
  var counter = 0
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

  const arrayRegex = [
    regex1,
    regex2,
    regex3,
    regex4,
    regex5,
    regex6,
    regex7,
    regex8
  ]

  $casas.forEach((element, index) => {
    element.addEventListener(
      'click',
      event => {
        if (verificWhoTurnIs(counter)) {
          playX(element)
        } else {
          playO(element)
        }
      },
      false
    )
  })

  function playX(element) {
    if (element.value === '') {
      element.value = xis
      arrayCasasX.push(element.id)
      counter += 1
      verificWinX(arrayCasasX)
      isDraw(counter)
      return element.value
    } else {
      alert('outra casa')
    }
  }

  function playO(element) {
    if (element.value === '') {
      element.value = oh
      arrayCasasO.push(element.id)
      counter += 1
      verificWinO(arrayCasasO)
      isDraw(counter)
      return element.value
    } else {
      alert('outra casa')
    }
  }

  function verificWhoTurnIs(counter) {
    return counter % 2 === 0 ? true : false
  }

  function verificWinX(array) {
    arrayRegex.forEach(element => {
      if (element.test(array.sort().join(','))) {
        return endGameX()
      }
    })
  }

  function verificWinO(array) {
    arrayRegex.forEach(element => {
      if (element.test(array.sort().join(','))) {
        return endGameO()
      }
    })
  }

  function endGameX() {
    resetGame()
    return alert('Fim de jogo, X venceu!')
  }

  function endGameO() {
    resetGame()
    return alert('Fim de jogo, O venceu!')
  }

  function resetGame() {
    arrayCasasX = []
    arrayCasasO = []
    counter = 0
    $casas.forEach(element => {
      element.value = ''
    })
  }

  function isDraw(number) {
    if (number > 8) {
      resetGame()
      return alert('Deu velha!')
    }
  }
})(window, document)
//fazendo testes com jogo da velha
