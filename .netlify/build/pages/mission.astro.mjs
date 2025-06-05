import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, j as Fragment } from '../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutLandingPage } from '../chunks/LayoutLandingPage_B8oIz_J1.mjs';
import 'clsx';
import { I as IconeCommerces } from '../chunks/icone-commerce_D3e5xfUB.mjs';
import { $ as $$Transition } from '../chunks/Transition_DTED4gha.mjs';
export { renderers } from '../renderers.mjs';

const FondMission = new Proxy({"src":"/_astro/mission-desktop.9J_gP3-_.svg","width":1530,"height":826,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/mission-desktop.svg";
							}
							
							return target[name];
						}
					});

const JuanImage = new Proxy({"src":"/_astro/juan-veloza.Cf4USzed.webp","width":1218,"height":906,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/juan-veloza.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$BulleMission = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BulleMission;
  const { circleColor, nombre, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center text-center max-w-xs mx-auto my-4 sm:my-5 md:my-6 lg:my-7 xl:my-8"> <div class="flex items-center justify-center mb-3 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4"> <div${addAttribute(`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-38 lg:h-38 xl:w-40 xl:h-40 ${circleColor} rounded-full flex items-center justify-center relative`, "class")}> <div class="z-0"> <span class="text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-black font-semibold uppercase font-radio-canada">${nombre}</span> </div> </div> </div> <div> <p class="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg"> ${text} </p> </div> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/BulleMission.astro", void 0);

const ImagePlats = new Proxy({"src":"/_astro/plats-asafram.DVlbk9hE.webp","width":1090,"height":736,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/plats-asafram.webp";
							}
							
							return target[name];
						}
					});

const IconeRecettes = new Proxy({"src":"/_astro/icone-recette.tnV8yukA.webp","width":140,"height":140,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-recette.webp";
							}
							
							return target[name];
						}
					});

const IconeCommunautes = new Proxy({"src":"/_astro/icone-communaute.avtkblq7.webp","width":140,"height":140,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-communaute.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$CardFonctionnalites = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardFonctionnalites;
  const { description, title, image, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] xl:max-w-[400px] rounded-[20px] md:rounded-[22px] lg:rounded-[24px] xl:rounded-[24px] p-4 md:p-5 lg:p-6 xl:p-8 transition-transform hover:scale-102 h-[240px] md:h-[260px] lg:h-[270px] xl:h-[280px] ${color}`, "class")}> <div class="mb-2 flex-shrink-0"> ${image && renderTemplate`<img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-[40px] h-[40px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] xl:w-[55px] xl:h-[55px] mb-2 md:mb-2 lg:mb-3 xl:mb-3">`} <h3 class="!text-lg md:!text-lg lg:!text-xl xl:!text-2xl font-bold mt-1 md:!mt-0 md:!pt-0"> ${title} </h3> </div> <div class="flex-grow overflow-y-auto"> <p class="!text-sm md:!text-base lg:!text-base xl:!text-lg text-gray-800"> ${description} </p> </div> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/CardFonctionnalites.astro", void 0);

const IconePlan = new Proxy({"src":"/_astro/icone-plan.CrVNyXgx.webp","width":80,"height":80,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-plan.webp";
							}
							
							return target[name];
						}
					});

const IconeProduits = new Proxy({"src":"/_astro/icone-produits.C_ClX6Q-.webp","width":80,"height":80,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-produits.webp";
							}
							
							return target[name];
						}
					});

const IconeFavoris = new Proxy({"src":"/_astro/icone-favoris.BGbTst0G.webp","width":60,"height":60,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-favoris.webp";
							}
							
							return target[name];
						}
					});

const IconeMessage = new Proxy({"src":"/_astro/icone-message.Cu5a7kVL.webp","width":60,"height":60,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-message.webp";
							}
							
							return target[name];
						}
					});

const IconeNewsletter = new Proxy({"src":"/_astro/icone-newsletter.BWljxUJO.webp","width":60,"height":60,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-newsletter.webp";
							}
							
							return target[name];
						}
					});

