// Grab all DOM elements needed to accomplish todo list

const inpText = document.getElementById('inpText')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('todo-list')

// Add Event Listeners

addBtn.addEventListener('click', addTodo)

// Functions

function addTodo() {
    // get todo value
    const value = inpText.value;

    // create DOM elements

    const listItem = document.createElement('li')
    listItem.classList.add('todo-list-item')
    const inpField = document.createElement('input')
    inpField.classList.add('item-input')
    inpField.value = value 

    // buttons
    const division = document.createElement('div')
    division.classList.add('item-op')
    const update = document.createElement('button')
    update.classList.add('update')
    update.classList.add('rm-evt')
    const complete = document.createElement('button')
    complete.classList.add('complete')
    const trash = document.createElement('button')
    trash.classList.add('trash')

    // icons

    const updateIcon = document.createElement('i')
    updateIcon.classList.add('fas')
    updateIcon.classList.add('fa-edit')
    const completeIcon = document.createElement('i')
    completeIcon.classList.add('fas')
    completeIcon.classList.add('fa-check')
    const deleteIcon = document.createElement('i')
    deleteIcon.classList.add('fas')
    deleteIcon.classList.add('fa-trash-alt')

    update.appendChild(updateIcon)
    complete.appendChild(completeIcon)
    trash.appendChild(deleteIcon)

    division.appendChild(update)
    division.appendChild(complete)
    division.appendChild(trash)

    listItem.appendChild(inpField)
    listItem.appendChild(division)
    list.appendChild(listItem)

    // Add Event Listeners to the buttons

    update.addEventListener('click', updateFn)
    complete.addEventListener('click', completeFn)
    trash.addEventListener('click', trashFn)

    function updateFn() {
        inpField.classList.remove('rm-evt')
    }

    function completeFn() {
        inpField.classList.add('completeList')
    }

    function trashFn() {
        inpField.parentElement.remove()
    }

    inpText.value = ''
}