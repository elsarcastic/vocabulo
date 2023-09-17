let info = document.getElementById("info-btn")
let infoPopup = document.getElementById("info")
let winPopup = document.getElementById("win")
let losePopup = document.getElementById("lose")
let ttJogos = 0
let ttVitoria = 0
let vitSeq = 0
let bestSeq = 0

info.addEventListener("click", () => {
  infoPopup.style.visibility = "visible"
})

window.addEventListener("click", function (event) {
  if(event.target == infoPopup || event.target == winPopup || event.target == losePopup) {
    winPopup.style.visibility = "hidden"
    infoPopup.style.visibility = "hidden"
    //losePopup.style.display = "none"
  }
})

let arrayFraseFinal = ['Impressionante!', 'Incrível!', 'Que mente brilhante!','Boa! Pronto para a próxima?',
'Continue assim e será capaz de ultrapassar Albert Einstein.', 'Não acredito que adivinhou >:(', 'Estava tão fácil assim?',
'Foi você que inventou o português?',]

function popUpFinal() {
  let indexFinal = Math.floor(Math.random() * arrayFraseFinal.length)
  let fraseFinal = arrayFraseFinal[indexFinal]

  // display da quantidade de vitorias e de total de jogos
  document.getElementById('tt-jogos').innerHTML = ttJogos
  document.getElementById('tt-vit').innerHTML = ttVitoria
  document.getElementById('porc-vit').innerHTML = (((ttJogos / ttVitoria) * 100) || 0 ) + "%"
  document.getElementById('seq-vit').innerHTML = vitSeq
  document.getElementById('best-seq').innerHTML = bestSeq

  

  document.getElementById('frase-final'). innerHTML = fraseFinal
}

popUpFinal()


