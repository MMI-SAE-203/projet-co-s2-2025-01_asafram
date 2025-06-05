import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutApplicatif } from '../../../chunks/LayoutApplicatif_tUxN7yFY.mjs';
import { $ as $$CardProduits } from '../../../chunks/CardProduits_BL5gz2fO.mjs';
import { j as getProductById, k as getAllProducts } from '../../../chunks/backend_CFzKrOra.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$categorie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$categorie;
  const { categorie } = Astro2.params;
  if (!categorie) {
    return Astro2.redirect("/site-applicatif");
  }
  const validCategories = [
    "boissons",
    "fruits-et-legumes",
    "viandes",
    "epices",
    "snacks"
  ];
  const normalizedParam = categorie.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  if (!validCategories.includes(normalizedParam)) {
    try {
      const product = await getProductById(categorie);
      if (product) {
        return Astro2.redirect(`/site-applicatif/produits/fiche/${categorie}`);
      }
    } catch (error) {
      console.error("Erreur lors de la v\xE9rification de l'ID du produit:", error);
    }
  }
  const normalizeCategory = (name) => {
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  };
  const displayCategorie = categorie.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const allProducts = await getAllProducts();
  const filteredProducts = allProducts.filter((product) => {
    const productCategory = product.categorie || "";
    return normalizeCategory(productCategory) === normalizeCategory(categorie);
  });
  const products = filteredProducts.map((product) => {
    product.distance = 15;
    if (product.nombres_notes && !product.nbNotes) {
      product.nbNotes = product.nombres_notes;
    }
    if (!product.nbNotes) {
      product.nbNotes = Math.floor(Math.random() * 50) + 10;
    }
    return product;
  });
  return renderTemplate`${renderComponent($$result, "LayoutApplicatif", $$LayoutApplicatif, { "title": `Produits ${displayCategorie}`, "description": `D\xE9couvrez notre s\xE9lection de produits ${displayCategorie}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <header class="mb-8"> <a href="/site-applicatif" class="text-saumon hover:underline mb-2 inline-block">
&larr; Retour à l'accueil
</a> <h1 class="text-2xl font-raleway font-extrabold uppercase tracking-wider relative inline-block mt-4"> ${displayCategorie} </h1> <div class="w-full h-0.5 bg-saumon mt-2"></div> </header> ${products.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"> ${products.map((product) => renderTemplate`${renderComponent($$result2, "CardProduits", $$CardProduits, { "product": product })}`)} </div>` : renderTemplate`<div class="text-center py-16"> <p class="text-xl font-raleway">
Aucun produit trouvé dans la catégorie "${displayCategorie}".
</p> </div>`} </div> ` })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/produits/[categorie].astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/produits/[categorie].astro";
const $$url = "/site-applicatif/produits/[categorie]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$categorie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
