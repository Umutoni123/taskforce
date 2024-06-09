document.addEventListener('DOMContentLoaded', () => {
    const imgContainer = document.querySelector('.image-container');

    const images = [
        {
            src: '../images/fox.jpg',
            type: 'FENNEC',
            name: 'FOX',
            country: 'India'
        },
        {
            src: '../images/whale.jpg',
            type: 'HUMPACK',
            name: 'WHALE',
            country: 'South Africa'
        },
        {
            src: '../images/baboon.jpg',
            type: 'COMMON BROWN',
            name: 'BABBONN',
            country: 'South Africa'
        },
        {
            src: '../images/deer.jpg',
            type: 'SPOTTED',
            name: 'DEER',
            country: 'Amazon'
        }
    ];

    images.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';

        const img = document.createElement('img');
        img.src = image.src;

        const imageDescription = document.createElement('div');
        imageDescription.className = 'des';
        imageDescription.innerHTML = `
            <h2 class="type">${image.type} <br/> ${image.name}</h2>
            
            <p class="country">${image.country}</p>
            <div class="read-more">Know more <i class="fas fa-arrow-right"></i> <img src="" alt=""></div>
        `;

        imageItem.appendChild(img);
        imageItem.appendChild(imageDescription);
        imgContainer.appendChild(imageItem);
    });
});
