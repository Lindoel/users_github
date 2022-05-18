export function templateRepos(repos) {
    return `
    <div class="repos_user">
        <h1>${repos.name}</h1>
        <a target="_blank" href="${repos.html_url}">Acessar repositorio</a>
        <input class="buttonModal" type="button" value="Ver detalhes" onclick="seeDetails('${repos.url}')">
    </div>
    `;
}

export function templateProfile(repos) {
    return `
    <img src="${repos[0].owner.avatar_url}" alt="">
    <div class="repos_user">
        <h1>${repos[0].owner.login}</h1>
    </div>
    <a id="link_profile" target="_blank" href="${repos[0].owner.html_url}">Acessar perfil no Github</a>
    `;
}

export function showModalplus(repos) {
    const date = new Date(repos.created_at)
    const calendar = date.toLocaleString()
    return `
    <div class="butttonModalArea">
        <input onclick="closeModal()" class="buttonCloseModal" type="button" value="X">
    </div>
    <h3>${repos.full_name}</h3>
    <p>Estrelas ${repos.stargazers_count} | Forks ${repos.forks}</p>
    <p>Criado em ${calendar}</p>
    <a target="_blank" href="${repos.html_url}">Acessar repositorio</a>
    <div class="modalClone">
        <input type="text" name="clone" id="clone" value="${repos.git_url}">
        <input class="buttonClone" type="button" value="Clonar" onclick="copyRepos(this)">
    </div>
    `;
}