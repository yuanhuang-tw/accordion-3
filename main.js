var list = document.querySelector('.accordion-list');

list.addEventListener('click', function (e) {
  var ele = e.target;

  if (ele.tagName == 'BUTTON') {
    ele.classList.toggle('active');
  }
});
