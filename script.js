const todoList = document.getElementById('todo-list');
const new_item = document.getElementById('new-item');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
	const itemText = new_item.value.trim();
	if (itemText !== '') {
		const li = document.createElement('li');
		li.textContent = itemText;
		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'Delete';
		deleteBtn.className = 'delete-btn';
		li.appendChild(deleteBtn);
		todoList.appendChild(li);
		new_item.value = '';
	}
});

todoList.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('done');
	} else if (e.target.className === 'delete-btn') {
		e.target.parentNode.remove();
	}
});