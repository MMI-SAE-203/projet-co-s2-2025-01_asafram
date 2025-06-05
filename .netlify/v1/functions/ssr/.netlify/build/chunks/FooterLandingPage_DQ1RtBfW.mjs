import { e as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import 'clsx';

const IconeInstagram = new Proxy({"src":"/_astro/instagram.CD90cLg6.svg","width":40,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/instagram.svg";
							}
							
							return target[name];
						}
					});

const IconeFacebook = new Proxy({"src":"/_astro/facebook.CUHOPfBH.svg","width":40,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/facebook.svg";
							}
							
							return target[name];
						}
					});

const IconeTikTok = new Proxy({"src":"/_astro/tiktok.8n-T-2LE.svg","width":40,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/tiktok.svg";
							}
							
							return target[name];
						}
					});

const Logo = new Proxy({"src":"/_astro/logo_asafram-clair.14t8LX9E.svg","width":300,"height":339,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/logo_asafram-clair.svg";
							}
							
							return target[name];
						}
					});

const IconeLinkedin = new Proxy({"src":"/_astro/linkedin.R7d_MCBx.svg","width":25,"height":25,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/linkedin.svg";
							}
							
							return target[name];
						}
					});

const IconeDiscord = new Proxy({"src":"/_astro/discord.CpH4_bsc.svg","width":25,"height":25,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/discord.svg";
							}
							
							return target[name];
						}
					});

const $$FooterLandingPage = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-black border-t border-gray-700 z-1000" role="contentinfo"> <div class="max-w-7xl mx-auto px-4 py-12 hidden md:block"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <div class="flex flex-col justify-center items-center gap-8 mr-10"> <img${addAttribute(Logo.src, "src")} alt="Logo ASAFRAM" class="w-32"> <div class="flex gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center"> <a href="#" class="hover:opacity-70 transition-opacity" aria-label="Facebook"> <img${addAttribute(IconeFacebook.src, "src")} alt="" aria-hidden="true" class="w-6 h-6"> </a> <a href="#" class="hover:opacity-70 transition-opacity" aria-label="Instagram"> <img${addAttribute(IconeInstagram.src, "src")} alt="" aria-hidden="true" class="w-6 h-6"> </a> <a href="#" class="hover:opacity-70 transition-opacity" aria-label="TikTok"> <img${addAttribute(IconeTikTok.src, "src")} alt="" aria-hidden="true" class="w-6 h-6"> </a> <a href="#" class="hover:opacity-70 transition-opacity" aria-label="LinkedIn"> <img${addAttribute(IconeLinkedin.src, "src")} alt="" aria-hidden="true" class="w-6 h-6"> </a> <a href="#" class="hover:opacity-70 transition-opacity" aria-label="Discord"> <img${addAttribute(IconeDiscord.src, "src")} alt="" aria-hidden="true" class="w-6 h-6"> </a> </div> <button class="border border-white rounded-md px-3 py-1 flex items-center space-x-2 text-sm cursor-pointer hover:bg-gray-800 transition-colors text-white" aria-haspopup="listbox" aria-label="Sélectionner la langue"> <span>Français</span> <span class="text-xs" aria-hidden="true">▼</span> </button> </div> <div class="pl-16"> <h3 class="!text-xl mb-6 uppercase text-white" id="nav-footer">
Navigation
</h3> <ul class="space-y-4" aria-labelledby="nav-footer"> <li> <a href="/mission" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">Notre mission</a> </li> <li> <a href="/apropos" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">Qui sommes-nous ?</a> </li> <li> <a href="/partenaires" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">Devenir Partenaire</a> </li> <li> <a href="/apropos#equipe" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">Notre équipe</a> </li> <li> <a href="/forum" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">Le forum ASAFRAM</a> </li> </ul> </div> <div class="pl-8"> <h3 class="!text-xl font-bold mb-6 uppercase text-white" id="legal-footer">
Infos légales
</h3> <ul class="space-y-4" aria-labelledby="legal-footer"> <li> <a href="/confidentialite" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">Confidentialité</a> </li> <li> <a href="/mentions-legales" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">Mentions légales</a> </li> <li> <a href="/cookies" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">Cookies</a> </li> <li> <a href="/cgv" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">CGV</a> </li> <li> <a href="/cgu" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">CGU</a> </li> </ul> </div> <div> <h3 class="!text-xl font-bold mb-6 uppercase text-white" id="contact-footer">
Contact
</h3> <ul class="space-y-4 mb-8" aria-labelledby="contact-footer"> <li> <a href="/contact" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">Nous contacter</a> </li> <li> <a href="/inscription" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">S'inscrire</a> </li> <li> <a href="tel:3630" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">36 30</a> </li> <li> <a href="mailto:support@asafram.com" class="hover:translate-x-1 transition-transform duration-200 inline-block text-gray-300 hover:text-white">support@asafram.com</a> </li> </ul> <div class="mt-6"> <h4 class="text-lg font-semibold mb-2 text-white" id="newsletter-desktop">
Newsletter
</h4> <p class="text-xs text-gray-400 mb-2" id="newsletter-desc-desktop">
(1 email tous les mercredis)
</p> <form class="flex gap-2" aria-labelledby="newsletter-desktop" aria-describedby="newsletter-desc-desktop"> <input type="email" placeholder="Entrez votre email..." aria-label="Votre adresse email" required class="px-4 py-2 border border-gray-600 rounded-full text-sm w-full bg-gray-800 text-white placeholder-gray-400"> <button type="submit" class="bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-gray-200 transition-opacity">
OK
</button> </form> </div> </div> </div> <div class="mt-12 pt-8 border-t border-gray-700"> <p class="text-sm text-gray-400">
© 2025 ASAFRAM. Tous droits réservés. Les textes, images et autres
        contenus du site sont protégés par le droit d'auteur et ne peuvent être
        reproduits sans autorisation.
