document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://rickandmortyapi.com/api/character/?page=19';

    function fetchCharacters() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const characters = data.results;
                displayCharacters(characters);
            })
            .catch(error => console.error('Erro ao carregar personagens:', error));
    }

    function displayCharacters(characters) {
        const container = document.getElementById('character-container');
        container.innerHTML = ''; 
        characters.forEach(character => {
            const characterCard = document.createElement('div');
            characterCard.classList.add('character-card');
            
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}" class="character-image">
                <div class="character-info">
                    <h2 class="character-name">${character.name}</h2>
                    <p><strong>Status:</strong> ${character.status}</p>
                    <p><strong>Espécie:</strong> ${character.species}</p>
                    <p><strong>Tipo:</strong> ${character.type || 'N/A'}</p>
                    <p><strong>Origem:</strong> ${character.origin.name}</p>
                    <p><strong>Localização:</strong> ${character.location.name}</p>
                </div>
            `;

            container.appendChild(characterCard);
        });
    }

    fetchCharacters();
});