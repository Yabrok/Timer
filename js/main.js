const elForm = document.querySelector('.js-form');
const elInput = document.querySelector('.js-input');
const elList = document.querySelector('.js-list');


// function timer(sec, node) {
//   let newItem = document.createElement('li');
//   let newText = document.createElement('p');
//   newText.classList.add('m-0', 'p-3', 'px-4', 'rounded-circle', 'text-white')
//   newText.style.backgroundColor = 'red'

//   newItem.appendChild(newText);
//   node.appendChild(newItem);
// }





elForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let time = elInput.value;

  let newItem = document.createElement('li');
  newItem.style.display = 'inline-block'
  newItem.style.marginRight = '9px'
  newItem.style.marginBottom = '9px'
  let newText = document.createElement('p');
  newText.textContent = time;
  newText.classList.add('m-0', 'p-3', 'px-4', 'rounded-circle', 'text-white')
  newText.style.backgroundColor = 'red'

  newItem.appendChild(newText);
  elList.appendChild(newItem);

  let intelval = setInterval(() => {
    time--;
    newText.textContent = time;
    newText.style.transform = 'scale(1.1)'
  }, 1000);


  setTimeout(()=>{
    clearInterval(intelval);
    elList.removeChild(newItem)
  }, time * 1000)

  elInput.value = '';

});