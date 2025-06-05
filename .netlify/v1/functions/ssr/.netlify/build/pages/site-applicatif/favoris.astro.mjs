import { e as createComponent, i as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutApplicatif, I as IconeVide, a as IconeFavoris } from '../../chunks/LayoutApplicatif_tUxN7yFY.mjs';
import { i as isUserLoggedIn, h as getUserFavorites } from '../../chunks/backend_CFzKrOra.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Favoris = createComponent(async ($$result, $$props, $$slots) => {
  const userLoggedIn = isUserLoggedIn();
  let favorites = { produits: [], recettes: [], boutiques: [] };
  if (userLoggedIn) {
    try {
      favorites = await getUserFavorites();
    } catch (error) {
      console.error("Erreur lors de la r\xE9cup\xE9ration des favoris:", error);
    }
  }
  const totalFavoris = favorites.produits.length + favorites.recettes.length + favorites.boutiques.length;
  return renderTemplate`${renderComponent($$result, "LayoutApplicatif", $$LayoutApplicatif, { "title": "Mes Favoris | ASAFRAM", "description": "G\xE9rez vos produits, recettes et boutiques favoris sur ASAFRAM", "data-astro-cid-kosqkdkk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8 max-w-7xl" data-astro-cid-kosqkdkk> <div class="mb-8" data-astro-cid-kosqkdkk> <h1 class="text-3xl font-bold mb-2" data-astro-cid-kosqkdkk>Mes Favoris</h1> <p class="text-gray-600" data-astro-cid-kosqkdkk> ${totalFavoris} élément${totalFavoris > 1 ? "s" : ""} sauvegardé${totalFavoris > 1 ? "s" : ""} </p> </div> <!-- Navigation entre les types de favoris --> <div class="mb-8" x-data="{ activeTab: 'produits' }" data-astro-cid-kosqkdkk> <div class="border-b border-gray-200" data-astro-cid-kosqkdkk> <nav class="flex -mb-px space-x-8" data-astro-cid-kosqkdkk> <button @click="activeTab = 'produits'" :class="activeTab === 'produits' ? 'border-saumon text-saumon' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'" class="py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200" data-astro-cid-kosqkdkk>
Produits (${favorites.produits.length})
</button> <button @click="activeTab = 'recettes'" :class="activeTab === 'recettes' ? 'border-saumon text-saumon' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'" class="py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200" data-astro-cid-kosqkdkk>
Recettes (${favorites.recettes.length})
</button> <button @click="activeTab = 'boutiques'" :class="activeTab === 'boutiques' ? 'border-saumon text-saumon' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'" class="py-4 px-1 border-b-2 font-medium text-lg transition-colors duration-200" data-astro-cid-kosqkdkk>
Boutiques (${favorites.boutiques.length})
</button> </nav> </div> <!-- Conteneur des produits favoris --> <div x-show="activeTab === 'produits'" class="mt-6" data-astro-cid-kosqkdkk> ${!userLoggedIn ? renderTemplate`<div class="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg" data-astro-cid-kosqkdkk> <img${addAttribute(IconeVide.src, "src")} alt="" class="w-20 h-20 mb-4 opacity-40" data-astro-cid-kosqkdkk> <h3 class="text-xl font-semibold mb-2" data-astro-cid-kosqkdkk>
Connectez-vous pour voir vos favoris
</h3> <p class="text-gray-500 mb-6 text-center max-w-md" data-astro-cid-kosqkdkk>
Vous devez être connecté pour accéder à votre liste de favoris
                et retrouver vos produits préférés.
</p> <a href="/site-applicatif/compte" class="px-8 py-3 bg-saumon text-white font-bold rounded-full hover:bg-[#e69c50] transition-colors duration-300" data-astro-cid-kosqkdkk>
Se connecter
</a> </div>` : favorites.produits.length === 0 ? renderTemplate`<div class="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg" data-astro-cid-kosqkdkk> <img${addAttribute(IconeFavoris.src, "src")} alt="" class="w-20 h-20 mb-4 opacity-40" data-astro-cid-kosqkdkk> <h3 class="text-xl font-semibold mb-2" data-astro-cid-kosqkdkk>
Aucun produit en favoris
</h3> <p class="text-gray-500 mb-6 text-center max-w-md" data-astro-cid-kosqkdkk>
Découvrez notre catalogue et ajoutez des produits à vos favoris
                pour les retrouver ici.
