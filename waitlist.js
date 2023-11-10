const waitlistButton = document.querySelector('#waitlist-btn')

waitlistButton.addEventListener('click', () => {
    console.log('going to home page')
    window.location.href = './index.html'
})