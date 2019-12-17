import $ from 'jquery'

function select() {
  $(this)
    .parent()
    .toggleClass('is-open')
}

function setVal() {
  let text = $(this).text()
  $('.select__current').text(text)
  $(this)
    .closest('.select')
    .removeClass('is-open')
}

$('.select__header').on('click', select)
$('.select__item').on('click', setVal)
