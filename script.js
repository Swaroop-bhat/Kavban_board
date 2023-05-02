const addItemButton = document.getElementById('add-item-button');
const addItemInput = document.getElementById('add-item-input');
const todoCardsContainer = document.getElementById('todo-cards-container');
const inProgressCardsContainer = document.getElementById('in-progress-cards-container');
const doneCardsContainer = document.getElementById('done-cards-container');

function addDeleteIcon(card) {
  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash-alt', 'delete-icon');
  card.appendChild(deleteIcon);

  deleteIcon.addEventListener('click', () => {
    card.remove();
  });
}

todoCardsContainer.querySelectorAll('.card').forEach((card) => {
  addDeleteIcon(card);
});

addItemButton.addEventListener('click', () => {
  const newItemText = addItemInput.value.trim();
  const selectedColumn = document.querySelector('input[name="add-item-radio"]:checked').value;

  if (newItemText !== '') {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.draggable = true;
    newCard.textContent = newItemText;

    if (selectedColumn === 'in-progress') {
      inProgressCardsContainer.appendChild(newCard);
    } else if (selectedColumn === 'done') {
      doneCardsContainer.appendChild(newCard);
    } else {
      todoCardsContainer.appendChild(newCard);
    }

    addDeleteIcon(newCard);
    addItemInput.value = '';
  }
});
