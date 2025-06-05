import PocketBase from 'pocketbase';

const pb = new PocketBase("https://asafram.andrea-mestre.eu:443");

// Fonctions pour les produits

async function getAllProducts() {
  try {
    let products = await pb.collection("produits").getFullList({
      sort: "created",
      expand: "pays",
    });

    products = products.map((product) => {
      product.img = pb.files.getURL(product, product.img);

      if (
        product.expand &&
        product.expand.pays &&
        product.expand.pays.drapeau
      ) {
        product.expand.pays.drapeauUrl = pb.files.getURL(
          product.expand.pays,
          product.expand.pays.drapeau
        );
      }

      // Ajouter une distance aléatoire entre 1 et 50 km
      product.distance = Math.floor(Math.random() * 50) + 1;

      return product;
    });
    return products;
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
    throw error;
  }
}

async function getProductById(id) {
  try {
    const product = await pb.collection("produits").getOne(id, {
      expand: "pays",
    });

    // Ajouter l'URL complète pour l'image du produit
    product.img = pb.files.getURL(product, product.img);

    // Traiter l'URL du drapeau du pays si disponible
    if (product.expand && product.expand.pays && product.expand.pays.drapeau) {
      product.expand.pays.drapeauUrl = pb.files.getURL(
        product.expand.pays,
        product.expand.pays.drapeau
      );
    }

    return product;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération du produit avec l'ID ${id}:`,
      error
    );
    return null; // Retourne null au lieu de lancer une erreur pour une gestion plus souple
  }
}

// Fonctions pour les recettes

async function getAllRecipes() {
  try {
    let recipes = await pb.collection("recettes").getFullList({
      sort: "created",
      expand: "pays,auteur",
    });

    recipes = recipes.map((recipe) => {
      if (recipe.img) {
        recipe.img = pb.files.getURL(recipe, recipe.img);
      }

      // Traiter l'URL du drapeau du pays si disponible
      if (recipe.expand && recipe.expand.pays && recipe.expand.pays.drapeau) {
        recipe.expand.pays.drapeauUrl = pb.files.getURL(
          recipe.expand.pays,
          recipe.expand.pays.drapeau
        );
      }

      return recipe;
    });
    return recipes;
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes:", error);
    throw error;
  }
}

async function createRecipe(recipeData) {
  try {
    const newRecipe = await pb.collection("recettes").create(recipeData);
    return newRecipe;
  } catch (error) {
    console.error("Erreur lors de la création de la recette:", error);
    throw error;
  }
}

