(()=>{"use strict";const e=document.querySelector("#content");(function(){const t=document.createElement("section");t.setAttribute("id","sobre"),e.appendChild(t);const n=document.createElement("h2");n.innerText="Sobre o restaurante",t.appendChild(n);const o=document.createElement("p");o.innerText="Descrição breve do restaurante",t.appendChild(o)})(),function(){const t=document.createElement("section");t.setAttribute("id","menu"),e.appendChild(t);const n=document.createElement("h2");n.innerText="Menu",t.appendChild(n);const o=(e,n,o)=>{const c=document.createElement("div");c.classList="item-menu";const d=document.createElement("h3");d.innerText=e;const r=document.createElement("p");r.innerText=n;const a=document.createElement("span");return a.innerText=o,c.appendChild(d),c.appendChild(r),c.appendChild(a),t.appendChild(c)};o("prato um","descrição prato",150),o("prato dois","descrição prato",180)}(),function(){const t=document.createElement("section");t.setAttribute("id","contato"),e.appendChild(t);const n=document.createElement("h2");titleAbout.innerText="Contato",t.appendChild(n);const o=document.createElement("p");paragraphAbout.innerText="Entre em contato conosco",t.appendChild(o),document.createElement("ul").classList="contact-list";const c=(()=>{const e=document.createElement("ul");return{addOption:(t,n)=>{const o=document.createElement("li");o.innerHTML=`<strong>${t}:</strong> ${n}`,e.appendChild(o)},render:()=>e}})();c.addOption("Whatsapp","número whatsapp"),c.addOption("Instagram","instagram"),c.addOption("Telefone","número telefone"),c.addOption("Enedereço","endereço")}()})();