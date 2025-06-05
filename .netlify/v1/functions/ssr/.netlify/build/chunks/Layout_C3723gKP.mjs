import { e as createComponent, m as maybeRenderHead, h as addAttribute, n as renderScript, r as renderTemplate, f as createAstro, l as renderHead, i as renderComponent, k as renderSlot } from './astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';
import { L as LogoAsafram } from './logo_asafram-fonce_pGRcbk2f.mjs';
import { I as IconeFacebook, a as IconeInstagram, b as IconeTikTok, $ as $$FooterLandingPage } from './FooterLandingPage_DQ1RtBfW.mjs';
/* empty css                           */
/* empty css                           */

const IconeEnvoyer = new Proxy({"src":"/_astro/icone-envoyer.lhCNXHeI.webp","width":48,"height":49,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-envoyer.webp";
							}
							
							return target[name];
						}
					});

const DegradeLandingPageMobile = new Proxy({"src":"/_astro/degrade-menu-mobile.BtRVshB0.svg","width":393,"height":978,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/degrade-menu-mobile.svg";
							}
							
							return target[name];
						}
					});

const LigneMenu1 = new Proxy({"src":"/_astro/line1-menu.DYEDSkEs.svg","width":178,"height":204,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/line1-menu.svg";
							}
							
							return target[name];
						}
					});

const LigneMenu2 = new Proxy({"src":"/_astro/line2-menu.CawGxMP9.svg","width":111,"height":326,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/line2-menu.svg";
							}
							
							return target[name];
						}
					});