async function getPopularRecipes(limit = 8) {
  try {
    // On trie par la meilleure note (champ note ou nbNotes si tu veux le nombre de notes)
    let recipes = await pb.collection("recettes").getList(1, limit, {
      sort: "-note",
      expand: "pays,auteur",
    });

    recipes.items = recipes.items.map((recipe) => {
      if (recipe.img) {
        recipe.img = pb.files.getURL(recipe, recipe.img);
      }

      if (recipe.expand && recipe.expand.pays && recipe.expand.pays.drapeau) {
        recipe.expand.pays.drapeauUrl = pb.files.getURL(
          recipe.expand.pays,
          recipe.expand.pays.drapeau
        );
      }

      return recipe;
    });

    return recipes.items;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des ${limit} recettes populaires:`,
      error
    );
    throw error;
  }
}

// Fonctions pour les boutiques

async function getAllShops() {
  try {
    let shops = await pb.collection("boutiques").getFullList({
      sort: "created",
      expand: "pays",
    });

    shops = shops.map((shop) => {
      if (shop.img) {
        shop.img = pb.files.getURL(shop, shop.img);
      }

      // Traiter l'URL du drapeau du pays si disponible
      if (shop.expand && shop.expand.pays && shop.expand.pays.drapeau) {
        shop.expand.pays.drapeauUrl = pb.files.getURL(
          shop.expand.pays,
          shop.expand.pays.drapeau
        );
      }

      return shop;
    });
    return shops;
  } catch (error) {
    console.error("Erreur lors de la récupération des boutiques:", error);
    throw error;
  }
}

// Fonctions d'authentifications

async function registerUser(userData) {
  try {
    const user = await pb.collection("users").create(userData);
    return user;
  } catch (error) {
    console.error("Erreur lors de la création du compte utilisateur:", error);
    throw error;
  }
}

async function loginUser(email, password) {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    return authData;
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    throw error;
  }
}

async function logoutUser() {
  try {
    pb.authStore.clear();
    return true;
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    throw error;
  }
}

function isUserLoggedIn() {
  return pb.authStore.isValid;
}

async function getCurrentUser() {
  try {
    if (!pb.authStore.isValid) {
      return null;
    }

    // Récupérer les informations à jour de l'utilisateur actuel
    const userId = pb.authStore.model.id;
    const user = await pb.collection("users").getOne(userId);

    // Transformer l'URL de l'avatar si présent
    if (user.avatar) {
      user.avatarUrl = pb.files.getURL(user, user.avatar);
    }

    return user;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de l'utilisateur actuel:",
      error
    );
    return null;
  }
}

async function uploadUserAvatar(fileData) {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("Utilisateur non connecté");
    }

    const userId = pb.authStore.model.id;
    const formData = new FormData();

    // Ajout du fichier d'avatar
    formData.append("avatar", fileData);

    const updatedUser = await pb.collection("users").update(userId, formData);

    // Mise à jour du authStore si nécessaire
    pb.authStore.save(pb.authStore.token, updatedUser);

    // Retourner l'URL de l'avatar
    return pb.files.getURL(updatedUser, updatedUser.avatar);
  } catch (error) {
    console.error("Erreur lors de l'upload de l'avatar:", error);
    throw error;
  }
}

async function updateUserProfile(userData) {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("Utilisateur non connecté");
    }

    // Création d'une copie sécurisée des données utilisateur
    // Vous pouvez personnaliser ces champs en fonction de votre schéma de base de données
    // Par exemple: nom, prénom, pays d'origine, plat préféré, bio, informations de contact, etc.
    const safeUserData = { ...userData };

    const userId = pb.authStore.model.id;
    const updatedUser = await pb
      .collection("users")
      .update(userId, safeUserData);

    // Mise à jour du modèle d'authentification pour les informations non sensibles
    pb.authStore.save(pb.authStore.token, updatedUser);

    return updatedUser;
  } catch (error) {
    console.error(
      "Erreur lors de la mise à jour du profil utilisateur:",
      error
    );
    throw error;
  }
}

// Fonctions pour les listes de favoris

async function getUserFavorites() {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("Utilisateur non connecté");
    }

    const userId = pb.authStore.model.id;
    const user = await pb.collection("users").getOne(userId, {
      expand:
        "favorites(user).produit,favorites(user).recette,favorites(user).boutique",
    });

    // Organise les favoris par type
    const favorites = {
      produits: [],
      recettes: [],
      boutiques: [],
      all: [],
    };

    // Si l'utilisateur a des favoris
    if (user.expand && user.expand["favorites(user)"]) {
      user.expand["favorites(user)"].forEach((favorite) => {
        // Ajoute l'élément à la liste de tous les favoris
        favorites.all.push(favorite);

        // Ajoute l'élément à la liste spécifique
        if (favorite.expand && favorite.expand.produit) {
          const produit = favorite.expand.produit;
          if (produit.img) {
            produit.img = pb.files.getURL(produit, produit.img);
          }
          favorites.produits.push({
            id: favorite.id,
            item: produit,
            type: "produit",
          });
        } else if (favorite.expand && favorite.expand.recette) {
          const recette = favorite.expand.recette;
          if (recette.img) {
            recette.img = pb.files.getURL(recette, recette.img);
          }
          favorites.recettes.push({
            id: favorite.id,
            item: recette,
            type: "recette",
          });
        } else if (favorite.expand && favorite.expand.boutique) {
          const boutique = favorite.expand.boutique;
          if (boutique.img) {
            boutique.img = pb.files.getURL(boutique, boutique.img);
          }
          favorites.boutiques.push({
            id: favorite.id,
            item: boutique,
            type: "boutique",
          });
        }
      });
    }

    return favorites;
  } catch (error) {
    console.error("Erreur lors de la récupération des favoris:", error);
    throw error;
  }
}

// Fonction pour récupérer tous les pays
async function getAllPays() {
  try {
    let pays = await pb.collection("pays").getFullList({
      sort: "nom",
    });

    // Ajouter l'URL du drapeau à chaque pays
    pays = pays.map((p) => {
      if (p.drapeau) {
        p.drapeauUrl = pb.files.getURL(p, p.drapeau);
      }
      return p;
    });

    return pays;
  } catch (error) {
    console.error("Erreur lors de la récupération des pays:", error);
    throw error;
  }
}

// Fonction pour récupérer les pays par continent
async function getPaysByContinent(continent) {
  try {
    let pays = await pb.collection("pays").getFullList({
      filter: `continent="${continent}"`,
      sort: "nom",
    });

    // Ajouter l'URL du drapeau à chaque pays
    pays = pays.map((p) => {
      if (p.drapeau) {
        p.drapeauUrl = pb.files.getURL(p, p.drapeau);
      }
      return p;
    });

    return pays;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des pays du continent ${continent}:`,
      error
    );
    throw error;
  }
}

