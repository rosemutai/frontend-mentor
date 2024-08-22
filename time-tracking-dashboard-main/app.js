const cardSection = document.getElementById('card-section')

fetch('./data.json')
    .then((request) => {
        if (!request.ok) {
            console.log("Error")
            return null
        }
        return request.json()
    })
    .then((data) => {
        data.forEach((item) => {
            const article = document.createElement('article')
            const imageDiv = document.createElement('div')
            const icon = document.createElement('img')
            const div = document.createElement('div')
            const title = document.createElement('p')
            const ellipsis = document.createElement('img')
            const bottomContent = document.createElement('div')
            const h2 = document.createElement('h2')
            const current = document.createElement('p')
            const previous = document.createElement('p')

            article.className = 'card'
            article.setAttribute('data-id', `data-${item.id}`)
            div.className = 'card-header'
            imageDiv.className = 'image-section'
            icon.className = 'header-image'
            ellipsis.className = 'ellipsis'
            bottomContent.className = 'card-bottom-content'
            h2.className = 'current'
            title.className = 'title'
            previous.className = 'previous'

            icon.src = item.image
            title.innerHTML = item.title
            ellipsis.src = './images/icon-ellipsis.svg'
            h2.innerHTML = `${item.timeframes.daily.current} hrs`
            previous.innerHTML = `Last Day - ${item.timeframes.daily.previous} hrs`

            imageDiv.appendChild(icon)
            div.appendChild(title)
            div.appendChild(ellipsis)
            article.append(imageDiv)
            article.append(div)
            bottomContent.appendChild(h2)
            bottomContent.appendChild(current)
            bottomContent.appendChild(previous)
            article.appendChild(bottomContent)
            cardSection.append(article)

            article.dataset.timeframes = JSON.stringify(item.timeframes)
        })
    })

const links = document.querySelectorAll('a')

links.forEach((link) => {
    link.addEventListener('click', function (event) {
        event.preventDefault()

        links.forEach(l => l.style.color = '')

        link.style.color = '#ffffff'

        const articles = document.querySelectorAll('.card')
        articles.forEach(article => {
            const timeframes = JSON.parse(article.dataset.timeframes)
            const h2 = article.querySelector('h2')
            const previous = article.querySelector('.previous')

            if (link.textContent === 'Daily') {
                h2.innerHTML = `${timeframes.daily.current} hrs`
                previous.innerHTML = `Last Day - ${timeframes.daily.previous} hrs`
            } else if (link.textContent === 'Weekly') {
                h2.innerHTML = `${timeframes.weekly.current} hrs`
                previous.innerHTML = `Last Week - ${timeframes.weekly.previous} hrs`
            } else if (link.textContent === 'Monthly') {
                h2.innerHTML = `${timeframes.monthly.current} hrs`
                previous.innerHTML = `Last Month - ${timeframes.monthly.previous} hrs`
            }
        })
    })
})
