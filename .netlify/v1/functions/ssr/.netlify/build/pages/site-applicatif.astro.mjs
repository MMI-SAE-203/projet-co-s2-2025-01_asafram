import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutApplicatif } from '../chunks/LayoutApplicatif_tUxN7yFY.mjs';
import { $ as $$CardProduits } from '../chunks/CardProduits_BL5gz2fO.mjs';
import 'clsx';
import { e as getProductsByContinent, p as getPopularProducts, q as getPopularRecipes } from '../chunks/backend_CFzKrOra.mjs';
import { b as SvgAmeriqueLatine, a as SvgAfrique, c as SvgMaghreb, S as SvgAsie } from '../chunks/continent-maghreb_B3kP70Zp.mjs';
import { $ as $$CardRecettes } from '../chunks/CardRecettes_D3uYQO6X.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BulleCategorie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BulleCategorie;
  const { icone, nom } = Astro2.props;
  const formatUrlName = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  };
  const urlCategorie = `/site-applicatif/produits/${formatUrlName(nom)}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(urlCategorie, "href")} class="flex flex-col items-center gap-2 cursor-pointer hover:scale-103 transition-transform duration-300"> <div class="relative"> <!-- Cercle de fond --> <div class="w-[120px] h-[120px] rounded-full bg-sable flex items-center justify-center"> <!-- Icône de la catégorie --> <img${addAttribute(icone, "src")}${addAttribute(`Ic\xF4ne ${nom}`, "alt")} class="relative bottom-2 w-[90px] h-[90px] object-contain"> </div> </div> <!-- Nom de la catégorie --> <span class="relative bottom-7 text-center uppercase font-raleway font-bold text-black text-lg mt-1"> ${nom} </span> </a>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/site-applicatif/BulleCategorie.astro", void 0);

const IconeBoissons = new Proxy({"src":"/_astro/icone-boissons.Dbx55evE.webp","width":274,"height":274,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-boissons.webp";
							}
							
							return target[name];
						}
					});

const IconeFruitsEtLegumes = new Proxy({"src":"/_astro/icone-fruits.Byu-EKEe.webp","width":274,"height":274,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-fruits.webp";
							}
							
							return target[name];
						}
					});

const IconeViandes = new Proxy({"src":"/_astro/icone-viandes.DdURsFQC.webp","width":274,"height":274,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-viandes.webp";
							}
							
							return target[name];
						}
					});

const IconeEpices = new Proxy({"src":"/_astro/icone-epices.CQ14JbLi.webp","width":274,"height":274,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-epices.webp";
							}
							
							return target[name];
						}
					});

const IconeSnacks = new Proxy({"src":"/_astro/icone-snacks.ZCEZKxz2.webp","width":274,"height":274,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-snacks.webp";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const categories = [
    { nom: "Boissons", icone: IconeBoissons },
    { nom: "Fruits et L\xE9gumes", icone: IconeFruitsEtLegumes },
    { nom: "Viandes", icone: IconeViandes },
    { nom: "\xC9pices", icone: IconeEpices },
    { nom: "Snacks", icone: IconeSnacks }
  ];
  const actualites = [
    {
      id: 1,
      titre: "NOUVEAU MAGASIN PARTENAIRE \xC0 LYON",
      description: "D\xE9couvrez notre tout nouveau point de vente chez \xC9picerie Bio Lyon 7\xE8me. Plus de 200 produits ASAFRAM maintenant disponibles !",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      titre: "PRODUIT VEDETTE : TH\xC9 VERT DU JAPON",
      description: "Notre th\xE9 vert matcha premium du Japon est en promotion \xE0 -25%. Qualit\xE9 c\xE9r\xE9moniale, riche en antioxydants, saveur authentique !",
      image: "https://picsum.photos/1200/400?random=25"
    },
    {
      id: 3,
      titre: "NOUVELLE NEWSLETTER MENSUELLE",
      description: "Abonnez-vous \xE0 notre newsletter 'Saveurs du Monde' : recettes exclusives, tips de nos chefs partenaires et offres privil\xE9gi\xE9es",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
    }
  ];
  const asianProductsResult = await getProductsByContinent("Asie", {
    perPage: 8
  });
  const asianProducts = asianProductsResult.items.map((produit) => {
    produit.distance = 15;
    if (produit.nombres_notes && !produit.nbNotes) {
      produit.nbNotes = produit.nombres_notes;
    }
    if (!produit.nbNotes) {
      produit.nbNotes = Math.floor(Math.random() * 50) + 10;
    }
    return produit;
  });
  const popularProducts = await getPopularProducts(8);
  const popularRecipes = await getPopularRecipes(8);
  return renderTemplate`${renderComponent($$result, "LayoutApplicatif", $$LayoutApplicatif, { "title": "ASAFRAM", "description": "Carte produit d\xE9mo" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="bg-white min-h-screen"> <!-- Section avec fond background --> <div class="bg-background"> <!-- Carousel Actualit\xE9s --> <section class="relative bg-gradient-to-br from-orange-100 to-amber-50 overflow-hidden"> <div x-data="{ currentSlide: 0, slides: 3 }" x-init="setInterval(() => { currentSlide = (currentSlide + 1) % slides }, 5000)" class="relative h-80 md:h-96"> ', ' <!-- Indicateurs de slide --> <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2"> ', ' </div> <!-- Fl\xE8ches de navigation --> <button x-on:click="currentSlide = currentSlide === 0 ? slides - 1 : currentSlide - 1" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button x-on:click="currentSlide = (currentSlide + 1) % slides" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </section> <!-- Layout Continents Align\xE9s --> <section class="container mx-auto px-8 py-16"> <div class="text-center mb-12"> <h2 class="text-3xl font-radio-canada-big font-black text-gray-800 mb-4">LES CONTINENTS</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Asie --> <a href="/site-applicatif/produits?continent=Asie" class="group relative bg-gradient-to-br from-red-50 to-orange-100 border-2 border-orange-200 rounded-3xl p-6 h-72 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"> <div class="relative z-10 h-full flex flex-col"> <h3 class="text-xl font-radio-canada-big font-black text-gray-800 mb-3">ASIE</h3> <p class="text-sm text-gray-600 mb-4">2,847 produits</p> <div class="flex-1 flex items-center justify-center"> <img', ' alt="Asie" class="w-20 h-20 group-hover:scale-110 transition-transform duration-300"> </div> <div class="text-orange-600 font-bold text-sm uppercase tracking-wide text-center">\nExplorer \u2192\n</div> </div> <!-- \xC9l\xE9ments d\xE9coratifs Asie --> <div class="absolute top-4 right-4"> <div class="relative"> <div class="w-6 h-2 bg-red-600 rounded-t-lg"></div> <div class="w-8 h-2 bg-red-700 rounded-t-lg -mt-1"></div> <div class="w-10 h-3 bg-red-800 rounded-t-lg -mt-1"></div> </div> </div> <div class="absolute bottom-4 left-4"> <div class="flex space-x-1"> <div class="w-2 h-2 bg-red-500 rounded-full opacity-60"></div> <div class="w-2 h-2 bg-orange-500 rounded-full opacity-60"></div> <div class="w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div> </div> </div> </a> <!-- Maghreb --> <a href="/site-applicatif/produits?continent=Maghreb" class="group relative bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-amber-200 rounded-3xl p-6 h-72 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"> <div class="relative z-10 h-full flex flex-col"> <h3 class="text-xl font-radio-canada-big font-black text-gray-800 mb-3">MAGHREB</h3> <p class="text-sm text-gray-600 mb-4">987 produits</p> <div class="flex-1 flex items-center justify-center"> <img', ' alt="Maghreb" class="w-20 h-20 group-hover:scale-110 transition-transform duration-300"> </div> <div class="text-amber-600 font-bold text-sm uppercase tracking-wide text-center">\nExplorer \u2192\n</div> </div> <!-- \xC9l\xE9ments d\xE9coratifs Maghreb --> <div class="absolute top-4 right-4"> <div class="relative"> <div class="w-1 h-8 bg-amber-700 rounded-t-full"></div> <div class="w-3 h-2 bg-amber-600 rounded-t-lg -mt-1"></div> </div> </div> <div class="absolute bottom-4 right-4"> <div class="relative"> <div class="w-1 h-6 bg-amber-800"></div> <div class="absolute -top-1 -left-1 w-2 h-1 bg-green-600 rounded-full transform rotate-12"></div> <div class="absolute -top-1 -right-1 w-2 h-1 bg-green-600 rounded-full transform -rotate-12"></div> </div> </div> </a> <!-- Afrique --> <a href="/site-applicatif/produits?continent=Afrique" class="group relative bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-200 rounded-3xl p-6 h-72 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"> <div class="relative z-10 h-full flex flex-col"> <h3 class="text-xl font-radio-canada-big font-black text-gray-800 mb-3">AFRIQUE</h3> <p class="text-sm text-gray-600 mb-4">1,923 produits</p> <div class="flex-1 flex items-center justify-center"> <img', ' alt="Afrique" class="w-20 h-20 group-hover:scale-110 transition-transform duration-300"> </div> <div class="text-green-600 font-bold text-sm uppercase tracking-wide text-center">\nExplorer \u2192\n</div> </div> <!-- \xC9l\xE9ments d\xE9coratifs Afrique --> <div class="absolute top-4 right-4"> <div class="relative"> <div class="w-4 h-6 bg-amber-800 rounded-t-full"></div> <div class="absolute -top-1 -left-1 w-1 h-3 bg-green-600 rounded-full transform rotate-45"></div> <div class="absolute -top-1 -right-1 w-1 h-3 bg-green-600 rounded-full transform -rotate-45"></div> </div> </div> <div class="absolute bottom-6 left-4"> <div class="flex space-x-1"> <div class="w-8 h-2 bg-yellow-600 rounded-full opacity-70"></div> <div class="w-6 h-1 bg-orange-500 rounded-full opacity-70"></div> </div> </div> </a> <!-- Am\xE9rique Latine --> <a href="/site-applicatif/produits?continent=Am\xE9rique Latine" class="group relative bg-gradient-to-br from-yellow-50 to-orange-100 border-2 border-yellow-200 rounded-3xl p-6 h-72 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"> <div class="relative z-10 h-full flex flex-col"> <h3 class="text-lg font-radio-canada-big font-black text-gray-800 mb-3">AM\xC9RIQUE LATINE</h3> <p class="text-sm text-gray-600 mb-4">1,456 produits</p> <div class="flex-1 flex items-center justify-center"> <img', ' alt="Am\xE9rique Latine" class="w-20 h-20 group-hover:scale-110 transition-transform duration-300"> </div> <div class="text-yellow-600 font-bold text-sm uppercase tracking-wide text-center">\nExplorer \u2192\n</div> </div> <!-- \xC9l\xE9ments d\xE9coratifs Am\xE9rique Latine --> <div class="absolute top-4 right-4"> <div class="relative"> <div class="w-6 h-1 bg-yellow-700"></div> <div class="w-8 h-1 bg-yellow-800 -mt-1"></div> <div class="w-10 h-2 bg-yellow-900 -mt-1"></div> </div> </div> <div class="absolute bottom-4 left-4"> <div class="flex space-x-1"> <div class="w-1 h-6 bg-green-600 rounded-t-full"></div> <div class="w-1 h-4 bg-green-500 rounded-t-full"></div> <div class="w-1 h-8 bg-green-700 rounded-t-full"></div> </div> </div> <div class="absolute top-6 left-4"> <div class="w-4 h-4 bg-yellow-400 rounded-full"> <div class="absolute inset-0 bg-yellow-300 rounded-full animate-pulse"></div> </div> </div> </a> </div> </section> </div> <!-- Section blanche pour les cat\xE9gories et le reste --> <div class="bg-white"> <!-- Section des cat\xE9gories --> <section class="container mx-auto px-4 py-16"> <ul class="flex flex-wrap justify-center gap-32 my-8"> ', ' </ul> </section> <!-- Section des produits populaires --> <section class="container mx-auto px-4 py-8"> <header class="mb-16"> <h2 class="text-2xl !text-left font-raleway font-extrabold uppercase tracking-wider relative inline-block pb-4">\nProduits populaires\n</h2> <div class="w-full h-0.5 bg-black mt-2"></div> </header> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 justify-items-center"> ', ' </div> </section> <!-- Section des produits asiatiques --> <section class="container mx-auto px-4 py-8"> <header class="mb-16"> <h2 class="text-2xl !text-left font-raleway font-extrabold uppercase tracking-wider relative inline-block pb-4">\nProduits Asiatiques\n</h2> <div class="w-full h-0.5 bg-black mt-2"></div> </header> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 justify-items-center"> ', ' </div> <div class="flex justify-center mt-20"> <a href="/site-applicatif/produits" class="bg-saumon hover:bg-saumon-hover text-black font-bold uppercase py-3 px-10 rounded-lg transition-colors duration-300 cursor-pointer">\nTout afficher\n</a> </div> </section> <!-- Section des recettes populaires --> <section class="container mx-auto px-4 py-8 pb-40"> <header class="mb-16"> <h2 class="text-2xl !text-left font-raleway font-bold uppercase tracking-wider relative inline-block pb-4">\nRecettes populaires\n</h2> <div class="w-full h-0.5 bg-black mt-2"></div> </header> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 justify-items-center"> ', ' </div> <div class="flex justify-center mt-20"> <a href="/site-applicatif/recettes" class="bg-jaune hover:bg-jaune-hover text-black font-bold uppercase py-3 px-10 rounded-lg transition-colors duration-300 cursor-pointer">\nTout afficher\n</a> </div> </section> </div> </div> <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer><\/script> '])), maybeRenderHead(), actualites.map((actualite, index) => renderTemplate`<div${addAttribute(`currentSlide === ${index}`, "x-show")} x-transition:enter="transition ease-in-out duration-500" x-transition:enter-start="opacity-0 translate-x-full" x-transition:enter-end="opacity-100 translate-x-0" x-transition:leave="transition ease-in-out duration-500" x-transition:leave-start="opacity-100 translate-x-0" x-transition:leave-end="opacity-0 -translate-x-full" class="absolute inset-0 w-full h-full"> <div class="relative w-full h-full"> <img${addAttribute(actualite.image, "src")}${addAttribute(actualite.titre, "alt")} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-opacity-20"></div> <div class="absolute inset-0 flex items-center justify-center"> <div class="text-center text-white max-w-4xl px-4"> <h2 class="text-3xl md:text-5xl font-radio-canada-big font-black mb-4 tracking-wide"> ${actualite.titre} </h2> <p class="text-lg md:text-xl font-raleway mb-6"> ${actualite.description} </p> <button class="bg-saumon hover:bg-saumon-hover text-black font-bold px-8 py-3 rounded-xl uppercase tracking-wide transition-colors duration-300">
En savoir plus
</button> </div> </div> </div> </div>`), actualites.map((_, index) => renderTemplate`<button${addAttribute(`currentSlide = ${index}`, "x-on:click")} class="w-3 h-3 rounded-full transition-colors duration-300"${addAttribute(`currentSlide === ${index} ? 'bg-white' : 'bg-white bg-opacity-50'`, ":class")}></button>`), addAttribute(SvgAsie.src, "src"), addAttribute(SvgMaghreb.src, "src"), addAttribute(SvgAfrique.src, "src"), addAttribute(SvgAmeriqueLatine.src, "src"), categories.map((categorie) => renderTemplate`<li> ${renderComponent($$result2, "BulleCategorie", $$BulleCategorie, { "nom": categorie.nom, "icone": categorie.icone.src })} </li>`), popularProducts.map((produit) => renderTemplate`${renderComponent($$result2, "CardProduits", $$CardProduits, { "product": produit })}`), asianProducts.map((produit) => renderTemplate`${renderComponent($$result2, "CardProduits", $$CardProduits, { "product": produit })}`), popularRecipes.map((recette) => renderTemplate`${renderComponent($$result2, "CardRecettes", $$CardRecettes, { "recette": recette })}`)) })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/index.astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/index.astro";
const $$url = "/site-applicatif";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
