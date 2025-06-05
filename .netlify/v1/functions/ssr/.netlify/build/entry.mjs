import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C66uqjzj.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/recipes.astro.mjs');
const _page2 = () => import('./pages/apropos.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/mentions-legales.astro.mjs');
const _page5 = () => import('./pages/mission.astro.mjs');
const _page6 = () => import('./pages/partenaires.astro.mjs');
const _page7 = () => import('./pages/site-applicatif/auth/connexion.astro.mjs');
const _page8 = () => import('./pages/site-applicatif/compte.astro.mjs');
const _page9 = () => import('./pages/site-applicatif/continents/afrique.astro.mjs');
const _page10 = () => import('./pages/site-applicatif/continents/amerique-latine.astro.mjs');
const _page11 = () => import('./pages/site-applicatif/continents/asie.astro.mjs');
const _page12 = () => import('./pages/site-applicatif/continents/maghreb.astro.mjs');
const _page13 = () => import('./pages/site-applicatif/favoris.astro.mjs');
const _page14 = () => import('./pages/site-applicatif/produits/fiche/_id_.astro.mjs');
const _page15 = () => import('./pages/site-applicatif/produits/_categorie_.astro.mjs');
const _page16 = () => import('./pages/site-applicatif/produits.astro.mjs');
const _page17 = () => import('./pages/site-applicatif/recettes/fiche/_id_.astro.mjs');
const _page18 = () => import('./pages/site-applicatif/recettes.astro.mjs');
const _page19 = () => import('./pages/site-applicatif/trouver-magasin.astro.mjs');
const _page20 = () => import('./pages/site-applicatif.astro.mjs');
const _page21 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/recipes.js", _page1],
    ["src/pages/apropos.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/mentions-legales.astro", _page4],
    ["src/pages/mission.astro", _page5],
    ["src/pages/partenaires.astro", _page6],
    ["src/pages/site-applicatif/auth/connexion.astro", _page7],
    ["src/pages/site-applicatif/compte.astro", _page8],
    ["src/pages/site-applicatif/continents/afrique.astro", _page9],
    ["src/pages/site-applicatif/continents/amerique-latine.astro", _page10],
    ["src/pages/site-applicatif/continents/asie.astro", _page11],
    ["src/pages/site-applicatif/continents/maghreb.astro", _page12],
    ["src/pages/site-applicatif/favoris.astro", _page13],
    ["src/pages/site-applicatif/produits/fiche/[id].astro", _page14],
    ["src/pages/site-applicatif/produits/[categorie].astro", _page15],
    ["src/pages/site-applicatif/produits/index.astro", _page16],
    ["src/pages/site-applicatif/recettes/fiche/[id].astro", _page17],
    ["src/pages/site-applicatif/recettes/index.astro", _page18],
    ["src/pages/site-applicatif/trouver-magasin.astro", _page19],
    ["src/pages/site-applicatif/index.astro", _page20],
    ["src/pages/index.astro", _page21]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "312ef776-0718-4279-9a53-85300237b8a0"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
