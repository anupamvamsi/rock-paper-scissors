const clicky = document.querySelector('#clicky');
clicky.onclick = () => alert('Hello Clicky here');

const clicksy = document.querySelector('#clicksy')
clicksy.addEventListener('click', () => {
  alert('Hello Clicksy here');
})

clicksy.addEventListener('click', (e) => {
  console.log(e);
  console.log(e.target);
  e.target.style.background = 'blue'
  console.log(e.target.style.background);
})

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target.style.borderRadius = '20%';
    if (button.id)
      alert(button.id);
    else
      alert('no id');
  })
})