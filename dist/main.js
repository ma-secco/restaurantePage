(()=>{"use strict";const e=document.querySelector("#content"),o=document.querySelector("#content"),t=document.querySelector("#content"),n=document.querySelector("#content"),a=document.querySelector("#home"),c=document.querySelector("#menu"),r=document.querySelector("#contact");a.addEventListener("click",(()=>{n.innerHTML="",function(){const o=document.createElement("section");o.setAttribute("id","sobre"),e.appendChild(o);const t=document.createElement("h2");t.innerText="Sobre o restaurante",o.appendChild(t);const n=document.createElement("p");n.innerHTML="La Petite Boulangerie é um charmoso restaurante localizado no coração de uma pequena cidade costeira <br> Fundado por Sophie, uma chef talentosa e apaixonada pela culinária francesa, o restaurante começou como um modesto café, servindo deliciosos croissants e cafés aromáticos. Com o tempo, o café de Sophie se transformou em um destino gastronômico favorito entre os moradores locais e turistas. Seus croissants recém-assados e baguetes crocantes eram conhecidos em toda a região, e em pouco tempo, ela decidiu expandir seu cardápio para incluir pratos franceses clássicos",o.appendChild(n);const a=document.createElement("h2");a.innerText="O restaurante atualmente",o.appendChild(a);const c=document.createElement("p");c.innerHTML="Com o tempo, o café de Sophie se transformou em um destino gastronômico favorito entre os moradores locais e turistas. Seus croissants recém-assados e baguetes crocantes eram conhecidos em toda a região, e em pouco tempo, ela decidiu expandir seu cardápio para incluir pratos franceses clássicos. Hoje, 'La Petite Boulangerie' é conhecido não apenas por sua excelente comida, mas também pela atmosfera acolhedora e serviço amigável. Sophie e sua equipe recebem os clientes com sorrisos calorosos e os tratam como velhos amigos, criando uma experiência gastronômica memorável a cada visita. Com sua combinação única de tradição e inovação culinária, 'La Petite Boulangerie' continua a encantar os paladares dos clientes, oferecendo uma variedade de pratos deliciosos que refletem o melhor da cozinha francesa. ",o.appendChild(c)}()})),c.addEventListener("click",(()=>{n.innerHTML="",function(){const e=document.createElement("section");e.setAttribute("id","menu"),o.appendChild(e);const t=document.createElement("h2");t.innerText="Menu",e.appendChild(t);const n=(o,t,n)=>{const a=document.createElement("div");a.classList="item-menu";const c=document.createElement("h3");c.innerText=o;const r=document.createElement("p");r.innerText=t;const s=document.createElement("span");return s.innerText=n,a.appendChild(c),a.appendChild(r),a.appendChild(s),e.appendChild(a)};n("prato um","descrição prato",150),n("prato dois","descrição prato",180)}()})),r.addEventListener("click",(()=>{n.innerHTML="",function(){const e=document.createElement("section");e.setAttribute("id","contato"),t.appendChild(e);const o=document.createElement("h2");o.innerText="Contato",e.appendChild(o);const n=document.createElement("p");n.innerText="Entre em contato conosco",e.appendChild(n),document.createElement("ul").classList="contact-list";const a=(()=>{const e=document.createElement("ul");return{addOption:(o,t)=>{const n=document.createElement("li");n.innerHTML=`<strong>${o}:</strong> ${t}`,e.appendChild(n)},render:()=>e}})();a.addOption("Whatsapp","número whatsapp"),a.addOption("Instagram","instagram"),a.addOption("Telefone","número telefone"),a.addOption("Enedereço","endereço"),e.appendChild(a.render())}()}))})();