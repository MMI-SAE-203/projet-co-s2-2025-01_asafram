import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, n as renderScript, r as renderTemplate } from './astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import 'clsx';
import { a as IconeFavoris } from './LayoutApplicatif_tUxN7yFY.mjs';
import { I as IconeEtoileNote } from './etoile-note_6oWc-FZ6.mjs';
/* empty css                           */

const IconeDistance = new Proxy({"src":"/_astro/icone-coordonnes.DbBb38p8.svg","width":13,"height":13,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-coordonnes.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$CardProduits = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProduits;
  const { product } = Astro2.props;
  const formattedPrice = product?.prix ? `${product.prix.toFixed(2)}\u20AC` : "";
  const rating = product?.note || 0;
  const fullStars = Math.max(0, Math.min(5, Math.floor(rating)));
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/site-applicatif/produits/${product.id}`, "href")} class="card-produit w-[281px] h-[345px] relative border-2 border-saumon rounded-[15px] bg-white p-4 flex flex-col transition-transform duration-300 hover:scale-[1.01] cursor-pointer"${addAttribute(product.id || "produit-demo", "data-product-id")} data-astro-cid-jgbag5z5> <div class="flex justify-between items-center w-full" data-astro-cid-jgbag5z5> ${product.expand?.pays && renderTemplate`<div class="flex items-center" data-astro-cid-jgbag5z5> <div class="flag w-[26px] h-[19px] mr-[10px] border border-black overflow-hidden" data-astro-cid-jgbag5z5> ${product.expand.pays.drapeauUrl && renderTemplate`<img${addAttribute(product.expand.pays.drapeauUrl, "src")}${addAttribute(product.expand.pays.nom, "alt")} class="w-full h-full object-cover" data-astro-cid-jgbag5z5>`} </div> <span class="text-sm font-bold text-black uppercase" data-astro-cid-jgbag5z5> ${product.expand.pays.nom} </span> </div>`} <button class="cursor-pointer favorite-btn w-[38px] h-[38px] bg-saumon rounded-full flex justify-center items-center transition-all duration-300 hover:bg-[#e69c50] z-20"${addAttribute("Ajouter aux favoris", "aria-label")}${addAttribute(product.id || "produit-demo", "data-product-id")} data-astro-cid-jgbag5z5> <img${addAttribute(IconeFavoris.src, "src")} alt="Favoris"${addAttribute(18, "width")}${addAttribute(17, "height")}${addAttribute(`${"opacity-75"} transition-opacity`, "class")} data-astro-cid-jgbag5z5> </button> </div> <div class="flex-grow flex justify-center items-center my-2" data-astro-cid-jgbag5z5> <div class="relative w-[166px] h-[166px]" data-astro-cid-jgbag5z5> <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center" data-astro-cid-jgbag5z5> <div class="w-[160px] h-[160px] bg-saumon opacity-75 rounded-full" data-astro-cid-jgbag5z5></div> </div> ${product.img && renderTemplate`<div class="absolute top-0 left-0 w-full h-full flex items-center justify-center" data-astro-cid-jgbag5z5> <div class="w-[140px] h-[140px] overflow-hidden flex items-center justify-center" data-astro-cid-jgbag5z5> <img${addAttribute(product.img, "src")}${addAttribute(product.nom, "alt")} class="w-40 h-40 object-contain" data-astro-cid-jgbag5z5> </div> </div>`} </div> </div> <h3 class="!text-lg uppercase !font-raleway font-bold text-black mt-0 pt-0 pb-0" data-astro-cid-jgbag5z5> ${product.nom} </h3> <div class="mt-auto" data-astro-cid-jgbag5z5> <div class="flex items-center" data-astro-cid-jgbag5z5> <span class="w-1 h-1 bg-black rounded-full" data-astro-cid-jgbag5z5></span> <span class="mx-[15px] text-lg !font-extrabold text-black" data-astro-cid-jgbag5z5>${formattedPrice}</span> <span class="w-1 h-1 bg-black rounded-full" data-astro-cid-jgbag5z5></span> </div> <div class="flex justify-between items-center" data-astro-cid-jgbag5z5> <div class="flex items-center" data-astro-cid-jgbag5z5> <div class="flex gap-[7px] mr-[7px]" data-astro-cid-jgbag5z5> ${Array(fullStars).fill(0).map(() => renderTemplate`<img${addAttribute(IconeEtoileNote.src, "src")} alt="Étoile"${addAttribute(15, "width")}${addAttribute(15, "height")} class="text-saumon" data-astro-cid-jgbag5z5>`)} ${hasHalfStar && renderTemplate`<img${addAttribute(IconeEtoileNote.src, "src")} alt="Demi-étoile"${addAttribute(15, "width")}${addAttribute(15, "height")} class="opacity-50" data-astro-cid-jgbag5z5>`} ${Array(emptyStars).fill(0).map(() => renderTemplate`<img${addAttribute(IconeEtoileNote.src, "src")} alt="Étoile vide"${addAttribute(15, "width")}${addAttribute(15, "height")} class="grayscale opacity-50" data-astro-cid-jgbag5z5>`)} </div> ${product.nbNotes && renderTemplate`<span class="text-xs text-black" data-astro-cid-jgbag5z5>(+${product.nbNotes})</span>`} </div> ${product.distance && renderTemplate`<div class="bg-saumon rounded-full flex items-center py-[5px] px-[12px]" data-astro-cid-jgbag5z5> <img${addAttribute(IconeDistance.src, "src")} alt="Distance"${addAttribute(13, "width")}${addAttribute(13, "height")} class="mr-1" data-astro-cid-jgbag5z5> <span class="text-xs text-black" data-astro-cid-jgbag5z5>${product.distance} km</span> </div>`} </div> </div> </a> ${renderScript($$result, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/site-applicatif/CardProduits.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/site-applicatif/CardProduits.astro", void 0);

export { $$CardProduits as $ };
