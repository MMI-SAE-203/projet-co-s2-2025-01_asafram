import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, n as renderScript, h as addAttribute } from '../../../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutApplicatif } from '../../../chunks/LayoutApplicatif_tUxN7yFY.mjs';
import { $ as $$CardProduits } from '../../../chunks/CardProduits_BL5gz2fO.mjs';
import { $ as $$CardRecettes } from '../../../chunks/CardRecettes_D3uYQO6X.mjs';
import { d as getPaysByContinent, e as getProductsByContinent, f as getRecipesByContinent } from '../../../chunks/backend_CFzKrOra.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Asie = createComponent(async ($$result, $$props, $$slots) => {
  const paysAsie = await getPaysByContinent("Asie");
  const produitsAsie = await getProductsByContinent("Asie", {
    limit: 8
  });
  const recettesAsie = await getRecipesByContinent("Asie", {
    limit: 6
  });
  const continentData = {
    description: "D\xE9couvrez les saveurs authentiques du continent asiatique, riche en traditions culinaires mill\xE9naires.",
    stats: {
      produits: produitsAsie.items?.length || produitsAsie.totalItems || 0,
      recettes: recettesAsie.items?.length || recettesAsie.totalItems || 0,
      pays: paysAsie.length
    }};
  return renderTemplate`${renderComponent($$result, "LayoutApplicatif", $$LayoutApplicatif, { "title": "Asie - ASAFRAM", "description": "D\xE9couvrez les produits et recettes authentiques d'Asie" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative min-h-[70vh] bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 overflow-hidden"> <!-- Contenu principal de la hero --> <div class="relative z-10 container mx-auto px-6 py-20 text-center text-white"> <div class="max-w-4xl mx-auto"> <!-- Badge continent --> <div class="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"> <span class="text-sm font-raleway text-black font-bold uppercase tracking-wider">Continent</span> </div> <!-- Titre principal --> <h1 class="text-6xl md:text-8xl font-radio-canada-big font-black mb-6 drop-shadow-2xl">
ASIE
</h1> <!-- Description --> <p class="text-xl md:text-2xl font-raleway mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"> ${continentData.description} </p> <!-- Statistiques avec drapeaux asiatiques --> <div class="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"> <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden"> <div class="absolute inset-0 flex items-center justify-center opacity-30"> ${paysAsie[0] && paysAsie[0].drapeauUrl && renderTemplate`<img${addAttribute(paysAsie[0].drapeauUrl, "src")}${addAttribute(paysAsie[0].nom, "alt")} class="w-24 h-16 object-cover rounded-lg">`} </div> <div class="relative z-10"> <div class="text-3xl font-black mb-2 text-black drop-shadow-lg"> ${continentData.stats.produits} </div> <div class="text-sm uppercase tracking-wider text-black font-bold">
Produits
</div> </div> </div> <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden"> <div class="absolute inset-0 flex items-center justify-center opacity-30"> ${paysAsie[1] && paysAsie[1].drapeauUrl && renderTemplate`<img${addAttribute(paysAsie[1].drapeauUrl, "src")}${addAttribute(paysAsie[1].nom, "alt")} class="w-24 h-16 object-cover rounded-lg">`} </div> <div class="relative z-10"> <div class="text-3xl font-black mb-2 text-black drop-shadow-lg"> ${continentData.stats.recettes} </div> <div class="text-sm uppercase tracking-wider text-black font-bold">
Recettes
</div> </div> </div> <div class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden"> <div class="absolute inset-0 flex items-center justify-center opacity-30"> ${paysAsie[2] && paysAsie[2].drapeauUrl && renderTemplate`<img${addAttribute(paysAsie[2].drapeauUrl, "src")}${addAttribute(paysAsie[2].nom, "alt")} class="w-24 h-16 object-cover rounded-lg">`} </div> <div class="relative z-10"> <div class="text-3xl font-black mb-2 text-black drop-shadow-lg"> ${continentData.stats.pays} </div> <div class="text-sm uppercase tracking-wider text-black font-bold">
Pays
</div> </div> </div> </div> <!-- Ligne de drapeaux asiatiques --> <div class="max-w-5xl mx-auto mb-8"> <div class="flex justify-center items-center gap-4 flex-wrap"> ${paysAsie.slice(0, 8).map((pays) => renderTemplate`<div class="group cursor-pointer"> <div class="relative"> <img${addAttribute(pays.drapeauUrl, "src")}${addAttribute(`Drapeau ${pays.nom}`, "alt")} class="w-20 h-14 rounded-lg shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-300"${addAttribute(pays.nom, "title")}> <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"> <div class="bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded whitespace-nowrap"> ${pays.nom} </div> </div> </div> </div>`)} </div> </div> </div> </div> </section>  <section class="bg-gray-50 py-8 sticky top-0 z-40 shadow-md"> <div class="container mx-auto px-6"> <div class="flex flex-wrap items-center justify-between gap-4"> <!-- Filtres par pays --> <div class="flex items-center gap-4"> <span class="font-raleway font-bold text-gray-700">Filtrer par pays :</span> <select id="country-filter" class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 cursor-pointer"> <option value="tous">Tous les pays</option> ${paysAsie.map((pays) => renderTemplate`<option${addAttribute(pays.id, "value")}>${pays.nom}</option>`)} </select> </div> <!-- Toggle sections --> <div class="flex items-center gap-4"> <button id="toggle-products" class="px-4 font-semibold py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors cursor-pointer">
Produits
</button> <button id="toggle-recipes" class="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors cursor-pointer font-semibold">
Recettes
</button> <button id="show-all" class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
Tout afficher
</button> </div> <!-- Bouton réinitialiser --> <button id="reset-filters" class="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer font-semibold">
Réinitialiser
</button> </div> </div> </section>  <section id="products-section" class="py-16 bg-white"> <div class="container mx-auto px-6"> <!-- En-tête section --> <div class="text-center mb-12"> <h2 class="text-4xl font-radio-canada-big font-black text-gray-800 mb-4">
PRODUITS PHARES D'ASIE
</h2> <p class="text-gray-600 font-raleway max-w-2xl mx-auto">
Découvrez une sélection de produits authentiques venus tout droit des
          marchés asiatiques
