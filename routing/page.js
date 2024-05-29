import page from './node_modules/page/page.mjs';
import { html, render } from './node_modules/lit-html/lit-html.js';

const mainContent = document.getElementById('root');

function renderContent(template) {
    render(template, mainContent);
}

export const renderTemplate = (ctx, next) => {
    ctx.rendering = renderContent;
    next();
}

page(renderTemplate);

page('/home', renderHome);


function renderHome(ctx) {
    ctx.rendering(html`<h1>Home page</h1>`);
}