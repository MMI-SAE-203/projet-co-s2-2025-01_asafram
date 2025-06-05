import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, j as Fragment } from '../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutLandingPage } from '../chunks/LayoutLandingPage_B8oIz_J1.mjs';
import 'clsx';
import { $ as $$Transition } from '../chunks/Transition_DTED4gha.mjs';
export { renderers } from '../renderers.mjs';

const fondPartenaire = new Proxy({"src":"/_astro/partenaire-desktop.DzDDiCsb.svg","width":1482,"height":674,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/partenaire-desktop.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$CardPartenaires = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardPartenaires;
  const { image, alt, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border rounded-lg flex flex-col items-center justify-center w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 overflow-hidden p-2 sm:p-3 md:p-4 shadow-sm m-1 sm:m-2 md:m-3 lg:m-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary"> <img class="w-10 sm:w-12 md:w-14 lg:w-16 xl:w-20 mb-2 sm:mb-3 md:mb-4 transition-transform duration-300 hover:scale-105"${addAttribute(image.src, "src")}${addAttribute(alt, "alt")}> <p class="text-center uppercase font-bold text-xs sm:text-sm md:text-base lg:text-base xl:text-lg px-1"> ${description} </p> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/CardPartenaires.astro", void 0);

const IconLien = new Proxy({"src":"/_astro/icone-liens.07g385q2.webp","width":181,"height":181,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-liens.webp";
							}
							
							return target[name];
						}
					});

const IconProduit = new Proxy({"src":"/_astro/icone-produits-partenaire.CLLPtMEF.webp","width":184,"height":184,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-produits-partenaire.webp";
							}
							
							return target[name];
						}
					});

const IconMarketing = new Proxy({"src":"/_astro/icone-marketing.BwIUdp-w.webp","width":181,"height":181,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-marketing.webp";
							}
							
							return target[name];
						}
					});

const IconStats = new Proxy({"src":"/_astro/icone-stats.D4QAXGSg.webp","width":181,"height":181,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-stats.webp";
							}
							
							return target[name];
						}
					});

const iconCheck = new Proxy({"src":"/_astro/icone-check.CYK-y_0T.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-check.svg";
							}
							
							return target[name];
						}
					});

