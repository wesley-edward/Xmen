alert ('Bem vindo, esse projeto utiliza as tecnologias HMTL, CSS e JavaScript \n E simula a tela de escolha de personagens do antigo jogo arcade \n X-Men.');

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if(window.innerWidth < 450) {
            window.scrollTo ({top: 0, behavior: 'smooth'})
        } // Ajusta para mobile
        const personagemSelecionado = document.querySelector('.selecionado') // Remove o seletor do personagem e altera para o que o mouse esta em cima
        personagemSelecionado.classList.remove('selecionado') 
        personagem.classList.add('selecionado');   

        const imagemPersonagemGrande = document.querySelector('.personagem-grande') // Altera a imagem de selecao do personagem
        const idPersonagem = personagem.attributes.id.value; 
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem'); // Altera a visualizacao do nome para o nome do personagem selecionado
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById ('descricao-personagem'); //Altera o texto de apresentacao do personagem escolhido
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    })
})

// REFATORAR DEPOIS 