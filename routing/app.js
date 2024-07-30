const rootElement = document.getElementById('root');

document.querySelector('.nav-bar').addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName === 'A') {
        let url = new URL(e.target.href);
        changeContent(url.pathname);
    }
});

const routes = {
    '/home': renderHome,
    '/error': renderError,
    '/about': renderAbout,
    '/contacts': renderContacts
};

function changeContent(path) {
    let content;

    if (routes[path]) {
        content = routes[path]();
    } else {
        content = routes['/error']();
    }

    rootElement.innerHTML = content;
}

function renderHome() {
    return `<h1>Home page</h1>`
}

function renderError() {
    return `<h1>Not found!</h1>`
}

function renderAbout() {
    return `<h1>About page</h1>`
}

function renderContacts() {
    return `<h1>Contects page</h1>`
}