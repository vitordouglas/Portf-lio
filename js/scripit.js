const projects =
    [
        {
            "name": "Site Web - Modelo de Portfólio",
            "description": "O projeto consiste em um web site modelo de um portfólio para Devs",
            "link": "#",
            "icone": "fab fa-github",
            "stack": "HTML, CSS e JS"
        },
        {
            "name": "Nome do Projeto",
            "description": "Projetos iniciante criado com apoio do curso em vídeo.",
            "link": "#",
            "icone": "fab fa-github",
            "stack": "HTML, CSS, JS"
        },
        {
            "name": "Nome do Projeto",
            "description": "",
            "link": "#",
            "icone": "fab fa-github",
            "stack": "HTML, CSS, JS"
        }
      
    ]


const api = projects

console.log(typeof (api))

// vamos criar os projetos

const lista = document.getElementById('list')

const card = document.createElement('div')


const cardHeader = document.createElement('div')
cardHeader.classList.add('card-header')

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')

let titulo = document.createElement('p')
titulo.classList.add('title-project')


api.forEach(project => {
    const template = document.createElement('div')
    template.classList.add('project-item')
    template.innerHTML = `
        <p class="title-project">${project.name}</p>
        <p class="description-project">${project.description}</p>
        <div class="share-project">
            <a class="link-project" href="${project.link}" title="link do projeto"><i class="${project.icone}"></i></a>
            <p class="stack-project">${project.stack}</p>
        </div>
    `
    
    //titulo.innerHTML = `<p class="title-project>${api[0].name}</p>`
    cardHeader.appendChild(template)
    console.log('ta dando certo')
    
})

card.appendChild(cardHeader)
lista.appendChild(card)