const IconeSearchbar = new Proxy({"src":"/_astro/icone-searchbar.DUCcuh2M.webp","width":80,"height":80,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-searchbar.webp";
							}
							
							return target[name];
						}
					});

const IconeTraduction = new Proxy({"src":"/_astro/icone-traduction.CZGIE8RP.webp","width":60,"height":60,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-traduction.webp";
							}
							
							return target[name];
						}
					});

const IconeTask = new Proxy({"src":"/_astro/icone-task.PURsmj10.webp","width":60,"height":60,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-task.webp";
							}
							
							return target[name];
						}
					});

const IconeChevron = new Proxy({"src":"/_astro/faq-chevron.C_dTOPQD.webp","width":20,"height":35,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/faq-chevron.webp";
							}
							
							return target[name];
						}
					});

const FondMissionMobile = new Proxy({"src":"/_astro/mission-mobile.CUa0E8CU.svg","width":387,"height":640,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/mission-mobile.svg";
							}
							
							return target[name];
						}
					});

const $$Mission = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutLandingPage", $$LayoutLandingPage, { "title": "Notre Mission", "description": "D\xE9couvrez notre mission \xE0 travers le projet d'ASAFRAM", "src": FondMission, "srcMobile": FondMissionMobile, "alt": "Mission ASAFRAM", "classContent": "bg-white text-black" }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="section-content bg-background !pt-0 !mt-0 lg:pb-20"> <div class=""> <div class="flex flex-col lg:flex-row justify-center items-center mb-16 pt-20 lg:pt-40 md:pb-20"> <div class="lg:w-1/2"> <h2 class="md:!text-left mb-6 !mt-0 !pt-0">L'histoire de Juan</h2> <div class="space-y-8"> <p class="w-full lg:w-3/4 lg:text-xl">
Tout a commencé avec notre ami Juan, un étudiant colombien venu
                en France pour ses études. En arrivant, il a rapidement
                rencontré une difficulté : retrouver des produits alimentaires
                colombiens pour recréer les plats de son pays.
</p> <p class="w-full lg:w-3/4 lg:text-xl">
C'est ainsi qu'il a imaginé une plateforme capable de référencer
                tous les produits colombiens disponibles en France. Une solution
                qui lui permettrait de gagner du temps dans ses recherches et
                d'accéder plus facilement aux ingrédients essentiels de ses
                plats favoris.
</p> </div> </div> <div class="my-10 lg:w-[600px] md:w-[500px] overflow-hidden"> <img${addAttribute(JuanImage.src, "src")} alt="Portrait de Juan Veloza, fondateur du concept ASAFRAM" class="transition-transform duration-300 hover:scale-[1.02]"> </div> </div> <div> <h3 class="text-center md:mb-20">
Et des Juans, on en trouve des millions en France...
</h3> <ul class="flex flex-col gap-8 items-center justify-center pt-10 pb-20 lg:flex-row lg:gap-36" aria-label="Statistiques sur l'immigration en France"> <li class="transition-all duration-300 hover:transform hover:translate-y-[-10px]"> ${renderComponent($$result3, "BulleMission", $$BulleMission, { "circleColor": "bg-jaune", "nombre": "30%", "text": "Des fran\xE7ais sonts issus de familles immigr\xE9es ou immigr\xE9 eux-m\xEAme." })} </li> <li class="transition-all duration-300 hover:transform hover:translate-y-[-10px]"> ${renderComponent($$result3, "BulleMission", $$BulleMission, { "circleColor": "bg-saumon", "nombre": "6M", "text": "Des fran\xE7ais sonts issus de familles immigr\xE9es ou immigr\xE9 eux-m\xEAme." })} </li> <li class="transition-all duration-300 hover:transform hover:translate-y-[-10px]"> ${renderComponent($$result3, "BulleMission", $$BulleMission, { "circleColor": "bg-rouge", "nombre": "+35%", "text": "Des fran\xE7ais sonts issus de familles immigr\xE9es ou immigr\xE9 eux-m\xEAme." })} </li> </ul> </div> </div> </div> ${renderComponent($$result3, "Transition", $$Transition, { "className": "bottom-10 md:bottom-14 lg:bottom-20 xl:bottom-32" })} <section class="section-content bg-white !mt-0"> <div class="flex flex-col lg:flex-row lg:gap-30 items-center"> <div class="flex flex-col lg:w-2/5"> <h2 class="text-center md:text-left mb-4">C'est quoi ASAFRAM ?</h2> <p class="text-center md:text-left mb-8">
Une plateforme de référencement qui vise à aider les étrangers à
            retrouver les saveurs de chez-eux.
