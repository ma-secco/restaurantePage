const contentDiv = document.querySelector('#content');

const functionPage = () => {
    about();
    menu();
    contact()
}

function about() {
    const section = document.createElement('section');
    section.setAttribute('id', 'sobre');
    contentDiv.appendChild(section);

    const titleAbout = document.createElement('h2');
    titleAbout.innerText = "Sobre o restaurante";
    section.appendChild(titleAbout);

    const paragraphAbout = document.createElement('p');
    paragraphAbout.innerText = "Descrição breve do restaurante";
    section.appendChild(paragraphAbout);
}

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

function contact() {
    const section = document.createElement('section');
    section.setAttribute('id', 'contato');
    contentDiv.appendChild(section);

    const titleContact = document.createElement('h2');
    titleContact.innerText = "Contato";
    section.appendChild(titleContact);

    const paragraphContact = document.createElement('p');
    paragraphContact.innerText = "Entre em contato conosco";
    section.appendChild(paragraphContact);

    const contactList = document.createElement('ul');
    contactList.classList = "contact-list"

    const createListOption = () => {
        const ul = document.createElement('ul');
    
        const addOption = (tipo, valor) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${tipo}:</strong> ${valor}`;
            ul.appendChild(li);
        };
    
        return {
            addOption,
            render: () => ul,
            
        };
    };

    const addOptionList = createListOption();

    addOptionList.addOption("Whatsapp", "número whatsapp");
    addOptionList.addOption("Instagram", "instagram");
    addOptionList.addOption("Telefone", "número telefone");
    addOptionList.addOption("Enedereço", "endereço");

    section.appendChild(addOptionList.render())

}


export { functionPage };