const iconCroix = new Proxy({"src":"/_astro/icone-croix.CwaV7EZk.svg","width":21,"height":21,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-croix.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$CardTarifs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardTarifs;
  const {
    titre,
    description,
    icone,
    prix,
    btnText,
    features = [],
    bgColor = "bg-white",
    titleColor = "text-terre-cuite",
    textColor = "text-gris",
    labelColor = "text-black",
    iconBgColor = "bg-saumon",
    btnBgColor = "bg-terre-cuite",
    btnTextColor = "text-white",
    fillIcone = "fill-current",
    checkColor = "",
    crossColor = "",
    isMiddle = false,
    showPopular = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto p-4 sm:p-5 md:p-6 lg:p-10 ${bgColor} rounded-3xl shadow-lg border border-transparent transition-all duration-500 hover:shadow-xl hover:translate-y-[-8px] hover:border-terre-cuite w-[280px] sm:w-[270px] md:w-[220px] lg:w-[300px] xl:w-[380px] ${isMiddle ? "md:transform md:scale-105 md:z-10" : ""} relative h-auto`, "class")}> ${showPopular && renderTemplate`<div class="absolute -top-3 right-5 md:top-2 md:right-2 lg:top-4 lg:right-4"> <div class="bg-white bg-opacity-20 rounded-lg px-2 md:px-3 py-1"> <p class="text-white text-xs font-medium uppercase">Populaire</p> </div> </div>`} <div class="flex gap-2 md:gap-3 lg:gap-4 w-full"> <div${addAttribute(`flex justify-between items-center ${iconBgColor} rounded-2xl p-2 lg:p-3 mb-2 md:mb-3 w-10 md:w-12 lg:w-16`, "class")}> <img${addAttribute(icone.src, "src")}${addAttribute(`icone de la carte ${titre}`, "alt")} class="w-6 md:w-8 lg:w-12"> </div> <div> <p${addAttribute(`${textColor} text-[10px] md:text-xs`, "class")}>Pour les boutiques</p> <p${addAttribute(`${titleColor} font-bold text-base md:text-lg lg:text-xl`, "class")}> ${titre} </p> </div> </div> <p${addAttribute(`text-[10px] md:text-xs lg:text-sm ${textColor} mt-1 md:mt-2`, "class")}> ${description} </p> <p${addAttribute(`my-2 md:my-3 lg:my-4 ${titleColor} text-sm md:text-base lg:text-lg font-bold`, "class")}> ${prix} </p> <div> <p${addAttribute(`text-[10px] md:text-xs lg:text-sm font-bold ${titleColor} mb-1 md:mb-2 lg:mb-3`, "class")}>
Avantages
</p> <ul class="mt-1 md:mt-2 space-y-0.5 md:space-y-1 lg:space-y-2"> ${features.map(
    (f, index) => renderTemplate`<li class="flex items-start gap-1 md:gap-1.5 lg:gap-2 text-[10px] md:text-xs lg:text-sm"> ${f.included ? renderTemplate`<div${addAttribute(checkColor, "class")}> <img${addAttribute(iconCheck.src, "src")} alt="Icone check"${addAttribute(`w-3 md:w-4 lg:w-auto ${fillIcone}`, "class")}> </div>` : renderTemplate`<div${addAttribute(crossColor, "class")}> <img${addAttribute(iconCroix.src, "src")} alt="Icone non inclus" class="w-3 md:w-4 lg:w-auto"> </div>`} <span${addAttribute(f.included ? labelColor : "line-through text-gray-400", "class")}> ${f.label} </span> </li>`
  )} </ul> </div> <div class="position-center mt-3 md:mt-4 lg:mt-6"> <a href=""${addAttribute(`${btnBgColor} ${btnTextColor} px-4 sm:px-6 md:px-8 lg:px-16 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-4xl uppercase transition-all duration-300 hover:opacity-90 font-bold text-[10px] sm:text-xs md:text-sm lg:text-base`, "class")}>${btnText}</a> </div> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/CardTarifs.astro", void 0);

const IconForfaitGratuit = new Proxy({"src":"/_astro/icone-forfait-gratuit.KyKdBQ-A.svg","width":32,"height":32,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-forfait-gratuit.svg";
							}
							
							return target[name];
						}
					});

const IconForfaitStandard = new Proxy({"src":"/_astro/icone-forfait-standard.DtX8s0ya.webp","width":66,"height":66,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-forfait-standard.webp";
							}
							
							return target[name];
						}
					});

const IconForfaitPro = new Proxy({"src":"/_astro/icone-forfait-pro.CWSbXiVp.svg","width":30,"height":30,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-forfait-pro.svg";
							}
							
							return target[name];
						}
					});

const IconStar = new Proxy({"src":"/_astro/icone-star.uobb5qBQ.svg","width":27,"height":26,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-star.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$CardCommentairePartenaire = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardCommentairePartenaire;
  const { image, commentaire, partenaire } = Astro2.props;
  return renderTemplate`<!-- Version desktop -->${maybeRenderHead()}<div class="hidden md:flex w-full max-w-4xl lg:max-w-5xl xl:max-w-7xl h-auto shadow-md lg:shadow-lg xl:shadow-xl mx-auto transition-all duration-500 hover:shadow-xl hover:translate-y-[-8px] rounded-lg overflow-hidden"> <div class="w-1/2 min-h-[250px] md:min-h-[270px] lg:min-h-[280px] xl:min-h-[300px] relative overflow-hidden"> <div class="absolute inset-0 bg-opacity-30"></div> <img${addAttribute(image.src, "src")}${addAttribute(`Image ${partenaire}`, "alt")} class="w-full h-full min-h-[250px] md:min-h-[270px] lg:min-h-[280px] xl:min-h-[300px] object-cover transition-transform duration-700 hover:scale-110"> </div> <div class="w-1/2 bg-background p-6 md:p-7 lg:p-8 xl:p-10 flex flex-col"> <div class="flex flex-col h-full justify-between gap-5 md:gap-6 lg:gap-7 xl:gap-8"> <div class="text-black text-center text-base md:text-base lg:text-lg xl:text-lg italic overflow-auto mt-3 md:mt-4 lg:mt-5 xl:mt-6">
"${commentaire}"
</div> <div class="text-black font-bold text-xl md:text-xl lg:text-2xl xl:text-2xl text-center"> ${partenaire} </div> <div class="flex justify-center mt-2"> <div class="flex space-x-1 md:space-x-1 lg:space-x-2 xl:space-x-2"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 md:w-5 lg:w-5 xl:w-6 h-4 md:h-5 lg:h-5 xl:h-6"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 md:w-5 lg:w-5 xl:w-6 h-4 md:h-5 lg:h-5 xl:h-6"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 md:w-5 lg:w-5 xl:w-6 h-4 md:h-5 lg:h-5 xl:h-6"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 md:w-5 lg:w-5 xl:w-6 h-4 md:h-5 lg:h-5 xl:h-6"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 md:w-5 lg:w-5 xl:w-6 h-4 md:h-5 lg:h-5 xl:h-6"> </div> </div> </div> </div> </div> <!-- Version mobile --> <div class="md:hidden w-full max-w-[360px] sm:max-w-[400px] mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:translate-y-[-8px]"> <div class="w-full h-[180px] sm:h-[200px] relative overflow-hidden"> <img${addAttribute(image.src, "src")}${addAttribute(`Image ${partenaire}`, "alt")} class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"> </div> <div class="w-full bg-background p-4 sm:p-5 flex flex-col gap-3 sm:gap-4"> <div class="text-black text-center text-xs sm:text-sm italic">
"${commentaire}"
</div> <div class="text-black font-bold text-base sm:text-lg text-center"> ${partenaire} </div> <div class="flex justify-center mt-1 sm:mt-2"> <div class="flex space-x-1 sm:space-x-2"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 sm:w-5 h-4 sm:h-5 text-terre-cuite fill-current"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 sm:w-5 h-4 sm:h-5 text-terre-cuite fill-current"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 sm:w-5 h-4 sm:h-5 text-terre-cuite fill-current"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 sm:w-5 h-4 sm:h-5 text-terre-cuite fill-current"> <img${addAttribute(IconStar.src, "src")} alt="Étoile" class="w-4 sm:w-5 h-4 sm:h-5 text-terre-cuite fill-current"> </div> </div> </div> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/CardCommentairePartenaire.astro", void 0);

const ImgLeclerc = new Proxy({"src":"/_astro/leclerc.BMf8Oj96.webp","width":1270,"height":832,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/leclerc.webp";
							}
							
							return target[name];
						}
					});

const ImgTangFrere = new Proxy({"src":"/_astro/tang-frere.DvR8360Y.webp","width":1270,"height":832,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/tang-frere.webp";
							}
							
							return target[name];
						}
					});

