document.addEventListener('DOMContentLoaded', () =>{
    const imgContainer = document.querySelector('.image-container');

    const images = [
        {
            src: '../images/fox.jpg',
            type: 'Fenec',
            name: 'Fox',
            country: 'India'

        },
        {
            src: '../images/whale.jpg',
            type: 'Humpback',
            name: 'whale',
            country: 'South Africa'

        },
        {
            src: '../images/baboon.jpg',
            type: 'Common Brown',
            name: 'Baboon',
            country: 'South Africa'

        },
        {
            src: '../images/deer.jpg',
            type: 'Spotted',
            name: 'Deer',
            country: 'Amazon'

        }

    ]
    images.forEach(image => {
        const imageItem = document.createElement('div')
        imageItem.className = 'image-item'
        img = document.createElement('img')
        img.src = image.src
        const imageDescription = document.createElement('div')
        imageDescription.className=('des')
        
        imageDescription.innerHTML = `<h2 class="type">${image.type}</h2><h2 class="name">${image.name}</h2><p>${image.country}</p><div class="Read more">Read more <img src="" alt=""></div>`


        
        imageItem.appendChild(imageDescription)
        imageItem.appendChild(img)
        imgContainer.appendChild(imageItem)
    })
})