</p> <div class="mt-6 overflow-hidden rounded-lg"> <img class="w-full rounded-lg transition-transform duration-300 hover:scale-[1.02]"${addAttribute(ImagePlats.src, "src")} alt="Assortiment de plats typiques internationaux proposés sur ASAFRAM"> </div> </div> <div class="lg:w-3/5 mt-16 lg:mt-0"> <ul class="flex flex-col gap-8 lg:mt-30" aria-label="Les principales missions d'ASAFRAM"> <li class="flex flex-row items-start transition-all duration-300 hover:transform hover:translate-x-[5px] hover:shadow-md rounded-md p-2"> <div class="min-w-[64px] flex items-start justify-center mr-4 transition-transform duration-300 hover:rotate-6" aria-hidden="true"> <img class="w-16"${addAttribute(IconeCommerces.src, "src")} alt=""> </div> <div> <h3 class="text-xl font-bold mb-2">
Référencier des produits, boutiques et restaurants étrangers
</h3> <p class="text-base">
Nous centralisons les meilleurs produits, boutiques et
                  restaurants spécialisés pour que chacun puisse retrouver les
                  goûts de son pays d'origine ou découvrir de nouvelles
                  cuisines.
</p> </div> </li> <li class="flex flex-row items-start transition-all duration-300 hover:transform hover:translate-x-[5px] hover:shadow-md rounded-md p-2"> <div class="min-w-[64px] flex items-start justify-center mr-4 transition-transform duration-300 hover:rotate-6" aria-hidden="true"> <img class="w-16"${addAttribute(IconeRecettes.src, "src")} alt=""> </div> <div> <h3 class="text-xl font-bold mb-2">
Initiatier à la cuisine étrangère avec des recettes
</h3> <p class="text-base">
Nous mettons à disposition un espace de partage de recettes
                  authentiques pour vous initier aux cuisines étrangères et
                  reproduire chez vous des plats emblématiques.
</p> </div> </li> <li class="flex flex-row items-start transition-all duration-300 hover:transform hover:translate-x-[5px] hover:shadow-md rounded-md p-2"> <div class="min-w-[64px] flex items-start justify-center mr-4 transition-transform duration-300 hover:rotate-6" aria-hidden="true"> <img class="w-16"${addAttribute(IconeCommunautes.src, "src")} alt=""> </div> <div> <h3 class="text-xl font-bold mb-2">
Créer une communauté engagée
</h3> <p class="text-base">
Nous rassemblons amateurs et experts de la cuisine du monde
                  pour partager recettes, conseils et bonnes adresses dans un
                  esprit d'échange et de découverte. Tout se passe à travers des
                  espaces de commentaires, de notations et de partages.
