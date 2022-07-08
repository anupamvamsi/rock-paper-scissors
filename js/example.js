const body = document.body;
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the gloriously gloriouser glorious text-content, bow down, heathen!';

container.appendChild(content);

const red = document.createElement('p');
red.classList.add('red');
red.style.color = 'red';
red.textContent = "Hey, I'm Red.";

container.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.style['color'] = 'blue';
blue.textContent = "Hey, I'm Blue.";

container.appendChild(blue);

const meDiv = document.createElement('div');
meDiv.style['border'] = 'black solid 5px';
meDiv.style.backgroundColor = 'pink';

body.appendChild(meDiv);

const h1MeDiv = document.createElement('h1');
h1MeDiv.textContent = "I'M IN A DIV WOO";

const pMeDiv = document.createElement('p');
pMeDiv.textContent = 'ME TOO WOO';

meDiv.appendChild(h1MeDiv);
meDiv.appendChild(pMeDiv);
