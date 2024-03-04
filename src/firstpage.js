const contentDiv = document.querySelector('#content');

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

const functionPage = () => {
    about();
}

export { functionPage };
