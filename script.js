window.onload = function(){
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data-container');

        // Parcourir chaque élément du JSON
        data.forEach(item => {
            // Créer un élément div pour chaque item
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
  
            // Ajouter le contenu HTML avec les données de l'item
            itemDiv.innerHTML = `
                <h3><a href=${item.link}>${item.title}</a></h3>
            `;
  
            // Ajouter l'élément à l'intérieur du conteneur
            container.appendChild(itemDiv);
        });
    })
    .catch(error => console.error('Erreur lors du chargement du JSON:', error));

}