const ImgIntermarche = new Proxy({"src":"/_astro/intermarche.BugmwqLD.webp","width":1270,"height":832,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/intermarche.webp";
							}
							
							return target[name];
						}
					});

const FondPartenaireMobile = new Proxy({"src":"/_astro/partenaire-mobile.iVUGX_1U.svg","width":381,"height":507,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/partenaire-mobile.svg";
							}
							
							return target[name];
						}
					});

const $$Partenaires = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutLandingPage", $$LayoutLandingPage, { "title": "Devenir Partenaire", "description": "Devenez partenaire de l'ASAFRAM et rejoignez notre communaut\xE9 dynamique.", "src": fondPartenaire, "srcMobile": FondPartenaireMobile, "alt": "Partenaire ASAFRAM", "classContent": "bg-white text-black" }, { "content": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="h-40 w-full bg-background" aria-hidden="true"></div> ${renderComponent($$result3, "Transition", $$Transition, { "class": "absolute", "className": "bottom-10 md:bottom-14 lg:bottom-20 xl:bottom-32" })} <div class="flex flex-col md:flex-row items-center justify-between gap-10 lg:mb-40 mb-20 lg:mx-40 mx-20" aria-label="À qui s'adresse nos partenariats"> <div class="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start"> <h3 class="text-center md:text-left">
À qui s'adresse nos partenariats ?
</h3> <p class="text-center md:text-left mb-6">
Asafram s'adresse à tous les acteurs du secteur alimentaire qui
          souhaitent gagner en visibilité et toucher une clientèle en quête de
          saveurs authentiques. Pour être éligible, ces magasins doivent
          proposer des produits d'une ou plusieurs cultures étrangères !
