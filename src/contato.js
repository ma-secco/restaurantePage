const contentDiv = document.querySelector('#content');

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

export { contato };