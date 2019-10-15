// 1. select the image
const imageRomain = document.querySelector('#romain');
// 2. add event listener
// 2a. on click
imageRomain.addEventListener('click', (event) => {
  // 3. classList.add(...)
  event.currentTarget.classList.toggle('img-circle');
});


console.log("Hello from src/index!");
// const list = document.getElementById('players')
// const paragraphNode = document.querySelector('p');
// paragraphNode.style.backgroundColor = "red";
// const classSelector = document.querySelector('.hello-class')

const list = document.querySelector("#players"); // CSS id selector
list.insertAdjacentHTML("beforeend", "<li>Luke</li>");


const winningTeams = document.querySelectorAll('#fifa-wins li');
const teamsList = document.querySelector('#fifa-wins');

teamsList.insertAdjacentHTML("afterbegin", "<li>France (2 Wins)</li>");

const button = document.querySelector('#dont-click');

const buttonDisappear = () => {
  window.scrollTo(0, document.body.scrollHeight);
};

// button.addEventListener('click', buttonDisappear);

button.addEventListener('click', (event) => {
  event.currentTarget.style.backgroundColor = "red";
});

document.addEventListener('click', (event) => {
  debugger;
  console.log(event.currentTarget);
  console.log(event.target);
});

winningTeams.forEach((team) => {
  console.log(`${team.innerText} is a winner!`);
});


const home = document.getElementById("home");
console.log(home.attributes.href.value);
