const input = document.querySelector('#favechap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deletebutton = document.createElement('button');

    li.textContent = input.value;
    deletebutton.textContent = '❌';

    deletebutton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();
    });

    li.appendChild(deletebutton);
    list.appendChild(li);

    input.value = '';
    input.focus();
  } else {
    input.focus();
  }
});
