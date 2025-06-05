import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_UQsOWqpN.mjs';
import 'kleur/colors';
import 'clsx';

const TransitionNormal = new Proxy({"src":"/_astro/transition-normal.Bt1jZRr-.svg","width":1536,"height":221,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/transition-normal.svg";
							}
							
							return target[name];
						}
					});

const TransitionReverse = new Proxy({"src":"/_astro/transition-reverse.CQ_0L03o.svg","width":1536,"height":221,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/fond/transition-reverse.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Transition = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Transition;
  const { isReversed = false, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative z-0 w-full ${className}`, "class")} aria-hidden="true" role="presentation"> <img${addAttribute(isReversed ? TransitionReverse.src : TransitionNormal.src, "src")} alt="" class="w-full h-auto block"> </div>`;
}, "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/components/Transition.astro", void 0);

export { $$Transition as $ };