async function getProductsByContinent(continent, options = {}) {
  try {
    // Options par défaut simplifiées
    const { page = 1, perPage = 20, limit = null, sort = "created" } = options;

    // On récupère d'abord tous les pays de ce continent
    const paysIds = await pb
      .collection("pays")
      .getFullList({
        filter: `continent="${continent}"`,
        fields: "id",
      })
      .then((list) => list.map((item) => item.id));

    // Si aucun pays n'est trouvé pour ce continent
    if (paysIds.length === 0) {
      return {
        items: [],
        totalItems: 0,
        totalPages: 0,
        page: page,
      };
    }

    // On construit le filtre pour récupérer les produits de ces pays
    const paysFilter = paysIds.map((id) => `pays="${id}"`).join(" || ");

    // Configuration de la requête - simplifiée
    const queryConfig = {
      filter: `(${paysFilter})`,
      expand: "pays",
      sort: sort,
    };

    // Si on souhaite limiter les résultats sans pagination
    if (limit !== null && limit > 0) {
      let produits = await pb
        .collection("produits")
        .getList(1, limit, queryConfig);

      // Traitement des images et des drapeaux
      produits.items = produits.items.map((product) => {
        if (product.img) {
          product.img = pb.files.getURL(product, product.img);
        }

        if (
          product.expand &&
          product.expand.pays &&
          product.expand.pays.drapeau
        ) {
          product.expand.pays.drapeauUrl = pb.files.getURL(
            product.expand.pays,
            product.expand.pays.drapeau
          );
        }

        // Ajout d'une distance par défaut
        product.distance = 15;

        return product;
      });

      return produits;
    } else {
      // Pagination standard
      const resultList = await pb
        .collection("produits")
        .getList(page, perPage, queryConfig);

      resultList.items = resultList.items.map((product) => {
        if (product.img) {
          product.img = pb.files.getURL(product, product.img);
        }

        if (
          product.expand &&
          product.expand.pays &&
          product.expand.pays.drapeau
        ) {
          product.expand.pays.drapeauUrl = pb.files.getURL(
            product.expand.pays,
            product.expand.pays.drapeau
          );
        }

        product.distance = 15;

        return product;
      });

      return resultList;
    }
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des produits du continent ${continent}:`,
      error
    );
    throw error;
  }
}

async function getPopularProducts(limit = 8) {
  try {
    let products = await pb.collection("produits").getList(1, limit, {
      sort: "-created",
      expand: "pays",
    });

    products.items = products.items.map((product) => {
      if (product.img) {
        product.img = pb.files.getURL(product, product.img);
      }

      if (
        product.expand &&
        product.expand.pays &&
        product.expand.pays.drapeau
      ) {
        product.expand.pays.drapeauUrl = pb.files.getURL(
          product.expand.pays,
          product.expand.pays.drapeau
        );
      }

      if (product.nombres_notes && !product.nbNotes) {
        product.nbNotes = product.nombres_notes;
      }
      if (!product.nbNotes) {
        product.nbNotes = Math.floor(Math.random() * 50) + 10;
      }

      if (!product.note) {
        product.note = Math.random() * 2 + 3;
      }

      product.distance = 15;

      return product;
    });

    return products.items;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des ${limit} produits populaires:`,
      error
    );
    throw error;
  }
}

async function getRecipesByContinent(continent, options = {}) {
  try {
    const { page = 1, perPage = 20, limit = null, sort = "created" } = options;

    // Récupérer les pays de ce continent
    const paysIds = await pb
      .collection("pays")
      .getFullList({
        filter: `continent="${continent}"`,
        fields: "id",
      })
      .then((list) => list.map((item) => item.id));

    if (paysIds.length === 0) {
      return {
        items: [],
        totalItems: 0,
        totalPages: 0,
        page: page,
      };
    }

    const paysFilter = paysIds.map((id) => `pays="${id}"`).join(" || ");

    const queryConfig = {
      filter: `(${paysFilter})`,
      expand: "pays,auteur",
      sort: sort,
    };

    if (limit !== null && limit > 0) {
      let recettes = await pb
        .collection("recettes")
        .getList(1, limit, queryConfig);

      recettes.items = recettes.items.map((recipe) => {
        if (recipe.img) {
          recipe.img = pb.files.getURL(recipe, recipe.img);
        }

        if (recipe.expand && recipe.expand.pays && recipe.expand.pays.drapeau) {
          recipe.expand.pays.drapeauUrl = pb.files.getURL(
            recipe.expand.pays,
            recipe.expand.pays.drapeau
          );
        }

        return recipe;
      });

      return recettes;
    } else {
      const resultList = await pb
        .collection("recettes")
        .getList(page, perPage, queryConfig);

      resultList.items = resultList.items.map((recipe) => {
        if (recipe.img) {
          recipe.img = pb.files.getURL(recipe, recipe.img);
        }

        if (recipe.expand && recipe.expand.pays && recipe.expand.pays.drapeau) {
          recipe.expand.pays.drapeauUrl = pb.files.getURL(
            recipe.expand.pays,
            recipe.expand.pays.drapeau
          );
        }

        return recipe;
      });

      return resultList;
    }
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des recettes du continent ${continent}:`,
      error
    );
    throw error;
  }
}

export { logoutUser as a, uploadUserAvatar as b, createRecipe as c, getPaysByContinent as d, getProductsByContinent as e, getRecipesByContinent as f, getCurrentUser as g, getUserFavorites as h, isUserLoggedIn as i, getProductById as j, getAllProducts as k, loginUser as l, getAllPays as m, getAllRecipes as n, getAllShops as o, getPopularProducts as p, getPopularRecipes as q, registerUser as r, updateUserProfile as u };
