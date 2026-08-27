```javascript
/* ==========================================
   DADOS DOS GÊNEROS
========================================== */

const generos = {

    "Rock": {
        origem: "Estados Unidos e Reino Unido",
        periodo: "Década de 1950 em diante",

        descricao:
            "Rock é um gênero musical que surgiu a partir do rock and roll e de diversas tradições musicais, incluindo blues, country e rhythm and blues.",

        caracteristicas: [
            "Guitarra elétrica",
            "Baixo elétrico",
            "Bateria",
            "Vocais marcantes",
            "Uso de riffs e solos de guitarra"
        ],

        subgeneros: [
            "Hard Rock",
            "Alternative Rock",
            "Punk Rock",
            "Progressive Rock",
            "Grunge",
            "Indie Rock"
        ],

        artistas: [
            "The Beatles",
            "Queen",
            "Nirvana",
            "AC/DC",
            "Pink Floyd"
        ]
    },


    "Metal": {
        origem: "Reino Unido e Estados Unidos",
        periodo: "Final dos anos 1960 e década de 1970",

        descricao:
            "Heavy metal é um gênero conhecido por suas guitarras distorcidas, riffs pesados, bateria marcante e grande variedade de estilos.",

        caracteristicas: [
            "Guitarras distorcidas",
            "Riffs pesados",
            "Bateria intensa",
            "Vocais variados",
            "Grande utilização de solos"
        ],

        subgeneros: [
            "Heavy Metal",
            "Thrash Metal",
            "Death Metal",
            "Black Metal",
            "Doom Metal",
            "Power Metal",
            "Progressive Metal"
        ],

        artistas: [
            "Black Sabbath",
            "Metallica",
            "Iron Maiden",
            "Judas Priest",
            "Megadeth",
            "Slayer"
        ]
    },


    "Pop": {
        origem: "Estados Unidos e Reino Unido",
        periodo: "Século XX",

        descricao:
            "Pop é uma abreviação de música popular e engloba músicas criadas para alcançar um público amplo.",

        caracteristicas: [
            "Melodias fáceis de memorizar",
            "Estruturas musicais acessíveis",
            "Produção moderna",
            "Vocais em destaque",
            "Grande presença na mídia"
        ],

        subgeneros: [
            "Synth-pop",
            "Dance-pop",
            "Electropop",
            "Teen Pop",
            "Art Pop"
        ],

        artistas: [
            "Michael Jackson",
            "Madonna",
            "Taylor Swift",
            "Lady Gaga",
            "Britney Spears"
        ]
    },


    "Hip-Hop": {
        origem: "Bronx, Nova York",
        periodo: "Década de 1970",

        descricao:
            "Hip-hop é uma cultura e movimento artístico que envolve música, dança, arte visual e outras formas de expressão.",

        caracteristicas: [
            "Rimas",
            "Beats",
            "Sampling",
            "DJing",
            "Produção eletrônica"
        ],

        subgeneros: [
            "East Coast Hip-Hop",
            "West Coast Hip-Hop",
            "Trap",
            "Boom Bap",
            "Conscious Hip-Hop"
        ],

        artistas: [
            "Eminem",
            "Tupac",
            "The Notorious B.I.G.",
            "Jay-Z",
            "Kendrick Lamar"
        ]
    }

};


/* ==========================================
   ARTISTAS
========================================== */

const artistas = {

    "Metallica": {
        genero: "Thrash Metal",
        origem: "Los Angeles, Califórnia",
        formacao: "1981",

        descricao:
            "Metallica é uma banda norte-americana de heavy metal formada em 1981. A banda tornou-se uma das maiores representantes do thrash metal e teve grande influência sobre o metal posterior.",

        integrantes:
            "James Hetfield, Lars Ulrich, Kirk Hammett e Robert Trujillo",

        albuns: [
            "Kill 'Em All",
            "Ride the Lightning",
            "Master of Puppets",
            "...And Justice for All",
            "Metallica"
        ]
    },


    "The Beatles": {
        genero: "Rock",
        origem: "Liverpool, Inglaterra",
        formacao: "1960",

        descricao:
            "The Beatles foi uma banda britânica formada em Liverpool e é considerada uma das bandas mais influentes da história da música popular.",

        integrantes:
            "John Lennon, Paul McCartney, George Harrison e Ringo Starr",

        albuns: [
            "Please Please Me",
            "Rubber Soul",
            "Revolver",
            "Sgt. Pepper's Lonely Hearts Club Band",
            "Abbey Road"
        ]
    },


    "Michael Jackson": {
        genero: "Pop",
        origem: "Gary, Indiana, Estados Unidos",
        formacao: "Carreira solo",

        descricao:
            "Michael Jackson foi um cantor, compositor e dançarino norte-americano. Sua carreira teve enorme impacto na música popular e na cultura visual dos videoclipes.",

        integrantes:
            "Artista solo",

        albuns: [
            "Off the Wall",
            "Thriller",
            "Bad",
            "Dangerous",
            "HIStory"
        ]
    },


    "Eminem": {
        genero: "Hip-Hop",
        origem: "Detroit, Michigan, Estados Unidos",
        formacao: "Carreira solo",

        descricao:
            "Eminem é um rapper, compositor e produtor musical norte-americano conhecido por suas rimas, técnica vocal e influência no hip-hop.",

        integrantes:
            "Artista solo",

        albuns: [
            "The Slim Shady LP",
            "The Marshall Mathers LP",
            "Encore",
            "Relapse",
            "Recovery"
        ]
    },


    "Black Sabbath": {
        genero: "Heavy Metal",
        origem: "Birmingham, Inglaterra",
        formacao: "1968",

        descricao:
            "Black Sabbath é uma banda britânica frequentemente associada ao desenvolvimento do heavy metal.",

        integrantes:
            "Ozzy Osbourne, Tony Iommi, Geezer Butler e Bill Ward",

        albuns: [
            "Black Sabbath",
            "Paranoid",
            "Master of Reality",
            "Vol. 4",
            "Sabbath Bloody Sabbath"
        ]
    }

};


/* ==========================================
   NAVEGAÇÃO
========================================== */

function mostrarPagina(id) {

    document.querySelectorAll(".pagina")
        .forEach(pagina => {
            pagina.classList.add("hidden");
        });

    document.getElementById(id)
        .classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   LISTA DE GÊNEROS
========================================== */

function carregarGeneros() {

    const container =
        document.getElementById("generosContainer");

    container.innerHTML = "";

    for (const nome in generos) {

        const genero = generos[nome];

        const box = document.createElement("article");

        box.className = "genre-box";

        box.innerHTML = `

            <h2>${nome}</h2>

            <p>
                ${genero.descricao}
            </p>

            <p>
                <strong>Origem:</strong>
                ${genero.origem}
            </p>

            <p>
                <strong>Período:</strong>
                ${genero.periodo}
            </p>

            <button onclick="abrirGenero('${nome}')">
                Ver artigo completo
            </button>
        `;

        container.appendChild(box);
    }
}


/* ==========================================
   LISTA DE ARTISTAS
========================================== */

function carregarArtistas() {

    const container =
        document.getElementById("artistasContainer");

    container.innerHTML = "";

    for (const nome in artistas) {

        const artista = artistas[nome];

        const card = document.createElement("article");

        card.className = "artist-card";

        card.onclick = () => abrirArtista(nome);

        card.innerHTML = `

            <div class="artist-image">
                ${nome.substring(0, 2).toUpperCase()}
            </div>

            <h3>${nome}</h3>

            <p>${artista.genero}</p>
        `;

        container.appendChild(card);
    }
}


/* ==========================================
   ABRIR GÊNERO
========================================== */

function abrirGenero(nome) {

    const genero = generos[nome];

    if (!genero) return;

    const container =
        document.getElementById("detalhesContainer");

    container.innerHTML = `

        <article class="article">

            <div class="info-box">

                <strong>Origem</strong>
                ${genero.origem}

                <br><br>

                <strong>Período</strong>
                ${genero.periodo}

            </div>

            <h1>${nome}</h1>

            <p>
                ${genero.descricao}
            </p>


            <h2>Características</h2>

            <ul>
                ${genero.caracteristicas
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>


            <h2>Subgêneros</h2>

            <ul>
                ${genero.subgeneros
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>


            <h2>Artistas importantes</h2>

            <ul>
                ${genero.artistas
                    .map(item => `<li>${item}</li>`)
                    .join("")}
            </ul>

        </article>
    `;

    mostrarPagina("detalhes");
}


/* ==========================================
   ABRIR ARTISTA
========================================== */

function abrirArtista(nome) {

    const artista = artistas[nome];

    if (!artista) return;

    const container =
        document.getElementById("detalhesContainer");

    container.innerHTML = `

        <article class="article">

            <div class="info-box">

                <strong>Gênero</strong>
                ${artista.genero}

                <br><br>

                <strong>Origem</strong>
                ${artista.origem}

                <br><br>

                <strong>Formação / carreira</strong>
                ${artista.formacao}

            </div>

            <h1>${nome}</h1>

            <p>
                ${artista.descricao}
            </p>


            <h2>Integrantes / formação</h2>

            <p>
                ${artista.integrantes}
            </p>


            <h2>Álbuns importantes</h2>

            <ul>

                ${artista.albuns
                    .map(album => `<li>${album}</li>`)
                    .join("")}

            </ul>

        </article>
    `;

    mostrarPagina("detalhes");
}


/* ==========================================
   PESQUISA
========================================== */

function pesquisar() {

    const termo =
        document.getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    if (!termo) return;


    for (const nome in generos) {

        if (nome.toLowerCase().includes(termo)) {

            abrirGenero(nome);
            return;
        }
    }


    for (const nome in artistas) {

        if (nome.toLowerCase().includes(termo)) {

            abrirArtista(nome);
            return;
        }
    }


    alert(
        "Nenhum gênero, artista ou banda encontrado."
    );
}


document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            pesquisar();
        }

    });


/* ==========================================
   QUIZ
========================================== */

const perguntas = [

    {
        pergunta:
            "Qual banda é associada ao desenvolvimento do thrash metal?",

        opcoes: [
            "Metallica",
            "ABBA",
            "Bee Gees",
            "The Beach Boys"
        ],

        correta: 0
    },

    {
        pergunta:
            "Qual cidade é associada ao nascimento do movimento hip-hop?",

        opcoes: [
            "Bronx, Nova York",
            "Liverpool",
            "Seattle",
            "Birmingham"
        ],

        correta: 0
    },

    {
        pergunta:
            "Qual álbum do Metallica foi lançado em 1986?",

        opcoes: [
            "Master of Puppets",
            "Thriller",
            "Abbey Road",
            "Nevermind"
        ],

        correta: 0
    },

    {
        pergunta:
            "Qual destes artistas é conhecido principalmente pelo hip-hop?",

        opcoes: [
            "Eminem",
            "Ozzy Osbourne",
            "Freddie Mercury",
            "David Bowie"
        ],

        correta: 0
    },

    {
        pergunta:
            "Qual banda britânica lançou Abbey Road?",

        opcoes: [
            "The Beatles",
            "Black Sabbath",
            "Iron Maiden",
            "Queen"
        ],

        correta: 0
    }

];


let pontuacao = 0;
let perguntaAtual = 0;


function iniciarQuiz() {

    pontuacao = 0;
    perguntaAtual = 0;

    mostrarPergunta();
}


function mostrarPergunta() {

    const container =
        document.getElementById("quizContainer");

    if (perguntaAtual >= perguntas.length) {

        mostrarResultado();
        return;
    }


    const pergunta =
        perguntas[perguntaAtual];


    container.innerHTML = `

        <div class="question">

            <p>
                Pergunta ${perguntaAtual + 1}
                de ${perguntas.length}
            </p>

            <h3>
                ${pergunta.pergunta}
            </h3>


            ${pergunta.opcoes
                .map((opcao, index) => `

                    <button
                        class="option"
                        onclick="responder(${index})">

                        ${opcao}

                    </button>

                `)
                .join("")}

        </div>
    `;
}


function responder(resposta) {

    const pergunta =
        perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".option");


    botoes.forEach(botao => {
        botao.disabled = true;
    });


    if (resposta === pergunta.correta) {

        pontuacao++;

        botoes[resposta]
            .classList.add("correct");

    } else {

        botoes[resposta]
            .classList.add("wrong");

        botoes[pergunta.correta]
            .classList.add("correct");
    }


    setTimeout(() => {

        perguntaAtual++;

        mostrarPergunta();

    }, 900);
}


function mostrarResultado() {

    const container =
        document.getElementById("quizContainer");

    let mensagem;

    if (pontuacao === perguntas.length) {
        mensagem = "Excelente! Você conhece muito de música!";
    }

    else if (pontuacao >= 3) {
        mensagem = "Muito bom! Você tem bons conhecimentos musicais.";
    }

    else {
        mensagem = "Continue explorando a MusicPedia!";
    }


    container.innerHTML = `

        <div class="quiz-result">

            <h2>Resultado</h2>

            <p>
                Você acertou
                <strong>
                    ${pontuacao}/${perguntas.length}
                </strong>
                perguntas.
            </p>

            <p>
                ${mensagem}
            </p>

            <button
                class="hero-button"
                onclick="iniciarQuiz()">

                Jogar novamente

            </button>

        </div>
    `;
}


/* ==========================================
   INICIALIZAÇÃO
========================================== */

carregarGeneros();
carregarArtistas();

iniciarQuiz();
```