</p> <a href="/site-applicatif" class="px-8 py-3 bg-saumon text-white font-bold rounded-full hover:bg-[#e69c50] transition-colors duration-300" data-astro-cid-kosqkdkk>
Découvrir les produits
</a> </div>` : renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6" data-astro-cid-kosqkdkk> ${favorites.produits.map((favItem) => renderTemplate`<div class="relative group" data-astro-cid-kosqkdkk> <a${addAttribute(`/site-applicatif/produits/${favItem.item.id}`, "href")} class="block h-full" data-astro-cid-kosqkdkk> <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-transparent hover:border-saumon h-full flex flex-col" data-astro-cid-kosqkdkk> <div class="w-full h-48 bg-gray-50 flex items-center justify-center relative" data-astro-cid-kosqkdkk> <div class="w-40 h-40 bg-saumon opacity-75 rounded-full absolute" data-astro-cid-kosqkdkk></div> <img${addAttribute(favItem.item.img, "src")}${addAttribute(favItem.item.nom, "alt")} class="w-36 h-36 object-contain relative z-10" data-astro-cid-kosqkdkk> </div> <div class="p-4 flex-grow flex flex-col" data-astro-cid-kosqkdkk> <h3 class="text-lg font-bold mb-2 line-clamp-2" data-astro-cid-kosqkdkk> ${favItem.item.nom} </h3> <div class="text-lg font-bold text-black mt-auto" data-astro-cid-kosqkdkk> ${favItem.item.prix ? `${favItem.item.prix.toFixed(2)}\u20AC` : ""} </div> </div> </div> </a> <button class="remove-favorite-btn absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex justify-center items-center shadow-md transition-transform hover:scale-110 z-20"${addAttribute(favItem.id, "data-favorite-id")} aria-label="Retirer des favoris" data-astro-cid-kosqkdkk> <img${addAttribute(IconeFavoris.src, "src")} alt="Retirer des favoris"${addAttribute(16, "width")}${addAttribute(16, "height")} class="opacity-100" data-astro-cid-kosqkdkk> </button> </div>`)} </div>`} </div> <!-- Conteneur des recettes favorites --> <div x-show="activeTab === 'recettes'" class="mt-6" data-astro-cid-kosqkdkk> ${!userLoggedIn ? renderTemplate`<div class="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg" data-astro-cid-kosqkdkk> <img${addAttribute(IconeVide.src, "src")} alt="" class="w-20 h-20 mb-4 opacity-40" data-astro-cid-kosqkdkk> <h3 class="text-xl font-semibold mb-2" data-astro-cid-kosqkdkk>
Connectez-vous pour voir vos favoris
</h3> <p class="text-gray-500 mb-6 text-center max-w-md" data-astro-cid-kosqkdkk>
Vous devez être connecté pour accéder à votre liste de favoris
                et retrouver vos recettes préférées.
</p> <a href="/site-applicatif/compte" class="px-8 py-3 bg-saumon text-white font-bold rounded-full hover:bg-[#e69c50] transition-colors duration-300" data-astro-cid-kosqkdkk>
Se connecter
</a> </div>` : favorites.recettes.length === 0 ? renderTemplate`<div class="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg" data-astro-cid-kosqkdkk> <img${addAttribute(IconeFavoris.src, "src")} alt="" class="w-20 h-20 mb-4 opacity-40" data-astro-cid-kosqkdkk> <h3 class="text-xl font-semibold mb-2" data-astro-cid-kosqkdkk>
Aucune recette en favoris
</h3> <p class="text-gray-500 mb-6 text-center max-w-md" data-astro-cid-kosqkdkk>
Découvrez nos recettes et ajoutez-les à vos favoris pour les
                retrouver ici.
