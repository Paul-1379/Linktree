window.onload = function(){
    const container = document.getElementById('data-container');
    var itemDiv = document.createElement('div');

    // Ajouter le contenu HTML avec les données de l'item
    itemDiv.innerHTML = `
        <li><h3><a href="https://paul-1379.github.io/Linktree/Data.json">https://paul-1379.github.io/Linktree/Data.json</a></h3></li>
    `;

    fetch('./Data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                itemDiv.innerHTML = `<li>${element.title}</li>`;
                console.log(`${element.title}`);
                container.appendChild(itemDiv);
            });
        })
}
