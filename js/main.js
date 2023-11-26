const liLast = document.querySelectorAll('ul > li:last-child');
liLast.forEach((li) => li.classList.add('last'));

const root = document.querySelector('ul.root');

const setFirstItemClassName = function(level, ul) {
  level--;
  if(level > 0) {
    const liInitial = [...ul.children];
    liInitial.forEach(li => {
      const innerUl = [...li.children];
      innerUl.forEach(ul => setFirstItemClassName(level, ul));
    })
  } else {
    const liFirst = ul.querySelector('li:first-of-type');
    liFirst.classList.add('first');
  }
}
setFirstItemClassName(2, root);