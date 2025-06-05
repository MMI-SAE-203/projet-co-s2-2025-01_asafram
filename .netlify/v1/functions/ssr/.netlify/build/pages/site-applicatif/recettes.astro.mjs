import { e as createComponent, i as renderComponent, r as renderTemplate, o as defineScriptVars, m as maybeRenderHead } from '../../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutApplicatif } from '../../chunks/LayoutApplicatif_tUxN7yFY.mjs';
import { $ as $$CardRecettes } from '../../chunks/CardRecettes_D3uYQO6X.mjs';
import { n as getAllRecipes, m as getAllPays } from '../../chunks/backend_CFzKrOra.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const recipes = await getAllRecipes();
  const pays = await getAllPays();
  return renderTemplate`${renderComponent($$result, "LayoutApplicatif", $$LayoutApplicatif, { "title": "Recettes", "description": "D\xE9couvrez toutes nos recettes du monde", "data-astro-cid-p24nyul7": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", `<div class="min-h-screen bg-gray-50" id="recipes-page" data-astro-cid-p24nyul7> <!-- Layout flex avec sidebar et contenu principal c\xF4te \xE0 c\xF4te --> <div class="flex" data-astro-cid-p24nyul7> <!-- Sidebar des filtres - Position normale (pas fixe) --> <div class="w-[420px] bg-white shadow-lg border-r border-gray-200 min-h-screen" data-astro-cid-p24nyul7> <div class="p-6" data-astro-cid-p24nyul7> <!-- En-t\xEAte des filtres --> <div class="flex justify-between items-center mb-6" data-astro-cid-p24nyul7> <h2 class="!text-3xl font-raleway font-black uppercase text-black" data-astro-cid-p24nyul7>
FILTRES
</h2> <button id="reset-filters-btn" class="text-xs font-raleway border border-gray-600 px-4 py-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer" data-astro-cid-p24nyul7>
R\xC9INITIALISER
</button> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-black mb-6" data-astro-cid-p24nyul7></div> <!-- Section Barre de recherche --> <div class="mb-6" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black mb-4" data-astro-cid-p24nyul7>
RECHERCHE
</h3> <div class="relative" data-astro-cid-p24nyul7> <input type="text" id="search-input" placeholder="Nom de la recette..." class="w-full px-4 py-2.5 border border-gray-400 rounded-lg text-sm font-raleway focus:outline-none focus:border-saumon bg-white" data-astro-cid-p24nyul7> <!-- Loupe quand pas de texte --> <svg id="search-icon" class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-p24nyul7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-p24nyul7></path> </svg> <!-- Croix quand il y a du texte --> <button id="clear-search-btn" class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors hidden" title="Effacer la recherche" data-astro-cid-p24nyul7> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-p24nyul7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-p24nyul7></path> </svg> </button> </div> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-gray-400 mb-6" data-astro-cid-p24nyul7></div> <!-- Section Continents --> <div class="mb-6" data-astro-cid-p24nyul7> <div class="flex justify-between items-center mb-4" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-p24nyul7>
CONTINENTS
</h3> <button id="all-continents-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" data-astro-cid-p24nyul7>
TOUT
</button> </div> <div class="space-y-2" id="continent-filters" data-astro-cid-p24nyul7> <button data-continent="Afrique" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-p24nyul7>
AFRIQUE
</button> <button data-continent="Am\xE9rique Latine" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-p24nyul7>
AM\xC9RIQUE LATINE
</button> <button data-continent="Asie" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-p24nyul7>
ASIE
</button> <button data-continent="Maghreb" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-p24nyul7>
MAGHREB
</button> </div> </div> <!-- Section Pays --> <div class="mb-6" data-astro-cid-p24nyul7> <div class="flex justify-between items-center mb-4" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-p24nyul7>
PAYS
</h3> <button id="all-countries-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" disabled style="opacity: 0.5; cursor: not-allowed;" data-astro-cid-p24nyul7>
TOUT
</button> </div> <div class="relative" data-astro-cid-p24nyul7> <select id="countries-select" class="w-full p-2.5 border border-gray-400 rounded-lg text-xs font-raleway bg-white appearance-none pr-8 uppercase cursor-pointer" disabled style="opacity: 0.5; cursor: not-allowed;" data-astro-cid-p24nyul7> <option value="tous" data-astro-cid-p24nyul7>Tous les pays</option> </select> <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-black pointer-events-none" style="opacity: 0.5;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-p24nyul7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-p24nyul7></path> </svg> </div> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-gray-400 mb-6" data-astro-cid-p24nyul7></div> <!-- Section Types de repas --> <div class="mb-6" data-astro-cid-p24nyul7> <div class="flex justify-between items-center mb-4" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-p24nyul7>
TYPE DE REPAS
</h3> <button id="all-meal-types-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" data-astro-cid-p24nyul7>
TOUT
</button> </div> <div class="space-y-2" id="meal-type-filters" data-astro-cid-p24nyul7> <label class="flex items-center cursor-pointer" data-astro-cid-p24nyul7> <input type="checkbox" class="meal-type-checkbox mr-2 w-4 h-4 border-2 border-black rounded-none cursor-pointer" value="Entr\xE9e" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-p24nyul7>ENTR\xC9E</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-p24nyul7> <input type="checkbox" class="meal-type-checkbox mr-2 w-4 h-4 border-2 border-black rounded-none cursor-pointer" value="Plats" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-p24nyul7>PLATS</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-p24nyul7> <input type="checkbox" class="meal-type-checkbox mr-2 w-4 h-4 border-2 border-black rounded-none cursor-pointer" value="Desserts" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-p24nyul7>DESSERTS</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-p24nyul7> <input type="checkbox" class="meal-type-checkbox mr-2 w-4 h-4 border-2 border-black rounded-none cursor-pointer" value="Accompagnements" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-p24nyul7>ACCOMPAGNEMENTS</span> </label> </div> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-gray-400 mb-6" data-astro-cid-p24nyul7></div> <!-- Section Notes --> <div class="mb-6" data-astro-cid-p24nyul7> <div class="flex justify-between items-center mb-4" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-p24nyul7>
NOTES
</h3> <button id="rating-toggle-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer" data-astro-cid-p24nyul7>
D\xC9SACTIV\xC9
</button> </div> <!-- S\xE9lecteur d'\xE9toiles --> <div class="space-y-3" id="rating-section" style="display: none;" data-astro-cid-p24nyul7> <p class="text-xs font-raleway text-gray-600 mb-3" data-astro-cid-p24nyul7>
Note minimum requise :
</p> <div class="flex items-center justify-center space-x-1" id="stars-container" data-astro-cid-p24nyul7> <button data-rating="1" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="1 \xE9toile minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> <button data-rating="2" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="2 \xE9toiles minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> <button data-rating="3" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="3 \xE9toiles minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> <button data-rating="4" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="4 \xE9toiles minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> <button data-rating="5" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="5 \xE9toiles minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> </div> <div class="text-center" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-gray-500" id="rating-text" data-astro-cid-p24nyul7>
0 \xE9toile et plus
</span> </div> <button id="all-ratings-btn" class="w-full text-xs font-raleway border border-gray-400 px-3 py-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" data-astro-cid-p24nyul7>
TOUTES LES NOTES
</button> </div> <!-- Message quand d\xE9sactiv\xE9 --> <div id="rating-disabled-message" class="text-center py-3" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-gray-500" data-astro-cid-p24nyul7>
Filtrage par notes d\xE9sactiv\xE9
</span> </div> </div> </div> </div> <!-- Contenu principal des recettes - Position normale (pas fixe) --> <div class="flex-1" data-astro-cid-p24nyul7> <!-- Contenu des recettes --> <div class="px-8 pb-8" data-astro-cid-p24nyul7> <!-- En-t\xEAte avec bouton --> <div class="mb-8 mt-10 flex justify-between items-start" data-astro-cid-p24nyul7> <div class="ml-22" data-astro-cid-p24nyul7> <h1 class="!text-6xl font-radio-canada-big font-black text-gray-800 mb-4 uppercase !text-left !pb-0" data-astro-cid-p24nyul7>
Toutes les recettes
</h1> <p class="text-gray-600 font-raleway" data-astro-cid-p24nyul7>
D\xE9couvrez toutes nos recettes du monde entier, de la plus
                r\xE9cente \xE0 la plus ancienne.
