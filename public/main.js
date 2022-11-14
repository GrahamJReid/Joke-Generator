// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
   
    <button class="btn btn-danger" id="click-me">GET A JOKE</button>
    
  `;

  console.warn('YOU ARE UP AND RUNNING!');
};
init();
const getRequest = () => new Promise((resolve, reject) => {
  fetch('https://v2.jokeapi.dev/joke/any', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
const requestOnDom = () => {
  getRequest().then((response) => {
    console.warn(response);
  });
};
requestOnDom();
document.querySelector('#click-me').addEventListener('click', getRequest);
// USE WITH FIREBASE AUTH
// ViewDirectorBasedOnUserAuthStatus();
