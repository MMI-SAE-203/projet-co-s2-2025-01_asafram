import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, j as Fragment } from '../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutLandingPage } from '../chunks/LayoutLandingPage_B8oIz_J1.mjs';
import 'clsx';
import { I as IconeCommerces } from '../chunks/icone-commerce_D3e5xfUB.mjs';
import { $ as $$Transition } from '../chunks/Transition_DTED4gha.mjs';
export { renderers } from '../renderers.mjs';

const FondApropos = new Proxy({"src":"/_astro/apropos-desktop.CIwBVmd9.svg","width":1532,"height":782,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/apropos-desktop.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$CardPersonnage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardPersonnage;
  const { nom, prenom, role, image, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <img${addAttribute(image.src, "src")}${addAttribute(alt, "alt")} class="w-36"> <h3 class="font-raleway text-center">${prenom} ${nom}</h3> <p class="text-center">${role}</p> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/CardPersonnage.astro", void 0);

const AndreaPerso = new Proxy({"src":"/_astro/andrea.CPuqvW4f.webp","width":354,"height":661,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/andrea.webp";
							}
							
							return target[name];
						}
					});

const NicoPerso = new Proxy({"src":"/_astro/nicolas.BkOAMnrG.webp","width":372,"height":692,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/nicolas.webp";
							}
							
							return target[name];
						}
					});

const FrancoisPerso = new Proxy({"src":"/_astro/francois.BOR-pfkH.webp","width":458,"height":682,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/francois.webp";
							}
							
							return target[name];
						}
					});

const IutMmi = new Proxy({"src":"/_astro/iut-mmi.CKNjBtZx.webp","width":660,"height":369,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/iut-mmi.webp";
							}
							
							return target[name];
						}
					});

const IconDiversite = new Proxy({"src":"/_astro/icone-diversite.C_FGvkvV.webp","width":181,"height":180,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-diversite.webp";
							}
							
							return target[name];
						}
					});

const IconAuthenticite = new Proxy({"src":"/_astro/icone-authenticite.e-sd-nmQ.webp","width":181,"height":180,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-authenticite.webp";
							}
							
							return target[name];
						}
					});

const IconPartage = new Proxy({"src":"/_astro/icone-partage.CcBWwcG0.webp","width":181,"height":180,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-partage.webp";
							}
							
							return target[name];
						}
					});

const FondAproposMobile = new Proxy({"src":"/_astro/apropos-mobile.CpheSNfv.svg","width":384,"height":711,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/apropos-mobile.svg";
							}
							
							return target[name];
						}
					});

const $$Apropos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutLandingPage", $$LayoutLandingPage, { "title": "Qui sommes-nous ?", "description": "D\xE9couvrez qui se cache derri\xE8re l'ASAFRAM.", "src": FondApropos, "srcMobile": FondAproposMobile, "alt": "Qui sommes nous ASAFRAM", "classContent": "bg-white text-black" }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="h-40 w-full bg-background" aria-hidden="true"></div> ${renderComponent($$result3, "Transition", $$Transition, { "className": "bottom-10 md:bottom-14 lg:bottom-20 xl:bottom-32" })} <section class="section-content" id="equipe" aria-label="Notre équipe"> <header class="lg:mb-20 mb-10"> <h2>Notre équipe</h2> </header> <ul class="flex flex-col justify-center items-center gap-8 md:flex-row md:gap-30 lg:gap-60 xl:gap-80" aria-label="Membres de l'équipe ASAFRAM"> <li class="transition-transform duration-300 hover:translate-y-[-5px]"> ${renderComponent($$result3, "CardPersonnage", $$CardPersonnage, { "nom": "Mestre", "prenom": "Andr\xE9a", "role": "Designer", "image": AndreaPerso, "alt": "Portrait d'Andr\xE9a Mestre, designer d'ASAFRAM" })} </li> <li class="transition-transform duration-300 hover:translate-y-[-5px]"> ${renderComponent($$result3, "CardPersonnage", $$CardPersonnage, { "nom": "Thai", "prenom": "Nicolas", "role": "D\xE9veloppeur", "image": NicoPerso, "alt": "Portrait de Nicolas Thai, d\xE9veloppeur d'ASAFRAM" })} </li> <li class="transition-transform duration-300 hover:translate-y-[-5px]"> ${renderComponent($$result3, "CardPersonnage", $$CardPersonnage, { "nom": "Yang", "prenom": "Fran\xE7ois", "role": "Communication", "image": FrancoisPerso, "alt": "Portrait de Fran\xE7ois Yang, responsable communication d'ASAFRAM" })} </li> </ul> </section> ${renderComponent($$result3, "Transition", $$Transition, { "isReversed": "true", "className": "top-10 md:top-14 lg:top-20 xl:top-32" })} <section class="section-content bg-background lg:pt-40 pt-20 lg:pb-40 pb-30" id="notre-histoire" aria-label="Histoire d'ASAFRAM"> <header> <h2 class="uppercase text-center md:!text-left lg:ml-10">
Pourquoi on a créé ASAFRAM ?
</h2> </header> <div class="flex flex-col lg:flex-row lg:gap-12 md:gap-10 lg:px-10 mt-6 lg:items-center"> <div class="space-y-16 lg:w-1/2"> <p class="text-sm xl:!text-lg md:!text-base">
Nous étions trois étudiants en première année de MMI, passionnés par
            le digital et la culture culinaire. Issus de familles chinoise,
            vietnamienne et portugaise, nous avions grandi avec des plats
            traditionnels qui faisaient partie de notre identité. Pourtant, nous
            étions souvent confrontés à une même difficulté : trouver facilement
            les ingrédients authentiques pour recréer ces recettes chez nous.
            Entre le manque de visibilité des épiceries spécialisées et la
            difficulté d'accéder à certaines informations, nous avions réalisé
            que ce besoin ne concernait pas seulement nos communautés, mais bien
            toutes les personnes attachées aux saveurs de leur culture
            d'origine.