</p> </div> <!-- Grille des produits --> <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center"> ${(produitsAsie.items || []).map((produit) => renderTemplate`<div class="product-card"${addAttribute(produit.expand?.pays?.id, "data-country")}> ${renderComponent($$result2, "CardProduits", $$CardProduits, { "product": produit })} </div>`)} </div> <!-- Message si aucun produit --> <div id="no-products-message" class="hidden text-center py-12"> <p class="text-gray-500 text-lg font-raleway">
Aucun produit trouvé pour ce filtre.
</p> </div> <!-- Bouton voir plus --> <div class="text-center mt-12"> <a href="/site-applicatif/produits?continent=Asie" class="inline-block bg-red-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors cursor-pointer">
Voir tous les produits d'Asie
</a> </div> </div> </section>  <section id="recipes-section" class="py-16 bg-gray-50"> <div class="container mx-auto px-6"> <!-- En-tête section --> <div class="text-center mb-12"> <h2 class="text-4xl font-radio-canada-big font-black text-gray-800 mb-4">
RECETTES TRADITIONNELLES
</h2> <p class="text-gray-600 font-raleway max-w-2xl mx-auto">
Explorez les secrets culinaires transmis de génération en génération à
          travers l'Asie
</p> </div> <!-- Grille des recettes --> <div id="recipes-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"> ${(recettesAsie.items || []).map((recette) => renderTemplate`<div class="recipe-card"${addAttribute(recette.expand?.pays?.id, "data-country")}> ${renderComponent($$result2, "CardRecettes", $$CardRecettes, { "recette": recette })} </div>`)} </div> <!-- Message si aucune recette --> <div id="no-recipes-message" class="hidden text-center py-12"> <p class="text-gray-500 text-lg font-raleway">
Aucune recette trouvée pour ce filtre.
</p> </div> <!-- Bouton voir plus --> <div class="text-center mt-12"> <a href="/site-applicatif/recettes?continent=Asie" class="inline-block bg-orange-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-700 transition-colors cursor-pointer">
Découvrir toutes les recettes d'Asie
</a> </div> </div> </section>  <section class="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white"> <div class="container mx-auto px-6 text-center"> <h2 class="text-3xl font-radio-canada-big font-black mb-4">
EXPLOREZ LES AUTRES CONTINENTS
</h2> <p class="text-xl font-raleway mb-8 max-w-2xl mx-auto">
Continuez votre voyage culinaire à travers les saveurs du monde entier
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"> <a href="/site-applicatif/continents/afrique" class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all cursor-pointer group"> <h3 class="text-xl font-bold mb-2 group-hover:text-yellow-200">
Afrique
</h3> <p class="text-sm opacity-90">Épices et traditions</p> </a> <a href="/site-applicatif/continents/amerique-latine" class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all cursor-pointer group"> <h3 class="text-xl font-bold mb-2 group-hover:text-yellow-200">
Amérique Latine
</h3> <p class="text-sm opacity-90">Saveurs tropicales</p> </a> <a href="/site-applicatif/continents/maghreb" class="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all cursor-pointer group"> <h3 class="text-xl font-bold mb-2 group-hover:text-yellow-200">
Maghreb
</h3> <p class="text-sm opacity-90">Délices méditerranéens</p> </a> </div> </div> </section> ${renderScript($$result2, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/continents/asie.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/continents/asie.astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/continents/asie.astro";
const $$url = "/site-applicatif/continents/asie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Asie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