const palavras = new Set([
  "barro", "limpo", "campa", "gemer", "retro", "macho", "calvo", "porca", "findo", "axial",
  "venho", "punha", "louro", "logia", "canil", "justa", "lutar", "farol", "fazes", "sabor",
  "arroz", "mimar", "rente", "enjoo", "chave", "veloz", "salva", "lousa", "firma", "baixa",
  "torna", "coevo", "zumbi", "longo", "vazia", "pedro", "sigla", "solta", "ousar", "forro",
  "falsa", "fugiu", "reler", "gueto", "tumba", "farto", "sexto", "outra", "corar", "lucro",
  "urgir", "subir", "dados", "louca", "nariz", "valer", "penca", "mania", "custo", "repor",
  "toque", "sugar", "cacto", "disso", "modal", "diabo", "passe", "corte", "versa", "sadio",
  "sagaz", "negro", "termo", "mexer", "nobre", "senso", "afeto", "algoz", "plena", "fazer",
  "assim", "sutil", "vigor", "fosse", "sanar", "audaz", "poder", "ideia", "cerne", "inato",
  "moral", "desde", "sobre", "justo", "muito", "honra", "torpe", "sonho", "etnia", "anexo",
  "amigo", "tange", "lapso", "expor", "haver", "dengo", "tempo", "casal", "seara", "redor",
  "pesar", "ardil", "genro", "causa", "saber", "dizer", "posse", "coser", "dever", "fruta",
  "tenaz", "prole", "corja", "brado", "cravo", "comum", "sendo", "temor", "ainda", "ceder",
  "digno", "pauta", "estar", "assaz", "culto", "atroz", "mundo", "censo", "fugaz", "linha",
  "carne", "forte", "vício", "vulgo", "valha", "cozer", "denso", "pudor", "dogma", "regra",
  "criar", "louco", "jeito", "mesmo", "round", "ordem", "banal", "impor", "clava", "pedir",
  "homem", "feliz", "apraz", "tenro", "desse", "usura", "coisa", "servo", "todos", "prosa",
  "limbo", "forma", "presa", "viril", "ontem", "falar", "cunho", "manso", "devir", "meiga",
  "posso", "vendo", "certo", "fluir", "afago", "valor", "puder", "guisa", "visar", "acaso",
  "lugar", "temer", "abrir", "afins", "cisma", "pleno", "bruma", "legal", "obter", "gerar",
  "matiz", "crise", "praxe", "garbo", "burro", "folia", "fluxo", "havia", "enfim", "linda",
  "ritmo", "tomar", "olhar", "parvo", "morte", "brega", "levar", "bravo", "casta", "pulha",
  "favor", "vital", "prumo", "reter", "valia", "ajuda", "cosmo", "queda", "grato", "vivaz",
  "laico", "tecer", "possa", "falta", "ameno", "cabal", "ouvir", "carma", "misto", "viver",
  "nicho", "achar", "noite", "calma", "passo", "selar", "fator", "outro", "rogar", "cobre",
  "anelo", "coeso", "farsa", "fardo", "pobre", "ativo", "épico", "citar", "sinto", "rever",
  "tendo", "adiar", "sonso", "leigo", "terra", "gente", "haste", "sesta", "humor", "cesta",
  "sulco", "deter", "tende", "revel", "exato", "velho", "amplo", "claro", "vemos", "atuar",
  "lavra", "labor", "feixe", "imune", "ponto", "igual", "ideal", "gesto", "marco", "hiato",
  "fonte", "terno", "ambos", "toada", "sonsa", "remir", "ficar", "capaz", "cauda", "jovem",
  "papel", "vazio", "inata", "tenra", "tanto", "velar", "relva", "xeque", "algum", "leito",
  "horda", "apoio", "probo", "doido", "pouco", "raiva", "nossa", "entre", "coesa", "sente",
  "vimos", "frase", "minha", "feito", "verso", "anuir", "botar", "rigor", "chuva", "cruel",
  "massa", "dorso", "brisa", "signo", "ciclo", "chata", "prece", "trama", "fauna", "credo",
  "lazer", "covil", "preso", "maior", "casto", "morar", "carro", "furor", "peste", "ambas",
  "pegar", "flora", "largo", "sorte", "seita", "adeus", "vetor", "houve", "livro", "setor",
  "senda", "marca", "meses", "manha", "irado", "comer", "plano", "peixe", "beata", "aceso",
  "ardor", "nunca", "visse", "vulto", "salvo", "ocaso", "breve", "vasto", "saiba", "prata",
  "antro", "morro", "birra", "pajem", "prado", "rezar", "reger", "mudar", "junto", "segue",
  "avaro", "motim", "sinal", "praia", "chulo", "parte", "campo", "lenda", "grupo", "acima",
  "andar", "fugir", "treta", "negar", "brava", "risco", "parar", "calor", "leite", "rapaz",
  "fitar", "jazia", "agora", "prazo", "tenso", "gerir", "puxar", "alude", "antes", "resta",
  "bando", "norma", "tosco", "tirar", "malta", "psico", "exame", "texto", "conta", "reino",
  "verbo", "arcar", "praga", "corpo", "aonde", "filho", "venal", "cheio", "preto", "prova",
  "quase", "quota", "voraz", "traga", "logro", "certa", "fatal", "festa", "soldo", "acesa",
  "solar", "apego", "sumir", "fixar", "pompa", "fatos", "ligar", "coito", "caixa", "alado",
  "messe", "mente", "solto", "perda", "tocar", "magia", "lindo", "afora", "fraco", "torta",
  "dessa", "livre", "parca", "turva", "tinha", "apelo", "exijo", "grave", "lidar", "trote",
  "opaco", "firme", "molde", "sabia", "canto", "trupe", "longe", "pardo", "fenda", "nosso",
  "elite", "faixa", "astro", "bater", "vezes", "navio", "grata", "salve", "viria", "autor",
  "sexta", "supra", "ficha", "pique", "porta", "atual", "deixa", "junco", "salto", "ostra",
  "macio", "bicho", "calda", "douto", "besta", "verba", "cousa", "abuso", "abriu", "posto",
  "curso", "judeu", "molho", "locus", "caber", "supor", "torso", "light", "extra", "bioma",
  "desta", "culpa", "menos", "zelar", "vosso", "asilo", "combo", "vinha", "turvo", "baixo",
  "gosto", "pisar", "agudo", "advir", "suave", "rouca", "super", "ereto", "chato", "facho",
  "aluno", "cervo", "turma", "paira", "finda", "facto", "pilar", "amena", "meigo", "surja",
  "chama", "peito", "ponte", "piada", "brabo", "tento", "feudo", "autos", "rumor", "toldo",
  "museu", "local", "barco", "tetra", "mesma", "moeda", "geral", "lasso", "optar", "boato",
  "drama", "hobby", "poema", "passa", "folga", "medir", "coral", "teste", "clima", "forem",
  "rubro", "pacto", "ateia", "poeta", "crime", "ponha", "golpe", "feroz", "busca", "cetro",
  "cacho", "tacha", "penta", "vigia", "aroma", "letal", "idoso", "daqui", "aviso", "verde",
  "calmo", "monte", "amiga", "carta", "pasmo", "quero", "ecoar", "rival", "vetar", "coroa",
  "plumo", "fazia", "briga", "tribo", "falha", "monge", "conto", "cover", "lasca", "pedra",
  "plebe", "roupa", "finjo", "densa", "tarde", "galho", "venha", "axila", "manga", "chefe",
  "grama", "fruto", "plaga", "macro", "casar", "civil", "cargo", "saldo", "sarau", "vento",
  "itens", "perco", "farta", "berro", "virar", "ornar", "arado", "nuvem", "viram", "troca",
  "pinho", "bruta", "etapa", "beijo", "tiver", "magna", "fosso", "seixo", "jejum", "traje",
  "amada", "deste", "assar", "areia", "surto", "trato", "renda", "perto", "bruto", "seiva",
  "tutor", "inter", "porte", "amado", "mídia", "canso", "guria", "volta", "gabar", "feita",
  "bazar", "vedar", "rural", "arfar", "natal", "depor", "gruta", "irado", "tchau", "nesse",
  "jogar", "cifra", "bucho", "laudo", "pomar", "vadio", "curva", "fossa", "pavor", "odiar",
  "pasto", "pizza", "pesca", "piano", "perca"
]);

