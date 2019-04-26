// Get Open Modal button and Outer Modal area
const openModal = document.getElementById('modalBtn')
const modal = document.querySelector('.outer-modal')
const closeBtn = document.querySelector('.close')

openModal.addEventListener('click', modalOpen)

closeBtn.addEventListener('click', closeModal)

function modalOpen() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}