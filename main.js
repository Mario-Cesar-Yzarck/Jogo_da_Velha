;(function (win, doc) {
  'use strict'

  const $arrayCasas = doc.querySelectorAll('.casa')
  const $casa1 = doc.querySelector('#casa1')
  const $casa2 = doc.querySelector('#casa2')
  const $casa3 = doc.querySelector('#casa3')
  const $casa4 = doc.querySelector('#casa4')
  const $casa5 = doc.querySelector('#casa5')
  const $casa6 = doc.querySelector('#casa6')
  const $casa7 = doc.querySelector('#casa7')
  const $casa8 = doc.querySelector('#casa8')
  const $casa9 = doc.querySelector('#casa9')
  const arrayCasas = [
    $casa1,
    $casa2,
    $casa3,
    $casa4,
    $casa5,
    $casa6,
    $casa7,
    $casa8,
    $casa9
  ]
  console.log($casa1.value)
  var counter = 1

  arrayCasas.forEach(item => {
    playing(item)
  })

  function playing(item) {
    item.addEventListener('click', event => {
      if (counter % 2 === 1) {
        if (verificHouseInGame(item) == '') {
          item.innerHTML = 'X'
          $casa1.value = 'X'
          console.log($casa1.value)
          arrayCasas.push(item)
          counter += 1
        } else {
          alert('Casa ocupada, jogue em outra.')
        }
      } else {
        if (verificHouseInGame(item) == '') {
          item.innerHTML = 'O'
          arrayCasas.push(item)
          counter += 1
        } else {
          alert('Casa ocupada, jogue em outra.')
        }
      }
    })
  }

  function verificHouseInGame(item) {
    if (item.innerHTML === '') return ''
    if (item.innerHTML === 'O') return 'O'
    if (item.innerHTML === 'X') return 'X'
  }

  function verificWin(array) {
    if (array[0] === 'X' && array[1] && array[2]) alert('X win')
  }
})(window, document)
