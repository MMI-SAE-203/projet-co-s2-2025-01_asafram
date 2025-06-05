import { e as createComponent, m as maybeRenderHead, h as addAttribute, n as renderScript, r as renderTemplate, f as createAstro, l as renderHead, i as renderComponent, k as renderSlot } from './astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';
import { L as LogoAsafram } from './logo_asafram-fonce_pGRcbk2f.mjs';
import { I as IconeCompte } from './icone-compte_C5pv7HoF.mjs';
import { i as isUserLoggedIn, g as getCurrentUser } from './backend_CFzKrOra.mjs';
/* empty css                          */
import { $ as $$FooterLandingPage } from './FooterLandingPage_DQ1RtBfW.mjs';
/* empty css                           */

const IconeVide = new Proxy({"src":"/_astro/icone-localisation.CNqlPffW.svg","width":26,"height":26,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-localisation.svg";
							}
							
							return target[name];
						}
					});

const IconeRecherche = new Proxy({"src":"/_astro/icone-recherche.Du_PX4xc.svg","width":18,"height":18,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-recherche.svg";
							}
							
							return target[name];
						}
					});

const IconeBurger = new Proxy({"src":"/_astro/icone-burger.04_TRCox.svg","width":20,"height":16,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-burger.svg";
							}
							
							return target[name];
						}
					});

const IconeFavoris = new Proxy({"src":"/_astro/icone-etoile.B_KGSu68.svg","width":33,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-etoile.svg";
							}
							
							return target[name];
						}
					});

const IconeChevron = new Proxy({"src":"/_astro/chevron.D-pY1qRJ.svg","width":10,"height":18,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/chevron.svg";
							}
							
							return target[name];
						}
					});

