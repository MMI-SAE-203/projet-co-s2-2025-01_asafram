import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$Layout, I as IconeEnvoyer } from '../chunks/Layout_C3723gKP.mjs';
import 'clsx';
import { I as IconeCompte } from '../chunks/icone-compte_C5pv7HoF.mjs';
import { $ as $$Transition } from '../chunks/Transition_DTED4gha.mjs';
export { renderers } from '../renderers.mjs';

const BulleDegrade = new Proxy({"src":"/_astro/bulle-degrade.BB1b5Hj0.svg","width":1536,"height":1264,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/bulle-degrade.svg";
							}
							
							return target[name];
						}
					});

const IconeRecette = new Proxy({"src":"/_astro/book-food.DVAJXlwD.webp","width":121,"height":121,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/book-food.webp";
							}
							
							return target[name];
						}
					});

const IconeCommunaute = new Proxy({"src":"/_astro/communaute.2bAEoSFp.webp","width":125,"height":125,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/communaute.webp";
							}
							
							return target[name];
						}
					});

const IconeFavoris = new Proxy({"src":"/_astro/star-favoris.DN7RsoYq.webp","width":121,"height":121,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/star-favoris.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$AccueilCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AccueilCard;
  const { title, description, image, color = "bg-jaune" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`w-[260px] sm:w-[280px] md:w-[300px] lg:w-[330px] xl:w-[350px] h-[300px] sm:h-[320px] md:h-[340px] lg:h-[370px] xl:h-[400px] rounded-[18px] sm:rounded-[19px] md:rounded-[20px] lg:rounded-[21px] xl:rounded-[22px] p-4 sm:p-4 md:p-5 lg:p-6 xl:p-8 shadow-lg flex flex-col justify-between transition-transform hover:scale-[1.02] ${color}`, "class")}> <div class="flex flex-col gap-3 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-6"> <div class="flex justify-center"> <div class="w-[70px] h-[70px] sm:w-[75px] sm:h-[75px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] xl:w-[104px] xl:h-[104px] rounded-[14px] sm:rounded-[15px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[22px] bg-background flex items-center justify-center"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="w-[40px] h-[40px] sm:w-[43px] sm:h-[43px] md:w-[47px] md:h-[47px] lg:w-[52px] lg:h-[52px] xl:w-[60px] xl:h-[60px] object-contain"> </div> </div> <div class="flex flex-col gap-3 sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 px-1 sm:px-1 md:px-2 lg:px-3 xl:px-4"> <h3 class="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 text-center"> ${title} </h3> <p class="text-xs sm:text-xs md:text-xs lg:text-sm xl:text-lg text-gray-800 text-center line-clamp-6"> ${description} </p> </div> </div> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/AccueilCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$CardCommentaires = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardCommentaires;
  const { name, profession, title, content, imageUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-[300px] sm:w-[380px] md:w-[450px] lg:w-[500px] xl:w-[550px] h-[280px] sm:h-[300px] md:h-[320px] lg:h-[350px] bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 lg:p-8 mx-auto flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"> <div class="flex items-center mb-3 sm:mb-4 md:mb-5 lg:mb-6"> <div class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-3 sm:mr-4"> <img${addAttribute(imageUrl, "src")}${addAttribute(name, "alt")} class="w-full h-full object-cover"> </div> <div class="flex flex-col"> <span class="text-black font-bold text-sm sm:text-base md:text-lg">${name}</span> <div class="flex items-center gap-2 sm:gap-3 md:gap-4"> <span class="text-xs sm:text-sm text-gray-500">${profession}</span> <div class="flex"> <svg width="12" height="12" viewBox="0 0 24 24" class="mr-[2px] sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"> <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#000000" stroke-width="1"></path> </svg> <svg width="12" height="12" viewBox="0 0 24 24" class="mr-[2px] sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"> <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#000000" stroke-width="1"></path> </svg> <svg width="12" height="12" viewBox="0 0 24 24" class="mr-[2px] sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"> <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#000000" stroke-width="1"></path> </svg> <svg width="12" height="12" viewBox="0 0 24 24" class="mr-[2px] sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"> <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#000000" stroke-width="1"></path> </svg> <svg width="12" height="12" viewBox="0 0 24 24" class="mr-[2px] sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"> <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFD700" stroke="#000000" stroke-width="1"></path> </svg> </div> </div> </div> </div> <h3 class="!text-base sm:!text-lg md:!text-xl font-bold mb-2 sm:mb-3 md:mb-4 text-black"> ${title} </h3> <div class="flex-grow overflow-y-auto"> <p class="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-6 sm:line-clamp-none"> ${content} </p> </div> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/CardCommentaires.astro", void 0);

const ImageLinh = new Proxy({"src":"/_astro/linh.UDzOdPN5.webp","width":174,"height":175,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/linh.webp";
							}
							
							return target[name];
						}
					});

