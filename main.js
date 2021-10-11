;(function (win, doc) {
  'use strict'
  const $casas = doc.querySelectorAll('.casa')
  var counter = 0
  const xis = 'X'
  const oh = 'O'

  $casas.forEach((element, index) => {
    if (verificWhoTurnIs(counter)) {
      element.addEventListener(
        'click',
        event => {
          console.log(verificWhoTurnIs(counter))
          if (element.value === '') {
            element.value = xis
            counter += 1
            return element.value
          } else {
            alert('outra casa')
          }
        },
        false
      )
    } else {
      element.addEventListener(
        'click',
        event => {
          console.log('cara')
          if (element.value === '') {
            element.value = oh
            counter += 1
            return element.value
          } else {
            alert('outra casa')
          }
        },
        false
      )
    }
  })

  function verificWhoTurnIs(counter) {
    if (counter % 2 === 1) {
      return true
    } else {
      return false
    }
  }
})(window, document)
