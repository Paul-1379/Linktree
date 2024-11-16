window.onload = function(){
    const container = document.getElementById('links');
    

    fetch('./Data.json')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                var link = document.createElement('a');
                link.setAttribute('href', `${element.link}`);
                link.setAttribute('style', `color: #fe2f00`);
                link.setAttribute('class', `link-item`)

                var logoImg = document.createElement('img');
                logoImg.setAttribute('src', `${element.logo}`);
                logoImg.setAttribute("alt", `${element.title}`);
                logoImg.setAttribute("class", "logo link")
                link.appendChild(logoImg);
                
                var title = document.createElement('div');
                title.innerHTML = `<h2>${element.title}</h2>`;
                link.appendChild(title);
                var description = document.createElement('div');
                description.innerHTML = `${element.description}`;
                
                container.appendChild(link);
                link.appendChild(description);
            });
        })
}
