const buttons = document.getElementById("button")
const question = document.getElementById("question")
const effect  = document.getElementById("effect")
const desespero = document.getElementById("proximo")
const queroSim = document.getElementById("sim")
const queroNao = document.getElementById("nao")


question.innerHTML = "Gostaria de jogar?"
let verdadeiro = 0
let nananinanao = 0
let proximo = false
let explorar = false
let sentado = false
let funciona = false
let sair = true
let entendiado = false
let envenenado = false
let matar = false
let ronaldo = true
function sim(){
    verdadeiro++
    console.log(verdadeiro)
    console.log(nananinanao)
}

function nao(){
    nananinanao++
    console.log(verdadeiro)
    console.log(nananinanao)
}

function next(){
    proximo = true
}

buttons.addEventListener("click", () => {
    if(verdadeiro === 1 && nananinanao === 0 ){
        question.innerHTML = "Você vê uma casa na floresta, bater na porta?"
    }else if(verdadeiro === 0 && nananinanao === 1){
        question.innerHTML = "Sem graça"
        while(buttons.firstChild){
            buttons.removeChild(buttons.firstChild);
        }
    }
    if(verdadeiro === 2 && nananinanao === 0){
        question.innerHTML = "'Alguém' te atende e você entra. <br> Ele te oferece um suco, aceita?"
        desespero.hidden = true
        queroNao.hidden = false
        queroSim.hidden = false

    }else if(verdadeiro === 1 && nananinanao === 1){
        question.innerHTML = "A porta se abre sozinha e você entra"
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
        funciona = true
    }
    if(verdadeiro === 1 && proximo === true && nananinanao === 1){
        question.innerHTML = "'Alguém' te pergunta oque está fazendo, responder?"
        desespero.hidden = true
        queroNao.hidden = false
        queroSim.hidden = false
        proximo = false
    }
    if(verdadeiro === 1 && nananinanao === 2){
        question.innerHTML = "'Alguém fica intrigado mas decide ir dormir."
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
    }else if(verdadeiro === 2 && nananinanao === 1 && funciona ===true){
        question.innerHTML = "você fala que está perdido e 'alguém' te da um mapa"
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
    }
    if(verdadeiro === 2 && nananinanao === 1 && funciona ===true && proximo === true){
        question.innerHTML = "Você agradece, sair de casa?"
        desespero.hidden = true
        queroNao.hidden = false
        queroSim.hidden = false
        proximo = false
    }
    if(verdadeiro === 3 && nananinanao === 1){
        question.innerHTML = "Você ouve barulho atrás de você, correr?"
        desespero.hidden = true
        queroNao.hidden = false
        queroSim.hidden = false

    }else if(verdadeiro === 2 && nananinanao === 1 && proximo === true && funciona === false ||verdadeiro === 2 && nananinanao === 2 && funciona ===true && proximo === false){
        question.innerHTML = 'Você se senta na mesa em silencio'
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
        sentado = true
        proximo === false
        console.log(proximo)
        console.log(sentado)
    }
    if(verdadeiro === 4 && nananinanao === 1 && sair === true){
        question.innerHTML = 'Você chega na civilização'
        effect.innerHTML = 'Neutral Ending'
        desespero.hidden = true
        queroNao.hidden = true
        queroSim.hidden = true
    }else if(verdadeiro === 3 && nananinanao === 2 && sair === true){
        question.innerHTML = "Você olha para trás e 'alguém' pula em cima de você, você morre"
        effect.innerHTML = 'Bad Ending'
        effect.style.color = 'red'
        desespero.hidden = true
        queroNao.hidden = true
        queroSim.hidden = true
    }
    if(verdadeiro === 3 && nananinanao === 0){
        question.innerHTML = 'Você bebe o suco e sua barriga começa a doer,<br> avisar a pessoa misteriosa?'
        effect.innerHTML = "enjoado"
        effect.style.color = "red"
        envenenado = true
    }else if(verdadeiro === 2 && nananinanao === 1 && funciona === false){
        question.innerHTML = "'Alguém' fica frustado e joga o suco fora deixando você intrigado"
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
        console.log(proximo)
    }
    
    if(verdadeiro === 2 && nananinanao === 1 && proximo === true && sentado === true && funciona === false){
        question.innerHTML = 'Fazer algo para passar o tempo?'
        desespero.hidden = true
        queroNao.hidden = false
        queroSim.hidden = false
        proximo = false
        entendiado = true
        sair = false
        console.log(entendiado)
    }
    if( entendiado === true && sentado === true && verdadeiro === 3 && nananinanao === 1 ){
        question.innerHTML = "Você joga truco consigo mesmo"
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
    }else if(verdadeiro === 2 && nananinanao === 2){
        question.innerHTML = "Você acaba dormindo e acordando no seu quarto"
        effect.innerHTML = 'Boring Ending'
        desespero.hidden = true
        queroNao.hidden = true
        queroSim.hidden = true
    }
    if(verdadeiro === 3 && nananinanao === 1 && proximo === true){
        question.innerHTML = "'Alguém' quer jogar e propõe um acordo, se ele aganhar voce fica para sempre mas se voce ganhar pode ir embora, jogar?"
        desespero.hidden = true
        queroNao.hidden = false
        queroSim.hidden = false
    }
    if(verdadeiro === 4 && nananinanao === 1 && sair === false){
        question.innerHTML = "Você vai jogar, trapacear?"
        desespero.hidden = true
        queroNao.hidden = false
        queroSim.hidden = false
        ronaldo ===true
    }else if(verdadeiro === 3 && nananinanao === 2 && ronaldo === true){
        question.innerHTML = "Você não tem escolha"
        effect.innerHTML = ''
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
        verdadeiro = 4
        nananinanao = 1
    }
    if(verdadeiro === 5 && nananinanao ===1){
        question.innerHTML = "Você embaralha as cartas ao seu favor, você é liberto"
        effect.innerHTML = 'Smart Ending'
        effect.style.color = 'lightgreen'
        desespero.hidden = true
        queroNao.hidden = true
        queroSim.hidden = true
    }else if(verdadeiro === 4 && nananinanao ===2){
        question.innerHTML = "Você perde e fica preso para sempre com 'Alguém'"
        effect.innerHTML = 'Bad Ending'
        effect.style.color = 'red'
        desespero.hidden = true
        queroNao.hidden = true
        queroSim.hidden = true
    }
    if(verdadeiro === 4 && nananinanao === 0){
        question.innerHTML = "'Alguém te leva até o banheiro e você vomita."
        effect.innerHTML = "seu estomago melhora"
        effect.style.color = "lightgreen"
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
    }
    if(verdadeiro === 3 && nananinanao === 1 && envenenado === true){
        question.innerHTML = "Você morre invenenado"
        effect.innerHTML = "Bad ending"
        effect.style.color = "red"
        desespero.hidden = true
        queroNao.hidden = true
        queroSim.hidden = true
    }
    if(verdadeiro === 4 && nananinanao === 0 && proximo === true|| verdadeiro === 1 && nananinanao === 2 && proximo === true){
        question.innerHTML = "Explorar a casa?"
        explorar = true
        effect.innerHTML = ''
        desespero.hidden = true
        queroNao.hidden = false
        queroSim.hidden = false
        proximo = false
        sair = false
        ronaldo = false
        console.log(proximo)
    }
    if((verdadeiro === 5 && nananinanao === 0 && proximo === false) ||verdadeiro === 2 && nananinanao === 2 && explorar === true){
        question.innerHTML = "Você encontra um livro e lê ele."
        effect.innerHTML = ''
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
        explorar = false
        matar = true
        console.log(proximo)
    }else if (verdadeiro === 1 && nananinanao === 3){
        question.innerHTML = "Você acaba dormindo na mesa e acorda no seu quarto"
        effect.innerHTML = 'Boring Ending'
        desespero.hidden = true
        queroNao.hidden = true
        queroSim.hidden = true
    }
    if(verdadeiro === 2 && nananinanao === 2 && proximo === true ||verdadeiro === 5 && nananinanao === 0 && proximo === true){
        question.innerHTML = "fazer oque o livro diz?"
        effect.innerHTML = ''
        desespero.hidden = true
        queroNao.hidden = false
        queroSim.hidden = false
        proximo = false
        console.log(proximo)
    }

    if(verdadeiro === 6 && nananinanao ===0 ||verdadeiro === 3 && nananinanao === 2  && ronaldo === false){
        question.innerHTML = "Você entra no quarto de 'alguém' e o força a beber o suco."
        desespero.hidden = false
        queroNao.hidden = true
        queroSim.hidden = true
        console.log(proximo)
    }
    if(verdadeiro === 6 && nananinanao ===0 && proximo === true || verdadeiro === 3 && nananinanao === 2 && proximo === true){
        question.innerHTML = "'Alguém' bebe o antidoto e volta a ser um ser humano"
        effect.innerHTML = 'Good Ending'
        effect.style.color = "lightgreen"
        desespero.hidden = true
        queroNao.hidden = true
        queroSim.hidden = true
    }

    
});