import search_user from "./api_user.js";
import {templateRepos, templateProfile, showModalplus} from "./templateitems.js";

const user = document.querySelector('.user');
const user_content = document.querySelector('.user_content');

const repos_container = document.querySelector('.repos_user_container');
const modalDetails = document.querySelector('.modalDetails');

function error(e) {
    alert(`Repositorio não encontrado status ${e.status} -> ${e.msgError.message}`)
};

function insertRepos(repos) {
    repos_container.innerHTML = '';
    document.querySelector('.user_content').style.display = 'flex';
    user_content.innerHTML = templateProfile(repos);

    repos.forEach((repos, i) => {
        repos_container.innerHTML += templateRepos(repos, i);
    });
};

user.addEventListener('change', ({target}) => {
    const user = target.value;
    const url = `https://api.github.com/users/${user}/repos`;

    search_user(url, insertRepos, error);
});

window.seeDetails = (url) => {
    search_user(url, show_repository_details, error)
}

const show_repository_details = (repos) => {
    modalDetails.style.display = 'flex'
    repos_container.style.display = 'none'
    modalDetails.innerHTML = showModalplus(repos)
};

window.closeModal = () => {
    modalDetails.style.display = 'none'
    repos_container.style.display = 'flex'
}

window.copyRepos = (copy) => {
    const text = copy.previousElementSibling.value;
    navigator.clipboard.writeText(`git clone ${text}`);
};