</p> <div id="results-info" class="text-lg text-gray-600 mt-4" data-astro-cid-p24nyul7> <span id="visible-count" data-astro-cid-p24nyul7>`, '</span> recettes \u2022 Page\n<span id="current-page" data-astro-cid-p24nyul7>1</span> sur <span id="total-pages" data-astro-cid-p24nyul7>1</span> </div> </div> <!-- Bouton Ajouter une recette en haut \xE0 droite --> <button id="add-recipe-btn" class="bg-sable mt-20 mr-22 hover:bg-sable-hover text-black font-bold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 uppercase tracking-wide cursor-pointer" data-astro-cid-p24nyul7>\n+ AJOUTER UNE RECETTE\n</button> </div> <!-- Zone des recettes --> <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 mb-40" id="recipes-container" data-astro-cid-p24nyul7> ', ` </div> <!-- Message si aucune recette --> <div id="no-recipes-message" class="hidden text-center py-16" data-astro-cid-p24nyul7> <p class="text-gray-500 text-lg font-raleway" data-astro-cid-p24nyul7>
Aucune recette ne correspond \xE0 vos crit\xE8res de recherche.
</p> </div> <!-- Pagination --> <div id="pagination-container" class="flex justify-center mt-10" data-astro-cid-p24nyul7> <div class="inline-flex items-center gap-1" id="pagination-controls" data-astro-cid-p24nyul7> <!-- G\xE9n\xE9r\xE9 dynamiquement par JavaScript --> </div> </div> </div> </div> </div> <!-- Modal Ajouter une recette --> <div id="add-recipe-modal" class="fixed inset-0 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden" style="backdrop-filter: blur(8px);" data-astro-cid-p24nyul7> <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" data-astro-cid-p24nyul7> <!-- Header du modal --> <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl" data-astro-cid-p24nyul7> <div class="flex justify-between items-center" data-astro-cid-p24nyul7> <h2 class="text-xl font-radio-canada-big font-black uppercase text-gray-800" data-astro-cid-p24nyul7>
Ajouter une recette
</h2> <button id="close-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" data-astro-cid-p24nyul7> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-p24nyul7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-p24nyul7></path> </svg> </button> </div> </div> <!-- Contenu du modal --> <form id="recipe-form" class="p-6 space-y-6" data-astro-cid-p24nyul7> <!-- Nom de la recette --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Nom de la recette*
</label> <input type="text" id="recipe-name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors" placeholder="Ex: Couscous royal" data-astro-cid-p24nyul7> </div> <!-- Description --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Description*
</label> <textarea id="recipe-description" required rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors resize-none" placeholder="D\xE9crivez votre recette..." data-astro-cid-p24nyul7></textarea> </div> <!-- Image --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Image de la recette
</label> <input type="file" id="recipe-image" accept="image/*" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" data-astro-cid-p24nyul7> </div> <!-- Grille pour les champs en 2 colonnes --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-p24nyul7> <!-- Continent --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Continent*
</label> <select id="recipe-continent" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" data-astro-cid-p24nyul7> <option value="" data-astro-cid-p24nyul7>S\xE9lectionner un continent</option> <option value="Afrique" data-astro-cid-p24nyul7>Afrique</option> <option value="Am\xE9rique Latine" data-astro-cid-p24nyul7>Am\xE9rique Latine</option> <option value="Asie" data-astro-cid-p24nyul7>Asie</option> <option value="Maghreb" data-astro-cid-p24nyul7>Maghreb</option> </select> </div> <!-- Pays --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Pays*
</label> <select id="recipe-country" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" disabled data-astro-cid-p24nyul7> <option value="" data-astro-cid-p24nyul7>S\xE9lectionner d'abord un continent</option> </select> </div> <!-- Type de repas --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Type de repas*
</label> <select id="recipe-type" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" data-astro-cid-p24nyul7> <option value="" data-astro-cid-p24nyul7>S\xE9lectionner un type</option> <option value="Entr\xE9e" data-astro-cid-p24nyul7>Entr\xE9e</option> <option value="Plats" data-astro-cid-p24nyul7>Plats</option> <option value="Desserts" data-astro-cid-p24nyul7>Desserts</option> <option value="Accompagnements" data-astro-cid-p24nyul7>Accompagnements</option> </select> </div> <!-- Temps de pr\xE9paration --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Temps de pr\xE9paration (minutes)*
</label> <input type="number" id="recipe-time" required min="1" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors" placeholder="Ex: 45" data-astro-cid-p24nyul7> </div> <!-- Difficult\xE9 --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Difficult\xE9*
</label> <select id="recipe-difficulty" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" data-astro-cid-p24nyul7> <option value="" data-astro-cid-p24nyul7>S\xE9lectionner la difficult\xE9</option> <option value="facile" data-astro-cid-p24nyul7>Facile</option> <option value="moyen" data-astro-cid-p24nyul7>Moyen</option> <option value="difficile" data-astro-cid-p24nyul7>Difficile</option> </select> </div> </div> <!-- Ingr\xE9dients --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Ingr\xE9dients*
</label> <textarea id="recipe-ingredients" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors resize-none" placeholder="Listez les ingr\xE9dients (un par ligne ou s\xE9par\xE9s par des virgules)" data-astro-cid-p24nyul7></textarea> </div> <!-- \xC9tapes --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
\xC9tapes de pr\xE9paration*
</label> <textarea id="recipe-steps" required rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors resize-none" placeholder="D\xE9crivez les \xE9tapes de pr\xE9paration..." data-astro-cid-p24nyul7></textarea> </div> <!-- Boutons du formulaire --> <div class="flex justify-end space-x-4 pt-4 border-t border-gray-200" data-astro-cid-p24nyul7> <button type="button" id="cancel-recipe-btn" class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-raleway font-bold uppercase cursor-pointer" data-astro-cid-p24nyul7>
Annuler
</button> <button type="submit" id="submit-recipe-btn" class="px-6 py-3 bg-saumon hover:bg-saumon-hover text-black rounded-lg transition-colors font-raleway font-bold uppercase cursor-pointer" data-astro-cid-p24nyul7>
Ajouter la recette
</button> </div> </form> </div> </div> <!-- Script pour le filtrage et modal --> <script>(function(){`, `
      // Rendre les pays disponibles globalement pour Alpine.js
      window.allPays = pays;

      document.addEventListener("DOMContentLoaded", function () {
        console.log("Initialisation de la page recettes...");

        // Variables globales
        let selectedContinents = [];
        let selectedMealTypes = [];
        let selectedCountry = "tous";
        let searchQuery = "";
        let ratingFilterEnabled = false;
        let minRating = 0;
        let availableCountries = [];
        let filteredRecipes = [...recipes];
        let currentPage = 1;
        const recipesPerPage = 12;

        // \xC9l\xE9ments DOM
        const addRecipeBtn = document.getElementById("add-recipe-btn");
        const addRecipeModal = document.getElementById("add-recipe-modal");
        const closeModalBtn = document.getElementById("close-modal-btn");
        const cancelRecipeBtn = document.getElementById("cancel-recipe-btn");
        const recipeForm = document.getElementById("recipe-form");
        const submitRecipeBtn = document.getElementById("submit-recipe-btn");

        // Gestion du modal
        function openModal() {
          addRecipeModal.classList.remove("hidden");
          document.body.style.overflow = "hidden";
        }

        function closeModal() {
          addRecipeModal.classList.add("hidden");
          document.body.style.overflow = "auto";
          resetForm();
        }

        function resetForm() {
          recipeForm.reset();
          submitRecipeBtn.textContent = "AJOUTER LA RECETTE";
          submitRecipeBtn.disabled = false;

          // R\xE9initialiser aussi le dropdown pays
          const countrySelect = document.getElementById("recipe-country");
          countrySelect.disabled = true;
          countrySelect.innerHTML =
            '<option value="">S\xE9lectionner d\\'abord un continent</option>';
        }

        // Event listeners pour le modal
        addRecipeBtn.addEventListener("click", openModal);
        closeModalBtn.addEventListener("click", closeModal);
        cancelRecipeBtn.addEventListener("click", closeModal);

        // Fermer le modal en cliquant sur l'overlay
        addRecipeModal.addEventListener("click", function (e) {
          if (e.target === addRecipeModal) {
            closeModal();
          }
        });

        // Gestion du changement de continent dans le formulaire
        document
          .getElementById("recipe-continent")
          .addEventListener("change", function () {
            const countrySelect = document.getElementById("recipe-country");
            const selectedContinent = this.value;

            if (selectedContinent) {
              // Filtrer les pays par continent
              const countriesForContinent = window.allPays.filter(
                (country) => country.continent === selectedContinent
              );

              // Remplir le dropdown pays
              countrySelect.disabled = false;
              countrySelect.innerHTML =
                '<option value="">S\xE9lectionner un pays</option>';

              countriesForContinent.forEach((country) => {
                const option = document.createElement("option");
                option.value = country.id;
                option.textContent = country.nom;
                countrySelect.appendChild(option);
              });
            } else {
              // R\xE9initialiser si aucun continent s\xE9lectionn\xE9
              countrySelect.disabled = true;
              countrySelect.innerHTML =
                '<option value="">S\xE9lectionner d\\'abord un continent</option>';
            }
          });

        // Gestion de la soumission du formulaire
        recipeForm.addEventListener("submit", async function (e) {
          e.preventDefault();

          submitRecipeBtn.textContent = "AJOUT EN COURS...";
          submitRecipeBtn.disabled = true;

          try {
            const formData = new FormData();

            formData.append(
              "nom",
              document.getElementById("recipe-name").value
            );
            formData.append(
              "description",
              document.getElementById("recipe-description").value
            );
            formData.append(
              "ingredients",
              document.getElementById("recipe-ingredients").value
            );
            formData.append(
              "etapes",
              document.getElementById("recipe-steps").value
            );
            formData.append(
              "continent",
              document.getElementById("recipe-continent").value
            );
            formData.append(
              "pays",
              document.getElementById("recipe-country").value
            );
            formData.append(
              "type",
              document.getElementById("recipe-type").value
            );
            formData.append(
              "temps",
              document.getElementById("recipe-time").value
            );
            formData.append(
              "difficulte",
              document.getElementById("recipe-difficulty").value
            );

            const imageFile = document.getElementById("recipe-image").files[0];
            if (imageFile) {
              formData.append("img", imageFile);
            }

            const response = await fetch("/api/recipes", {
              method: "POST",
              body: formData,
            });

            if (response.ok) {
              alert("Recette ajout\xE9e avec succ\xE8s !");
              closeModal();
              window.location.reload();
            } else {
              throw new Error("Erreur lors de l'ajout de la recette");
            }
          } catch (error) {
            console.error("Erreur:", error);
            alert("Erreur lors de l'ajout de la recette. Veuillez r\xE9essayer.");
            submitRecipeBtn.textContent = "AJOUTER LA RECETTE";
            submitRecipeBtn.disabled = false;
          }
        });

        // Gestion des filtres - Recherche
        const searchInput = document.getElementById("search-input");
        const searchIcon = document.getElementById("search-icon");
        const clearSearchBtn = document.getElementById("clear-search-btn");

        searchInput.addEventListener("input", function () {
          searchQuery = this.value.toLowerCase();

          if (searchQuery) {
            searchIcon.classList.add("hidden");
            clearSearchBtn.classList.remove("hidden");
          } else {
            searchIcon.classList.remove("hidden");
            clearSearchBtn.classList.add("hidden");
          }

          filterRecipes();
        });

        clearSearchBtn.addEventListener("click", function () {
          searchInput.value = "";
          searchQuery = "";
          searchIcon.classList.remove("hidden");
          clearSearchBtn.classList.add("hidden");
          filterRecipes();
        });

        // Gestion des filtres - Continents
        const allContinentsBtn = document.getElementById("all-continents-btn");
        const continentBtns = document.querySelectorAll(".continent-btn");

        allContinentsBtn.addEventListener("click", function () {
          selectedContinents = [
            "Afrique",
            "Am\xE9rique Latine",
            "Asie",
            "Maghreb",
          ];
          updateContinentButtons();
          updateCountriesDropdown();
          filterRecipes();
        });

        continentBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            const continent = this.dataset.continent;

            if (selectedContinents.includes(continent)) {
              selectedContinents = selectedContinents.filter(
                (c) => c !== continent
              );
            } else {
              selectedContinents.push(continent);
            }

            updateContinentButtons();
            updateCountriesDropdown();
            filterRecipes();
          });
        });

        function updateContinentButtons() {
          // Bouton "TOUT"
          const allSelected =
            selectedContinents.length === 4 &&
            selectedContinents.includes("Afrique") &&
            selectedContinents.includes("Am\xE9rique Latine") &&
            selectedContinents.includes("Asie") &&
            selectedContinents.includes("Maghreb");

          if (allSelected) {
            allContinentsBtn.classList.add("bg-gray-200");
          } else {
            allContinentsBtn.classList.remove("bg-gray-200");
          }

          // Boutons continents
          continentBtns.forEach((btn) => {
            const continent = btn.dataset.continent;
            if (selectedContinents.includes(continent)) {
              btn.classList.remove("bg-white", "text-black", "border-black");
              btn.classList.add("bg-jaune", "text-black");
            } else {
              btn.classList.remove("bg-jaune");
              btn.classList.add("bg-white", "text-black", "border-black");
            }
          });
        }

        // Gestion des pays
        function updateCountriesDropdown() {
          const countriesSelect = document.getElementById("countries-select");
          const allCountriesBtn = document.getElementById("all-countries-btn");

          if (selectedContinents.length === 0) {
            availableCountries = [];
            selectedCountry = "tous";
            countriesSelect.disabled = true;
            allCountriesBtn.disabled = true;
            countriesSelect.style.opacity = "0.5";
            countriesSelect.style.cursor = "not-allowed";
            allCountriesBtn.style.opacity = "0.5";
            allCountriesBtn.style.cursor = "not-allowed";
          } else {
            availableCountries = window.allPays.filter((p) =>
              selectedContinents.includes(p.continent)
            );
            countriesSelect.disabled = false;
            allCountriesBtn.disabled = false;
            countriesSelect.style.opacity = "1";
            countriesSelect.style.cursor = "pointer";
            allCountriesBtn.style.opacity = "1";
            allCountriesBtn.style.cursor = "pointer";

            // Mettre \xE0 jour les options
            countriesSelect.innerHTML =
              '<option value="tous">Tous les pays</option>';
            availableCountries.forEach((country) => {
              const option = document.createElement("option");
              option.value = country.id;
              option.textContent = country.nom;
              countriesSelect.appendChild(option);
            });
          }
        }

        document
          .getElementById("all-countries-btn")
          .addEventListener("click", function () {
            if (!this.disabled) {
              selectedCountry = "tous";
              document.getElementById("countries-select").value = "tous";
              filterRecipes();
            }
          });

        document
          .getElementById("countries-select")
          .addEventListener("change", function () {
            selectedCountry = this.value;
            filterRecipes();
          });

        // Gestion des types de repas
        const allMealTypesBtn = document.getElementById("all-meal-types-btn");
        const mealTypeCheckboxes = document.querySelectorAll(
          ".meal-type-checkbox"
        );

        allMealTypesBtn.addEventListener("click", function () {
          selectedMealTypes = [
            "Entr\xE9e",
            "Plats",
            "Desserts",
            "Accompagnements",
          ];
          mealTypeCheckboxes.forEach((cb) => (cb.checked = true));
          updateMealTypesButton();
          filterRecipes();
        });

        mealTypeCheckboxes.forEach((cb) => {
          cb.addEventListener("change", function () {
            if (this.checked) {
              selectedMealTypes.push(this.value);
            } else {
              selectedMealTypes = selectedMealTypes.filter(
                (t) => t !== this.value
              );
            }
            updateMealTypesButton();
            filterRecipes();
          });
        });

        function updateMealTypesButton() {
          const allSelected =
            selectedMealTypes.length === 4 &&
            selectedMealTypes.includes("Entr\xE9e") &&
            selectedMealTypes.includes("Plats") &&
            selectedMealTypes.includes("Desserts") &&
            selectedMealTypes.includes("Accompagnements");

          if (allSelected) {
            allMealTypesBtn.classList.add("bg-gray-200");
          } else {
            allMealTypesBtn.classList.remove("bg-gray-200");
          }
        }

        // Gestion du filtre de notes
        const ratingToggleBtn = document.getElementById("rating-toggle-btn");
        const ratingSection = document.getElementById("rating-section");
        const ratingDisabledMessage = document.getElementById(
          "rating-disabled-message"
        );
        const starBtns = document.querySelectorAll(".star-btn");
        const allRatingsBtn = document.getElementById("all-ratings-btn");
        const ratingText = document.getElementById("rating-text");

        ratingToggleBtn.addEventListener("click", function () {
          ratingFilterEnabled = !ratingFilterEnabled;

          if (ratingFilterEnabled) {
            this.textContent = "ACTIV\xC9";
            this.classList.add(
              "border-saumon",
              "bg-saumon-hover",
              "text-black"
            );
            this.classList.remove("border-gray-600");
            ratingSection.style.display = "block";
            ratingDisabledMessage.style.display = "none";
          } else {
            this.textContent = "D\xC9SACTIV\xC9";
            this.classList.remove(
              "border-saumon",
              "bg-saumon-hover",
              "text-black"
            );
            this.classList.add("border-gray-600");
            ratingSection.style.display = "none";
            ratingDisabledMessage.style.display = "block";
            minRating = 0;
            updateStars();
          }

          filterRecipes();
        });

        starBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            minRating = parseInt(this.dataset.rating);
            updateStars();
            filterRecipes();
          });
        });

        allRatingsBtn.addEventListener("click", function () {
          minRating = 0;
          updateStars();
          filterRecipes();
        });

        function updateStars() {
          starBtns.forEach((btn, index) => {
            if (index < minRating) {
              btn.classList.remove("text-gray-300");
              btn.classList.add("text-yellow-500");
            } else {
              btn.classList.remove("text-yellow-500");
              btn.classList.add("text-gray-300");
            }
          });

          if (minRating === 0) {
            ratingText.textContent = "0 \xE9toile et plus";
            allRatingsBtn.classList.add("bg-gray-200");
          } else {
            ratingText.textContent = \`\${minRating} \xE9toile\${minRating > 1 ? "s" : ""} et plus\`;
            allRatingsBtn.classList.remove("bg-gray-200");
          }
        }

        // Bouton de r\xE9initialisation
        document
          .getElementById("reset-filters-btn")
          .addEventListener("click", function () {
            selectedContinents = [];
            selectedMealTypes = [];
            selectedCountry = "tous";
            searchQuery = "";
            ratingFilterEnabled = false;
            minRating = 0;

            // R\xE9initialiser l'interface
            searchInput.value = "";
            searchIcon.classList.remove("hidden");
            clearSearchBtn.classList.add("hidden");

            mealTypeCheckboxes.forEach((cb) => (cb.checked = false));

            ratingToggleBtn.textContent = "D\xC9SACTIV\xC9";
            ratingToggleBtn.classList.remove(
              "border-saumon",
              "bg-saumon-hover",
              "text-black"
            );
            ratingToggleBtn.classList.add("border-gray-600");
            ratingSection.style.display = "none";
            ratingDisabledMessage.style.display = "block";

            updateContinentButtons();
            updateCountriesDropdown();
            updateMealTypesButton();
            updateStars();
            filterRecipes();
          });

        // Fonction de filtrage des recettes
        function filterRecipes() {
          currentPage = 1; // Reset \xE0 la page 1 lors du filtrage

          filteredRecipes = recipes.filter((recipe) => {
            let shouldShow = true;

            // Filtre par recherche textuelle
            if (
              searchQuery &&
              !recipe.nom.toLowerCase().includes(searchQuery)
            ) {
              shouldShow = false;
            }

            // Filtre par continent
            if (selectedContinents.length > 0) {
              const recipeContinent =
                recipe.expand?.pays?.continent || recipe.continent;
              if (!selectedContinents.includes(recipeContinent)) {
                shouldShow = false;
              }
            }

            // Filtre par pays
            if (selectedCountry !== "tous") {
              const recipePaysId = recipe.expand?.pays?.id || recipe.pays;
              if (recipePaysId !== selectedCountry) {
                shouldShow = false;
              }
            }

            // Filtre par type de repas
            if (selectedMealTypes.length > 0) {
              const recipeType =
                recipe.type || recipe.typeRepas || recipe.categorie;
              if (!selectedMealTypes.includes(recipeType)) {
                shouldShow = false;
              }
            }

            // Filtre par notes
            if (ratingFilterEnabled && minRating > 0) {
              const recipeRating = recipe.note || 0;
              if (recipeRating < minRating) {
                shouldShow = false;
              }
            }

            return shouldShow;
          });

          updateDisplay();
        }

        // Fonction de mise \xE0 jour de l'affichage avec pagination
        function updateDisplay() {
          const totalRecipes = filteredRecipes.length;
          const totalPages = Math.ceil(totalRecipes / recipesPerPage);
          const startIndex = (currentPage - 1) * recipesPerPage;
          const endIndex = startIndex + recipesPerPage;
          const recipesToShow = filteredRecipes.slice(startIndex, endIndex);

          // Mettre \xE0 jour les infos
          document.getElementById("visible-count").textContent = totalRecipes;
          document.getElementById("current-page").textContent = currentPage;
          document.getElementById("total-pages").textContent = Math.max(
            1,
            totalPages
          );

          // Afficher/masquer toutes les recettes
          const allRecipeCards = document.querySelectorAll(
            "#recipes-container > div"
          );
          allRecipeCards.forEach((card, index) => {
            card.style.display = "none";
          });

          // Afficher uniquement les recettes de la page courante
          recipesToShow.forEach((recipe) => {
            const recipeIndex = recipes.findIndex((r) => r.id === recipe.id);
            if (recipeIndex !== -1 && allRecipeCards[recipeIndex]) {
              allRecipeCards[recipeIndex].style.display = "flex";
            }
          });

          // Afficher/masquer le message "aucune recette"
          const noRecipesMessage =
            document.getElementById("no-recipes-message");
          if (totalRecipes === 0) {
            noRecipesMessage.classList.remove("hidden");
          } else {
            noRecipesMessage.classList.add("hidden");
          }

          // Mettre \xE0 jour la pagination
          updatePagination(totalPages);
        }

        // Fonction de mise \xE0 jour de la pagination
        function updatePagination(totalPages) {
          const paginationControls = document.getElementById(
            "pagination-controls"
          );
          paginationControls.innerHTML = "";

          if (totalPages <= 1) {
            document.getElementById("pagination-container").style.display =
              "none";
            return;
          }

          document.getElementById("pagination-container").style.display =
            "flex";

          // Bouton pr\xE9c\xE9dent
          const prevBtn = document.createElement("button");
          prevBtn.innerHTML = "&lt;";
          prevBtn.className =
            "w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors";
          prevBtn.disabled = currentPage === 1;
          if (currentPage === 1) {
            prevBtn.classList.add("opacity-50", "cursor-not-allowed");
          } else {
            prevBtn.classList.add("cursor-pointer");
          }
          prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
              currentPage--;
              updateDisplay();
            }
          });
          paginationControls.appendChild(prevBtn);

          // Calculer les pages \xE0 afficher
          const maxVisiblePages = 7; // Afficher max 7 num\xE9ros de pages
          let startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2)
          );
          let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

          // Ajuster si on n'a pas assez de pages \xE0 la fin
          if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
          }

          // Num\xE9ros de pages
          for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.textContent = i;
            pageBtn.className =
              "w-8 h-8 flex items-center justify-center text-sm font-medium transition-colors cursor-pointer";

            if (i === currentPage) {
              pageBtn.classList.add("bg-black", "text-white");
            } else {
              pageBtn.classList.add(
                "text-gray-900",
                "bg-white",
                "hover:bg-gray-100"
              );
            }

            pageBtn.addEventListener("click", () => {
              currentPage = i;
              updateDisplay();
            });
            paginationControls.appendChild(pageBtn);
          }

          // Points de suspension et derni\xE8re page si n\xE9cessaire
          if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
              const dotsSpan = document.createElement("span");
              dotsSpan.textContent = "...";
              dotsSpan.className =
                "w-8 h-8 flex items-center justify-center text-sm text-gray-500";
              paginationControls.appendChild(dotsSpan);
            }

            const lastPageBtn = document.createElement("button");
            lastPageBtn.textContent = totalPages;
            lastPageBtn.className =
              "w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors cursor-pointer";
            lastPageBtn.addEventListener("click", () => {
              currentPage = totalPages;
              updateDisplay();
            });
            paginationControls.appendChild(lastPageBtn);
          }

          // Bouton suivant
          const nextBtn = document.createElement("button");
          nextBtn.innerHTML = "&gt;";
          nextBtn.className =
            "w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors";
          nextBtn.disabled = currentPage === totalPages;
          if (currentPage === totalPages) {
            nextBtn.classList.add("opacity-50", "cursor-not-allowed");
          } else {
            nextBtn.classList.add("cursor-pointer");
          }
          nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) {
              currentPage++;
              updateDisplay();
            }
          });
          paginationControls.appendChild(nextBtn);
        }

        // Initialisation
        filterRecipes();
        console.log("Page recettes initialis\xE9e avec succ\xE8s");
      });
    })();<\/script> </div> `], ["  ", `<div class="min-h-screen bg-gray-50" id="recipes-page" data-astro-cid-p24nyul7> <!-- Layout flex avec sidebar et contenu principal c\xF4te \xE0 c\xF4te --> <div class="flex" data-astro-cid-p24nyul7> <!-- Sidebar des filtres - Position normale (pas fixe) --> <div class="w-[420px] bg-white shadow-lg border-r border-gray-200 min-h-screen" data-astro-cid-p24nyul7> <div class="p-6" data-astro-cid-p24nyul7> <!-- En-t\xEAte des filtres --> <div class="flex justify-between items-center mb-6" data-astro-cid-p24nyul7> <h2 class="!text-3xl font-raleway font-black uppercase text-black" data-astro-cid-p24nyul7>
FILTRES
</h2> <button id="reset-filters-btn" class="text-xs font-raleway border border-gray-600 px-4 py-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer" data-astro-cid-p24nyul7>
R\xC9INITIALISER
</button> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-black mb-6" data-astro-cid-p24nyul7></div> <!-- Section Barre de recherche --> <div class="mb-6" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black mb-4" data-astro-cid-p24nyul7>
RECHERCHE
</h3> <div class="relative" data-astro-cid-p24nyul7> <input type="text" id="search-input" placeholder="Nom de la recette..." class="w-full px-4 py-2.5 border border-gray-400 rounded-lg text-sm font-raleway focus:outline-none focus:border-saumon bg-white" data-astro-cid-p24nyul7> <!-- Loupe quand pas de texte --> <svg id="search-icon" class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-p24nyul7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-p24nyul7></path> </svg> <!-- Croix quand il y a du texte --> <button id="clear-search-btn" class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors hidden" title="Effacer la recherche" data-astro-cid-p24nyul7> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-p24nyul7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-p24nyul7></path> </svg> </button> </div> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-gray-400 mb-6" data-astro-cid-p24nyul7></div> <!-- Section Continents --> <div class="mb-6" data-astro-cid-p24nyul7> <div class="flex justify-between items-center mb-4" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-p24nyul7>
CONTINENTS
</h3> <button id="all-continents-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" data-astro-cid-p24nyul7>
TOUT
</button> </div> <div class="space-y-2" id="continent-filters" data-astro-cid-p24nyul7> <button data-continent="Afrique" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-p24nyul7>
AFRIQUE
</button> <button data-continent="Am\xE9rique Latine" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-p24nyul7>
AM\xC9RIQUE LATINE
</button> <button data-continent="Asie" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-p24nyul7>
ASIE
</button> <button data-continent="Maghreb" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-p24nyul7>
MAGHREB
</button> </div> </div> <!-- Section Pays --> <div class="mb-6" data-astro-cid-p24nyul7> <div class="flex justify-between items-center mb-4" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-p24nyul7>
PAYS
</h3> <button id="all-countries-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" disabled style="opacity: 0.5; cursor: not-allowed;" data-astro-cid-p24nyul7>
TOUT
</button> </div> <div class="relative" data-astro-cid-p24nyul7> <select id="countries-select" class="w-full p-2.5 border border-gray-400 rounded-lg text-xs font-raleway bg-white appearance-none pr-8 uppercase cursor-pointer" disabled style="opacity: 0.5; cursor: not-allowed;" data-astro-cid-p24nyul7> <option value="tous" data-astro-cid-p24nyul7>Tous les pays</option> </select> <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-black pointer-events-none" style="opacity: 0.5;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-p24nyul7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-p24nyul7></path> </svg> </div> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-gray-400 mb-6" data-astro-cid-p24nyul7></div> <!-- Section Types de repas --> <div class="mb-6" data-astro-cid-p24nyul7> <div class="flex justify-between items-center mb-4" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-p24nyul7>
TYPE DE REPAS
</h3> <button id="all-meal-types-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" data-astro-cid-p24nyul7>
TOUT
</button> </div> <div class="space-y-2" id="meal-type-filters" data-astro-cid-p24nyul7> <label class="flex items-center cursor-pointer" data-astro-cid-p24nyul7> <input type="checkbox" class="meal-type-checkbox mr-2 w-4 h-4 border-2 border-black rounded-none cursor-pointer" value="Entr\xE9e" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-p24nyul7>ENTR\xC9E</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-p24nyul7> <input type="checkbox" class="meal-type-checkbox mr-2 w-4 h-4 border-2 border-black rounded-none cursor-pointer" value="Plats" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-p24nyul7>PLATS</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-p24nyul7> <input type="checkbox" class="meal-type-checkbox mr-2 w-4 h-4 border-2 border-black rounded-none cursor-pointer" value="Desserts" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-p24nyul7>DESSERTS</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-p24nyul7> <input type="checkbox" class="meal-type-checkbox mr-2 w-4 h-4 border-2 border-black rounded-none cursor-pointer" value="Accompagnements" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-p24nyul7>ACCOMPAGNEMENTS</span> </label> </div> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-gray-400 mb-6" data-astro-cid-p24nyul7></div> <!-- Section Notes --> <div class="mb-6" data-astro-cid-p24nyul7> <div class="flex justify-between items-center mb-4" data-astro-cid-p24nyul7> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-p24nyul7>
NOTES
</h3> <button id="rating-toggle-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer" data-astro-cid-p24nyul7>
D\xC9SACTIV\xC9
</button> </div> <!-- S\xE9lecteur d'\xE9toiles --> <div class="space-y-3" id="rating-section" style="display: none;" data-astro-cid-p24nyul7> <p class="text-xs font-raleway text-gray-600 mb-3" data-astro-cid-p24nyul7>
Note minimum requise :
</p> <div class="flex items-center justify-center space-x-1" id="stars-container" data-astro-cid-p24nyul7> <button data-rating="1" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="1 \xE9toile minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> <button data-rating="2" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="2 \xE9toiles minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> <button data-rating="3" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="3 \xE9toiles minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> <button data-rating="4" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="4 \xE9toiles minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> <button data-rating="5" class="star-btn w-6 h-6 transition-colors duration-200 cursor-pointer text-gray-300" title="5 \xE9toiles minimum" data-astro-cid-p24nyul7> <svg fill="currentColor" viewBox="0 0 20 20" data-astro-cid-p24nyul7> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-astro-cid-p24nyul7></path> </svg> </button> </div> <div class="text-center" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-gray-500" id="rating-text" data-astro-cid-p24nyul7>
0 \xE9toile et plus
</span> </div> <button id="all-ratings-btn" class="w-full text-xs font-raleway border border-gray-400 px-3 py-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" data-astro-cid-p24nyul7>
TOUTES LES NOTES
</button> </div> <!-- Message quand d\xE9sactiv\xE9 --> <div id="rating-disabled-message" class="text-center py-3" data-astro-cid-p24nyul7> <span class="text-xs font-raleway text-gray-500" data-astro-cid-p24nyul7>
Filtrage par notes d\xE9sactiv\xE9
</span> </div> </div> </div> </div> <!-- Contenu principal des recettes - Position normale (pas fixe) --> <div class="flex-1" data-astro-cid-p24nyul7> <!-- Contenu des recettes --> <div class="px-8 pb-8" data-astro-cid-p24nyul7> <!-- En-t\xEAte avec bouton --> <div class="mb-8 mt-10 flex justify-between items-start" data-astro-cid-p24nyul7> <div class="ml-22" data-astro-cid-p24nyul7> <h1 class="!text-6xl font-radio-canada-big font-black text-gray-800 mb-4 uppercase !text-left !pb-0" data-astro-cid-p24nyul7>
Toutes les recettes
</h1> <p class="text-gray-600 font-raleway" data-astro-cid-p24nyul7>
D\xE9couvrez toutes nos recettes du monde entier, de la plus
                r\xE9cente \xE0 la plus ancienne.
</p> <div id="results-info" class="text-lg text-gray-600 mt-4" data-astro-cid-p24nyul7> <span id="visible-count" data-astro-cid-p24nyul7>`, '</span> recettes \u2022 Page\n<span id="current-page" data-astro-cid-p24nyul7>1</span> sur <span id="total-pages" data-astro-cid-p24nyul7>1</span> </div> </div> <!-- Bouton Ajouter une recette en haut \xE0 droite --> <button id="add-recipe-btn" class="bg-sable mt-20 mr-22 hover:bg-sable-hover text-black font-bold px-6 py-3 rounded-lg shadow-lg transition-colors duration-300 uppercase tracking-wide cursor-pointer" data-astro-cid-p24nyul7>\n+ AJOUTER UNE RECETTE\n</button> </div> <!-- Zone des recettes --> <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 mb-40" id="recipes-container" data-astro-cid-p24nyul7> ', ` </div> <!-- Message si aucune recette --> <div id="no-recipes-message" class="hidden text-center py-16" data-astro-cid-p24nyul7> <p class="text-gray-500 text-lg font-raleway" data-astro-cid-p24nyul7>
Aucune recette ne correspond \xE0 vos crit\xE8res de recherche.
</p> </div> <!-- Pagination --> <div id="pagination-container" class="flex justify-center mt-10" data-astro-cid-p24nyul7> <div class="inline-flex items-center gap-1" id="pagination-controls" data-astro-cid-p24nyul7> <!-- G\xE9n\xE9r\xE9 dynamiquement par JavaScript --> </div> </div> </div> </div> </div> <!-- Modal Ajouter une recette --> <div id="add-recipe-modal" class="fixed inset-0 bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden" style="backdrop-filter: blur(8px);" data-astro-cid-p24nyul7> <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" data-astro-cid-p24nyul7> <!-- Header du modal --> <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl" data-astro-cid-p24nyul7> <div class="flex justify-between items-center" data-astro-cid-p24nyul7> <h2 class="text-xl font-radio-canada-big font-black uppercase text-gray-800" data-astro-cid-p24nyul7>
Ajouter une recette
</h2> <button id="close-modal-btn" class="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" data-astro-cid-p24nyul7> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-p24nyul7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-p24nyul7></path> </svg> </button> </div> </div> <!-- Contenu du modal --> <form id="recipe-form" class="p-6 space-y-6" data-astro-cid-p24nyul7> <!-- Nom de la recette --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Nom de la recette*
</label> <input type="text" id="recipe-name" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors" placeholder="Ex: Couscous royal" data-astro-cid-p24nyul7> </div> <!-- Description --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Description*
</label> <textarea id="recipe-description" required rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors resize-none" placeholder="D\xE9crivez votre recette..." data-astro-cid-p24nyul7></textarea> </div> <!-- Image --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Image de la recette
</label> <input type="file" id="recipe-image" accept="image/*" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" data-astro-cid-p24nyul7> </div> <!-- Grille pour les champs en 2 colonnes --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-p24nyul7> <!-- Continent --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Continent*
</label> <select id="recipe-continent" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" data-astro-cid-p24nyul7> <option value="" data-astro-cid-p24nyul7>S\xE9lectionner un continent</option> <option value="Afrique" data-astro-cid-p24nyul7>Afrique</option> <option value="Am\xE9rique Latine" data-astro-cid-p24nyul7>Am\xE9rique Latine</option> <option value="Asie" data-astro-cid-p24nyul7>Asie</option> <option value="Maghreb" data-astro-cid-p24nyul7>Maghreb</option> </select> </div> <!-- Pays --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Pays*
</label> <select id="recipe-country" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" disabled data-astro-cid-p24nyul7> <option value="" data-astro-cid-p24nyul7>S\xE9lectionner d'abord un continent</option> </select> </div> <!-- Type de repas --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Type de repas*
</label> <select id="recipe-type" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" data-astro-cid-p24nyul7> <option value="" data-astro-cid-p24nyul7>S\xE9lectionner un type</option> <option value="Entr\xE9e" data-astro-cid-p24nyul7>Entr\xE9e</option> <option value="Plats" data-astro-cid-p24nyul7>Plats</option> <option value="Desserts" data-astro-cid-p24nyul7>Desserts</option> <option value="Accompagnements" data-astro-cid-p24nyul7>Accompagnements</option> </select> </div> <!-- Temps de pr\xE9paration --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Temps de pr\xE9paration (minutes)*
</label> <input type="number" id="recipe-time" required min="1" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors" placeholder="Ex: 45" data-astro-cid-p24nyul7> </div> <!-- Difficult\xE9 --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Difficult\xE9*
</label> <select id="recipe-difficulty" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors cursor-pointer" data-astro-cid-p24nyul7> <option value="" data-astro-cid-p24nyul7>S\xE9lectionner la difficult\xE9</option> <option value="facile" data-astro-cid-p24nyul7>Facile</option> <option value="moyen" data-astro-cid-p24nyul7>Moyen</option> <option value="difficile" data-astro-cid-p24nyul7>Difficile</option> </select> </div> </div> <!-- Ingr\xE9dients --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
Ingr\xE9dients*
</label> <textarea id="recipe-ingredients" required rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors resize-none" placeholder="Listez les ingr\xE9dients (un par ligne ou s\xE9par\xE9s par des virgules)" data-astro-cid-p24nyul7></textarea> </div> <!-- \xC9tapes --> <div data-astro-cid-p24nyul7> <label class="block text-sm font-raleway font-bold text-gray-700 mb-2 uppercase" data-astro-cid-p24nyul7>
\xC9tapes de pr\xE9paration*
</label> <textarea id="recipe-steps" required rows="5" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-saumon transition-colors resize-none" placeholder="D\xE9crivez les \xE9tapes de pr\xE9paration..." data-astro-cid-p24nyul7></textarea> </div> <!-- Boutons du formulaire --> <div class="flex justify-end space-x-4 pt-4 border-t border-gray-200" data-astro-cid-p24nyul7> <button type="button" id="cancel-recipe-btn" class="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-raleway font-bold uppercase cursor-pointer" data-astro-cid-p24nyul7>
Annuler
</button> <button type="submit" id="submit-recipe-btn" class="px-6 py-3 bg-saumon hover:bg-saumon-hover text-black rounded-lg transition-colors font-raleway font-bold uppercase cursor-pointer" data-astro-cid-p24nyul7>
Ajouter la recette
</button> </div> </form> </div> </div> <!-- Script pour le filtrage et modal --> <script>(function(){`, `
      // Rendre les pays disponibles globalement pour Alpine.js
      window.allPays = pays;

      document.addEventListener("DOMContentLoaded", function () {
        console.log("Initialisation de la page recettes...");

        // Variables globales
        let selectedContinents = [];
        let selectedMealTypes = [];
        let selectedCountry = "tous";
        let searchQuery = "";
        let ratingFilterEnabled = false;
        let minRating = 0;
        let availableCountries = [];
        let filteredRecipes = [...recipes];
        let currentPage = 1;
        const recipesPerPage = 12;

        // \xC9l\xE9ments DOM
        const addRecipeBtn = document.getElementById("add-recipe-btn");
        const addRecipeModal = document.getElementById("add-recipe-modal");
        const closeModalBtn = document.getElementById("close-modal-btn");
        const cancelRecipeBtn = document.getElementById("cancel-recipe-btn");
        const recipeForm = document.getElementById("recipe-form");
        const submitRecipeBtn = document.getElementById("submit-recipe-btn");

        // Gestion du modal
        function openModal() {
          addRecipeModal.classList.remove("hidden");
          document.body.style.overflow = "hidden";
        }

        function closeModal() {
          addRecipeModal.classList.add("hidden");
          document.body.style.overflow = "auto";
          resetForm();
        }

        function resetForm() {
          recipeForm.reset();
          submitRecipeBtn.textContent = "AJOUTER LA RECETTE";
          submitRecipeBtn.disabled = false;

          // R\xE9initialiser aussi le dropdown pays
          const countrySelect = document.getElementById("recipe-country");
          countrySelect.disabled = true;
          countrySelect.innerHTML =
            '<option value="">S\xE9lectionner d\\\\'abord un continent</option>';
        }

        // Event listeners pour le modal
        addRecipeBtn.addEventListener("click", openModal);
        closeModalBtn.addEventListener("click", closeModal);
        cancelRecipeBtn.addEventListener("click", closeModal);

        // Fermer le modal en cliquant sur l'overlay
        addRecipeModal.addEventListener("click", function (e) {
          if (e.target === addRecipeModal) {
            closeModal();
          }
        });

        // Gestion du changement de continent dans le formulaire
        document
          .getElementById("recipe-continent")
          .addEventListener("change", function () {
            const countrySelect = document.getElementById("recipe-country");
            const selectedContinent = this.value;

            if (selectedContinent) {
              // Filtrer les pays par continent
              const countriesForContinent = window.allPays.filter(
                (country) => country.continent === selectedContinent
              );

              // Remplir le dropdown pays
              countrySelect.disabled = false;
              countrySelect.innerHTML =
                '<option value="">S\xE9lectionner un pays</option>';

              countriesForContinent.forEach((country) => {
                const option = document.createElement("option");
                option.value = country.id;
                option.textContent = country.nom;
                countrySelect.appendChild(option);
              });
            } else {
              // R\xE9initialiser si aucun continent s\xE9lectionn\xE9
              countrySelect.disabled = true;
              countrySelect.innerHTML =
                '<option value="">S\xE9lectionner d\\\\'abord un continent</option>';
            }
          });

        // Gestion de la soumission du formulaire
        recipeForm.addEventListener("submit", async function (e) {
          e.preventDefault();

          submitRecipeBtn.textContent = "AJOUT EN COURS...";
          submitRecipeBtn.disabled = true;

          try {
            const formData = new FormData();

            formData.append(
              "nom",
              document.getElementById("recipe-name").value
            );
            formData.append(
              "description",
              document.getElementById("recipe-description").value
            );
            formData.append(
              "ingredients",
              document.getElementById("recipe-ingredients").value
            );
            formData.append(
              "etapes",
              document.getElementById("recipe-steps").value
            );
            formData.append(
              "continent",
              document.getElementById("recipe-continent").value
            );
            formData.append(
              "pays",
              document.getElementById("recipe-country").value
            );
            formData.append(
              "type",
              document.getElementById("recipe-type").value
            );
            formData.append(
              "temps",
              document.getElementById("recipe-time").value
            );
            formData.append(
              "difficulte",
              document.getElementById("recipe-difficulty").value
            );

            const imageFile = document.getElementById("recipe-image").files[0];
            if (imageFile) {
              formData.append("img", imageFile);
            }

            const response = await fetch("/api/recipes", {
              method: "POST",
              body: formData,
            });

            if (response.ok) {
              alert("Recette ajout\xE9e avec succ\xE8s !");
              closeModal();
              window.location.reload();
            } else {
              throw new Error("Erreur lors de l'ajout de la recette");
            }
          } catch (error) {
            console.error("Erreur:", error);
            alert("Erreur lors de l'ajout de la recette. Veuillez r\xE9essayer.");
            submitRecipeBtn.textContent = "AJOUTER LA RECETTE";
            submitRecipeBtn.disabled = false;
          }
        });

        // Gestion des filtres - Recherche
        const searchInput = document.getElementById("search-input");
        const searchIcon = document.getElementById("search-icon");
        const clearSearchBtn = document.getElementById("clear-search-btn");

        searchInput.addEventListener("input", function () {
          searchQuery = this.value.toLowerCase();

          if (searchQuery) {
            searchIcon.classList.add("hidden");
            clearSearchBtn.classList.remove("hidden");
          } else {
            searchIcon.classList.remove("hidden");
            clearSearchBtn.classList.add("hidden");
          }

          filterRecipes();
        });

        clearSearchBtn.addEventListener("click", function () {
          searchInput.value = "";
          searchQuery = "";
          searchIcon.classList.remove("hidden");
          clearSearchBtn.classList.add("hidden");
          filterRecipes();
        });

        // Gestion des filtres - Continents
        const allContinentsBtn = document.getElementById("all-continents-btn");
        const continentBtns = document.querySelectorAll(".continent-btn");

        allContinentsBtn.addEventListener("click", function () {
          selectedContinents = [
            "Afrique",
            "Am\xE9rique Latine",
            "Asie",
            "Maghreb",
          ];
          updateContinentButtons();
          updateCountriesDropdown();
          filterRecipes();
        });

        continentBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            const continent = this.dataset.continent;

            if (selectedContinents.includes(continent)) {
              selectedContinents = selectedContinents.filter(
                (c) => c !== continent
              );
            } else {
              selectedContinents.push(continent);
            }

            updateContinentButtons();
            updateCountriesDropdown();
            filterRecipes();
          });
        });

        function updateContinentButtons() {
          // Bouton "TOUT"
          const allSelected =
            selectedContinents.length === 4 &&
            selectedContinents.includes("Afrique") &&
            selectedContinents.includes("Am\xE9rique Latine") &&
            selectedContinents.includes("Asie") &&
            selectedContinents.includes("Maghreb");

          if (allSelected) {
            allContinentsBtn.classList.add("bg-gray-200");
          } else {
            allContinentsBtn.classList.remove("bg-gray-200");
          }

          // Boutons continents
          continentBtns.forEach((btn) => {
            const continent = btn.dataset.continent;
            if (selectedContinents.includes(continent)) {
              btn.classList.remove("bg-white", "text-black", "border-black");
              btn.classList.add("bg-jaune", "text-black");
            } else {
              btn.classList.remove("bg-jaune");
              btn.classList.add("bg-white", "text-black", "border-black");
            }
          });
        }

        // Gestion des pays
        function updateCountriesDropdown() {
          const countriesSelect = document.getElementById("countries-select");
          const allCountriesBtn = document.getElementById("all-countries-btn");

          if (selectedContinents.length === 0) {
            availableCountries = [];
            selectedCountry = "tous";
            countriesSelect.disabled = true;
            allCountriesBtn.disabled = true;
            countriesSelect.style.opacity = "0.5";
            countriesSelect.style.cursor = "not-allowed";
            allCountriesBtn.style.opacity = "0.5";
            allCountriesBtn.style.cursor = "not-allowed";
          } else {
            availableCountries = window.allPays.filter((p) =>
              selectedContinents.includes(p.continent)
            );
            countriesSelect.disabled = false;
            allCountriesBtn.disabled = false;
            countriesSelect.style.opacity = "1";
            countriesSelect.style.cursor = "pointer";
            allCountriesBtn.style.opacity = "1";
            allCountriesBtn.style.cursor = "pointer";

            // Mettre \xE0 jour les options
            countriesSelect.innerHTML =
              '<option value="tous">Tous les pays</option>';
            availableCountries.forEach((country) => {
              const option = document.createElement("option");
              option.value = country.id;
              option.textContent = country.nom;
              countriesSelect.appendChild(option);
            });
          }
        }

        document
          .getElementById("all-countries-btn")
          .addEventListener("click", function () {
            if (!this.disabled) {
              selectedCountry = "tous";
              document.getElementById("countries-select").value = "tous";
              filterRecipes();
            }
          });

        document
          .getElementById("countries-select")
          .addEventListener("change", function () {
            selectedCountry = this.value;
            filterRecipes();
          });

        // Gestion des types de repas
        const allMealTypesBtn = document.getElementById("all-meal-types-btn");
        const mealTypeCheckboxes = document.querySelectorAll(
          ".meal-type-checkbox"
        );

        allMealTypesBtn.addEventListener("click", function () {
          selectedMealTypes = [
            "Entr\xE9e",
            "Plats",
            "Desserts",
            "Accompagnements",
          ];
          mealTypeCheckboxes.forEach((cb) => (cb.checked = true));
          updateMealTypesButton();
          filterRecipes();
        });

        mealTypeCheckboxes.forEach((cb) => {
          cb.addEventListener("change", function () {
            if (this.checked) {
              selectedMealTypes.push(this.value);
            } else {
              selectedMealTypes = selectedMealTypes.filter(
                (t) => t !== this.value
              );
            }
            updateMealTypesButton();
            filterRecipes();
          });
        });

        function updateMealTypesButton() {
          const allSelected =
            selectedMealTypes.length === 4 &&
            selectedMealTypes.includes("Entr\xE9e") &&
            selectedMealTypes.includes("Plats") &&
            selectedMealTypes.includes("Desserts") &&
            selectedMealTypes.includes("Accompagnements");

          if (allSelected) {
            allMealTypesBtn.classList.add("bg-gray-200");
          } else {
            allMealTypesBtn.classList.remove("bg-gray-200");
          }
        }

        // Gestion du filtre de notes
        const ratingToggleBtn = document.getElementById("rating-toggle-btn");
        const ratingSection = document.getElementById("rating-section");
        const ratingDisabledMessage = document.getElementById(
          "rating-disabled-message"
        );
        const starBtns = document.querySelectorAll(".star-btn");
        const allRatingsBtn = document.getElementById("all-ratings-btn");
        const ratingText = document.getElementById("rating-text");

        ratingToggleBtn.addEventListener("click", function () {
          ratingFilterEnabled = !ratingFilterEnabled;

          if (ratingFilterEnabled) {
            this.textContent = "ACTIV\xC9";
            this.classList.add(
              "border-saumon",
              "bg-saumon-hover",
              "text-black"
            );
            this.classList.remove("border-gray-600");
            ratingSection.style.display = "block";
            ratingDisabledMessage.style.display = "none";
          } else {
            this.textContent = "D\xC9SACTIV\xC9";
            this.classList.remove(
              "border-saumon",
              "bg-saumon-hover",
              "text-black"
            );
            this.classList.add("border-gray-600");
            ratingSection.style.display = "none";
            ratingDisabledMessage.style.display = "block";
            minRating = 0;
            updateStars();
          }

          filterRecipes();
        });

        starBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            minRating = parseInt(this.dataset.rating);
            updateStars();
            filterRecipes();
          });
        });

        allRatingsBtn.addEventListener("click", function () {
          minRating = 0;
          updateStars();
          filterRecipes();
        });

        function updateStars() {
          starBtns.forEach((btn, index) => {
            if (index < minRating) {
              btn.classList.remove("text-gray-300");
              btn.classList.add("text-yellow-500");
            } else {
              btn.classList.remove("text-yellow-500");
              btn.classList.add("text-gray-300");
            }
          });

          if (minRating === 0) {
            ratingText.textContent = "0 \xE9toile et plus";
            allRatingsBtn.classList.add("bg-gray-200");
          } else {
            ratingText.textContent = \\\`\\\${minRating} \xE9toile\\\${minRating > 1 ? "s" : ""} et plus\\\`;
            allRatingsBtn.classList.remove("bg-gray-200");
          }
        }

        // Bouton de r\xE9initialisation
        document
          .getElementById("reset-filters-btn")
          .addEventListener("click", function () {
            selectedContinents = [];
            selectedMealTypes = [];
            selectedCountry = "tous";
            searchQuery = "";
            ratingFilterEnabled = false;
            minRating = 0;

            // R\xE9initialiser l'interface
            searchInput.value = "";
            searchIcon.classList.remove("hidden");
            clearSearchBtn.classList.add("hidden");

            mealTypeCheckboxes.forEach((cb) => (cb.checked = false));

            ratingToggleBtn.textContent = "D\xC9SACTIV\xC9";
            ratingToggleBtn.classList.remove(
              "border-saumon",
              "bg-saumon-hover",
              "text-black"
            );
            ratingToggleBtn.classList.add("border-gray-600");
            ratingSection.style.display = "none";
            ratingDisabledMessage.style.display = "block";

            updateContinentButtons();
            updateCountriesDropdown();
            updateMealTypesButton();
            updateStars();
            filterRecipes();
          });

        // Fonction de filtrage des recettes
        function filterRecipes() {
          currentPage = 1; // Reset \xE0 la page 1 lors du filtrage

          filteredRecipes = recipes.filter((recipe) => {
            let shouldShow = true;

            // Filtre par recherche textuelle
            if (
              searchQuery &&
              !recipe.nom.toLowerCase().includes(searchQuery)
            ) {
              shouldShow = false;
            }

            // Filtre par continent
            if (selectedContinents.length > 0) {
              const recipeContinent =
                recipe.expand?.pays?.continent || recipe.continent;
              if (!selectedContinents.includes(recipeContinent)) {
                shouldShow = false;
              }
            }

            // Filtre par pays
            if (selectedCountry !== "tous") {
              const recipePaysId = recipe.expand?.pays?.id || recipe.pays;
              if (recipePaysId !== selectedCountry) {
                shouldShow = false;
              }
            }

            // Filtre par type de repas
            if (selectedMealTypes.length > 0) {
              const recipeType =
                recipe.type || recipe.typeRepas || recipe.categorie;
              if (!selectedMealTypes.includes(recipeType)) {
                shouldShow = false;
              }
            }

            // Filtre par notes
            if (ratingFilterEnabled && minRating > 0) {
              const recipeRating = recipe.note || 0;
              if (recipeRating < minRating) {
                shouldShow = false;
              }
            }

            return shouldShow;
          });

          updateDisplay();
        }

        // Fonction de mise \xE0 jour de l'affichage avec pagination
        function updateDisplay() {
          const totalRecipes = filteredRecipes.length;
          const totalPages = Math.ceil(totalRecipes / recipesPerPage);
          const startIndex = (currentPage - 1) * recipesPerPage;
          const endIndex = startIndex + recipesPerPage;
          const recipesToShow = filteredRecipes.slice(startIndex, endIndex);

          // Mettre \xE0 jour les infos
          document.getElementById("visible-count").textContent = totalRecipes;
          document.getElementById("current-page").textContent = currentPage;
          document.getElementById("total-pages").textContent = Math.max(
            1,
            totalPages
          );

          // Afficher/masquer toutes les recettes
          const allRecipeCards = document.querySelectorAll(
            "#recipes-container > div"
          );
          allRecipeCards.forEach((card, index) => {
            card.style.display = "none";
          });

          // Afficher uniquement les recettes de la page courante
          recipesToShow.forEach((recipe) => {
            const recipeIndex = recipes.findIndex((r) => r.id === recipe.id);
            if (recipeIndex !== -1 && allRecipeCards[recipeIndex]) {
              allRecipeCards[recipeIndex].style.display = "flex";
            }
          });

          // Afficher/masquer le message "aucune recette"
          const noRecipesMessage =
            document.getElementById("no-recipes-message");
          if (totalRecipes === 0) {
            noRecipesMessage.classList.remove("hidden");
          } else {
            noRecipesMessage.classList.add("hidden");
          }

          // Mettre \xE0 jour la pagination
          updatePagination(totalPages);
        }

        // Fonction de mise \xE0 jour de la pagination
        function updatePagination(totalPages) {
          const paginationControls = document.getElementById(
            "pagination-controls"
          );
          paginationControls.innerHTML = "";

          if (totalPages <= 1) {
            document.getElementById("pagination-container").style.display =
              "none";
            return;
          }

          document.getElementById("pagination-container").style.display =
            "flex";

          // Bouton pr\xE9c\xE9dent
          const prevBtn = document.createElement("button");
          prevBtn.innerHTML = "&lt;";
          prevBtn.className =
            "w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors";
          prevBtn.disabled = currentPage === 1;
          if (currentPage === 1) {
            prevBtn.classList.add("opacity-50", "cursor-not-allowed");
          } else {
            prevBtn.classList.add("cursor-pointer");
          }
          prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
              currentPage--;
              updateDisplay();
            }
          });
          paginationControls.appendChild(prevBtn);

          // Calculer les pages \xE0 afficher
          const maxVisiblePages = 7; // Afficher max 7 num\xE9ros de pages
          let startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2)
          );
          let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

          // Ajuster si on n'a pas assez de pages \xE0 la fin
          if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
          }

          // Num\xE9ros de pages
          for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.textContent = i;
            pageBtn.className =
              "w-8 h-8 flex items-center justify-center text-sm font-medium transition-colors cursor-pointer";

            if (i === currentPage) {
              pageBtn.classList.add("bg-black", "text-white");
            } else {
              pageBtn.classList.add(
                "text-gray-900",
                "bg-white",
                "hover:bg-gray-100"
              );
            }

            pageBtn.addEventListener("click", () => {
              currentPage = i;
              updateDisplay();
            });
            paginationControls.appendChild(pageBtn);
          }

          // Points de suspension et derni\xE8re page si n\xE9cessaire
          if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
              const dotsSpan = document.createElement("span");
              dotsSpan.textContent = "...";
              dotsSpan.className =
                "w-8 h-8 flex items-center justify-center text-sm text-gray-500";
              paginationControls.appendChild(dotsSpan);
            }

            const lastPageBtn = document.createElement("button");
            lastPageBtn.textContent = totalPages;
            lastPageBtn.className =
              "w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors cursor-pointer";
            lastPageBtn.addEventListener("click", () => {
              currentPage = totalPages;
              updateDisplay();
            });
            paginationControls.appendChild(lastPageBtn);
          }

          // Bouton suivant
          const nextBtn = document.createElement("button");
          nextBtn.innerHTML = "&gt;";
          nextBtn.className =
            "w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors";
          nextBtn.disabled = currentPage === totalPages;
          if (currentPage === totalPages) {
            nextBtn.classList.add("opacity-50", "cursor-not-allowed");
          } else {
            nextBtn.classList.add("cursor-pointer");
          }
          nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) {
              currentPage++;
              updateDisplay();
            }
          });
          paginationControls.appendChild(nextBtn);
        }

        // Initialisation
        filterRecipes();
        console.log("Page recettes initialis\xE9e avec succ\xE8s");
      });
    })();<\/script> </div> `])), maybeRenderHead(), recipes.length, recipes.map((recette) => renderTemplate`<div class="w-full flex justify-center" data-astro-cid-p24nyul7> ${renderComponent($$result2, "CardRecettes", $$CardRecettes, { "recette": recette, "data-astro-cid-p24nyul7": true })} </div>`), defineScriptVars({ recipes, pays })) })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/recettes/index.astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/recettes/index.astro";
const $$url = "/site-applicatif/recettes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