</p> <div> <a class="btn-landing-page" href="" aria-label="Passez le test d'éligibilité pour devenir partenaire" role="button">
Passez le test d'égibilité
</a> </div> </div> <div class="w-full md:w-1/2 h-[300px] bg-gray-200 flex items-center justify-center rounded-lg" aria-label="Illustration représentative des partenaires éligibles" role="img"> <p class="text-gray-500 italic">Image à venir</p> </div> </div> <div class="flex flex-col md:flex-row-reverse items-center justify-between gap-10 lg:mb-40 mb-20 lg:mx-40 mx-20" aria-label="Pourquoi devenir partenaire"> <div class="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start"> <h3 class="text-center md:text-left">Pourquoi devenir partenaire ?</h3> <p class="text-center md:text-left mb-6">
Rejoindre Asafram, c'est bénéficier d'une visibilité unique et ciblée
          pour toucher des clients en quête de produits authentiques.
</p> <div> <a class="btn-landing-page" href="" aria-label="Commencer le processus pour devenir partenaire" role="button">
Devenir Partenaire
</a> </div> </div> <div class="w-full md:w-1/2 h-[300px] bg-gray-200 flex items-center justify-center rounded-lg" aria-label="Illustration des avantages du partenariat" role="img"> <p class="text-gray-500 italic">Image à venir</p> </div> </div> <ul class="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mt-16 md:mt-20 lg:mt-24 xl:mt-40 px-4 sm:px-8 md:px-12 lg:px-16" aria-label="Avantages des partenariats ASAFRAM"> <li> ${renderComponent($$result3, "CardPartenaires", $$CardPartenaires, { "image": IconProduit, "description": "Une Mise en avant des produits" })} </li> <li> ${renderComponent($$result3, "CardPartenaires", $$CardPartenaires, { "image": IconLien, "description": "des liens d'affiliations" })} </li> <li> ${renderComponent($$result3, "CardPartenaires", $$CardPartenaires, { "image": IconMarketing, "description": "Des possibilit\xE9s de contenus sponsoris\xE9s" })} </li> <li> ${renderComponent($$result3, "CardPartenaires", $$CardPartenaires, { "image": IconStats, "description": "Des feedbacks statistiques" })} </li> </ul> ${renderComponent($$result3, "Transition", $$Transition, { "isReversed": "true", "className": "top-10 md:top-14 lg:top-20 xl:top-32" })} <section class="bg-background py-12 lg:pt-40 pt-20 lg:pb-40 pb-10" aria-label="Formules partenaires" id="formules"> <header> <h2>Nos formules partenaires</h2> <p class="text-center text-terre-cuite mt-6">
Ces formules sont uniquement encadrées par des contrats de
          sponsorings.