</p> </div> </div> <div class="md:hidden px-5 py-8"> <div class="relative mb-8"> <div class="absolute top-2 right-0"> <button class="border border-white rounded-md px-3 py-1 flex items-center space-x-2 text-sm cursor-pointer hover:bg-gray-800 transition-colors text-white" aria-haspopup="listbox" aria-label="Sélectionner la langue"> <span>Français</span> <span class="text-xs" aria-hidden="true">▼</span> </button> </div> <div class="flex flex-col items-center"> <div class="w-20 h-20 flex items-center justify-center"> <a href="/"> <img${addAttribute(Logo.src, "src")} alt="Logo ASAFRAM" class="w-auto h-auto max-w-full max-h-full object-contain"> </a> </div> </div> <div class="flex justify-center gap-6 sm:gap-8 md:gap-12 mb-12 flex-wrap"> <a href="#" class="hover:opacity-70 transition-opacity flex items-center justify-center w-6 h-6" aria-label="Facebook"> <img${addAttribute(IconeFacebook.src, "src")} alt="" aria-hidden="true" class="w-auto h-auto max-w-full max-h-full"> </a> <a href="#" class="hover:opacity-70 transition-opacity flex items-center justify-center w-6 h-6" aria-label="TikTok"> <img${addAttribute(IconeTikTok.src, "src")} alt="" aria-hidden="true" class="w-auto h-auto max-w-full max-h-full"> </a> <a href="#" class="hover:opacity-70 transition-opacity flex items-center justify-center w-6 h-6" aria-label="LinkedIn"> <img${addAttribute(IconeLinkedin.src, "src")} alt="" aria-hidden="true" class="w-auto h-auto max-w-full max-h-full"> </a> <a href="#" class="hover:opacity-70 transition-opacity flex items-center justify-center w-6 h-6" aria-label="Discord"> <img${addAttribute(IconeDiscord.src, "src")} alt="" aria-hidden="true" class="w-auto h-auto max-w-full max-h-full"> </a> <a href="#" class="hover:opacity-70 transition-opacity flex items-center justify-center w-6 h-6" aria-label="Instagram"> <img${addAttribute(IconeInstagram.src, "src")} alt="" aria-hidden="true" class="w-auto h-auto max-w-full max-h-full"> </a> </div> <div class="grid grid-cols-2 gap-6 mb-12"> <div class="flex flex-col items-center"> <h3 class="font-bold mb-5 text-base border-b border-gray-700 pb-2 text-center uppercase text-white" id="nav-mobile-footer">
Navigation
</h3> <ul class="space-y-4 text-sm text-center w-full" aria-labelledby="nav-mobile-footer"> <li> <a href="/mission" class="hover:scale-105 transition-transform duration-200 block text-white hover:text-white">Notre mission</a> </li> <li> <a href="/apropos" class="hover:scale-105 transition-transform duration-200 block text-white hover:text-white">Qui sommes-nous ?</a> </li> <li> <a href="/partenaires" class="hover:scale-105 transition-transform duration-200 block text-white hover:text-white">Devenir Partenaire</a> </li> <li> <a href="/apropos#equipe" class="hover:scale-105 transition-transform duration-200 block text-white hover:text-white">Notre équipe</a> </li> <li> <a href="/forum" class="hover:scale-105 transition-transform duration-200 block text-white hover:text-white">Le forum ASAFRAM</a> </li> </ul> </div> <div class="flex flex-col items-center"> <h3 class="font-bold mb-5 text-base border-b border-gray-700 pb-2 text-center uppercase text-white" id="legal-mobile-footer">
Infos légales
</h3> <ul class="space-y-4 text-sm text-center w-full" aria-labelledby="legal-mobile-footer"> <li> <a href="/confidentialite" class="hover:scale-105 transition-transform duration-200 block text-gray-300 hover:text-white">Confidentialité</a> </li> <li> <a href="/mentions-legales" class="hover:scale-105 transition-transform duration-200 block text-gray-300 hover:text-white">Mentions légales</a> </li> <li> <a href="/cookies" class="hover:scale-105 transition-transform duration-200 block text-gray-300 hover:text-white">Cookies</a> </li> <li> <a href="/cgv" class="hover:scale-105 transition-transform duration-200 block text-gray-300 hover:text-white">CGV</a> </li> <li> <a href="/cgu" class="hover:scale-105 transition-transform duration-200 block text-gray-300 hover:text-white">CGU</a> </li> </ul> </div> </div> <div class="flex flex-col items-center mb-12 bg-gray-800 py-6 px-4 rounded-lg"> <h3 class="font-bold mb-5 text-base border-b border-gray-600 pb-2 text-center uppercase text-white" id="contact-mobile-footer">
Contact
</h3> <div class="space-y-3 text-sm text-center" aria-labelledby="contact-mobile-footer"> <p class="flex items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="tel:3630" class="hover:scale-105 transition-transform duration-200 text-gray-300 hover:text-white">36 30</a> </p> <p class="flex items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a href="mailto:support@asafram.com" class="hover:scale-105 transition-transform duration-200 text-gray-300 hover:text-white">support@asafram.com</a> </p> </div> </div> <div class="text-center mb-10 bg-gray-800 py-6 px-4 rounded-lg"> <h4 class="font-semibold mb-2 text-base text-white" id="newsletter-mobile">
Newsletter
</h4> <p class="text-xs mb-4 text-gray-400" id="newsletter-desc-mobile">
(1 email tous les mercredis)
</p> <div class="flex justify-center mx-auto"> <form class="flex w-full max-w-xs" aria-labelledby="newsletter-mobile" aria-describedby="newsletter-desc-mobile"> <input type="email" placeholder="Entrez votre email..." aria-label="Votre adresse email" required class="px-4 py-2 border border-gray-600 rounded-l-full text-xs w-full focus:outline-none focus:ring-1 focus:ring-saumon bg-gray-700 text-white placeholder-gray-400"> <button type="submit" class="bg-white text-black px-5 py-2 rounded-r-full text-xs -ml-1 hover:bg-gray-200 transition-colors duration-200 shadow-md">
OK
</button> </form> </div> </div> <div class="mt-10 border-t border-gray-700 pt-6"> <p class="text-xs text-center text-gray-400 leading-relaxed px-2">
© 2025 ASAFRAM. Tous droits réservés. Les textes, images et autres
          contenus du site sont protégés par le droit d'auteur et ne peuvent
          être reproduits sans autorisation.
</p> </div> </div> </div> </footer>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/FooterLandingPage.astro", void 0);

export { $$FooterLandingPage as $, IconeFacebook as I, IconeInstagram as a, IconeTikTok as b };
