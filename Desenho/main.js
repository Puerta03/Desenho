//Pega o ID canvas no HTML
let canvas =  document.getElementById("canvas");
//Pegamos o contexto do desenho, esse é o metodo que retorna o tipo da animação, usar o parametro "2d" significa que o objeto que será renderizado serpa bidimensional
let contexto = canvas.getContext("2d");
//Variavel que vai identificar se estamos desenhando 
let desenhando = false;
//pegamos o input da paleta de cor do HTML
let corInput = document.getElementById("cor");
// Define a cor inicial do contexto de desenho
contexto.strokeStyle = corInput.value;
// adiciona um ouvinte de evento para o evento de alteração de cor
corInput.addEventListener("change", function() {
    // atualiza a cor do contexto de desenho quando o usuário escolhe uma nova cor
    contexto.strokeStyle = corInput.value;
});

let espessuraInput = document.getElementById("espessura");
// Define a espessura inicial do pincel
contexto.lineWidth = espessuraInput.value;
// Adiciona um ouvinte de evento para o evento de alteração de espessura
espessuraInput.addEventListener("input", function() {
    // Atualiza a espessura do pincel quando o usuário ajusta a barra deslizante
    contexto.lineWidth = espessuraInput.value;
});

canvas.addEventListener("mousedown", function(event){
    //Vão usar o metodo addEventListener para ouvir nosso mouse, ele irá identificar quando clicamos
    desenhando = true;
    //desenhando se torna verdade
    contexto.beginPath();
    //A variavel contexto junto com o metodo beginPath() indica que algo novo será criado
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    //Nesse metodo, vamos dizer como o contexto irá funcionar, o clientX vai fornecer as cordenadas hotizontais do mouse e o offsetLeft irá converter esse valor em (px), a mesma coisa acontece com o clientYna vertical
})

canvas.addEventListener("mousemove", function(event){
    //Função que indentifica quando movemos o mouse
    if (desenhando) {
        //Esse if vai identificar se estamos clicando enquanto movemos o mouse
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        //O lineTo vai juntar as cordenadas e identificar a linha que estamos treçando enquanto clicamos e movemos o mouse
        contexto.stroke();
        //traça a linha
    }
})

canvas.addEventListener("mouseup", function(event){
    //Essa função identifica quando não estamos mais clicando no mouse
    desenhando = false;
})