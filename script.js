function openOpinionContainer() {
    let opinionContainer = document.querySelector('.opinion-container')
    opinionContainer.classList.add('openOpinion')
}

function closeOpinionContainer() {
    let opinionContainer = document.querySelector('.opinion-container')
    opinionContainer.classList.remove('openOpinion')
}

function openTxtContainer(element) {
    const descriptionTxt = document.querySelector('.description-text')
    const includedItemsTxt = document.querySelector('.includedItems-text')
    const assuranceTxt = document.querySelector('.assurance-text')
    
    
    if( element === 'description' ) {
        includedItemsTxt.classList.remove('active')
        assuranceTxt.classList.remove('active')    
    
        descriptionTxt.classList.add('active')
    }
    if( element === 'includedItems' ) {
        descriptionTxt.classList.remove('active')
        assuranceTxt.classList.remove('active')
            
        includedItemsTxt.classList.add('active')

    }
    if( element === 'assurance' ) {
        descriptionTxt.classList.remove('active')
        includedItemsTxt.classList.remove('active')

         assuranceTxt.classList.add('active')
    }
   
    
}

function sendComment() {
    const userName = document.querySelector('#userName').value
    const opinionTxt = document.querySelector('#opinionTxt').value
    const commentAuthor = document.querySelector('.comment-author')
    const commentTxt = document.querySelector('.comment-text')
    console.log(commentAuthor)
    commentAuthor.innerHTML = userName
    commentTxt.innerHTML = opinionTxt

    closeOpinionContainer()
}

function addToCart() {
    const cartValue = document.querySelector('#cartValue')
    let numbValue = parseInt(cartValue.textContent)
    cartValue.innerHTML = numbValue + 1
}