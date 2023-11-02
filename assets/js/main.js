// Variables
const containerCards = document.querySelector('#container-cards');

// The URL of the API from which we will extract the data.
const urlAvocado = 'https://platzi-avo.vercel.app/api/avo';

// API WEB
// Connect to the server
window
    .fetch(urlAvocado)
    // Process the response and convert it to JSON.
    .then(response => response.json())
// JSON -> Data -> Render information to the browser.
    .then(responseJSON => {
        const allCards = [];
        responseJSON.data.forEach( avocado => {
            // For each avocado, I will create the title, image, and description.
            // title
            const title = document.createElement('h4');
            title.classList.add('card__title');

            // image
            const image = document.createElement('img');
            image.classList.add('card__image');
            // description
            const description = document.createElement('p');
            description.classList.add('card__description');
            
            // Card Avocado
            const card = document.createElement('div');
            card.classList.add('card');
            card.append(title, image, description);

            allCards.push(card);
        });
        containerCards.append(...allCards);
    })