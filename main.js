async function getRepositories() {
    const repositories = await fetch("https://api.github.com/users/AnaGabrielaDev/repos")
        .then(response => response.json());

    return repositories;
}

async function writeRepo() {
    const repositoriesDiv = document.getElementById('repositories');
    const repositories = await getRepositories();

    repositories.forEach(repo => {
        const div = document.createElement('div');
        div.className = "card";

        //criar link de referencia + titulo
        const a = document.createElement('a');
        a.href = repo.html_url;
        const title = document.createElement('h3');
        title.innerHTML = repo.name
        a.appendChild(title);

        const p = document.createElement('p');
        p.innerHTML = repo.description !== null ? repo.description : "";

        div.append(a);
        div.append(p);

        repositoriesDiv.appendChild(div);
    })
}
writeRepo();

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) =>{
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    }) 
}
const titulo = document.querySelector('.maquina-escrever');
typeWrite(titulo);  

