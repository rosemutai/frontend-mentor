const shareButton = document.getElementById('share-arrow')
const visibleButtons = document.getElementById('active-share-buttons')
const card = document.getElementById('product-card')
const authorName = document.getElementById('authorname')

function displayShareButtons () {
    
    
    // if(visibleButtons.classList.contains('share-btn') && screen.availWidth <= 768) {
    //     visibleButtons.classList.remove('share-btn')
    //     visibleButtons.classList.add('active')
    //     card.style.paddingBottom = '0px'
    //     authorName.style.display = 'none'
    // } 
    // else if (visibleButtons.classList.contains('share-btn') && screen.availWidth > 768) {
    //     visibleButtons.classList.remove('share-btn')
    //     visibleButtons.classList.add('active')
        
    // }
    
    // else {
    //     visibleButtons.classList.add('share-btn')
    //     visibleButtons.classList.remove('active')
    //     authorName.style.display = 'block'
    // }

    if (visibleButtons.classList.contains('share-btn') && screen.availWidth > 768) {
        visibleButtons.classList.remove('share-btn')
       visibleButtons.classList.add('active')
    }
    
}


shareButton.addEventListener('click', displayShareButtons)