const ImageThomas = new Proxy({"src":"/_astro/thomas.BDNTJFMT.webp","width":175,"height":175,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/thomas.webp";
							}
							
							return target[name];
						}
					});

const ImageAicha = new Proxy({"src":"/_astro/aicha.DS6k76eN.webp","width":174,"height":175,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/aicha.webp";
							}
							
							return target[name];
						}
					});

const ImageYanis = new Proxy({"src":"/_astro/yanis.Bfm63CM3.webp","width":174,"height":175,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/images/yanis.webp";
							}
							
							return target[name];
						}
					});

const IconeBoutique = new Proxy({"src":"/_astro/icone-boutique.8j-9eTRd.webp","width":237,"height":237,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-boutique.webp";
							}
							
							return target[name];
						}
					});

const IconePlanete = new Proxy({"src":"/_astro/icone-planete.dLreQe7d.webp","width":237,"height":237,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-planete.webp";
							}
							
							return target[name];
						}
					});

const IconeRestaurants = new Proxy({"src":"/_astro/icone-restaurants.7bZvOKMW.webp","width":237,"height":236,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-restaurants.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$BulleAccueil = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BulleAccueil;
  const { circleColor, image, nombre, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col items-center text-center max-w-xs mx-auto my-4 md:my-5 lg:my-6"> <div class="flex items-center justify-center mb-3 md:mb-4 lg:mb-5"> <div${addAttribute(`w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 ${circleColor} rounded-full flex items-center justify-center relative transition-transform duration-300 hover:scale-105`, "class")}> <div class="z-0"> <img${addAttribute(image, "src")}${addAttribute(text, "alt")} class="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain"> </div> </div> </div> <div> <p class="font-extrabold font-radio-canada text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl relative bottom-6 sm:bottom-7 md:bottom-8 lg:bottom-10 xl:bottom-12 right-0.5">
+${nombre} </p> <p class="relative bottom-4 sm:bottom-5 md:bottom-5 lg:bottom-6 xl:bottom-8 text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl"> ${text} </p> </div> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/BulleAccueil.astro", void 0);

const FondAccueil = new Proxy({"src":"/_astro/accueil-desktop.CMfM7iof.svg","width":1524,"height":661,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/accueil-desktop.svg";
							}
							
							return target[name];
						}
					});

const IconeFirst = new Proxy({"src":"/_astro/icone-first.BzfGEykI.svg","width":27,"height":28,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/icone-first.svg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-background h-auto md:h-[800px] lg:h-[1150px] xl:h-[1300px] relative overflow-hidden z-0"> <div class="absolute inset-0 w-full h-full z-0"> <img${addAttribute(BulleDegrade.src, "src")} alt="" aria-hidden="true" class="w-full h-full object-cover"> </div> <div class="relative z-1"> <header class="flex flex-col justify-center items-center gap-4 mt-24 md:mt-28 lg:mt-36"> <div class="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 border rounded-full py-1 md:py-1.5 lg:py-2 px-3 md:px-3.5 lg:px-4"> <img${addAttribute(IconeFirst.src, "src")} alt="" aria-hidden="true" class="w-5 md:w-6 lg:w-auto"> <p class="font-bold text-sm md:text-base lg:text-lg">
La référence des saveurs du monde
</p> </div> <h1 class="text-4xl md:text-5xl lg:text-7xl flex flex-col gap-2 md:gap-3 lg:gap-4 pb-3 md:pb-4 lg:pb-6 text-center"> <span class="text-5xl md:text-6xl lg:text-8xl">Retrouver le goût de</span> <span class="text-5xl md:text-6xl lg:text-8xl text-saumon">chez soi !</span> </h1> <p class="font-black text-2xl md:text-3xl lg:text-[40px] uppercase mb-6 md:mb-8 lg:mb-10">
Partout en France
</p> <div class="position-center"> <a class="btn-landing-page z-10 bg-black text-white rounded-4xl py-3 px-8 md:py-3.5 md:px-10 lg:py-4 lg:px-12 text-base md:text-lg lg:text-xl hover:opacity-90 transition-all duration-300 ease-in-out hover:translate-y-[-3px] hover:shadow-lg relative overflow-hidden group" href="/site-applicatif" aria-label="Essayer Asafram - Découvrir la plateforme"><span class="relative z-10">Essayer Asafram</span> <span class="absolute inset-0 bg-terre-cuite transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></span> </a> </div> </header> <div class="relative bottom-20 md:bottom-30 lg:bottom-50 xl:bottom-90 position-center mt-10 md:mt-0"> <img class="w-full md:w-[1400px] lg:w-[1900px]"${addAttribute(FondAccueil.src, "src")} alt="Illustration représentant l'univers d'Asafram"> </div> </div> </section> ${renderComponent($$result2, "Transition", $$Transition, { "className": "bottom-8 md:bottom-14 lg:bottom-20 xl:bottom-32" })} <div class="flex flex-col gap-12 md:gap-16 lg:gap-50 justify-center items-center px-10 sm:px-12 lg:px-40 md:px-24 pb-20 lg:pb-40"> <div class="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-16 w-full"> <div class="md:w-1/2 order-1"> <h3 class="text-center md:text-left mb-4">
Des catalogues de produits du monde entiers
</h3> <p class="text-sm md:text-lg xl:text-xl">
Découvrez une large sélection de produits issus des quatre coins du
          globe. Que vous cherchiez des épices d'Inde, des sauces asiatiques ou
          des fromages portugais, ASAFRAM vous permet d'accéder facilement aux
          ingrédients essentiels pour cuisiner vos plats préférés.
</p> </div> <div class="md:w-1/2 order-2"> <div class="w-full h-[200px] md:h-[250px] lg:h-[300px] bg-gray-200 flex items-center justify-center rounded-lg shadow-sm" aria-label="Illustration de catalogues de produits internationaux" role="img"> <p class="text-gray-500 italic">Image à venir</p> </div> </div> </div> <div class="flex flex-col md:flex-row-reverse md:items-center gap-8 md:gap-12 lg:gap-16 w-full"> <div class="md:w-1/2"> <h3 class="text-center md:text-left mb-4">
Une carte interactive de toutes les boutiques
</h3> <p class="text-sm md:text-lg xl:text-xl">
Trouvez en un clin d'œil les boutiques et restaurants spécialisés près
          de chez vous. Grâce à notre carte interactive, explorez facilement les
          adresses proposant des produits authentiques du monde entier et
          laissez-vous guider vers de nouvelles découvertes culinaires.
</p> </div> <div class="md:w-1/2"> <div class="w-full h-[200px] md:h-[250px] lg:h-[300px] bg-gray-200 flex items-center justify-center rounded-lg shadow-sm" aria-label="Illustration de la carte interactive des boutiques" role="img"> <p class="text-gray-500 italic">Image à venir</p> </div> </div> </div> </div> <div class="bg-background rounded-lg p-6 md:p-10 lg:p-16 w-[80%] sm:w-[85%] md:w-[85%] lg:w-[90%] xl:w-[85%] 2xl:max-w-[1590px] mx-auto my-12 md:my-20"> <header class="mb-8 md:mb-10 lg:mb-16"> <h3 class="text-center !font-raleway text-xl sm:text-2xl md:text-3xl mb-4">
Une plateforme communautaire et une expérience utilisateur personnalisée
</h3> </header> <div class="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-36" role="list" aria-label="Fonctionnalités principales"> ${renderComponent($$result2, "AccueilCard", $$AccueilCard, { "title": "Recettes", "description": "D\xE9couvrez et partagez des milliers de recettes du globe gr\xE2ce \xE0 des rubriques de cusines.", "image": IconeRecette.src, "color": "bg-sable" })} ${renderComponent($$result2, "AccueilCard", $$AccueilCard, { "title": "Communaut\xE9", "description": "Engag\xE9 avec des milliers d'utilisateurs d'origines et cultures diff\xE9rentes avec nos espaces commentaires.", "image": IconeCommunaute.src, "color": "bg-saumon" })} ${renderComponent($$result2, "AccueilCard", $$AccueilCard, { "title": "Favoris", "description": "Vivez une exp\xE9rience personnalis\xE9 via des suggestions automatiques et une liste des favoris !", "image": IconeFavoris.src, "color": "bg-orange-300" })} </div> </div> <div class="mt-12 md:mt-40"> <header class="mb-20 text-center"> <h3 class="text-center !font-raleway text-xl sm:text-2xl md:text-3xl mb-4 w-[80%] sm:w-[80%] md:w-[60%] lg:w-[70%] xl:w-[60%] mx-auto lg:mt-60 lg:mb-30">
Lisez les avis de nos utilisateurs de confiances qui utilisent ASAFRAM
        au quotidien pour retrouver leurs produits préférés !
</h3> </header> <div class="relative w-full overflow-hidden" x-data="{
          position: 0,
          cardWidth: 65,
          speed: 0.07,
          animationFrame: null,
          isPaused: false,
          isTransitioning: false,
          
          calculateSpeed() {
            const baseSpeed = 0.07;
            const screenWidth = window.innerWidth;
            
            if (screenWidth < 640) {
              return baseSpeed * 2.5;
            } else if (screenWidth < 1024) {
              return baseSpeed * 1.8;
            } else {
              return baseSpeed;
            }
          },
          
          startContinuousSlide() {
            this.speed = this.calculateSpeed();
            
            window.addEventListener('resize', () => {
              this.speed = this.calculateSpeed();
            });
            
            const animate = () => {
              if (!this.isPaused && !this.isTransitioning) {
                this.position -= this.speed;
                
                if (this.position <= -260) {
                  this.isTransitioning = true;
                  
                  const carousel = document.getElementById('infinite-carousel');
                  if (carousel) {
                    carousel.style.transition = 'none';
                    
                    void carousel.offsetWidth;
                    
                    this.position = 0;
                    carousel.style.transform = \`translateX(0%)\`;
                    
                    setTimeout(() => {
                      carousel.style.transition = 'transform 500ms linear';
                      this.isTransitioning = false;
                    }, 50);
                  }
                }
              }
              
              this.animationFrame = requestAnimationFrame(animate);
            };
            
            this.animationFrame = requestAnimationFrame(animate);
          },
          
          stopAnimation() {
            if (this.animationFrame) {
              cancelAnimationFrame(this.animationFrame);
              this.animationFrame = null;
            }
          },
          
          pauseAnimation() {
            this.isPaused = true;
          },
          
          resumeAnimation() {
            this.isPaused = false;
          },
          
          goToPosition(pos) {
            this.position = -pos * this.cardWidth;
            
            const carousel = document.getElementById('infinite-carousel');
            if (carousel) {
              carousel.style.transform = \`translateX(\${this.position}%)\`;
            }
            
            setTimeout(() => this.resumeAnimation(), 1500);
          }
        }" x-init="startContinuousSlide()"> <div class="relative w-full py-4" aria-roledescription="carousel" aria-label="Témoignages de nos utilisateurs"> <ul id="infinite-carousel" class="flex will-change-transform gap-x-60" style="transition: transform 500ms linear;" :style="'transform: translateX(' + position + '%)'" role="list" aria-live="polite"> <li class="w-[65%] -mx-[5%] first:ml-0" role="listitem"> ${renderComponent($$result2, "CardCommentaires", $$CardCommentaires, { "name": "Linh", "profession": "\xC9tudiante", "title": "Retrouver les saveurs de mon enfance", "content": "Gr\xE2ce \xE0 ASAFRAM, j'ai pu localiser une boutique sp\xE9cialis\xE9e \xE0 c\xF4t\xE9 de chez moi. Cette plateforme me permet de garder un lien fort avec ma culture ! Je recommande !", "imageUrl": ImageLinh.src })} </li> <li class="w-[65%] -mx-[5%]" role="listitem"> ${renderComponent($$result2, "CardCommentaires", $$CardCommentaires, { "name": "Thomas", "profession": "Apprenti cuisinier", "title": "Une mine d'or pour les amateurs de cuisine !", "content": "J'adore exp\xE9rimenter avec des saveurs du monde entier. ASAFRAM m'a aid\xE9 \xE0 trouver des fournisseurs de qualit\xE9 pour mes recettes. C'est une ressource pr\xE9cieuse pour tous les passionn\xE9s de gastronomie.", "imageUrl": ImageThomas.src })} </li> <li class="w-[65%] -mx-[5%]" role="listitem"> ${renderComponent($$result2, "CardCommentaires", $$CardCommentaires, { "name": "A\xEFcha", "profession": "Infirmi\xE8re", "title": "Enfin des produits authentiques !", "content": " Avec ASAFRAM, j'ai d\xE9couvert plusieurs \xE9piceries africaines pr\xE8s de chez moi que je ne connaissais pas du tout ! Maintenant, je peux acheter mes ingr\xE9dients sans faire des kilom\xE8tres et retrouver facilement les saveurs de mon enfance.", "imageUrl": ImageAicha.src })} </li> <li class="w-[65%] -mx-[5%]" role="listitem"> ${renderComponent($$result2, "CardCommentaires", $$CardCommentaires, { "name": "Yanis", "profession": "Consultant", "title": "Une plateforme qui rassemble tout", "content": "Avant, je devais faire le tour de plusieurs \xE9piceries pour mettre la main sur des \xE9pices ou des produits sp\xE9cifiques. ASAFRAM m'a \xE9norm\xE9ment facilit\xE9 la t\xE2che en regroupant toutes les boutiques sp\xE9cialis\xE9es sur une seule plateforme.", "imageUrl": ImageYanis.src })} </li> <li class="w-[65%] -mx-[5%] first:ml-0" role="listitem"> ${renderComponent($$result2, "CardCommentaires", $$CardCommentaires, { "name": "Linh", "profession": "\xC9tudiante", "title": "Retrouver les saveurs de mon enfance", "content": "Gr\xE2ce \xE0 ASAFRAM, j'ai pu localiser une boutique sp\xE9cialis\xE9e \xE0 c\xF4t\xE9 de chez moi. Cette plateforme me permet de garder un lien fort avec ma culture ! Je recommande !", "imageUrl": ImageLinh.src })} </li> <li class="w-[65%] -mx-[5%]" role="listitem"> ${renderComponent($$result2, "CardCommentaires", $$CardCommentaires, { "name": "Thomas", "profession": "Apprenti cuisinier", "title": "Une mine d'or pour les amateurs de cuisine !", "content": "J'adore exp\xE9rimenter avec des saveurs du monde entier. ASAFRAM m'a aid\xE9 \xE0 trouver des fournisseurs de qualit\xE9 pour mes recettes. C'est une ressource pr\xE9cieuse pour tous les passionn\xE9s de gastronomie.", "imageUrl": ImageThomas.src })} </li> <li class="w-[65%] -mx-[5%]" role="listitem"> ${renderComponent($$result2, "CardCommentaires", $$CardCommentaires, { "name": "A\xEFcha", "profession": "Infirmi\xE8re", "title": "Enfin des produits authentiques !", "content": " Avec ASAFRAM, j'ai d\xE9couvert plusieurs \xE9piceries africaines pr\xE8s de chez moi que je ne connaissais pas du tout ! Maintenant, je peux acheter mes ingr\xE9dients sans faire des kilom\xE8tres et retrouver facilement les saveurs de mon enfance.", "imageUrl": ImageAicha.src })} </li> <li class="w-[65%] -mx-[5%]" role="listitem"> ${renderComponent($$result2, "CardCommentaires", $$CardCommentaires, { "name": "Yanis", "profession": "Consultant", "title": "Une plateforme qui rassemble tout", "content": "Avant, je devais faire le tour de plusieurs \xE9piceries pour mettre la main sur des \xE9pices ou des produits sp\xE9cifiques. ASAFRAM m'a \xE9norm\xE9ment facilit\xE9 la t\xE2che en regroupant toutes les boutiques sp\xE9cialis\xE9es sur une seule plateforme.", "imageUrl": ImageYanis.src })} </li> </ul> <!-- Boutons pause/play pour l'accessibilité --> <div class="absolute bottom-0 right-4 flex items-center gap-2 z-10"> <button @click="pauseAnimation()" x-show="!isPaused" class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-terre-cuite" aria-label="Mettre en pause le défilement des témoignages"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <rect x="6" y="4" width="4" height="16"></rect> <rect x="14" y="4" width="4" height="16"></rect> </svg> </button> <button @click="resumeAnimation()" x-show="isPaused" class="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-terre-cuite" aria-label="Reprendre le défilement des témoignages"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <polygon points="5,3 19,12 5,21"></polygon> </svg> </button> </div> </div> </div> </div> ${renderComponent($$result2, "Transition", $$Transition, { "isReversed": "true", "className": "top-10 md:top-20 lg:top-20 xl:top-32" })} <section class="bg-background section-content"> <header class="py-12"> <h2 class="mt-20 lg:mt-40 md:mb-20 lg:mb-32">ASAFRAM, C'EST :</h2> </header> <ul class="flex justify-center items-center flex-col gap-8 md:flex-row md:gap-12 lg:gap-24 xl:gap-36 pb-12 md:pb-24 lg:pb-32 xl:pb-60"> <li> ${renderComponent($$result2, "BulleAccueil", $$BulleAccueil, { "circleColor": "bg-sable", "image": IconeBoutique.src, "nombre": "500", "text": "Boutiques partenaires" })} </li> <li> ${renderComponent($$result2, "BulleAccueil", $$BulleAccueil, { "circleColor": "bg-saumon", "image": IconePlanete.src, "nombre": "10 000", "text": "Produits de pays diff\xE9rents" })} </li> <li> ${renderComponent($$result2, "BulleAccueil", $$BulleAccueil, { "circleColor": "bg-sable", "image": IconeRestaurants.src, "nombre": "1 000", "text": "Recettes du monde entier" })} </li> <li> ${renderComponent($$result2, "BulleAccueil", $$BulleAccueil, { "circleColor": "bg-saumon", "image": IconeCompte.src, "nombre": "15 000", "text": "Utilisateurs fid\xE8les" })} </li> </ul> </section> <div class="bg-white pt-12 md:pt-24 lg:pt-32"> <section class="bg-sable mx-12 md:mx-24 lg:mx-32 rounded-t-lg"> <header> <h2 class="text-center pt-16">Commencer à retrouver les saveurs !</h2> </header> <p class="text-center font-bold mt-6">
Brisez les frontières de la cuisine et inscrivez-vous sur notre
        plateforme dès maintenant.
</p> <div class="position-center py-12"> <a class="btn-landing-page flex items-center justify-center gap-4" href="/site-applicatif/auth/connexion" aria-label="S'inscrire à ASAFRAM"> <img class="w-6"${addAttribute(IconeEnvoyer.src, "src")} alt="" aria-hidden="true"> <p>S'inscrire</p> </a> </div> </section> </div> ` })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/index.astro", void 0);

const $$file = "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
