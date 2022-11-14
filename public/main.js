// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
const init = () => {
  document.querySelector('#app').innerHTML = `
   
    <button class="btn btn-danger" id="click-me">GET A JOKE</button>
    
  `;

  console.warn('YOU ARE UP AND RUNNING!');
};
init();
const getRequest = () => new Promise((resolve, reject) => {
  fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const punchLineOnDom = () => {
  getRequest().then((response) => {
    console.warn('is this making it to the dom?');
    renderToDom('#setup', response.delivery);
  });
};
const setupOnDom = () => {
  getRequest().then((response) => {
    console.warn(response);
    renderToDom('#setup', response.setup);
    document.querySelector('#app').innerHTML = `
   
    <button class="btn btn-danger" id="punchLine">Get Punchline</button>
    
  `;
    document.querySelector('#punchLine').addEventListener('click', punchLineOnDom);
  });
};

document.querySelector('#click-me').addEventListener('click', setupOnDom);

// USE WITH FIREBASE AUTH
// ViewDirectorBasedOnUserAuthStatus();
