const cardsSection = document.getElementById('cards-section')

fetch('./data.json')
    .then((request) => {
        if(!request.ok) {
            throw new Error('Network response was not ok')
        }
        return request.json()
    })
    .then((data) => data.forEach(element => {
        console.log(element)
        const smallCard = document.createElement('div')
        const leftSection = document.createElement('div')
        const rightSection = document.createElement('div')
        const cardImg = document.createElement('img')
        const cardTitle = document.createElement('p')
        const cardPercentage = document.createElement('p')
        const cardSpan = document.createElement('span')


        smallCard.className = 'small-card'
        leftSection.className = 'left'
        rightSection.className = 'right'
        cardTitle.className = 'card-title'
        cardTitle.classList.add(`${element.category}`)

        cardPercentage.className = 'percentage'
        smallCard.dataset.name = `${element.category}`
        console.log(`${smallCard.dataset.name}`)

        cardImg.src = `${element.icon}`
        cardTitle.innerHTML = `${element.category}`
        cardPercentage.innerHTML = `${element.score}`
        cardSpan.innerHTML = ` / 100`

        cardPercentage.appendChild(cardSpan)
        rightSection.appendChild(cardPercentage)
        leftSection.appendChild(cardImg)
        leftSection.appendChild(cardTitle)
        smallCard.appendChild(leftSection)
        smallCard.appendChild(rightSection)

        cardsSection.append(smallCard)
    }))