const $$HeaderApplicatif = createComponent(async ($$result, $$props, $$slots) => {
  const userLoggedIn = isUserLoggedIn();
  let userAvatar = null;
  if (userLoggedIn) {
    const user = await getCurrentUser();
    if (user && user.avatarUrl) {
      userAvatar = user.avatarUrl;
    }
  }
  return renderTemplate`${maybeRenderHead()}<header class="bg-white border-b border-gray-200 py-3 pt-10 relative px-16 shadow-md" role="banner" data-astro-cid-xcpzvsbq> <div class="flex items-center" data-astro-cid-xcpzvsbq> <div class="mr-10 flex-shrink-0" data-astro-cid-xcpzvsbq> <a href="/site-applicatif" class="flex items-center" aria-label="Accueil ASAFRAM" data-astro-cid-xcpzvsbq> <img${addAttribute(LogoAsafram.src, "src")} alt="ASAFRAM" class="h-18 w-auto hover:scale-102 transition-all duration-300" data-astro-cid-xcpzvsbq> </a> </div> <div class="flex-grow" data-astro-cid-xcpzvsbq> <div class="container flex flex-col" data-astro-cid-xcpzvsbq> <div class="flex items-center justify-between mb-6 relative" data-astro-cid-xcpzvsbq> <div class="flex items-center" data-astro-cid-xcpzvsbq> <div class="flex items-center gap-2" data-astro-cid-xcpzvsbq> <img${addAttribute(IconeVide.src, "src")} alt="" class="w-5 h-5" aria-hidden="true" data-astro-cid-xcpzvsbq> <span class="text-black text-sm" data-astro-cid-xcpzvsbq>Adresse : Paris</span> </div> </div> <div class="absolute left-1/2 transform -translate-x-1/2 w-[485px]" data-astro-cid-xcpzvsbq> <div class="relative" data-astro-cid-xcpzvsbq> <div class="flex items-center border border-black-light rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" data-astro-cid-xcpzvsbq> <div class="pl-6" data-astro-cid-xcpzvsbq> <img${addAttribute(IconeRecherche.src, "src")} alt="" class="w-4 h-4" aria-hidden="true" data-astro-cid-xcpzvsbq> </div> <input type="search" placeholder="CHERCHER UN PRODUIT OU UNE RECETTE" class="w-full py-3 px-6 text-base text-gray-700 focus:outline-none font-raleway" aria-label="Rechercher un produit ou une recette" data-astro-cid-xcpzvsbq> </div> </div> </div> <div class="flex items-center gap-8" data-astro-cid-xcpzvsbq> <a href="/site-applicatif/favoris" aria-label="Accéder aux favoris" class="p-1 hover:scale-110 transition-transform duration-200 cursor-pointer" data-astro-cid-xcpzvsbq> <img${addAttribute(IconeFavoris.src, "src")} alt="" class="w-7 h-7" data-astro-cid-xcpzvsbq> </a> <a href="/site-applicatif/compte"${addAttribute(userLoggedIn ? "Acc\xE9der \xE0 votre compte" : "Se connecter", "aria-label")} class="p-1 hover:scale-110 transition-transform duration-200 cursor-pointer" data-astro-cid-xcpzvsbq> ${userLoggedIn && userAvatar ? renderTemplate`<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-black-light shadow-sm" data-astro-cid-xcpzvsbq> <img${addAttribute(userAvatar, "src")} alt="Votre profil" class="w-full h-full object-cover" data-astro-cid-xcpzvsbq> </div>` : renderTemplate`<img${addAttribute(IconeCompte.src, "src")} alt="" class="w-7 h-7" data-astro-cid-xcpzvsbq>`} </a> <div class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer" data-astro-cid-xcpzvsbq> <span class="text-lg font-bold" data-astro-cid-xcpzvsbq>FR</span> <img src="https://flagcdn.com/w40/fr.png" alt="Drapeau français" class="w-6 h-4" aria-hidden="true" data-astro-cid-xcpzvsbq> </div> </div> </div> <div class="flex items-center" data-astro-cid-xcpzvsbq> <div class="w-full flex justify-between items-center" data-astro-cid-xcpzvsbq> <nav aria-label="Menu principal" class="flex-grow flex justify-center" data-astro-cid-xcpzvsbq> <ul class="grid grid-cols-4 gap-x-28 w-3/4 mx-auto" data-astro-cid-xcpzvsbq> <li class="flex justify-center" data-astro-cid-xcpzvsbq> <a href="/site-applicatif/trouver-magasin" class="text-lg font-bold hover:scale-105 transition-all duration-200 px-2 whitespace-nowrap" data-astro-cid-xcpzvsbq>
Trouver un magasin
</a> </li> <li class="flex justify-center relative" data-astro-cid-xcpzvsbq> <button id="continents-btn" class="flex items-center gap-2 text-lg font-bold hover:scale-105 transition-all duration-200 px-2 cursor-pointer" aria-label="Voir les continents" aria-expanded="false" aria-controls="menu-continents" data-astro-cid-xcpzvsbq> <span data-astro-cid-xcpzvsbq>Continents</span> <img${addAttribute(IconeChevron.src, "src")} alt="" class="w-2 h-3 transform rotate-90 transition-transform duration-300" style="filter: brightness(0);" aria-hidden="true" data-astro-cid-xcpzvsbq> </button> <div id="menu-continents" class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 z-50" aria-hidden="true" data-astro-cid-xcpzvsbq> <nav class="py-2" data-astro-cid-xcpzvsbq> <ul data-astro-cid-xcpzvsbq> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/continents/afrique" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150" data-astro-cid-xcpzvsbq>
Afrique
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/continents/amerique-latine" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150" data-astro-cid-xcpzvsbq>
Amérique Latine
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/continents/asie" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150" data-astro-cid-xcpzvsbq>
Asie
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/continents/maghreb" class="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150" data-astro-cid-xcpzvsbq>
Maghreb
</a> </li> </ul> </nav> </div> </li> <li class="flex justify-center" data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits" class="text-lg font-bold hover:scale-105 transition-all duration-200 px-2" data-astro-cid-xcpzvsbq>
Produits
</a> </li> <li class="flex justify-center" data-astro-cid-xcpzvsbq> <a href="/site-applicatif/recettes" class="text-lg font-bold hover:scale-105 transition-all duration-200 px-2" data-astro-cid-xcpzvsbq>
Recettes
</a> </li> </ul> </nav> <div data-astro-cid-xcpzvsbq> <button id="produits-btn" class="flex items-center gap-6 px-6 py-2.5 rounded-full transition-all duration-300 bg-background shadow-sm hover:shadow-md hover:scale-102 cursor-pointer" aria-label="Voir tous les produits" aria-expanded="false" aria-controls="menu-produits" data-astro-cid-xcpzvsbq> <img${addAttribute(IconeBurger.src, "src")} alt="" class="w-4 h-3" aria-hidden="true" data-astro-cid-xcpzvsbq> <span class="font-bold uppercase" data-astro-cid-xcpzvsbq>Les catégories</span> </button> </div> </div> </div> </div> </div> </div> </header> <div id="menu-produits" class="fixed top-0 right-0 bottom-0 w-72 bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-50 flex flex-col" aria-hidden="true" data-astro-cid-xcpzvsbq> <div class="flex justify-between items-center p-6 border-b border-gray-100" data-astro-cid-xcpzvsbq> <h2 class="text-2xl font-medium tracking-wide" data-astro-cid-xcpzvsbq>CATÉGORIES</h2> <button id="close-menu-btn" class="p-1 hover:bg-gray-50 rounded-full transition-colors duration-200" aria-label="Fermer le menu" data-astro-cid-xcpzvsbq> <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-xcpzvsbq> <path d="M18 6L6 18M6 6l12 12" data-astro-cid-xcpzvsbq></path> </svg> </button> </div> <nav class="flex-1 pt-8 px-8" data-astro-cid-xcpzvsbq> <ul class="space-y-6" data-astro-cid-xcpzvsbq> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits/boissons" class="block py-2 text-lg hover:translate-x-1 transition-transform duration-200" data-astro-cid-xcpzvsbq>
Boissons
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits/fruits-legumes" class="block py-2 text-lg hover:translate-x-1 transition-transform duration-200" data-astro-cid-xcpzvsbq>
Fruits & légumes
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits/viandes" class="block py-2 text-lg hover:translate-x-1 transition-transform duration-200" data-astro-cid-xcpzvsbq>
Viandes
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits/epices" class="block py-2 text-lg hover:translate-x-1 transition-transform duration-200" data-astro-cid-xcpzvsbq>
Épices
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits/snacks" class="block py-2 text-lg hover:translate-x-1 transition-transform duration-200" data-astro-cid-xcpzvsbq>
Snacks
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits/sauces" class="block py-2 text-lg hover:translate-x-1 transition-transform duration-200" data-astro-cid-xcpzvsbq>
Sauces
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits/conserves" class="block py-2 text-lg hover:translate-x-1 transition-transform duration-200" data-astro-cid-xcpzvsbq>
Conserves
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits/condiments" class="block py-2 text-lg hover:translate-x-1 transition-transform duration-200" data-astro-cid-xcpzvsbq>
Condiments
</a> </li> <li data-astro-cid-xcpzvsbq> <a href="/site-applicatif/produits/autres" class="block py-2 text-lg hover:translate-x-1 transition-transform duration-200" data-astro-cid-xcpzvsbq>
Autres
</a> </li> </ul>  ${renderScript($$result, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/HeaderApplicatif.astro?astro&type=script&index=0&lang.ts")} </nav> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/HeaderApplicatif.astro", void 0);

const $$Astro = createAstro();
const $$LayoutApplicatif = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutApplicatif;
  const { title, description } = Astro2.props;
  const baseUrl = "https://www.example.com";
  const pageUrl = `${baseUrl}${Astro2.url.pathname}`;
  const siteName = "ASAFRAM";
  return renderTemplate`<html lang="fr"> <head><!-- Encodage & viewport --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- SEO Meta --><title>${title ? `${title} \u2014 ${siteName}` : siteName}</title><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="robots" content="index, follow"><!-- Open Graph (Facebook, LinkedIn, etc.) --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(pageUrl, "content")}><meta property="og:type" content="website"><meta property="og:locale" content="fr_FR"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:site" content="@yourtwitterhandle"><!-- Canonical URL --><link rel="canonical"${addAttribute(pageUrl, "href")}><!-- Preconnect pour améliorer les performances --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect"${addAttribute(pageUrl, "href")} crossorigin><link rel="dns-prefetch"${addAttribute(pageUrl, "href")}><!-- Favicon et icônes --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Alpine.js -->${renderScript($$result, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/layouts/LayoutApplicatif.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body> ${renderComponent($$result, "HeaderApplicatif", $$HeaderApplicatif, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "FooterLandingPage", $$FooterLandingPage, {})} </body></html>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/layouts/LayoutApplicatif.astro", void 0);

export { $$LayoutApplicatif as $, IconeVide as I, IconeFavoris as a };
