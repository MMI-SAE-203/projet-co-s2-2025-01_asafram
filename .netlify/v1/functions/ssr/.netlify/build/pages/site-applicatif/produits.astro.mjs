import { e as createComponent, i as renderComponent, r as renderTemplate, o as defineScriptVars, m as maybeRenderHead } from '../../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$LayoutApplicatif } from '../../chunks/LayoutApplicatif_tUxN7yFY.mjs';
import { $ as $$CardProduits } from '../../chunks/CardProduits_BL5gz2fO.mjs';
import { k as getAllProducts, m as getAllPays } from '../../chunks/backend_CFzKrOra.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const products = await getAllProducts();
  const pays = await getAllPays();
  return renderTemplate`${renderComponent($$result, "LayoutApplicatif", $$LayoutApplicatif, { "title": "Produits", "description": "D\xE9couvrez tous nos produits du monde", "data-astro-cid-izp2euhx": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="min-h-screen bg-gray-50" id="products-page" data-astro-cid-izp2euhx> <!-- Layout flex avec sidebar et contenu principal c\xF4te \xE0 c\xF4te --> <div class="flex" data-astro-cid-izp2euhx> <!-- Sidebar des filtres - Position normale (pas fixe) --> <div class="w-[420px] bg-white shadow-lg border-r border-gray-200 min-h-screen" data-astro-cid-izp2euhx> <div class="p-6" data-astro-cid-izp2euhx> <!-- En-t\xEAte des filtres --> <div class="flex justify-between items-center mb-6" data-astro-cid-izp2euhx> <h2 class="!text-3xl font-raleway font-black uppercase text-black" data-astro-cid-izp2euhx>\nFILTRES\n</h2> <button id="reset-filters-btn" class="text-xs font-raleway border border-gray-600 px-4 py-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer" data-astro-cid-izp2euhx>\nR\xC9INITIALISER\n</button> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-black mb-6" data-astro-cid-izp2euhx></div> <!-- Section Barre de recherche --> <div class="mb-6" data-astro-cid-izp2euhx> <h3 class="!text-2xl font-raleway font-bold uppercase text-black mb-4" data-astro-cid-izp2euhx>\nRECHERCHE\n</h3> <div class="relative" data-astro-cid-izp2euhx> <input type="text" id="search-input" placeholder="Nom du produit..." class="w-full px-4 py-2.5 border border-gray-400 rounded-lg text-sm font-raleway focus:outline-none focus:border-saumon bg-white" data-astro-cid-izp2euhx> <!-- Loupe quand pas de texte --> <svg id="search-icon" class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-izp2euhx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-izp2euhx></path> </svg> <!-- Croix quand il y a du texte --> <button id="clear-search-btn" class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors hidden" title="Effacer la recherche" data-astro-cid-izp2euhx> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-izp2euhx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-izp2euhx></path> </svg> </button> </div> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-gray-400 mb-6" data-astro-cid-izp2euhx></div> <!-- Section Continents --> <div class="mb-6" data-astro-cid-izp2euhx> <div class="flex justify-between items-center mb-4" data-astro-cid-izp2euhx> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-izp2euhx>\nCONTINENTS\n</h3> <button id="all-continents-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" data-astro-cid-izp2euhx>\nTOUT\n</button> </div> <div class="space-y-2" id="continent-filters" data-astro-cid-izp2euhx> <button data-continent="Afrique" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-izp2euhx>\nAFRIQUE\n</button> <button data-continent="Am\xE9rique Latine" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-izp2euhx>\nAM\xC9RIQUE LATINE\n</button> <button data-continent="Asie" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-izp2euhx>\nASIE\n</button> <button data-continent="Maghreb" class="continent-btn px-6 py-1.5 rounded text-xs font-raleway font-bold uppercase transition-colors text-left cursor-pointer bg-white text-black border border-black" data-astro-cid-izp2euhx>\nMAGHREB\n</button> </div> </div> <!-- Section Pays --> <div class="mb-6" data-astro-cid-izp2euhx> <div class="flex justify-between items-center mb-4" data-astro-cid-izp2euhx> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-izp2euhx>\nPAYS\n</h3> <button id="all-countries-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" disabled style="opacity: 0.5; cursor: not-allowed;" data-astro-cid-izp2euhx>\nTOUT\n</button> </div> <div class="relative" data-astro-cid-izp2euhx> <select id="countries-select" class="w-full p-2.5 border border-gray-400 rounded-lg text-xs font-raleway bg-white appearance-none pr-8 uppercase cursor-pointer" disabled style="opacity: 0.5; cursor: not-allowed;" data-astro-cid-izp2euhx> <option value="tous" data-astro-cid-izp2euhx>Tous les pays</option> </select> <svg class="absolute right-2 top-1/2 transform -translate-y-1/2 w-3 h-3 text-black pointer-events-none" style="opacity: 0.5;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-izp2euhx> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-izp2euhx></path> </svg> </div> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-gray-400 mb-6" data-astro-cid-izp2euhx></div> <!-- Section Cat\xE9gories --> <div class="mb-6" data-astro-cid-izp2euhx> <div class="flex justify-between items-center mb-4" data-astro-cid-izp2euhx> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-izp2euhx>\nCAT\xC9GORIES\n</h3> <button id="all-categories-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" data-astro-cid-izp2euhx>\nTOUT\n</button> </div> <div class="grid grid-cols-2 gap-y-2 gap-x-1" id="category-filters" data-astro-cid-izp2euhx> <label class="flex items-center cursor-pointer" data-astro-cid-izp2euhx> <input type="checkbox" class="category-checkbox mr-1 w-3 h-3 border-2 border-black rounded-none cursor-pointer" value="Boissons" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-izp2euhx>BOISSONS</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-izp2euhx> <input type="checkbox" class="category-checkbox mr-1 w-3 h-3 border-2 border-black rounded-none cursor-pointer" value="Fruits & l\xE9gumes" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-izp2euhx>FRUITS & L\xC9GUMES</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-izp2euhx> <input type="checkbox" class="category-checkbox mr-1 w-3 h-3 border-2 border-black rounded-none cursor-pointer" value="Viandes" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-izp2euhx>VIANDES</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-izp2euhx> <input type="checkbox" class="category-checkbox mr-1 w-3 h-3 border-2 border-black rounded-none cursor-pointer" value="\xC9pices" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-izp2euhx>\xC9PICES</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-izp2euhx> <input type="checkbox" class="category-checkbox mr-1 w-3 h-3 border-2 border-black rounded-none cursor-pointer" value="Snacks" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-izp2euhx>SNACKS</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-izp2euhx> <input type="checkbox" class="category-checkbox mr-1 w-3 h-3 border-2 border-black rounded-none cursor-pointer" value="Sauces" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-izp2euhx>SAUCES</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-izp2euhx> <input type="checkbox" class="category-checkbox mr-1 w-3 h-3 border-2 border-black rounded-none cursor-pointer" value="Conserves" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-izp2euhx>CONSERVES</span> </label> <label class="flex items-center cursor-pointer" data-astro-cid-izp2euhx> <input type="checkbox" class="category-checkbox mr-1 w-3 h-3 border-2 border-black rounded-none cursor-pointer" value="Condiments" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-izp2euhx>CONDIMENTS</span> </label> <label class="flex items-center cursor-pointer col-span-1" data-astro-cid-izp2euhx> <input type="checkbox" class="category-checkbox mr-1 w-3 h-3 border-2 border-black rounded-none cursor-pointer" value="Autres" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-black uppercase" data-astro-cid-izp2euhx>AUTRES</span> </label> </div> </div> <!-- Ligne de s\xE9paration --> <div class="w-full border-t border-dashed border-gray-400 mb-6" data-astro-cid-izp2euhx></div> <!-- Section Prix --> <div class="mb-6" data-astro-cid-izp2euhx> <div class="flex justify-between items-center mb-4" data-astro-cid-izp2euhx> <h3 class="!text-2xl font-raleway font-bold uppercase text-black" data-astro-cid-izp2euhx>\nPRIX\n</h3> <button id="price-toggle-btn" class="text-xs font-raleway border border-gray-600 px-3 py-1 rounded hover:bg-gray-100 transition-colors cursor-pointer" data-astro-cid-izp2euhx>\nD\xC9SACTIV\xC9\n</button> </div> <!-- Section prix --> <div class="space-y-3" id="price-section" style="display: none;" data-astro-cid-izp2euhx> <p class="text-xs font-raleway text-gray-600 mb-3" data-astro-cid-izp2euhx>\nFourchette de prix :\n</p> <div class="flex items-center space-x-2" data-astro-cid-izp2euhx> <input type="number" id="min-price" placeholder="Min" min="0" step="0.01" class="w-20 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:border-saumon" data-astro-cid-izp2euhx> <span class="text-xs text-gray-500" data-astro-cid-izp2euhx>-</span> <input type="number" id="max-price" placeholder="Max" min="0" step="0.01" class="w-20 px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:border-saumon" data-astro-cid-izp2euhx> <span class="text-xs text-gray-500" data-astro-cid-izp2euhx>\u20AC</span> </div> <button id="all-prices-btn" class="w-full text-xs font-raleway border border-gray-400 px-3 py-1.5 rounded hover:bg-gray-100 transition-colors cursor-pointer bg-gray-200" data-astro-cid-izp2euhx>\nTOUS LES PRIX\n</button> </div> <!-- Message quand d\xE9sactiv\xE9 --> <div id="price-disabled-message" class="text-center py-3" data-astro-cid-izp2euhx> <span class="text-xs font-raleway text-gray-500" data-astro-cid-izp2euhx>\nFiltrage par prix d\xE9sactiv\xE9\n</span> </div> </div> </div> </div> <!-- Contenu principal des produits - Position normale (pas fixe) --> <div class="flex-1" data-astro-cid-izp2euhx> <!-- Contenu des produits --> <div class="px-8 pb-8" data-astro-cid-izp2euhx> <!-- En-t\xEAte --> <div class="mb-8 mt-10" data-astro-cid-izp2euhx> <div class="ml-22" data-astro-cid-izp2euhx> <h1 class="!text-6xl font-radio-canada-big font-black text-gray-800 mb-4 uppercase !text-left !pb-0" data-astro-cid-izp2euhx>\nTous les produits\n</h1> <p class="text-gray-600 font-raleway" data-astro-cid-izp2euhx>\nD\xE9couvrez tous nos produits du monde entier, tri\xE9s par\n                cat\xE9gories.\n</p> <div id="results-info" class="text-lg text-gray-600 mt-4" data-astro-cid-izp2euhx> <span id="visible-count" data-astro-cid-izp2euhx>', '</span> produits \u2022 Page\n<span id="current-page" data-astro-cid-izp2euhx>1</span> sur <span id="total-pages" data-astro-cid-izp2euhx>1</span> </div> </div> </div> <!-- Zone des produits --> <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 mb-40" id="products-container" data-astro-cid-izp2euhx> ', ' </div> <!-- Message si aucun produit --> <div id="no-products-message" class="hidden text-center py-16" data-astro-cid-izp2euhx> <p class="text-gray-500 text-lg font-raleway" data-astro-cid-izp2euhx>\nAucun produit ne correspond \xE0 vos crit\xE8res de recherche.\n</p> </div> <!-- Pagination --> <div id="pagination-container" class="flex justify-center mt-10" data-astro-cid-izp2euhx> <div class="inline-flex items-center gap-1" id="pagination-controls" data-astro-cid-izp2euhx> <!-- G\xE9n\xE9r\xE9 dynamiquement par JavaScript --> </div> </div> </div> </div> </div> <!-- Script pour le filtrage et pagination --> <script>(function(){', `
      // Rendre les pays disponibles globalement
      window.allPays = pays;

      document.addEventListener("DOMContentLoaded", function () {
        console.log("Initialisation de la page produits...");

        // Variables globales
        let selectedContinents = [];
        let selectedCategories = [];
        let selectedCountry = "tous";
        let searchQuery = "";
        let priceFilterEnabled = false;
        let minPrice = null;
        let maxPrice = null;
        let availableCountries = [];
        let filteredProducts = [...products];
        let currentPage = 1;
        const productsPerPage = 12;

        // Gestion de la recherche
        const searchInput = document.getElementById("search-input");
        const searchIcon = document.getElementById("search-icon");
        const clearSearchBtn = document.getElementById("clear-search-btn");

        searchInput.addEventListener("input", function () {
          searchQuery = this.value.toLowerCase();

          if (searchQuery) {
            searchIcon.classList.add("hidden");
            clearSearchBtn.classList.remove("hidden");
          } else {
            searchIcon.classList.remove("hidden");
            clearSearchBtn.classList.add("hidden");
          }

          filterProducts();
        });

        clearSearchBtn.addEventListener("click", function () {
          searchInput.value = "";
          searchQuery = "";
          searchIcon.classList.remove("hidden");
          clearSearchBtn.classList.add("hidden");
          filterProducts();
        });

        // Gestion des continents
        const allContinentsBtn = document.getElementById("all-continents-btn");
        const continentBtns = document.querySelectorAll(".continent-btn");

        allContinentsBtn.addEventListener("click", function () {
          selectedContinents = [
            "Afrique",
            "Am\xE9rique Latine",
            "Asie",
            "Maghreb",
          ];
          updateContinentButtons();
          updateCountriesDropdown();
          filterProducts();
        });

        continentBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            const continent = this.dataset.continent;

            if (selectedContinents.includes(continent)) {
              selectedContinents = selectedContinents.filter(
                (c) => c !== continent
              );
            } else {
              selectedContinents.push(continent);
            }

            updateContinentButtons();
            updateCountriesDropdown();
            filterProducts();
          });
        });

        function updateContinentButtons() {
          const allSelected =
            selectedContinents.length === 4 &&
            selectedContinents.includes("Afrique") &&
            selectedContinents.includes("Am\xE9rique Latine") &&
            selectedContinents.includes("Asie") &&
            selectedContinents.includes("Maghreb");

          if (allSelected) {
            allContinentsBtn.classList.add("bg-gray-200");
          } else {
            allContinentsBtn.classList.remove("bg-gray-200");
          }

          continentBtns.forEach((btn) => {
            const continent = btn.dataset.continent;
            if (selectedContinents.includes(continent)) {
              btn.classList.remove("bg-white", "text-black", "border-black");
              btn.classList.add("bg-jaune", "text-black");
            } else {
              btn.classList.remove("bg-jaune");
              btn.classList.add("bg-white", "text-black", "border-black");
            }
          });
        }

        // Gestion des pays
        function updateCountriesDropdown() {
          const countriesSelect = document.getElementById("countries-select");
          const allCountriesBtn = document.getElementById("all-countries-btn");

          if (selectedContinents.length === 0) {
            availableCountries = [];
            selectedCountry = "tous";
            countriesSelect.disabled = true;
            allCountriesBtn.disabled = true;
            countriesSelect.style.opacity = "0.5";
            countriesSelect.style.cursor = "not-allowed";
            allCountriesBtn.style.opacity = "0.5";
            allCountriesBtn.style.cursor = "not-allowed";
          } else {
            availableCountries = window.allPays.filter((p) =>
              selectedContinents.includes(p.continent)
            );
            countriesSelect.disabled = false;
            allCountriesBtn.disabled = false;
            countriesSelect.style.opacity = "1";
            countriesSelect.style.cursor = "pointer";
            allCountriesBtn.style.opacity = "1";
            allCountriesBtn.style.cursor = "pointer";

            countriesSelect.innerHTML =
              '<option value="tous">Tous les pays</option>';
            availableCountries.forEach((country) => {
              const option = document.createElement("option");
              option.value = country.id;
              option.textContent = country.nom;
              countriesSelect.appendChild(option);
            });
          }
        }

        document
          .getElementById("all-countries-btn")
          .addEventListener("click", function () {
            if (!this.disabled) {
              selectedCountry = "tous";
              document.getElementById("countries-select").value = "tous";
              filterProducts();
            }
          });

        document
          .getElementById("countries-select")
          .addEventListener("change", function () {
            selectedCountry = this.value;
            filterProducts();
          });

        // Gestion des cat\xE9gories
        const allCategoriesBtn = document.getElementById("all-categories-btn");
        const categoryCheckboxes =
          document.querySelectorAll(".category-checkbox");

        allCategoriesBtn.addEventListener("click", function () {
          selectedCategories = [
            "Boissons",
            "Fruits & l\xE9gumes",
            "Viandes",
            "\xC9pices",
            "Snacks",
            "Sauces",
            "Conserves",
            "Condiments",
            "Autres",
          ];
          categoryCheckboxes.forEach((cb) => (cb.checked = true));
          updateCategoriesButton();
          filterProducts();
        });

        categoryCheckboxes.forEach((cb) => {
          cb.addEventListener("change", function () {
            if (this.checked) {
              selectedCategories.push(this.value);
            } else {
              selectedCategories = selectedCategories.filter(
                (c) => c !== this.value
              );
            }
            updateCategoriesButton();
            filterProducts();
          });
        });

        function updateCategoriesButton() {
          const allSelected =
            selectedCategories.length === 9 &&
            selectedCategories.includes("Boissons") &&
            selectedCategories.includes("Fruits & l\xE9gumes") &&
            selectedCategories.includes("Viandes") &&
            selectedCategories.includes("\xC9pices") &&
            selectedCategories.includes("Snacks") &&
            selectedCategories.includes("Sauces") &&
            selectedCategories.includes("Conserves") &&
            selectedCategories.includes("Condiments") &&
            selectedCategories.includes("Autres");

          if (allSelected) {
            allCategoriesBtn.classList.add("bg-gray-200");
          } else {
            allCategoriesBtn.classList.remove("bg-gray-200");
          }
        }

        // Gestion du filtre de prix
        const priceToggleBtn = document.getElementById("price-toggle-btn");
        const priceSection = document.getElementById("price-section");
        const priceDisabledMessage = document.getElementById(
          "price-disabled-message"
        );
        const minPriceInput = document.getElementById("min-price");
        const maxPriceInput = document.getElementById("max-price");
        const allPricesBtn = document.getElementById("all-prices-btn");

        priceToggleBtn.addEventListener("click", function () {
          priceFilterEnabled = !priceFilterEnabled;

          if (priceFilterEnabled) {
            this.textContent = "ACTIV\xC9";
            this.classList.add(
              "border-saumon",
              "bg-saumon-hover",
              "text-black"
            );
            this.classList.remove("border-gray-600");
            priceSection.style.display = "block";
            priceDisabledMessage.style.display = "none";
          } else {
            this.textContent = "D\xC9SACTIV\xC9";
            this.classList.remove(
              "border-saumon",
              "bg-saumon-hover",
              "text-black"
            );
            this.classList.add("border-gray-600");
            priceSection.style.display = "none";
            priceDisabledMessage.style.display = "block";
            minPrice = null;
            maxPrice = null;
            minPriceInput.value = "";
            maxPriceInput.value = "";
          }

          filterProducts();
        });

        minPriceInput.addEventListener("input", function () {
          minPrice = this.value ? parseFloat(this.value) : null;
          updatePricesButton();
          filterProducts();
        });

        maxPriceInput.addEventListener("input", function () {
          maxPrice = this.value ? parseFloat(this.value) : null;
          updatePricesButton();
          filterProducts();
        });

        allPricesBtn.addEventListener("click", function () {
          minPrice = null;
          maxPrice = null;
          minPriceInput.value = "";
          maxPriceInput.value = "";
          updatePricesButton();
          filterProducts();
        });

        function updatePricesButton() {
          if (minPrice === null && maxPrice === null) {
            allPricesBtn.classList.add("bg-gray-200");
          } else {
            allPricesBtn.classList.remove("bg-gray-200");
          }
        }

        // Bouton de r\xE9initialisation
        document
          .getElementById("reset-filters-btn")
          .addEventListener("click", function () {
            selectedContinents = [];
            selectedCategories = [];
            selectedCountry = "tous";
            searchQuery = "";
            priceFilterEnabled = false;
            minPrice = null;
            maxPrice = null;

            // R\xE9initialiser l'interface
            searchInput.value = "";
            searchIcon.classList.remove("hidden");
            clearSearchBtn.classList.add("hidden");

            categoryCheckboxes.forEach((cb) => (cb.checked = false));

            minPriceInput.value = "";
            maxPriceInput.value = "";

            priceToggleBtn.textContent = "D\xC9SACTIV\xC9";
            priceToggleBtn.classList.remove(
              "border-saumon",
              "bg-saumon-hover",
              "text-black"
            );
            priceToggleBtn.classList.add("border-gray-600");
            priceSection.style.display = "none";
            priceDisabledMessage.style.display = "block";

            updateContinentButtons();
            updateCountriesDropdown();
            updateCategoriesButton();
            updatePricesButton();
            filterProducts();
          });

        // Fonction de filtrage des produits
        function filterProducts() {
          currentPage = 1; // Reset \xE0 la page 1 lors du filtrage

          filteredProducts = products.filter((product) => {
            let shouldShow = true;

            // Filtre par recherche textuelle
            if (
              searchQuery &&
              !product.nom.toLowerCase().includes(searchQuery)
            ) {
              shouldShow = false;
            }

            // Filtre par continent
            if (selectedContinents.length > 0) {
              const productContinent =
                product.expand?.pays?.continent || product.continent;
              if (!selectedContinents.includes(productContinent)) {
                shouldShow = false;
              }
            }

            // Filtre par pays
            if (selectedCountry !== "tous") {
              const productPaysId = product.expand?.pays?.id || product.pays;
              if (productPaysId !== selectedCountry) {
                shouldShow = false;
              }
            }

            // Filtre par cat\xE9gories
            if (selectedCategories.length > 0) {
              const productCategory = product.categorie;
              if (!selectedCategories.includes(productCategory)) {
                shouldShow = false;
              }
            }

            // Filtre par prix
            if (priceFilterEnabled) {
              const productPrice = parseFloat(product.prix) || 0;
              if (minPrice !== null && productPrice < minPrice) {
                shouldShow = false;
              }
              if (maxPrice !== null && productPrice > maxPrice) {
                shouldShow = false;
              }
            }

            return shouldShow;
          });

          updateDisplay();
        }

        // Fonction de mise \xE0 jour de l'affichage avec pagination
        function updateDisplay() {
          const totalProducts = filteredProducts.length;
          const totalPages = Math.ceil(totalProducts / productsPerPage);
          const startIndex = (currentPage - 1) * productsPerPage;
          const endIndex = startIndex + productsPerPage;
          const productsToShow = filteredProducts.slice(startIndex, endIndex);

          // Mettre \xE0 jour les infos
          document.getElementById("visible-count").textContent = totalProducts;
          document.getElementById("current-page").textContent = currentPage;
          document.getElementById("total-pages").textContent = Math.max(
            1,
            totalPages
          );

          // Afficher/masquer tous les produits
          const allProductCards = document.querySelectorAll(
            "#products-container > div"
          );
          allProductCards.forEach((card, index) => {
            card.style.display = "none";
          });

          // Afficher uniquement les produits de la page courante
          productsToShow.forEach((product) => {
            const productIndex = products.findIndex((p) => p.id === product.id);
            if (productIndex !== -1 && allProductCards[productIndex]) {
              allProductCards[productIndex].style.display = "flex";
            }
          });

          // Afficher/masquer le message "aucun produit"
          const noProductsMessage = document.getElementById(
            "no-products-message"
          );
          if (totalProducts === 0) {
            noProductsMessage.classList.remove("hidden");
          } else {
            noProductsMessage.classList.add("hidden");
          }

          // Mettre \xE0 jour la pagination
          updatePagination(totalPages);
        }

        // Fonction de mise \xE0 jour de la pagination
        function updatePagination(totalPages) {
          const paginationControls = document.getElementById(
            "pagination-controls"
          );
          paginationControls.innerHTML = "";

          if (totalPages <= 1) {
            document.getElementById("pagination-container").style.display =
              "none";
            return;
          }

          document.getElementById("pagination-container").style.display =
            "flex";

          // Bouton pr\xE9c\xE9dent
          const prevBtn = document.createElement("button");
          prevBtn.innerHTML = "&lt;";
          prevBtn.className =
            "w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors";
          prevBtn.disabled = currentPage === 1;
          if (currentPage === 1) {
            prevBtn.classList.add("opacity-50", "cursor-not-allowed");
          } else {
            prevBtn.classList.add("cursor-pointer");
          }
          prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
              currentPage--;
              updateDisplay();
            }
          });
          paginationControls.appendChild(prevBtn);

          // Calculer les pages \xE0 afficher
          const maxVisiblePages = 7; // Afficher max 7 num\xE9ros de pages
          let startPage = Math.max(
            1,
            currentPage - Math.floor(maxVisiblePages / 2)
          );
          let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

          // Ajuster si on n'a pas assez de pages \xE0 la fin
          if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
          }

          // Num\xE9ros de pages
          for (let i = startPage; i <= endPage; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.textContent = i;
            pageBtn.className =
              "w-8 h-8 flex items-center justify-center text-sm font-medium transition-colors cursor-pointer";

            if (i === currentPage) {
              pageBtn.classList.add("bg-black", "text-white");
            } else {
              pageBtn.classList.add(
                "text-gray-900",
                "bg-white",
                "hover:bg-gray-100"
              );
            }

            pageBtn.addEventListener("click", () => {
              currentPage = i;
              updateDisplay();
            });
            paginationControls.appendChild(pageBtn);
          }

          // Points de suspension et derni\xE8re page si n\xE9cessaire
          if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
              const dotsSpan = document.createElement("span");
              dotsSpan.textContent = "...";
              dotsSpan.className =
                "w-8 h-8 flex items-center justify-center text-sm text-gray-500";
              paginationControls.appendChild(dotsSpan);
            }

            const lastPageBtn = document.createElement("button");
            lastPageBtn.textContent = totalPages;
            lastPageBtn.className =
              "w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors cursor-pointer";
            lastPageBtn.addEventListener("click", () => {
              currentPage = totalPages;
              updateDisplay();
            });
            paginationControls.appendChild(lastPageBtn);
          }

          // Bouton suivant
          const nextBtn = document.createElement("button");
          nextBtn.innerHTML = "&gt;";
          nextBtn.className =
            "w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors";
          nextBtn.disabled = currentPage === totalPages;
          if (currentPage === totalPages) {
            nextBtn.classList.add("opacity-50", "cursor-not-allowed");
          } else {
            nextBtn.classList.add("cursor-pointer");
          }
          nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) {
              currentPage++;
              updateDisplay();
            }
          });
          paginationControls.appendChild(nextBtn);
        }

        // Initialisation
        filterProducts();
        console.log("Page produits initialis\xE9e avec succ\xE8s");
      });
    })();<\/script> </div> `])), maybeRenderHead(), products.length, products.map((produit) => renderTemplate`<div class="w-full flex justify-center" data-astro-cid-izp2euhx> ${renderComponent($$result2, "CardProduits", $$CardProduits, { "product": produit, "data-astro-cid-izp2euhx": true })} </div>`), defineScriptVars({ products, pays })) })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/produits/index.astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/site-applicatif/produits/index.astro";
const $$url = "/site-applicatif/produits";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