</p> <a href="/recettes" class="px-8 py-3 bg-saumon text-white font-bold rounded-full hover:bg-[#e69c50] transition-colors duration-300" data-astro-cid-kosqkdkk>
Découvrir les recettes
</a> </div>` : renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6" data-astro-cid-kosqkdkk> ${favorites.recettes.map((favItem) => renderTemplate`<div class="relative group" data-astro-cid-kosqkdkk> <a${addAttribute(`/recettes/${favItem.item.id}`, "href")} class="block h-full" data-astro-cid-kosqkdkk> <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-transparent hover:border-saumon h-full flex flex-col" data-astro-cid-kosqkdkk> <div class="w-full h-48 relative" data-astro-cid-kosqkdkk> <img${addAttribute(favItem.item.img, "src")}${addAttribute(favItem.item.nom, "alt")} class="w-full h-full object-cover" data-astro-cid-kosqkdkk> </div> <div class="p-4 flex-grow flex flex-col" data-astro-cid-kosqkdkk> <h3 class="text-lg font-bold mb-2 line-clamp-2" data-astro-cid-kosqkdkk> ${favItem.item.nom} </h3> <div class="mt-2 flex items-center text-sm text-gray-600" data-astro-cid-kosqkdkk> <span class="mr-4" data-astro-cid-kosqkdkk> ${favItem.item.tempsPreparation || 0} min
</span> <span data-astro-cid-kosqkdkk>${favItem.item.difficulte || "Facile"}</span> </div> </div> </div> </a> <button class="remove-favorite-btn absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex justify-center items-center shadow-md transition-transform hover:scale-110 z-20"${addAttribute(favItem.id, "data-favorite-id")} aria-label="Retirer des favoris" data-astro-cid-kosqkdkk> <img${addAttribute(IconeFavoris.src, "src")} alt="Retirer des favoris"${addAttribute(16, "width")}${addAttribute(16, "height")} class="opacity-100" data-astro-cid-kosqkdkk> </button> </div>`)} </div>`} </div> <!-- Conteneur des boutiques favorites --> <div x-show="activeTab === 'boutiques'" class="mt-6" data-astro-cid-kosqkdkk> ${!userLoggedIn ? renderTemplate`<div class="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg" data-astro-cid-kosqkdkk> <img${addAttribute(IconeVide.src, "src")} alt="" class="w-20 h-20 mb-4 opacity-40" data-astro-cid-kosqkdkk> <h3 class="text-xl font-semibold mb-2" data-astro-cid-kosqkdkk>
Connectez-vous pour voir vos favoris
</h3> <p class="text-gray-500 mb-6 text-center max-w-md" data-astro-cid-kosqkdkk>
Vous devez être connecté pour accéder à votre liste de favoris
                et retrouver vos boutiques préférées.
</p> <a href="/site-applicatif/compte" class="px-8 py-3 bg-saumon text-white font-bold rounded-full hover:bg-[#e69c50] transition-colors duration-300" data-astro-cid-kosqkdkk>
Se connecter
</a> </div>` : favorites.boutiques.length === 0 ? renderTemplate`<div class="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-lg" data-astro-cid-kosqkdkk> <img${addAttribute(IconeFavoris.src, "src")} alt="" class="w-20 h-20 mb-4 opacity-40" data-astro-cid-kosqkdkk> <h3 class="text-xl font-semibold mb-2" data-astro-cid-kosqkdkk>
Aucune boutique en favoris
</h3> <p class="text-gray-500 mb-6 text-center max-w-md" data-astro-cid-kosqkdkk>
Découvrez nos boutiques et ajoutez-les à vos favoris pour les
                retrouver ici.
</p> <a href="/magasins" class="px-8 py-3 bg-saumon text-white font-bold rounded-full hover:bg-[#e69c50] transition-colors duration-300" data-astro-cid-kosqkdkk>
Découvrir les boutiques
</a> </div>` : renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6" data-astro-cid-kosqkdkk> ${favorites.boutiques.map((favItem) => renderTemplate`<div class="relative group" data-astro-cid-kosqkdkk> <a${addAttribute(`/magasins/${favItem.item.id}`, "href")} class="block h-full" data-astro-cid-kosqkdkk> <div class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border-2 border-transparent hover:border-saumon h-full flex flex-col" data-astro-cid-kosqkdkk> <div class="w-full h-44 relative" data-astro-cid-kosqkdkk> <img${addAttribute(favItem.item.img, "src")}${addAttribute(favItem.item.nom, "alt")} class="w-full h-full object-cover" data-astro-cid-kosqkdkk> </div> <div class="p-4 flex-grow flex flex-col" data-astro-cid-kosqkdkk> <h3 class="text-lg font-bold mb-2" data-astro-cid-kosqkdkk> ${favItem.item.nom} </h3> <p class="text-gray-600 text-sm mb-2 line-clamp-2" data-astro-cid-kosqkdkk> ${favItem.item.adresse} </p> ${favItem.item.distance && renderTemplate`<div class="mt-auto text-sm inline-flex items-center bg-gray-100 px-3 py-1 rounded-full" data-astro-cid-kosqkdkk> <span data-astro-cid-kosqkdkk>${favItem.item.distance} km</span> </div>`} </div> </div> </a> <button class="remove-favorite-btn absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex justify-center items-center shadow-md transition-transform hover:scale-110 z-20"${addAttribute(favItem.id, "data-favorite-id")} aria-label="Retirer des favoris" data-astro-cid-kosqkdkk> <img${addAttribute(IconeFavoris.src, "src")} alt="Retirer des favoris"${addAttribute(16, "width")}${addAttribute(16, "height")} class="opacity-100" data-astro-cid-kosqkdkk> </button> </div>`)} </div>`} </div> </div> </div> ` })} ${renderScript($$result, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/favoris.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/favoris.astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/favoris.astro";
const $$url = "/site-applicatif/favoris";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Favoris,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