</p> <p class="text-sm xl:!text-lg md:!text-base">
ASAFRAM était d'abord né dans un cadre scolaire, comme un simple
            projet universitaire. Mais au fil de nos recherches et de nos
            échanges, nous avions compris qu'il répondait à une véritable
            problématique, bien au-delà de notre travail académique. Ce qui
            était au départ un exercice était devenu un projet concret, porté
            par l'envie de créer un véritable pont entre les cultures à travers
            la cuisine. Finalement, nous avions décidé d'aller plus loin et de
            lancer ASAFRAM pour de vrai, avec la conviction que la diversité
            culinaire méritait d'être accessible à tous.
</p> </div> <div class="mt-10 lg:mt-0 lg:w-1/2 flex flex-col"> <img${addAttribute(IutMmi.src, "src")} alt="Campus de l'IUT MMI où le projet ASAFRAM a été créé" class="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"> <div class="position-center mt-10"> <a class="btn-landing-page bg-terre-cuite text-white" href="" aria-label="Essayer la plateforme ASAFRAM" role="button">
Essayer ASAFRAM
</a> </div> </div> </div> </section> ${renderComponent($$result3, "Transition", $$Transition, { "className": "bottom-10 md:bottom-14 lg:bottom-20 xl:bottom-32" })} <section class="section-content lg:pb-40 pb-10" id="valeurs" aria-label="Nos valeurs et engagements"> <header class="lg:mb-40 mb-10"> <h2>Nos valeurs & engagements</h2> </header> <ul class="flex flex-col justify-center items-center mt-10 gap-14 md:flex-row lg:gap-20 md:gap-16 xl:gap-50" aria-label="Liste des valeurs d'ASAFRAM"> <li class="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"> <div class="h-20 flex items-center justify-center mb-4" aria-hidden="true"> <img class="w-20"${addAttribute(IconDiversite.src, "src")} alt=""> </div> <h3 class="text-center h-10 flex items-center justify-center">
Diversité
</h3> </li> <li class="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"> <div class="h-20 flex items-center justify-center mb-4" aria-hidden="true"> <img class="w-20"${addAttribute(IconAuthenticite.src, "src")} alt=""> </div> <h3 class="text-center h-10 flex items-center justify-center">
Authenticité
</h3> </li> <li class="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"> <div class="h-20 flex items-center justify-center mb-4" aria-hidden="true"> <img class="w-20"${addAttribute(IconeCommerces.src, "src")} alt=""> </div> <h3 class="text-center h-10 flex items-center justify-center w-60 lg:w-64">
Soutenir les petits commerces
</h3> </li> <li class="flex flex-col items-center justify-center transition-transform duration-300 hover:scale-110"> <div class="h-20 flex items-center justify-center mb-4" aria-hidden="true"> <img class="w-20"${addAttribute(IconPartage.src, "src")} alt=""> </div> <h3 class="text-center h-10 flex items-center justify-center">
Partage
</h3> </li> </ul> </section> ` })}` })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/apropos.astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/apropos.astro";
const $$url = "/apropos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Apropos,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
