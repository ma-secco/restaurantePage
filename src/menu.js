const contentDiv = document.querySelector('#content');

function menu() {
    const section = document.createElement('section');
    section.setAttribute('id', 'menu');
    contentDiv.appendChild(section);

    const titleAbout = document.createElement('h2');
    titleAbout.innerText = "Menu";
    section.appendChild(titleAbout);

    const paragraphAbout = (item, description, price ) => {
        const div = document.createElement('div');
        div.classList = "item-menu"

        const dishTitle = document.createElement('h3');
        dishTitle.innerText = item;

        const dishDescription = document.createElement('p');
        dishDescription.innerText = description;

        const dishPrice = document.createElement('span');
        dishPrice.innerText = price;

        div.appendChild(dishTitle);
        div.appendChild(dishDescription);
        div.appendChild(dishPrice);

        return section.appendChild(div)
    }

    const pratoUm = paragraphAbout('prato um', "descrição prato", 150);
    const pratoDois = paragraphAbout('prato dois', 'descrição prato', 180)
}

export { menu };