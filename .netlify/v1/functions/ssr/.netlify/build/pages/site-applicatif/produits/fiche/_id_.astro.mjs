import { e as createComponent, f as createAstro, i as renderComponent, n as renderScript, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from '../../../../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutApplicatif, a as IconeFavoris } from '../../../../chunks/LayoutApplicatif_tUxN7yFY.mjs';
import { I as IconeEtoileNote } from '../../../../chunks/etoile-note_6oWc-FZ6.mjs';
import { j as getProductById, e as getProductsByContinent, f as getRecipesByContinent } from '../../../../chunks/backend_CFzKrOra.mjs';
import { $ as $$CardProduits } from '../../../../chunks/CardProduits_BL5gz2fO.mjs';
import { $ as $$CardRecettes } from '../../../../chunks/CardRecettes_D3uYQO6X.mjs';
/* empty css                                         */
export { renderers } from '../../../../renderers.mjs';

const SplashDesign = new Proxy({"src":"/_astro/splash-design.t83zxpM1.svg","width":506,"height":334,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/splash-design.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let dbProduct = await getProductById(id);
  if (!dbProduct) {
    return Astro2.redirect("/site-applicatif");
  }
  const product = {
    // Propriétés du produit venant de la base de données
    id: dbProduct.id,
    nom: dbProduct.nom,
    prix: dbProduct.prix,
    img: dbProduct.img,
    expand: dbProduct.expand,
    description: dbProduct.description || "D\xE9couvrez ce produit authentique au go\xFBt unique. Une d\xE9licieuse sp\xE9cialit\xE9 \xE0 savourer \xE0 tout moment !",
    note: dbProduct.note,
    nbNotes: dbProduct.nombres_notes,
    // Valeurs statiques
    distance: 5,
    disponible: dbProduct.disponibilite
  };
  const formattedPrice = product.prix ? `${product.prix.toFixed(2)}\u20AC` : "";
  const rating = product.note || 0;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  const continent = product.expand?.pays?.continent;
  let relatedProducts = [];
  let relatedRecipes = [];
  if (continent) {
    try {
      const relatedProductsResult = await getProductsByContinent(continent, {
        limit: 5
      });
      relatedProducts = relatedProductsResult.items.filter((p) => p.id !== product.id).slice(0, 4);
      const relatedRecipesResult = await getRecipesByContinent(continent, {
        limit: 4
      });
      relatedRecipes = relatedRecipesResult.items;
    } catch (error) {
      console.error("Erreur lors de la r\xE9cup\xE9ration des suggestions:", error);
    }
  }
  return renderTemplate`${renderComponent($$result, "LayoutApplicatif", $$LayoutApplicatif, { "title": product.nom, "description": product.description, "data-astro-cid-dx5dw6wt": true }, { "default": async ($$result2) => renderTemplate`  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""> ${maybeRenderHead()}<div class="container mx-auto px-4 py-20 max-w-6xl" data-astro-cid-dx5dw6wt> <!-- Fil d'Ariane --> <div class="text-sm text-gray-500 mb-6" data-astro-cid-dx5dw6wt> <a href="/site-applicatif" class="hover:text-saumon" data-astro-cid-dx5dw6wt>Accueil</a> &gt;
<a href="/site-applicatif/produits" class="hover:text-saumon" data-astro-cid-dx5dw6wt>Produits</a>
&gt;
<span class="text-black" data-astro-cid-dx5dw6wt>${product.nom}</span> </div> <div class="flex flex-col md:flex-row gap-60" data-astro-cid-dx5dw6wt> <!-- Partie gauche: image du produit --> <div class="md:w-1/2" data-astro-cid-dx5dw6wt> <div class="relative" data-astro-cid-dx5dw6wt> <!-- Design SVG de fond --> <div class="absolute inset-0 flex items-center justify-center translate-y-8" data-astro-cid-dx5dw6wt> <img${addAttribute(SplashDesign.src, "src")} alt="Design décoratif" class="w-[350px] h-[350px] md:w-[450px] md:h-[450px] object-contain" data-astro-cid-dx5dw6wt> </div> <!-- Image du produit --> <div class="relative flex justify-center items-center py-4" data-astro-cid-dx5dw6wt> ${product.img && renderTemplate`<img${addAttribute(product.img, "src")}${addAttribute(product.nom, "alt")} class="w-auto h-auto max-w-[250px] max-h-[350px] md:max-w-[350px] md:max-h-[450px] object-contain z-10" data-astro-cid-dx5dw6wt>`} </div> </div> </div> <!-- Partie droite: informations du produit --> <div class="md:w-1/2" data-astro-cid-dx5dw6wt> <!-- En-tête avec pays et bouton favoris --> <div class="flex justify-between items-center mb-4" data-astro-cid-dx5dw6wt> ${product.expand?.pays && renderTemplate`<div class="flex items-center" data-astro-cid-dx5dw6wt> <div class="w-[30px] h-[22px] mr-3 border border-gray-400 overflow-hidden rounded-sm" data-astro-cid-dx5dw6wt> ${product.expand.pays.drapeauUrl && renderTemplate`<img${addAttribute(product.expand.pays.drapeauUrl, "src")}${addAttribute(product.expand.pays.nom, "alt")} class="w-full h-full object-cover" data-astro-cid-dx5dw6wt>`} </div> <span class="text-lg font-bold uppercase" data-astro-cid-dx5dw6wt> ${product.expand.pays.nom} </span> </div>`} <!-- Bouton favoris --> <button class="favorite-btn w-[46px] h-[46px] bg-[#f8f0d7] rounded-full flex justify-center items-center transition-all duration-300 hover:bg-saumon"${addAttribute("Ajouter aux favoris", "aria-label")}${addAttribute(product.id, "data-product-id")} data-astro-cid-dx5dw6wt> <img${addAttribute(IconeFavoris.src, "src")} alt="Favoris"${addAttribute(22, "width")}${addAttribute(22, "height")}${addAttribute(`${"opacity-75"} transition-opacity`, "class")} data-astro-cid-dx5dw6wt> </button> </div> <!-- Titre du produit --> <h1 class="!text-5xl font-bold mt-0 pt-4" data-astro-cid-dx5dw6wt>${product.nom}</h1> <!-- Section combinée: Évaluation avec étoiles et indicateur de disponibilité --> <div class="flex items-center justify-between mb-6" data-astro-cid-dx5dw6wt> <!-- Évaluation avec étoiles --> <div class="flex items-center gap-2" data-astro-cid-dx5dw6wt> <span class="text-xl font-bold" data-astro-cid-dx5dw6wt>${product.note}</span> <div class="flex gap-1" data-astro-cid-dx5dw6wt> ${Array(fullStars).fill(0).map(() => renderTemplate`<img${addAttribute(IconeEtoileNote.src, "src")} alt="Étoile"${addAttribute(20, "width")}${addAttribute(20, "height")} data-astro-cid-dx5dw6wt>`)} ${hasHalfStar && renderTemplate`<img${addAttribute(IconeEtoileNote.src, "src")} alt="Demi-étoile"${addAttribute(20, "width")}${addAttribute(20, "height")} class="opacity-50" data-astro-cid-dx5dw6wt>`} ${Array(emptyStars).fill(0).map(() => renderTemplate`<img${addAttribute(IconeEtoileNote.src, "src")} alt="Étoile vide"${addAttribute(20, "width")}${addAttribute(20, "height")} class="grayscale opacity-50" data-astro-cid-dx5dw6wt>`)} </div> ${product.nbNotes && renderTemplate`<span class="text-sm text-gray-600" data-astro-cid-dx5dw6wt>(+${product.nbNotes})</span>`} </div> <!-- Indicateur de disponibilité --> <div class="flex items-center gap-3" data-astro-cid-dx5dw6wt> <div${addAttribute(`w-3 h-3 rounded-full ${product.disponible ? "bg-green-500" : "bg-red-500"}`, "class")} data-astro-cid-dx5dw6wt></div> <span class="font-bold" data-astro-cid-dx5dw6wt>${product.disponible ? "DISPONIBLE" : "INDISPONIBLE"}</span> ${product.disponible && renderTemplate`<div class="w-3 h-3 rounded-full bg-green-500 ml-3" data-astro-cid-dx5dw6wt></div>`} </div> </div> <!-- Sélecteur de quantité et prix --> <div class="flex items-center justify-between mb-8" data-astro-cid-dx5dw6wt> <div class="flex border border-gray-300 rounded-md" data-astro-cid-dx5dw6wt> <button class="px-4 py-2 text-xl border-r border-gray-300 hover:bg-gray-100 transition-colors quantity-decrement" data-astro-cid-dx5dw6wt>−</button> <input type="text" value="1" class="w-12 text-center py-2 quantity-input" data-astro-cid-dx5dw6wt> <button class="px-4 py-2 text-xl border-l border-gray-300 hover:bg-gray-100 transition-colors quantity-increment" data-astro-cid-dx5dw6wt>+</button> </div> <div class="text-3xl font-bold" data-astro-cid-dx5dw6wt>${formattedPrice}</div> </div> <!-- Choix du magasin --> <div class="mb-8" data-astro-cid-dx5dw6wt> <p class="text-sm text-gray-500 mb-2" data-astro-cid-dx5dw6wt>
Choisissez un magasin partenaire:
</p> <div class="flex" data-astro-cid-dx5dw6wt> <select class="border border-gray-300 rounded-l-md py-2 px-4 w-full" data-astro-cid-dx5dw6wt> <option data-astro-cid-dx5dw6wt>CARREFOUR</option> <option data-astro-cid-dx5dw6wt>FRANPRIX</option> <option data-astro-cid-dx5dw6wt>MONOPRIX</option> </select> </div> </div> <!-- Bouton d'achat --> <button class="w-full cursor-pointer bg-jaune text-black font-bold py-4 rounded-lg hover:bg-jaune-hover transition-colors flex items-center justify-center gap-3" data-astro-cid-dx5dw6wt> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-dx5dw6wt> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" data-astro-cid-dx5dw6wt></path> </svg>
ACHETER LE PRODUIT
</button> </div> </div> </div>  <div class="bg-white w-full pt-20 pb-20" data-astro-cid-dx5dw6wt> <div class="container flex flex-col gap-20 justify-center items-center px-4 py-12 mx-auto" data-astro-cid-dx5dw6wt> <!-- Menu slider --> <div class="w-full max-w-7xl" data-astro-cid-dx5dw6wt> <div class="flex border-b border-gray-200 mb-8" data-astro-cid-dx5dw6wt> <button class="tab-button px-6 py-3 text-lg font-bold border-b-2 border-saumon text-saumon" data-tab="description" data-astro-cid-dx5dw6wt>
Informations
</button> <button class="tab-button px-6 py-3 text-lg font-bold border-b-2 border-transparent text-gray-500 hover:text-saumon" data-tab="points-vente" data-astro-cid-dx5dw6wt>
Points de ventes
</button> <button class="tab-button px-6 py-3 text-lg font-bold border-b-2 border-transparent text-gray-500 hover:text-saumon" data-tab="avis" data-astro-cid-dx5dw6wt>
Avis
</button> </div> <!-- Contenu des onglets --> <div class="tab-content" data-astro-cid-dx5dw6wt> <!-- Onglet Description (actif par défaut) --> <div id="description-tab" class="tab-panel" data-astro-cid-dx5dw6wt> <div class="flex gap-20 justify-center items-center" data-astro-cid-dx5dw6wt> <!-- Description --> <div class="w-1/2 pr-8" data-astro-cid-dx5dw6wt> <h2 class="!text-2xl !text-left font-bold mb-4" data-astro-cid-dx5dw6wt>
DÉCOUVREZ ${product.nom} </h2> <div class="prose max-w-none" data-astro-cid-dx5dw6wt> <div class="text-lg leading-relaxed space-y-8" data-astro-cid-dx5dw6wt>${unescapeHTML(product.description)}</div> </div> </div> <!-- Tableau nutritionnel --> <div class="nutrition-card w-[450px]" data-astro-cid-dx5dw6wt> <!-- Formes décoratives --> <div class="absolute -top-6 -left-6 w-20 h-20 bg-saumon rounded-full opacity-60 shadow-lg" data-astro-cid-dx5dw6wt></div> <div class="absolute -bottom-8 -right-8 w-16 h-16 bg-sable rounded-full opacity-50 shadow-lg" data-astro-cid-dx5dw6wt></div> <div class="absolute top-12 right-8 w-8 h-8 bg-saumon rounded-full opacity-40" data-astro-cid-dx5dw6wt></div> <div class="absolute top-20 right-12 w-4 h-4 bg-saumon rounded-full opacity-40" data-astro-cid-dx5dw6wt></div> <div class="absolute top-24 right-16 w-4 h-4 bg-sable rounded-full opacity-40" data-astro-cid-dx5dw6wt></div> <div class="absolute top-32 right-12 w-4 h-4 bg-saumon rounded-full opacity-40" data-astro-cid-dx5dw6wt></div> <!-- Contenu principal du tableau --> <div class="relative bg-white p-4 rounded-lg shadow-lg" data-astro-cid-dx5dw6wt> <!-- Titre --> <h2 class="!text-2xl font-radio-canada-big font-black text-black mb-3 text-center uppercase" data-astro-cid-dx5dw6wt>
Tableau Nutritionnel
</h2> <!-- Ligne de séparation --> <div class="w-full border-t border-gray-400 mb-3" data-astro-cid-dx5dw6wt></div> <!-- Portions --> <div class="flex justify-between items-center mb-2" data-astro-cid-dx5dw6wt> <span class="font-raleway font-bold text-black text-sm" data-astro-cid-dx5dw6wt>Portions</span> <span class="font-raleway font-bold text-black text-sm" data-astro-cid-dx5dw6wt>330ml</span> </div> <p class="text-xs text-gray-600 font-raleway mb-3" data-astro-cid-dx5dw6wt>
pour 330ml
</p> <!-- Calories --> <div class="flex justify-between items-center mb-4" data-astro-cid-dx5dw6wt> <span class="font-raleway font-bold text-black text-sm" data-astro-cid-dx5dw6wt>Calories</span> <span class="text-2xl font-radio-canada-big font-black text-black" data-astro-cid-dx5dw6wt>180kcal</span> </div> <!-- Ligne de séparation --> <div class="w-full border-t border-gray-400 mb-3" data-astro-cid-dx5dw6wt></div> <!-- Informations nutritionnelles --> <div class="space-y-2" data-astro-cid-dx5dw6wt> <!-- Matières grasses --> <div class="nutrition-item" data-astro-cid-dx5dw6wt> <div class="flex justify-between items-center" data-astro-cid-dx5dw6wt> <span class="font-raleway font-bold text-black text-sm" data-astro-cid-dx5dw6wt>Matières grasses</span> <span class="font-raleway text-black text-sm" data-astro-cid-dx5dw6wt>0.1g</span> </div> <div class="w-full border-t border-gray-300 mt-1" data-astro-cid-dx5dw6wt></div> </div> <!-- Dont acides gras saturés --> <div class="nutrition-item pl-3" data-astro-cid-dx5dw6wt> <div class="flex justify-between items-center" data-astro-cid-dx5dw6wt> <span class="font-raleway text-gray-700 text-xs" data-astro-cid-dx5dw6wt>Dont acides gras saturés</span> <span class="font-raleway text-black text-xs" data-astro-cid-dx5dw6wt>0g</span> </div> <div class="w-full border-t border-gray-300 mt-1" data-astro-cid-dx5dw6wt></div> </div> <!-- Glucides --> <div class="nutrition-item" data-astro-cid-dx5dw6wt> <div class="flex justify-between items-center" data-astro-cid-dx5dw6wt> <span class="font-raleway font-bold text-black text-sm" data-astro-cid-dx5dw6wt>Glucides</span> <span class="font-raleway text-black text-sm" data-astro-cid-dx5dw6wt>45g</span> </div> <div class="w-full border-t border-gray-300 mt-1" data-astro-cid-dx5dw6wt></div> </div> <!-- Dont sucres --> <div class="nutrition-item pl-3" data-astro-cid-dx5dw6wt> <div class="flex justify-between items-center" data-astro-cid-dx5dw6wt> <span class="font-raleway text-gray-700 text-xs" data-astro-cid-dx5dw6wt>Dont sucres</span> <span class="font-raleway text-black text-xs" data-astro-cid-dx5dw6wt>40g</span> </div> <div class="w-full border-t border-gray-300 mt-1" data-astro-cid-dx5dw6wt></div> </div> <!-- Protéines --> <div class="nutrition-item" data-astro-cid-dx5dw6wt> <div class="flex justify-between items-center" data-astro-cid-dx5dw6wt> <span class="font-raleway font-bold text-black text-sm" data-astro-cid-dx5dw6wt>Protéines</span> <span class="font-raleway text-black text-sm" data-astro-cid-dx5dw6wt>0g</span> </div> <div class="w-full border-t border-gray-300 mt-1" data-astro-cid-dx5dw6wt></div> </div> <!-- Sel --> <div class="nutrition-item" data-astro-cid-dx5dw6wt> <div class="flex justify-between items-center" data-astro-cid-dx5dw6wt> <span class="font-raleway font-bold text-black text-sm" data-astro-cid-dx5dw6wt>Sel</span> <span class="font-raleway text-black text-sm" data-astro-cid-dx5dw6wt>0.1g</span> </div> <div class="w-full border-t border-gray-300 mt-1" data-astro-cid-dx5dw6wt></div> </div> <!-- Fibres alimentaires --> <div class="nutrition-item" data-astro-cid-dx5dw6wt> <div class="flex justify-between items-center" data-astro-cid-dx5dw6wt> <span class="font-raleway font-bold text-black text-sm" data-astro-cid-dx5dw6wt>Fibres alimentaires</span> <span class="font-raleway text-black text-sm" data-astro-cid-dx5dw6wt>2g</span> </div> <div class="w-full border-t border-gray-300 mt-1" data-astro-cid-dx5dw6wt></div> </div> <!-- Calcium --> <div class="nutrition-item" data-astro-cid-dx5dw6wt> <div class="flex justify-between items-center" data-astro-cid-dx5dw6wt> <span class="font-raleway font-bold text-black text-sm" data-astro-cid-dx5dw6wt>Calcium</span> <span class="font-raleway text-black text-sm" data-astro-cid-dx5dw6wt>20mg</span> </div> <div class="w-full border-t border-gray-300 mt-1" data-astro-cid-dx5dw6wt></div> </div> </div> <!-- Note en bas --> <p class="text-xs text-gray-600 font-raleway mt-4 leading-relaxed" data-astro-cid-dx5dw6wt>
*Il est important de viser environ 2000 kcal par jour pour
                    un homme et 1800 kcal pour une femme afin de maintenir une
                    alimentation équilibrée.
</p> </div> </div> </div> </div> <!-- Onglet Points de vente --> <div id="points-vente-tab" class="tab-panel hidden" data-astro-cid-dx5dw6wt> <div class="max-w-6xl mx-auto" data-astro-cid-dx5dw6wt> <h2 class="text-2xl font-bold mb-6 !text-left" data-astro-cid-dx5dw6wt>
OÙ TROUVER ${product.nom} ?
</h2> <!-- Carte des magasins --> <div class="mb-8" data-astro-cid-dx5dw6wt> <div id="map" class="w-full h-96 rounded-lg shadow-lg border border-gray-200" data-astro-cid-dx5dw6wt></div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-dx5dw6wt> <div class="bg-gray-50 p-6 rounded-lg" data-astro-cid-dx5dw6wt> <h3 class="text-lg font-bold mb-3 text-saumon" data-astro-cid-dx5dw6wt>CARREFOUR</h3> <p class="text-sm mb-2" data-astro-cid-dx5dw6wt> <strong data-astro-cid-dx5dw6wt>Adresse :</strong> 15 Avenue des Champs, 75008 Paris
</p> <p class="text-sm mb-2" data-astro-cid-dx5dw6wt> <strong data-astro-cid-dx5dw6wt>Distance :</strong> 2.3 km
</p> <p class="text-sm mb-4" data-astro-cid-dx5dw6wt> <strong data-astro-cid-dx5dw6wt>Stock :</strong> <span class="text-green-600" data-astro-cid-dx5dw6wt>Disponible</span> </p> <button class="bg-saumon text-white px-4 py-2 rounded hover:bg-saumon-hover transition-colors" data-astro-cid-dx5dw6wt>
Réserver
</button> </div> <div class="bg-gray-50 p-6 rounded-lg" data-astro-cid-dx5dw6wt> <h3 class="text-lg font-bold mb-3 text-saumon" data-astro-cid-dx5dw6wt>FRANPRIX</h3> <p class="text-sm mb-2" data-astro-cid-dx5dw6wt> <strong data-astro-cid-dx5dw6wt>Adresse :</strong> 42 Rue de la République, 75011 Paris
</p> <p class="text-sm mb-2" data-astro-cid-dx5dw6wt> <strong data-astro-cid-dx5dw6wt>Distance :</strong> 3.7 km
</p> <p class="text-sm mb-4" data-astro-cid-dx5dw6wt> <strong data-astro-cid-dx5dw6wt>Stock :</strong> <span class="text-green-600" data-astro-cid-dx5dw6wt>Disponible</span> </p> <button class="bg-saumon text-white px-4 py-2 rounded hover:bg-saumon-hover transition-colors" data-astro-cid-dx5dw6wt>
Réserver
</button> </div> <div class="bg-gray-50 p-6 rounded-lg" data-astro-cid-dx5dw6wt> <h3 class="text-lg font-bold mb-3 text-saumon" data-astro-cid-dx5dw6wt>MONOPRIX</h3> <p class="text-sm mb-2" data-astro-cid-dx5dw6wt> <strong data-astro-cid-dx5dw6wt>Adresse :</strong> 8 Boulevard Saint-Germain, 75005 Paris
</p> <p class="text-sm mb-2" data-astro-cid-dx5dw6wt> <strong data-astro-cid-dx5dw6wt>Distance :</strong> 5.1 km
</p> <p class="text-sm mb-4" data-astro-cid-dx5dw6wt> <strong data-astro-cid-dx5dw6wt>Stock :</strong> <span class="text-orange-600" data-astro-cid-dx5dw6wt>Stock limité</span> </p> <button class="bg-saumon text-white px-4 py-2 rounded hover:bg-saumon-hover transition-colors" data-astro-cid-dx5dw6wt>
Réserver
</button> </div> </div> </div> </div> <!-- Onglet Avis --> <div id="avis-tab" class="tab-panel hidden" data-astro-cid-dx5dw6wt> <div class="max-w-4xl mx-auto" data-astro-cid-dx5dw6wt> <h2 class="text-2xl font-bold mb-6 !text-left" data-astro-cid-dx5dw6wt>
AVIS SUR ${product.nom} </h2> <!-- Résumé des notes --> <div class="bg-gray-50 p-6 rounded-lg mb-8" data-astro-cid-dx5dw6wt> <div class="flex items-center gap-6" data-astro-cid-dx5dw6wt> <div class="text-center" data-astro-cid-dx5dw6wt> <div class="text-4xl font-bold text-saumon" data-astro-cid-dx5dw6wt> ${product.note} </div> <div class="text-sm text-gray-600" data-astro-cid-dx5dw6wt>sur 5 étoiles</div> </div> <div class="flex-1" data-astro-cid-dx5dw6wt> <div class="text-sm text-gray-600 mb-2" data-astro-cid-dx5dw6wt>
Basé sur ${product.nbNotes} avis
</div> <div class="space-y-1" data-astro-cid-dx5dw6wt> <div class="flex items-center gap-2" data-astro-cid-dx5dw6wt> <span class="text-xs w-8" data-astro-cid-dx5dw6wt>5★</span> <div class="flex-1 bg-gray-200 h-2 rounded-full" data-astro-cid-dx5dw6wt> <div class="bg-saumon h-2 rounded-full" style="width: 65%" data-astro-cid-dx5dw6wt></div> </div> <span class="text-xs text-gray-600" data-astro-cid-dx5dw6wt>65%</span> </div> <div class="flex items-center gap-2" data-astro-cid-dx5dw6wt> <span class="text-xs w-8" data-astro-cid-dx5dw6wt>4★</span> <div class="flex-1 bg-gray-200 h-2 rounded-full" data-astro-cid-dx5dw6wt> <div class="bg-saumon h-2 rounded-full" style="width: 25%" data-astro-cid-dx5dw6wt></div> </div> <span class="text-xs text-gray-600" data-astro-cid-dx5dw6wt>25%</span> </div> <div class="flex items-center gap-2" data-astro-cid-dx5dw6wt> <span class="text-xs w-8" data-astro-cid-dx5dw6wt>3★</span> <div class="flex-1 bg-gray-200 h-2 rounded-full" data-astro-cid-dx5dw6wt> <div class="bg-saumon h-2 rounded-full" style="width: 8%" data-astro-cid-dx5dw6wt></div> </div> <span class="text-xs text-gray-600" data-astro-cid-dx5dw6wt>8%</span> </div> <div class="flex items-center gap-2" data-astro-cid-dx5dw6wt> <span class="text-xs w-8" data-astro-cid-dx5dw6wt>2★</span> <div class="flex-1 bg-gray-200 h-2 rounded-full" data-astro-cid-dx5dw6wt> <div class="bg-saumon h-2 rounded-full" style="width: 2%" data-astro-cid-dx5dw6wt></div> </div> <span class="text-xs text-gray-600" data-astro-cid-dx5dw6wt>2%</span> </div> <div class="flex items-center gap-2" data-astro-cid-dx5dw6wt> <span class="text-xs w-8" data-astro-cid-dx5dw6wt>1★</span> <div class="flex-1 bg-gray-200 h-2 rounded-full" data-astro-cid-dx5dw6wt> <div class="bg-saumon h-2 rounded-full" style="width: 0%" data-astro-cid-dx5dw6wt></div> </div> <span class="text-xs text-gray-600" data-astro-cid-dx5dw6wt>0%</span> </div> </div> </div> </div> </div> <!-- Liste des avis --> <div class="space-y-6" data-astro-cid-dx5dw6wt> <div class="border-b border-gray-200 pb-6" data-astro-cid-dx5dw6wt> <div class="flex items-start gap-4" data-astro-cid-dx5dw6wt> <div class="w-10 h-10 bg-saumon rounded-full flex items-center justify-center text-white font-bold" data-astro-cid-dx5dw6wt>
M
</div> <div class="flex-1" data-astro-cid-dx5dw6wt> <div class="flex items-center gap-2 mb-2" data-astro-cid-dx5dw6wt> <span class="font-bold" data-astro-cid-dx5dw6wt>Marie L.</span> <div class="flex text-saumon" data-astro-cid-dx5dw6wt>★★★★★</div> <span class="text-sm text-gray-500" data-astro-cid-dx5dw6wt>il y a 2 jours</span> </div> <p class="text-gray-700" data-astro-cid-dx5dw6wt>
Excellent produit ! Le goût est authentique et la
                        texture parfaite. Je recommande vivement pour découvrir
                        de nouvelles saveurs.
</p> </div> </div> </div> <div class="border-b border-gray-200 pb-6" data-astro-cid-dx5dw6wt> <div class="flex items-start gap-4" data-astro-cid-dx5dw6wt> <div class="w-10 h-10 bg-saumon rounded-full flex items-center justify-center text-white font-bold" data-astro-cid-dx5dw6wt>
J
</div> <div class="flex-1" data-astro-cid-dx5dw6wt> <div class="flex items-center gap-2 mb-2" data-astro-cid-dx5dw6wt> <span class="font-bold" data-astro-cid-dx5dw6wt>Jean P.</span> <div class="flex text-saumon" data-astro-cid-dx5dw6wt>★★★★☆</div> <span class="text-sm text-gray-500" data-astro-cid-dx5dw6wt>il y a 1 semaine</span> </div> <p class="text-gray-700" data-astro-cid-dx5dw6wt>
Très bon produit, conforme à mes attentes. La livraison
                        était rapide et l'emballage soigné.
</p> </div> </div> </div> </div> </div> </div> </div> </div> <!-- Produits du même continent --> ${relatedProducts.length > 0 && renderTemplate`<div class="my-30" data-astro-cid-dx5dw6wt> <h2 class="!text-3xl font-bold mb-6 !text-left" data-astro-cid-dx5dw6wt>
Produits recommandés
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-astro-cid-dx5dw6wt> ${relatedProducts.slice(0, 4).map((relatedProduct) => renderTemplate`${renderComponent($$result2, "CardProduits", $$CardProduits, { "product": relatedProduct, "data-astro-cid-dx5dw6wt": true })}`)} </div> </div>`} <!-- Recettes du même continent --> ${relatedRecipes.length > 0 && renderTemplate`<div class="my-30" data-astro-cid-dx5dw6wt> <h2 class="!text-3xl font-bold mb-6 !text-left" data-astro-cid-dx5dw6wt>
Recettes recommandées
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" data-astro-cid-dx5dw6wt> ${relatedRecipes.slice(0, 4).map((relatedRecipe) => renderTemplate`${renderComponent($$result2, "CardRecettes", $$CardRecettes, { "recette": relatedRecipe, "data-astro-cid-dx5dw6wt": true })}`)} </div> </div>`} </div> </div> ` })} ${renderScript($$result, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/produits/fiche/[id].astro?astro&type=script&index=0&lang.ts")}  <!-- Leaflet JS chargé à la fin --> ${renderScript($$result, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/produits/fiche/[id].astro?astro&type=script&index=1&lang.ts")}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/produits/fiche/[id].astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/produits/fiche/[id].astro";
const $$url = "/site-applicatif/produits/fiche/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