const $$HeaderLandingPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="flex items-center justify-between px-4 gap-8 border-b-1 bg-white h-20 shadow-sm lg:fixed lg:inset-x-0 lg:top-0 lg:h-20 lg:gap-8 lg:items-center lg:justify-between lg:z-10 lg:px-12" role="banner" data-astro-cid-sf5bletk> <a href="/" aria-label="Accueil ASAFRAM" data-astro-cid-sf5bletk> <img class="w-12"${addAttribute(LogoAsafram.src, "src")} alt="Logo ASAFRAM" data-astro-cid-sf5bletk> </a> <button id="menu-btn" class="group relative z-10 flex h-3 w-6 flex-col justify-between *:block *:ease *:h-0.5 *:w-full *:transform *:rounded-full *:bg-black *:transition *:duration-300 lg:hidden" aria-label="Menu de navigation" aria-controls="menu" aria-expanded="false" data-astro-cid-sf5bletk> <span class="group-aria-expanded:translate-y-[5px] group-aria-expanded:rotate-45" data-astro-cid-sf5bletk></span> <span class="group-aria-expanded:-translate-y-[5px] group-aria-expanded:-rotate-45" data-astro-cid-sf5bletk></span> </button> <nav id="menu" class="flex-1 px-6 py-12 flex mt-20 flex-col fixed z-10 inset-0 visible transition-transform duration-300 transform translate-x-full aria-expanded:translate-x-0 lg:hidden bg-background" aria-hidden="true" role="navigation" aria-label="Menu principal mobile" data-astro-cid-sf5bletk> <div class="absolute inset-0 w-full h-full z-0" data-astro-cid-sf5bletk> <img${addAttribute(DegradeLandingPageMobile.src, "src")} alt="Fond de menu décoratif" class="w-full h-full object-cover" data-astro-cid-sf5bletk> </div> <div class="flex flex-col items-center justify-center h-full relative w-full" data-astro-cid-sf5bletk> <img${addAttribute(LigneMenu1.src, "src")} alt="" aria-hidden="true" class="absolute top-[-36px] left-0 w-30 md:left-30 md:w-36 lg:w-48 z-0" data-astro-cid-sf5bletk> <ul class="flex flex-col gap-24 items-center justify-center text-center mb-4 z-10" data-astro-cid-sf5bletk> <li data-astro-cid-sf5bletk> <a class="uppercase text-xl font-bold" href="/mission" data-astro-cid-sf5bletk>Notre Mission</a> </li> <li data-astro-cid-sf5bletk> <a class="uppercase text-xl font-bold" href="/apropos" data-astro-cid-sf5bletk>Qui Sommes-nous ?</a> </li> <li data-astro-cid-sf5bletk> <a class="uppercase text-xl font-bold" href="/partenaires" data-astro-cid-sf5bletk>Devenir Partenaire</a> </li> </ul> <div class="mt-20" data-astro-cid-sf5bletk> <a class="btn-landing-page text-white bg-black" href="" data-astro-cid-sf5bletk>S'inscrire</a> </div> <ul class="mt-26 flex gap-20 items-center justify-center z-10" data-astro-cid-sf5bletk> <li data-astro-cid-sf5bletk> <a href="" aria-label="Page Facebook ASAFRAM" data-astro-cid-sf5bletk><img${addAttribute(IconeFacebook.src, "src")} alt="Facebook" data-astro-cid-sf5bletk></a> </li> <li data-astro-cid-sf5bletk> <a href="" aria-label="Page Instagram ASAFRAM" data-astro-cid-sf5bletk><img${addAttribute(IconeInstagram.src, "src")} alt="Instagram" data-astro-cid-sf5bletk></a> </li> <li data-astro-cid-sf5bletk> <a href="" aria-label="Page TikTok ASAFRAM" data-astro-cid-sf5bletk><img${addAttribute(IconeTikTok.src, "src")} alt="TikTok" data-astro-cid-sf5bletk></a> </li> </ul> <img${addAttribute(LigneMenu2.src, "src")} alt="" aria-hidden="true" class="absolute bottom-[-160px] right-4 w-20 md:w-24 md:right-50 md:bottom-[-220px] z-0" data-astro-cid-sf5bletk> </div> </nav> <nav class="hidden lg:flex lg:fixed lg:inset-x-0 lg:h-20 lg:px-12 lg:items-center lg:justify-between bg-white shadow-sm" role="navigation" aria-label="Menu principal desktop" data-astro-cid-sf5bletk> <div class="flex-none" data-astro-cid-sf5bletk> <a href="/" aria-label="Accueil ASAFRAM" data-astro-cid-sf5bletk> <img class="w-20"${addAttribute(LogoAsafram.src, "src")} alt="Logo Asafram" data-astro-cid-sf5bletk> </a> </div> <ul class="flex flex-row gap-40 items-center justify-center flex-1" data-astro-cid-sf5bletk> <li data-astro-cid-sf5bletk> <a href="/mission" class="font-bold xl:text-xl lg:text-lg" data-astro-cid-sf5bletk>Notre Mission</a> </li> <li data-astro-cid-sf5bletk> <a href="/apropos" class="font-bold xl:text-xl lg:text-lg" data-astro-cid-sf5bletk>Qui Sommes-nous ?</a> </li> <li data-astro-cid-sf5bletk> <a href="/partenaires" class="font-bold xl:text-xl lg:text-lg" data-astro-cid-sf5bletk>Devenir Partenaire</a> </li> </ul> <div class="flex-none" data-astro-cid-sf5bletk> <a class="btn-landing-page flex items-center justify-center gap-4" href="/site-applicatif/auth/connexion" aria-label="S'inscrire à ASAFRAM" data-astro-cid-sf5bletk> <img class="w-6"${addAttribute(IconeEnvoyer.src, "src")} alt="" aria-hidden="true" data-astro-cid-sf5bletk> <p data-astro-cid-sf5bletk>S'inscrire</p> </a> </div> </nav> </header> ${renderScript($$result, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/HeaderLandingPage.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/HeaderLandingPage.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const baseUrl = "https://www.example.com";
  const pageUrl = `${baseUrl}${Astro2.url.pathname}`;
  const siteName = "ASAFRAM";
  return renderTemplate`<html lang="fr"> <head><!-- Encodage & viewport --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- SEO Meta --><title>${title ? `${title} \u2014 ${siteName}` : siteName}</title><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="robots" content="index, follow"><!-- Open Graph (Facebook, LinkedIn, etc.) --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(pageUrl, "content")}><meta property="og:type" content="website"><meta property="og:locale" content="fr_FR"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:site" content="@yourtwitterhandle"><!-- Canonical URL --><link rel="canonical"${addAttribute(pageUrl, "href")}><!-- Preconnect pour améliorer les performances --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect"${addAttribute(pageUrl, "href")} crossorigin><link rel="dns-prefetch"${addAttribute(pageUrl, "href")}><!-- Favicon et icônes --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Alpine.js -->${renderScript($$result, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body> ${renderComponent($$result, "HeaderLandingPage", $$HeaderLandingPage, {})} <main> <div class="bg-white"> ${renderSlot($$result, $$slots["default"])} </div> </main> ${renderComponent($$result, "FooterLandingPage", $$FooterLandingPage, {})} </body></html>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/layouts/Layout.astro", void 0);

export { $$Layout as $, DegradeLandingPageMobile as D, IconeEnvoyer as I };
