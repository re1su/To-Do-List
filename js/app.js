const inputEl = document.getElementById('title')
const createBtn = document.getElementById('createBtn')
const listEl = document.getElementById('list')


createBtn.addEventListener('click', () => {
  if (inputEl.value.length === 0) {
    return
  }

  listEl.insertAdjacentHTML('afterbegin',
  `

    <li id="list">
      <span class="note-text">${inputEl.value}</span>
      <span>
        <span class="button button-check">&check;</span>
        <span class="button button-delete">&times;</span>
      </span>
    </li>

  `)

  const checkBtn = document.querySelector('.button-check')
  const deleteBtn = document.querySelector('.button-delete')

  checkBtn.addEventListener('click', () => {toggleComplete(checkBtn)})
  deleteBtn.addEventListener('click', () => {toggleDelete(deleteBtn)})

  inputEl.value = ''
})

function toggleComplete(button) {
  const liEl = button.closest('li')
  const span = liEl.querySelector('.note-text')

  span.classList.toggle('completed')
}

function toggleDelete(button) {
  const liEl = button.closest('li')
  liEl.classList.add('fade-out')

  liEl.remove()
}