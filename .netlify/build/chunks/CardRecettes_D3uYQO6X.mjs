import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, n as renderScript, r as renderTemplate } from './astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import 'clsx';
import { a as IconeFavoris } from './LayoutApplicatif_tUxN7yFY.mjs';
import { I as IconeEtoileNote } from './etoile-note_6oWc-FZ6.mjs';
/* empty css                           */

const IconeFacile = new Proxy({"src":"/_astro/recette-moyen.ygxzG9ms.webp","width":74,"height":74,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/recette-facile.webp";
							}
							
							return target[name];
						}
					});

const IconeMoyen = new Proxy({"src":"/_astro/recette-moyen.ygxzG9ms.webp","width":74,"height":74,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/recette-moyen.webp";
							}
							
							return target[name];
						}
					});

const IconeDifficile = new Proxy({"src":"/_astro/recette-moyen.ygxzG9ms.webp","width":74,"height":74,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/recette-difficile.webp";
							}
							
							return target[name];
						}
					});

const IconeTemps = new Proxy({"src":"/_astro/icone-temps.Bng76z0h.webp","width":50,"height":50,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-temps.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$CardRecettes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardRecettes;
  const { recette } = Astro2.props;
  recette?.prix ? `${recette.prix.toFixed(2)}\u20AC` : "";
  const rating = recette?.note || 0;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  const getDifficultyIcon = (difficulty) => {
    if (!difficulty) return IconeFacile.src;
    const difficultyLower = difficulty.toLowerCase();
    if (difficultyLower.includes("facile")) return IconeFacile.src;
    if (difficultyLower.includes("moyen")) return IconeMoyen.src;
    if (difficultyLower.includes("difficile")) return IconeDifficile.src;
    return IconeFacile.src;
  };
  console.log("Donn\xE9es compl\xE8tes de la recette:", recette);
  console.log("Donn\xE9es expand\xE9es:", recette.expand);
  console.log("Auteur expand\xE9:", recette.expand?.auteur);
  console.log("Auteur direct:", recette.auteur);
  let auteurUsername = "andrea92i";
  if (recette.expand?.auteur?.username) {
    auteurUsername = recette.expand.auteur.username;
  } else if (typeof recette.auteur === "object" && recette.auteur?.username) {
    auteurUsername = recette.auteur.username;
  } else {
    const auteurId = typeof recette.auteur === "string" ? recette.auteur : recette.expand?.auteur?.id || null;
    if (auteurId) {
      auteurUsername = "andrea92i";
    }
  }
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/recettes/${recette.id}`, "href")} class="card-recette w-[281px] h-[345px] relative border-2 border-sable rounded-[15px] bg-white flex flex-col transition-transform duration-300 hover:scale-[1.01] cursor-pointer"${addAttribute(recette.id, "data-recette-id")} data-astro-cid-4d2bfuh3> <!-- En-tête de la carte avec pays et bouton favori --> <div class="flex justify-between items-center p-4" data-astro-cid-4d2bfuh3> ${recette.expand?.pays && renderTemplate`<div class="flex items-center" data-astro-cid-4d2bfuh3> ${recette.expand.pays.drapeauUrl && renderTemplate`<div class="flag w-[26px] h-[19px] mr-[10px] border border-black overflow-hidden" data-astro-cid-4d2bfuh3> <img${addAttribute(recette.expand.pays.drapeauUrl, "src")}${addAttribute(recette.expand.pays.nom, "alt")} class="w-full h-full object-cover" data-astro-cid-4d2bfuh3> </div>`} <span class="text-sm font-bold text-black uppercase" data-astro-cid-4d2bfuh3> ${recette.expand.pays.nom} </span> </div>`} <!-- Bouton Favoris --> <button class="favorite-btn w-[36px] h-[36px] bg-sable rounded-full flex justify-center items-center transition-all duration-300 hover:bg-sable z-20 cursor-pointer"${addAttribute("Ajouter aux favoris", "aria-label")}${addAttribute(recette.id, "data-recette-id")} data-astro-cid-4d2bfuh3> <img${addAttribute(IconeFavoris.src, "src")} alt="Favoris"${addAttribute(18, "width")}${addAttribute(17, "height")}${addAttribute(`${"opacity-75"} transition-opacity`, "class")} data-astro-cid-4d2bfuh3> </button> </div> <!-- Temps de préparation --> <div class="absolute right-2 gap-0.5 top-14 flex items-center bg-transparent bg-opacity-90 px-2 py-1 z-10" data-astro-cid-4d2bfuh3> <img${addAttribute(IconeTemps.src, "src")} alt="Temps de préparation"${addAttribute(25, "width")}${addAttribute(25, "height")} class="w-6 h-6" data-astro-cid-4d2bfuh3> <span class="text-sm !font-radio-canada uppercase" data-astro-cid-4d2bfuh3>${recette.temps || "30"}</span> </div> <!-- Image de la recette au centre dans un cercle --> <div class="flex-grow flex justify-center items-center px-4" data-astro-cid-4d2bfuh3> <div class="relative w-[175px] h-[175px]" data-astro-cid-4d2bfuh3> <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center" data-astro-cid-4d2bfuh3> <div class="w-[155px] h-[155px] bg-sable opacity-75 rounded-full" data-astro-cid-4d2bfuh3></div> </div> <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center" data-astro-cid-4d2bfuh3> <img${addAttribute(recette.img, "src")}${addAttribute(recette.nom, "alt")} class="w-[140px] h-[140px] object-cover rounded-full z-10" data-astro-cid-4d2bfuh3> </div> </div> </div> <!-- Informations de la recette --> <div class="px-4 pb-4" data-astro-cid-4d2bfuh3> <!-- Nom de la recette --> <h3 class="!text-lg !p-0 !font-raleway uppercase text-black" data-astro-cid-4d2bfuh3> ${recette.nom} </h3> <!-- Auteur de la recette --> <p class="text-sm text-black" data-astro-cid-4d2bfuh3>
de <span class="underline" data-astro-cid-4d2bfuh3>${auteurUsername}</span> </p> <div class="flex justify-between items-center" data-astro-cid-4d2bfuh3> <!-- Notation avec étoiles --> <div class="flex items-center" data-astro-cid-4d2bfuh3> <div class="flex gap-1" data-astro-cid-4d2bfuh3> ${Array(fullStars).fill(0).map(() => renderTemplate`<img${addAttribute(IconeEtoileNote.src, "src")} alt="Étoile"${addAttribute(15, "width")}${addAttribute(15, "height")} class="text-saumon" data-astro-cid-4d2bfuh3>`)} ${hasHalfStar && renderTemplate`<img${addAttribute(IconeEtoileNote.src, "src")} alt="Demi-étoile"${addAttribute(15, "width")}${addAttribute(15, "height")} class="opacity-50" data-astro-cid-4d2bfuh3>`} ${Array(emptyStars).fill(0).map(() => renderTemplate`<img${addAttribute(IconeEtoileNote.src, "src")} alt="Étoile vide"${addAttribute(15, "width")}${addAttribute(15, "height")} class="grayscale opacity-50" data-astro-cid-4d2bfuh3>`)} </div> ${recette.nbNotes && renderTemplate`<span class="text-xs text-black ml-2" data-astro-cid-4d2bfuh3>(+${recette.nbNotes})</span>`} </div> <!-- Niveau de difficulté --> <div class="bg-sable rounded-md p-2 px-4 flex justify-center items-center" data-astro-cid-4d2bfuh3> <span class="text-xs font-bold mr-1 uppercase tracking-wider" data-astro-cid-4d2bfuh3> ${recette.difficulte || "Moyen"} </span> <img${addAttribute(getDifficultyIcon(recette.difficulte), "src")}${addAttribute(`Difficult\xE9: ${recette.difficulte || "Moyen"}`, "alt")}${addAttribute(20, "width")}${addAttribute(20, "height")} class="mr-1" data-astro-cid-4d2bfuh3> </div> </div> </div> </a> ${renderScript($$result, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/site-applicatif/CardRecettes.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/site-applicatif/CardRecettes.astro", void 0);

export { $$CardRecettes as $ };