</p> </div> </li> </ul> </div> </div> </section> ${renderComponent($$result3, "Transition", $$Transition, { "isReversed": "true", "className": "top-10 md:top-14 lg:top-20 xl:top-32" })} <section class="section-content bg-background py-20 lg:py-40"> <header> <h2 class="mt-20 lg:mt-40 md:mb-20 lg:mb-32">
Les fonctionnalités d'asafram
</h2> </header> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 md:px-2 lg:px-4 xl:px-6 mx-auto my-12 max-w-7xl" aria-label="Liste des fonctionnalités d'ASAFRAM"> <li class="flex justify-center"> ${renderComponent($$result3, "CardFonctionnalites", $$CardFonctionnalites, { "image": IconePlan.src, "title": "Carte interactive", "description": "Trouvez facilement les boutiques et restaurants sp\xE9cialis\xE9s pr\xE8s de chez vous gr\xE2ce \xE0 une carte intuitive.", "color": "bg-sable" })} </li> <li class="flex justify-center"> ${renderComponent($$result3, "CardFonctionnalites", $$CardFonctionnalites, { "image": IconeProduits.src, "title": "Catalogue de produits", "description": "Explorez les produits disponibles dans chaque boutique et pr\xE9parez vos achats en toute simplicit\xE9.", "color": "bg-saumon" })} </li> <li class="flex justify-center"> ${renderComponent($$result3, "CardFonctionnalites", $$CardFonctionnalites, { "image": IconeRecettes.src, "title": "Partage de recettes", "description": "D\xE9couvrez et publiez des recettes authentiques pour cuisiner des plats du monde chez vous.", "color": "bg-rouge" })} </li> <li class="flex justify-center"> ${renderComponent($$result3, "CardFonctionnalites", $$CardFonctionnalites, { "image": IconeFavoris.src, "title": "Liste de favoris", "description": "Enregistrez vos boutiques, restaurants et produits pr\xE9f\xE9r\xE9s pour les retrouver rapidement.", "color": "bg-sable" })} </li> <li class="flex justify-center"> ${renderComponent($$result3, "CardFonctionnalites", $$CardFonctionnalites, { "image": IconeMessage.src, "title": "Commentaires & Notes", "description": "Laissez des avis et consultez ceux des autres pour faire les meilleurs choix.", "color": "bg-saumon" })} </li> <li class="flex justify-center"> ${renderComponent($$result3, "CardFonctionnalites", $$CardFonctionnalites, { "image": IconeNewsletter.src, "title": "Newsletter", "description": "Recevez les derni\xE8res nouveaut\xE9s, promotions et recettes directement dans votre bo\xEEte mail.", "color": "bg-rouge" })} </li> <li class="flex justify-center"> ${renderComponent($$result3, "CardFonctionnalites", $$CardFonctionnalites, { "image": IconeSearchbar.src, "title": "Recherches Rapide", "description": "Trouvez en un instant une boutique, un produit ou une recette gr\xE2ce \xE0 notre moteur de recherche.", "color": "bg-sable" })} </li> <li class="flex justify-center"> ${renderComponent($$result3, "CardFonctionnalites", $$CardFonctionnalites, { "image": IconeTask.src, "title": "G\xE9n\xE9rateur de liste de course", "description": "S\xE9lectionnez vos produits et g\xE9n\xE9rez une liste pr\xEAte \xE0 \xEAtre utilis\xE9e en magasin.", "color": "bg-saumon" })} </li> <li class="flex justify-center"> ${renderComponent($$result3, "CardFonctionnalites", $$CardFonctionnalites, { "image": IconeTraduction.src, "title": "Option de langue", "description": "Naviguez sur la plateforme en plusieurs langues pour une accessibilit\xE9 maximale.", "color": "bg-rouge" })} </li> </ul> <div x-data="{ open: 0 }" class="w-full mx-auto space-y-4 mb-12 flex flex-col items-center md:mt-40 mt-20 gap-2" aria-label="Foire aux questions"> <div class="w-full lg:w-3/4 border border-terre-cuite bg-white rounded-md shadow-sm" role="region"> <div @click="open = open === 1 ? 0 : 1" class="flex justify-between items-center px-5 py-4 sm:py-5 cursor-pointer" role="button" aria-expanded="false" aria-controls="faq-panel-1" tabindex="0" aria-label="Afficher ou masquer la réponse"> <h3 class="!text-base sm:!text-xl !font-light font-raleway text-terre-cuite pr-4">
ASAFRAM est-il gratuit pour les utilisateurs ?
</h3> <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true"> <div class="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-terre-cuite rounded-full"> <img${addAttribute(IconeChevron.src, "src")} alt="" class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 object-contain" :class="open === 1 ? 'rotate-90' : ''"> </div> </div> </div> <div x-show="open === 1" x-collapse x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform -translate-y-2" x-transition:enter-end="opacity-100 transform translate-y-0" id="faq-panel-1" aria-hidden="true"> <p class="px-5 py-4 border-t border-terre-cuite text-sm sm:text-base">
Oui, ASAFRAM est entièrement gratuit pour les utilisateurs. Nous
              croyons en l'accès à la culture culinaire du monde entier sans
              frais.
