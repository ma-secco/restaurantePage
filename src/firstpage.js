const contentDiv = document.querySelector('#content');

function about() {
    const section = document.createElement('section');
    section.setAttribute('id', 'sobre');
    contentDiv.appendChild(section);

    const titleAbout = document.createElement('h2');
    titleAbout.innerText = "Sobre o restaurante";
    section.appendChild(titleAbout);

    const paragraphAbout = document.createElement('p');
    paragraphAbout.innerHTML = "La Petite Boulangerie é um charmoso restaurante localizado no coração de uma pequena cidade costeira <br> Fundado por Sophie, uma chef talentosa e apaixonada pela culinária francesa, o restaurante começou como um modesto café, servindo deliciosos croissants e cafés aromáticos. Com o tempo, o café de Sophie se transformou em um destino gastronômico favorito entre os moradores locais e turistas. Seus croissants recém-assados e baguetes crocantes eram conhecidos em toda a região, e em pouco tempo, ela decidiu expandir seu cardápio para incluir pratos franceses clássicos";
    section.appendChild(paragraphAbout);

    const titleToday = document.createElement('h2');
    titleToday.innerText = "O restaurante atualmente";
    section.appendChild(titleToday);

    const paragraphToday = document.createElement('p');
    paragraphToday.innerHTML = "Com o tempo, o café de Sophie se transformou em um destino gastronômico favorito entre os moradores locais e turistas. Seus croissants recém-assados e baguetes crocantes eram conhecidos em toda a região, e em pouco tempo, ela decidiu expandir seu cardápio para incluir pratos franceses clássicos. Hoje, 'La Petite Boulangerie' é conhecido não apenas por sua excelente comida, mas também pela atmosfera acolhedora e serviço amigável. Sophie e sua equipe recebem os clientes com sorrisos calorosos e os tratam como velhos amigos, criando uma experiência gastronômica memorável a cada visita. Com sua combinação única de tradição e inovação culinária, 'La Petite Boulangerie' continua a encantar os paladares dos clientes, oferecendo uma variedade de pratos deliciosos que refletem o melhor da cozinha francesa. "
    section.appendChild(paragraphToday);

}

export { about };
