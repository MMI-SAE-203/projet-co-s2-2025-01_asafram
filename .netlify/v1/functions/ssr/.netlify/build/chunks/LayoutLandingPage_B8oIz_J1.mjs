import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderSlot, j as Fragment } from './astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import { $ as $$Layout, D as DegradeLandingPageMobile } from './Layout_C3723gKP.mjs';
import { D as DegradeLandingPage } from './degrade-landingpage_DXJvSxob.mjs';

const $$Astro = createAstro();
const $$LayoutLandingPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutLandingPage;
  const {
    title,
    description,
    src,
    srcMobile,
    alt,
    classContent = ""
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="relative w-full h-[550px] lg:h-[1024px] overflow-hidden mt-0 lg:mt-20 bg-background"> <div class="absolute inset-0 w-full h-full z-0"> <img${addAttribute(DegradeLandingPageMobile.src, "src")} alt="" class="w-full h-full block lg:hidden"> <img${addAttribute(DegradeLandingPage.src, "src")} alt="" class="w-full h-full hidden lg:block"> </div> <header> <h1 class="mt-57 lg:mt-[425px] relative z-0">${title}</h1> </header> ${srcMobile ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <img${addAttribute(srcMobile.src, "src")}${addAttribute(alt, "alt")} class="absolute top-10 left-0 right-0 bottom-0 w-full h-full object-contain object-center z-0 mx-auto block lg:hidden" loading="eager" style="max-height: 100%; width: 100%; object-position: center top;"> <img${addAttribute(src.src, "src")}${addAttribute(alt, "alt")} class="absolute inset-0 w-full h-full object-cover object-center z-0 mx-auto max-w-[1900px] hidden lg:block" loading="eager"> ` })}` : renderTemplate`<img${addAttribute(src.src, "src")}${addAttribute(alt, "alt")} class="absolute inset-0 w-full h-full object-cover object-center z-0 mx-auto max-w-[1900px]" loading="eager">`} </section> <div${addAttribute(classContent, "class")}> ${renderSlot($$result2, $$slots["content"])} </div> ` })}`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/layouts/LayoutLandingPage.astro", void 0);

export { $$LayoutLandingPage as $ };
