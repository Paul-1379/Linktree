window.onload = function(){
    const container = document.getElementById('links');
    

    fetch('./Data.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                var link = document.createElement('a');
                link.setAttribute('href', `${element.link}`);
                link.innerHTML = `<img src="${element.logo}" alt=${element.title} class="logo link">`;
                container.appendChild(link);
            });
        })
}