function sortearPalavra() {
  const arrayPalavras = Array.from(palavras)
  let indexAleatorio = Math.floor(Math.random() * arrayPalavras.length)
  palavraDoJogo = arrayPalavras[indexAleatorio]
  ttJogos += 1
  return palavraDoJogo, ttJogos
}

let ttPal = document.getElementById('total-set')

ttPal.innerHTML = palavras.size

function selectLetter() {
  window.onload = sortearPalavra()
  const arrayResposta = palavraDoJogo.split("")
  let iRow = 1
  let iInput = 1
  let arrayTent = []
  let arrayCorretos = [0,0,0,0,0]
  let foraBase = document.querySelector('.warning')
  let input = document.querySelector(`#row-${iRow} > #letter-${iInput}`)
  input.focus()
  console.log(input)

  addEventListener('keyup', function (e) {
    console.log(e.code, e.which)

    if (e.key === 'Backspace') {
      if (iInput <= 1) { }
      else {
        arrayTent.pop()
        iInput -= 1
        input = document.querySelector(`#row-${iRow} > #letter-${iInput}`)
        input.focus()
      }
    } else if (e.which >= 65 && e.which <= 90) {
      console.log(input.value)
      if (input.value.length > 0 && iInput < 6) {
        arrayTent.push(input.value.toLowerCase())
        iInput += 1
        input = document.querySelector(`#row-${iRow} > #letter-${iInput}`)
        if (iInput < 6) {
          input.focus()
        }
      }

    } else if (e.key === 'Enter' && iInput === 6) {
      console.log(arrayTent)
      let tentativa = arrayTent.join('').toLowerCase()
      if (palavras.has(tentativa)) {
        console.log('A palavra está em nossa base!')
        for (let tent = 0; tent < 5; tent++) {
          if (arrayResposta[tent] == arrayTent[tent]) {
            console.log('A letra ' + arrayTent[tent].toUpperCase() + ' está na posição correta!')
            input = document.querySelector(`#row-${iRow} > #letter-${tent + 1}`)
            input.classList.add('pos-certa')
            arrayCorretos[tent] = 1

            this.document.getElementById(arrayTent[tent]).classList.add('pos-certa')
            input.disabled = true
          } else if (arrayResposta.includes(arrayTent[tent])) {
            console.log('A letra ' + arrayTent[tent].toUpperCase() + ' está na palavra!')
            input = document.querySelector(`#row-${iRow} > #letter-${tent + 1}`)
            input.classList.add('pos-errada')
            this.document.getElementById(arrayTent[tent]).classList.add('pos-errada')
            input.disabled = true
          } else {
            console.log('A letra ' + arrayTent[tent].toUpperCase() + ' não está na palavra!')
            input = document.querySelector(`#row-${iRow} > #letter-${tent + 1}`)
            input.classList.add('fora-pal')
            this.document.getElementById(arrayTent[tent]).classList.add('fora-tec')
            input.disabled = true
          }
        }
        iInput = 1
        iRow += 1
        input = document.querySelector(`#row-${iRow} > #letter-${iInput}`)
        input.focus()
        arrayTent = []
      } else {
        let linhaAtual = document.querySelector(`#row-${iRow}`)
        linhaAtual.classList.add('shake')
        foraBase.classList.add('show')

        this.setTimeout(() => {
          linhaAtual.classList.remove('shake')
          foraBase.classList.remove('show')
        }, 2000)
      }

      if(iRow === 6 & arrayCorretos.find(element => element === 0)) {
        console.log('Perdeu') 
      } else if(arrayCorretos.every(element => element === 1)) {
        this.setTimeout(() => {
        winPopup.style.visibility = "visible"
        })
        if(this.localStorage.getItem("tt-vitoria")) {
          let valor = this.localStorage.getItem("tt-vitoria")
          console.log(valor)
          valor += 1
        } else {
          this.localStorage.setItem("tt-vitoria",1)
        }
      }
    }
  })
}

selectLetter()

function getinput() {
  let iRow = 1
  let iInput = 1
  let input = document.querySelector(`#row-${iRow} > #letter-${iInput}`)
  console.log(input)

  addEventListener('keyup', function (e) {
    let input = document.querySelector(`#row-${iRow} > #letter-${iInput}`)
    input.focus()
    console.log(e.code, e.which)
    if (e.which >= 65 && e.which <= 90) {
      console.log(input.value)
      if (input.value.length > 0 && iInput < 6) {
        iInput += 1
        input = document.querySelector(`#row-${iRow} > #letter-${iInput}`)
        input.focus()
      } else {
        iRow += 1
        Input = 1
        input = document.querySelector(`#row-${iRow} > #letter-${iInput}`)
        input.focus()
      }
    }

  })

}
