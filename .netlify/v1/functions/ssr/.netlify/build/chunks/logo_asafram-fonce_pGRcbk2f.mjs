const LogoAsafram = new Proxy({"src":"/_astro/logo_asafram-fonce.BPuj0ilf.svg","width":300,"height":339,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/thain/Documents/GitHub/projet-co-s2-2025-01_asafram/src/assets/icones/logo_asafram-fonce.svg";
							}
							
							return target[name];
						}
					});

export { LogoAsafram as L };
