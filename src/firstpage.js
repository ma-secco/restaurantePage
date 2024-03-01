const contentDiv = document.querySelector('#content')

const functionPage = () => {

}

function about () {

    const section = document.createElement('section');
    section.setAttribute('id', 'sobre')
    contentDiv.appendChild(section);

    const titleAbout = document.createElement('h2');
    titleAbout.innerText = "Sobre o restaurante"

    const paragraphAbout = document.createElement('p');
    paragraphAbout.innerText = "Descrição breve do restaurante"


}



export {functionPage }