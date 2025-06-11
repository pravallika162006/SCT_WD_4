const form = document.getElementById('task-form');
const list = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${title} - ${date} ${time}</span>
    <div>
      <input type="checkbox" class="check">
      <button class="edit">✏️</button>
      <button class="delete">🗑️</button>
    </div>
  `;

  list.appendChild(li);
  form.reset();

  li.querySelector('.check').addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  li.querySelector('.delete').addEventListener('click', () => {
    li.remove();
  });

  li.querySelector('.edit').addEventListener('click', () => {
    const newTitle = prompt("Edit Task:", title);
    if (newTitle) {
      li.querySelector('span').textContent = `${newTitle} - ${date} ${time}`;
    }
  });
});
