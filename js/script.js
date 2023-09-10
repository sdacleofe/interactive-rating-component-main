// Variable representing the user rating modal
const userRatingModal = document.querySelector('.user-rating-modal')

// Variable representing the success modal
const successModal = document.querySelector('.success-modal')

// Variable representing a collection of rating number elements
const ratingNumberElements = document.querySelectorAll('.user-rating li')

// Variable representing a button element
const submitButton = document.querySelector('button')

// Variable representing paragraph content related to the selected rating
const paragraphContent = document.querySelector('p.selected-rating')

// Variable representing selected rating number of the user
let selectedValue = ''

// Keep track of the last clicked element
let previousClickedElement = null

ratingNumberElements.forEach((ratingNumberElement) => {
  ratingNumberElement.addEventListener('click', (e) => {
    if (previousClickedElement) {
      previousClickedElement.classList.remove('clicked')
    }
    e.target.classList.add('clicked')
    selectedValue = e.target.getAttribute('data-value')
    previousClickedElement = e.target
  })
})

submitButton.addEventListener('click', () => {
  if (selectedValue !== undefined && selectedValue !== null) {
    userRatingModal.style.display = 'block'
    successModal.style.display = 'none'
  }

  if (selectedValue.trim() !== '') {
    userRatingModal.style.display = 'none'
    successModal.style.display = 'block'
    paragraphContent.innerText = `You selected ${selectedValue} out of 5`
  }
})
