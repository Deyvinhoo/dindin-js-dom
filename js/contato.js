let header = document.querySelector("header");
header.style.backgroundColor = "#2E948A";

let linkCursos = document.querySelector("#menu_opcoes nav a");
linkCursos.setAttribute("href","/cursos.html");

let linkForm = document.querySelector("form");
linkForm.setAttribute("action","sucesso.html");
//document.querySelector("form").action = "sucesso.html;"

let inputTelefone = document.createElement("input");
inputTelefone.setAttribute("type", "tel");
inputTelefone.setAttribute("placeholder", "telefone");
let textRef = document.querySelector("textarea");
let formPai = document.querySelector("form");
formPai.insertBefore(inputTelefone, textRef);

let mensagem = document.getElementsByTagName("textarea")[0];
mensagem.style.boxSizing = "border-box";

document.getElementsByTagName("button")[0].style.width = "auto";

let commentTitle = document.createElement('section');
   commentTitle.setAttribute('class', 'titulo depoimento');
   commentTitle.innerHTML = '<h3>Depoismentos</h3>';
   let comments = document.createElement('section');

   comments.setAttribute('id', 'falam_sobre');
   comments.innerHTML = `<section id='falam_sobre'>

   <div class="depoimentos">
      <img src="./imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
      <p>
         ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
         totam rem aperiam.”
        <br>
        <br>
         Wally, 25
      </p>
      </div>
    
      <div class="depoimentos">
         <img src="./imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
         <p>
           ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
           laudantium, totam rem aperiam.”
           <br>
           <br>
           Jaden Smith, 23
         </p>
      </div>
    
      <div class="depoimentos">
         <img src="./imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
         <p>
           ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
           laudantium, totam rem aperiam.”
           <br>
           <br>
           Whoopi Goldberg, 37
         </p>
      </div>
    
      <div class="depoimentos">
         <img src="./imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
         <p>
           ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
           laudantium, totam rem aperiam.”
           <br>
           <br>
           Janes Joplin, 29
         </p>
      </div>
   </section>`
    
   let mainArea = document.querySelector('main');
   mainArea.append(commentTitle, comments);
   let commentsStyle = document.querySelector('head');
   commentsStyle.innerHTML += '<link rel="stylesheet" href="/css/index.css">';