</p> <div class="px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1200px] mx-auto mt-10 md:mt-20 lg:mt-32"> <ul class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-6 mt-8 relative" aria-label="Options de tarification pour partenaires"> <li> ${renderComponent($$result3, "CardTarifs", $$CardTarifs, { "titre": "Gratuit", "icone": IconForfaitGratuit, "description": "R\xE9ferencement sur notre carte int\xE9ractive uniquement.", "prix": "0\u20AC/mois", "btnText": "Acquis", "iconBgColor": "bg-terre-cuite", "bgColor": "bg-white", "titleColor": "text-terre-cuite", "textColor": "text-gray-700", "labelColor": "text-gray-600", "iconColor": "fill-current text-terre-cuite", "features": [
    { label: "Pr\xE9sence sur la carte", included: true },
    {
      label: "Page d\xE9di\xE9e pour le commerce",
      included: false
    },
    { label: "Liens d'affiliation", included: false },
    {
      label: "Pr\xE9sence dans 'nos partenaires'",
      included: false
    }
  ] })} </li> <li class="md:-mx-3 lg:-mx-4 z-0"> ${renderComponent($$result3, "CardTarifs", $$CardTarifs, { "titre": "Standard", "icone": IconForfaitStandard, "description": "Visibilit\xE9 am\xE9lior\xE9e et premi\xE8res fonctionnalit\xE9s.", "prix": "Prix d\xE9fini sur contrats", "btnText": "Souscrire", "bgColor": "bg-terre-cuite", "btnBgColor": "bg-white", "btnTextColor": "text-terre-cuite", "iconBgColor": "bg-white", "titleColor": "text-white", "textColor": "text-gray-200", "labelColor": "text-white", "iconColor": "fill-current text-white", "isMiddle": true, "features": [
    { label: "Pr\xE9sence sur la carte", included: true },
    {
      label: "Page d\xE9di\xE9e pour le commerce",
      included: true
    },
    { label: "Liens d'affiliation", included: true },
    {
      label: "Pr\xE9sence dans 'nos partenaires'",
      included: true
    },
    {
      label: "Produits ajout\xE9s au catalogue",
      included: true
    },
    {
      label: "Feedbacks & statistiques",
      included: true
    },
    {
      label: "Post sur les r\xE9seaux sociaux",
      included: false
    },
    {
      label: "Contenu sponsoris\xE9",
      included: false
    }
  ] })} </li> <li> ${renderComponent($$result3, "CardTarifs", $$CardTarifs, { "titre": "Premium", "icone": IconForfaitPro, "description": "Partenariat complet avec visibilit\xE9 maximale.", "prix": "Prix d\xE9fini sur contrats", "btnText": "Souscrire", "bgColor": "bg-white", "iconBgColor": "bg-terre-cuite", "titleColor": "text-terre-cuite", "textColor": "text-gray-700", "labelColor": "text-terre-cuite", "iconColor": "fill-current text-white", "features": [
    { label: "Pr\xE9sence sur la carte", included: true },
    {
      label: "Page d\xE9di\xE9e pour le commerce",
      included: true
    },
    { label: "Liens d'affiliation", included: true },
    {
      label: "Pr\xE9sence dans 'nos partenaires'",
      included: true
    }
  ] })} </li> </ul> </div> </header> </section> <section class="py-12 lg:pt-40 pt-20 lg:pb-40 pb-10" aria-label="Témoignages des partenaires" id="temoignages"> <header> <h2>Les avis de nos partenaires de confiances</h2> </header> <div x-data="{ currentSlide: 1, totalSlides: 3 }" class="overflow-hidden" aria-roledescription="carrousel" aria-label="Témoignages de nos partenaires"> <ul class="mt-10 relative flex transition-transform duration-500" x-bind:style="'transform: translateX(-' + (currentSlide * 100) + '%)'" role="list" aria-live="polite"> <li class="testimonial-slide w-full flex-shrink-0 pr-4" role="tabpanel" aria-hidden="true" x-bind:aria-hidden="currentSlide !== 0"> ${renderComponent($$result3, "CardCommentairePartenaire", $$CardCommentairePartenaire, { "image": ImgLeclerc, "commentaire": "ASAFRAM nous a offert une opportunit\xE9 unique d'\xE9largir notre client\xE8le en mettant en avant notre rayon international. Gr\xE2ce \xE0 cette plateforme, nous avons pu attirer des consommateurs \xE0 la recherche de produits sp\xE9cifiques qu'ils ne trouvaient pas ailleurs.", "partenaire": "LECLERC" })} </li> <li class="testimonial-slide w-full flex-shrink-0 pr-4" role="tabpanel" aria-hidden="true" x-bind:aria-hidden="currentSlide !== 1"> ${renderComponent($$result3, "CardCommentairePartenaire", $$CardCommentairePartenaire, { "image": ImgTangFrere, "commentaire": "ASAFRAM nous a permis de mieux connecter avec nos clients, notamment en leur offrant un moyen simple de localiser nos magasins et de d\xE9couvrir nos nouveaut\xE9s. Nous avons vu une vraie diff\xE9rence en termes de fr\xE9quentation !", "partenaire": "TANG FR\xC8RE" })} </li> <li class="testimonial-slide w-full flex-shrink-0 pr-4" role="tabpanel" aria-hidden="true" x-bind:aria-hidden="currentSlide !== 2"> ${renderComponent($$result3, "CardCommentairePartenaire", $$CardCommentairePartenaire, { "image": ImgIntermarche, "commentaire": "Chez Intermarch\xE9, nous avons toujours eu \xE0 c\u0153ur de proposer une offre diversifi\xE9e r\xE9pondant aux besoins de toutes les communaut\xE9s. Gr\xE2ce \xE0 ASAFRAM, nous avons pu mieux valoriser notre rayon produits du monde et toucher une client\xE8le en qu\xEAte d'authenticit\xE9.", "partenaire": "INTERMARCH\xC9" })} </li> </ul> <div class="flex justify-center mt-16" role="tablist" aria-label="Contrôles du carrousel"> <div class="flex items-center space-x-2 w-[232px] h-[56px] justify-center"> <!-- Zone cliquable gauche - 40x40px --> <div class="w-[40px] h-[40px] flex items-center justify-center"> <div class="w-[24px] h-[24px] flex items-center justify-center cursor-pointer" @click="currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1" role="button" aria-label="Témoignage précédent" tabindex="0" aria-controls="testimonial-carousel"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#999999"></path> </svg> </div> </div> <!-- Indicateurs de diapositives - espacés de 10px (3 au lieu de 5) --> <div class="flex space-x-[10px] items-center h-[32px]"> <div class="rounded-full transition-all duration-300 cursor-pointer" :class="currentSlide === 0 ? 'w-[16px] h-[16px] bg-terre-cuite' : 'w-[12px] h-[12px] bg-gray-400'" @click="currentSlide = 0" role="tab" aria-label="Voir le témoignage de LECLERC" aria-selected="false" x-bind:aria-selected="currentSlide === 0" tabindex="0"></div> <div class="rounded-full transition-all duration-300 cursor-pointer" :class="currentSlide === 1 ? 'w-[16px] h-[16px] bg-terre-cuite' : 'w-[12px] h-[12px] bg-gray-400'" @click="currentSlide = 1" role="tab" aria-label="Voir le témoignage de TANG FRÈRE" aria-selected="false" x-bind:aria-selected="currentSlide === 1" tabindex="0"></div> <div class="rounded-full transition-all duration-300 cursor-pointer" :class="currentSlide === 2 ? 'w-[16px] h-[16px] bg-terre-cuite' : 'w-[12px] h-[12px] bg-gray-400'" @click="currentSlide = 2" role="tab" aria-label="Voir le témoignage d'INTERMARCHÉ" aria-selected="false" x-bind:aria-selected="currentSlide === 2" tabindex="0"></div> </div> <!-- Zone cliquable droite - 40x40px --> <div class="w-[40px] h-[40px] flex items-center justify-center"> <div class="w-[24px] h-[24px] flex items-center justify-center cursor-pointer" @click="currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1" role="button" aria-label="Témoignage suivant" tabindex="0" aria-controls="testimonial-carousel"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z" fill="#999999"></path> </svg> </div> </div> </div> </div> </div> </section> <div class="flex flex-col gap-10 bg-sable pt-12 rounded-t-4xl" aria-label="Appel à l'action"> <p class="uppercase text-2xl font-bold text-center">
N'attendez plus et profitez de cette opportunité
</p> <div class="position-center mb-12"> <a class="btn-landing-page" href="" aria-label="Commencer le processus pour devenir partenaire" role="button">
Devenir Partenaire
</a> </div> </div> ` })}` })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/partenaires.astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/partenaires.astro";
const $$url = "/partenaires";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Partenaires,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
