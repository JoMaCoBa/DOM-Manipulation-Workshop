// Variables
const containerCards = document.querySelector('#container');

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
            title.textContent = avocado.name;
            title.classList.add('card__title');

            // image
            const image = document.createElement('img');
            image.src = `https://platzi-avo.vercel.app${avocado.image}`
            image.classList.add('card__image');

            // description
            const descriptionTitle = document.createElement('p')
            descriptionTitle.textContent = "Description";
            descriptionTitle.classList.add('card__subtitle')

            const descriptionContainer = document.createElement('div')
            descriptionContainer.classList.add('card__description');

            const description = document.createElement('p');
            description.textContent = avocado.attributes.description;
            description.classList.add('description__content');
            descriptionContainer.append(description);
            
            // Card Avocado
            const card = document.createElement('div');
            card.classList.add('card');
            card.append(title, image, descriptionTitle, descriptionContainer);

            allCards.push(card);
        });
        containerCards.append(...allCards);
    })
