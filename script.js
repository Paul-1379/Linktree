window.onload = function(){
    const container = document.getElementById('data-container');
    

    fetch('./Data.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                var itemDiv = document.createElement('div');
                itemDiv.innerHTML = `<a href = ${element.link}>${element.title}</a>`;
                container.appendChild(itemDiv);
            });
        })
}