</p> </div> </div> <div class="w-full lg:w-3/4 border border-terre-cuite bg-white rounded-md shadow-sm" role="region"> <div @click="open = open === 2 ? 0 : 2" class="flex justify-between items-center px-5 py-4 sm:py-5 cursor-pointer" role="button" aria-expanded="false" aria-controls="faq-panel-2" tabindex="0" aria-label="Afficher ou masquer la réponse"> <h3 class="!text-base sm:!text-xl !font-light font-raleway text-terre-cuite pr-4">
Puis-je commander directement via ASAFRAM ?
</h3> <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true"> <div class="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-terre-cuite rounded-full"> <img${addAttribute(IconeChevron.src, "src")} alt="" class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 object-contain" :class="open === 2 ? 'rotate-90' : ''"> </div> </div> </div> <div x-show="open === 2" x-collapse x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform -translate-y-2" x-transition:enter-end="opacity-100 transform translate-y-0" id="faq-panel-2" aria-hidden="true"> <p class="px-5 py-4 border-t border-terre-cuite text-sm sm:text-base">
Non, ASAFRAM ne propose pas de service de commande. Nous vous
              redirigeons vers les boutiques et restaurants référencés pour
              passer vos commandes directement auprès d'eux.
</p> </div> </div> <div class="w-full lg:w-3/4 border border-terre-cuite bg-white rounded-md shadow-sm" role="region"> <div @click="open = open === 3 ? 0 : 3" class="flex justify-between items-center px-5 py-4 sm:py-5 cursor-pointer" role="button" aria-expanded="false" aria-controls="faq-panel-3" tabindex="0" aria-label="Afficher ou masquer la réponse"> <h3 class="!text-base sm:!text-xl !font-light font-raleway text-terre-cuite pr-4">
Quels types de commerces sont référencés sur ASAFRAM ?
</h3> <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true"> <div class="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-terre-cuite rounded-full"> <img${addAttribute(IconeChevron.src, "src")} alt="" class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 object-contain" :class="open === 3 ? 'rotate-90' : ''"> </div> </div> </div> <div x-show="open === 3" x-collapse x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform -translate-y-2" x-transition:enter-end="opacity-100 transform translate-y-0" id="faq-panel-3" aria-hidden="true"> <p class="px-5 py-4 border-t border-terre-cuite text-sm sm:text-base">
ASAFRAM référence une variété de commerces, y compris des
              épiceries, des restaurants, des traiteurs et des marchés
              spécialisés dans les produits étrangers. Nous nous efforçons de
              couvrir un large éventail de cuisines du monde entier.
</p> </div> </div> <div class="w-full lg:w-3/4 border border-terre-cuite bg-white rounded-md shadow-sm" role="region"> <div @click="open = open === 4 ? 0 : 4" class="flex justify-between items-center px-5 py-4 sm:py-5 cursor-pointer" role="button" aria-expanded="false" aria-controls="faq-panel-4" tabindex="0" aria-label="Afficher ou masquer la réponse"> <h3 class="!text-base sm:!text-xl !font-light font-raleway text-terre-cuite pr-4">
ASAFRAM propose-t-il des recommandations personnalisées ?
</h3> <div class="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10" aria-hidden="true"> <div class="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border-2 border-terre-cuite rounded-full"> <img${addAttribute(IconeChevron.src, "src")} alt="" class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 object-contain" :class="open === 4 ? 'rotate-90' : ''"> </div> </div> </div> <div x-show="open === 4" x-collapse x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform -translate-y-2" x-transition:enter-end="opacity-100 transform translate-y-0" id="faq-panel-4" aria-hidden="true"> <p class="px-5 py-4 border-t border-terre-cuite text-sm sm:text-base">
Oui, ASAFRAM utilise des algorithmes de recommandation pour
              suggérer des produits et des recettes en fonction de vos
              préférences et de vos recherches précédentes. Plus vous utilisez
              la plateforme, plus les recommandations deviennent pertinentes.
</p> </div> </div> </div> </section> ` })}` })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/mission.astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/mission.astro";
const $$url = "/mission";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Mission,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
