import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export default pb;

// Fonctions pour les produits

export async function getAllProducts() {
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

export async function getProductById(id) {
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

export async function getProductsWithPagination(
  page = 1,
  perPage = 20,
  sort = "created"
) {
  try {
    const resultList = await pb.collection("produits").getList(page, perPage, {
      sort: sort,
    });

    resultList.items = resultList.items.map((product) => {
      product.img = pb.files.getURL(product, product.img);
      return product;
    });

    return resultList;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération paginée des produits:",
      error
    );
    throw error;
  }
}

export async function searchProducts(
  query,
  fields = ["name"],
  page = 1,
  perPage = 20
) {
  try {
    const filter = fields.map((field) => `${field}~"${query}"`).join(" || ");
    const resultList = await pb.collection("produits").getList(page, perPage, {
      filter: filter,
    });

    resultList.items = resultList.items.map((product) => {
      product.img = pb.files.getURL(product, product.img);
      return product;
    });

    return resultList;
  } catch (error) {
    console.error(
      `Erreur lors de la recherche de produits avec la requête "${query}":`,
      error
    );
    throw error;
  }
}

// Fonctions pour les recettes

export async function getAllRecipes() {
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

export async function getRecipeById(id) {
  try {
    // Récupérer la recette avec les relations expandées
    const recipe = await pb.collection("recettes").getOne(id, {
      expand: "pays,auteur",
    });

    // Traitement de l'image de la recette
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

    // Si l'auteur n'est pas correctement expandé mais qu'on a son ID
    if (!recipe.expand?.auteur?.username && recipe.auteur) {
      try {
        // Récupérer les infos de l'auteur directement
        const auteurId =
          typeof recipe.auteur === "string"
            ? recipe.auteur
            : recipe.expand?.auteur?.id || recipe.auteur.id;

        if (auteurId) {
          const auteur = await pb.collection("users").getOne(auteurId);

          // S'assurer que l'expand existe
          if (!recipe.expand) recipe.expand = {};
          recipe.expand.auteur = auteur;
        }
      } catch (userError) {
        console.error("Erreur lors de la récupération de l'auteur:", userError);
        // On continue même si on ne peut pas récupérer l'auteur
      }
    }

    return recipe;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la recette avec l'ID ${id}:`,
      error
    );
    throw error;
  }
}

export async function getRecipesWithPagination(
  page = 1,
  perPage = 20,
  sort = "created"
) {
  try {
    const resultList = await pb.collection("recettes").getList(page, perPage, {
      sort: sort,
      expand: "pays,auteur",
    });

    resultList.items = resultList.items.map((recipe) => {
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

    return resultList;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération paginée des recettes:",
      error
    );
    throw error;
  }
}

export async function createRecipe(recipeData) {
  try {
    const newRecipe = await pb.collection("recettes").create(recipeData);
    return newRecipe;
  } catch (error) {
    console.error("Erreur lors de la création de la recette:", error);
    throw error;
  }
}

export async function updateRecipe(id, recipeData) {
  try {
    const updatedRecipe = await pb
      .collection("recettes")
      .update(id, recipeData);
    return updatedRecipe;
  } catch (error) {
    console.error(
      `Erreur lors de la mise à jour de la recette avec l'ID ${id}:`,
      error
    );
    throw error;
  }
}

export async function deleteRecipe(id) {
  try {
    await pb.collection("recettes").delete(id);
    return true;
  } catch (error) {
    console.error(
      `Erreur lors de la suppression de la recette avec l'ID ${id}:`,
      error
    );
    throw error;
  }
}

export async function getLatestRecipes(limit = 5) {
  try {
    let recipes = await pb.collection("recettes").getList(1, limit, {
      sort: "-created",
      expand: "pays,auteur",
    });

    recipes.items = recipes.items.map((recipe) => {
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

    return recipes.items;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des ${limit} dernières recettes:`,
      error
    );
    throw error;
  }
}

export async function getPopularRecipes(limit = 8) {
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

export async function getAllShops() {
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

export async function getShopById(id) {
  try {
    const shop = await pb.collection("boutiques").getOne(id, {
      expand: "pays",
    });

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
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la boutique avec l'ID ${id}:`,
      error
    );
    throw error;
  }
}

export async function getShopsWithPagination(
  page = 1,
  perPage = 20,
  sort = "created"
) {
  try {
    const resultList = await pb.collection("boutiques").getList(page, perPage, {
      sort: sort,
      expand: "pays",
    });

    resultList.items = resultList.items.map((shop) => {
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

    return resultList;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération paginée des boutiques:",
      error
    );
    throw error;
  }
}

// Fonctions d'authentifications

export async function registerUser(userData) {
  try {
    const user = await pb.collection("users").create(userData);
    return user;
  } catch (error) {
    console.error("Erreur lors de la création du compte utilisateur:", error);
    throw error;
  }
}

export async function loginUser(email, password) {
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

export async function logoutUser() {
  try {
    pb.authStore.clear();
    return true;
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error);
    throw error;
  }
}

export function isUserLoggedIn() {
  return pb.authStore.isValid;
}

export async function getCurrentUser() {
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

// Fonctions pour les utilisateurs

export async function getUserById(id) {
  try {
    const user = await pb.collection("users").getOne(id, {
      expand: "favorites,recipes", // Supposant que vous avez des relations avec d'autres collections
    });

    if (user.avatar) {
      user.avatarUrl = pb.files.getURL(user, user.avatar);
    }

    return user;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'utilisateur avec l'ID ${id}:`,
      error
    );
    throw error;
  }
}

export async function uploadUserAvatar(fileData) {
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

export async function updateUserProfile(userData) {
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

export async function getUserFavorites() {
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

export async function addToFavorites(itemType, itemId) {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("Utilisateur non connecté");
    }

    if (!["produit", "recette", "boutique"].includes(itemType)) {
      throw new Error(
        "Type d'élément invalide. Utilisez 'produit', 'recette' ou 'boutique'"
      );
    }

    const userId = pb.authStore.model.id;

    // Vérifie si l'élément existe déjà dans les favoris
    const existingRecord = await pb
      .collection("favoris")
      .getFirstListItem(`user="${userId}" && ${itemType}="${itemId}"`)
      .catch(() => null);

    if (existingRecord) {
      // L'élément est déjà dans les favoris
      return existingRecord;
    }

    // Crée un nouvel enregistrement de favori
    const data = {
      user: userId,
      [itemType]: itemId,
    };

    const record = await pb.collection("favoris").create(data);
    return record;
  } catch (error) {
    console.error(`Erreur lors de l'ajout aux favoris:`, error);
    throw error;
  }
}

export async function removeFromFavorites(favoriteId) {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("Utilisateur non connecté");
    }

    await pb.collection("favoris").delete(favoriteId);
    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression du favori:", error);
    throw error;
  }
}

export async function toggleFavorite(itemType, itemId) {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("Utilisateur non connecté");
    }

    if (!["produit", "recette", "boutique"].includes(itemType)) {
      throw new Error(
        "Type d'élément invalide. Utilisez 'produit', 'recette' ou 'boutique'"
      );
    }

    const userId = pb.authStore.model.id;

    // Vérifie si l'élément existe déjà dans les favoris
    const existingRecord = await pb
      .collection("favoris")
      .getFirstListItem(`user="${userId}" && ${itemType}="${itemId}"`)
      .catch(() => null);

    if (existingRecord) {
      // Si l'élément existe, on le supprime
      await pb.collection("favoris").delete(existingRecord.id);
      return { isFavorite: false, id: null };
    } else {
      // Sinon, on l'ajoute
      const data = {
        user: userId,
        [itemType]: itemId,
      };
      const record = await pb.collection("favoris").create(data);
      return { isFavorite: true, id: record.id };
    }
  } catch (error) {
    console.error("Erreur lors du basculement du favori:", error);
    throw error;
  }
}

export async function isItemFavorite(itemType, itemId) {
  try {
    if (!pb.authStore.isValid) {
      return false;
    }

    if (!["produit", "recette", "boutique"].includes(itemType)) {
      throw new Error(
        "Type d'élément invalide. Utilisez 'produit', 'recette' ou 'boutique'"
      );
    }

    const userId = pb.authStore.model.id;

    // Vérifie si l'élément existe dans les favoris
    const existingRecord = await pb
      .collection("favoris")
      .getFirstListItem(`user="${userId}" && ${itemType}="${itemId}"`)
      .catch(() => null);

    return {
      isFavorite: !!existingRecord,
      id: existingRecord ? existingRecord.id : null,
    };
  } catch (error) {
    console.error("Erreur lors de la vérification du favori:", error);
    return { isFavorite: false, id: null };
  }
}

// Fonctions communautaires

export async function addReview(itemType, itemId, rating, comment) {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("Utilisateur non connecté");
    }

    if (!["produit", "recette", "boutique"].includes(itemType)) {
      throw new Error(
        "Type d'élément invalide. Utilisez 'produit', 'recette' ou 'boutique'"
      );
    }

    if (rating < 1 || rating > 5) {
      throw new Error("La note doit être comprise entre 1 et 5");
    }

    const userId = pb.authStore.model.id;

    // Vérifie si l'utilisateur a déjà laissé un avis sur cet élément
    const existingReview = await pb
      .collection("avis")
      .getFirstListItem(`user="${userId}" && ${itemType}="${itemId}"`)
      .catch(() => null);

    if (existingReview) {
      // Mise à jour de l'avis existant
      const updatedReview = await pb
        .collection("avis")
        .update(existingReview.id, {
          note: rating,
          commentaire: comment,
        });
      return updatedReview;
    } else {
      // Création d'un nouvel avis
      const data = {
        user: userId,
        [itemType]: itemId,
        note: rating,
        commentaire: comment,
      };
      const newReview = await pb.collection("avis").create(data);
      return newReview;
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'avis:", error);
    throw error;
  }
}

export async function deleteReview(reviewId) {
  try {
    if (!pb.authStore.isValid) {
      throw new Error("Utilisateur non connecté");
    }

    const userId = pb.authStore.model.id;

    // Récupère l'avis pour vérifier qu'il appartient bien à l'utilisateur connecté
    const review = await pb.collection("avis").getOne(reviewId);

    if (review.user !== userId) {
      throw new Error("Vous ne pouvez supprimer que vos propres avis");
    }

    await pb.collection("avis").delete(reviewId);
    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression de l'avis:", error);
    throw error;
  }
}

export async function getItemReviews(itemType, itemId, page = 1, perPage = 20) {
  try {
    if (!["produit", "recette", "boutique"].includes(itemType)) {
      throw new Error(
        "Type d'élément invalide. Utilisez 'produit', 'recette' ou 'boutique'"
      );
    }

    // Récupère les avis pour l'élément spécifié avec pagination
    const resultList = await pb.collection("avis").getList(page, perPage, {
      filter: `${itemType}="${itemId}"`,
      sort: "-created",
      expand: "user",
    });

    // Transforme les données pour faciliter l'utilisation côté client
    const reviews = resultList.items.map((review) => {
      // Ajoute l'avatar utilisateur s'il existe
      if (review.expand && review.expand.user && review.expand.user.avatar) {
        review.expand.user.avatarUrl = pb.files.getURL(
          review.expand.user,
          review.expand.user.avatar
        );
      }
      return review;
    });

    // Calcule la note moyenne
    let averageRating = 0;
    if (reviews.length > 0) {
      const sum = reviews.reduce((total, review) => total + review.note, 0);
      averageRating = sum / reviews.length;
    }

    return {
      reviews: reviews,
      averageRating: averageRating,
      totalItems: resultList.totalItems,
      totalPages: resultList.totalPages,
      page: resultList.page,
    };
  } catch (error) {
    console.error(
      `Erreur lors de la récupération des avis pour ${itemType} ${itemId}:`,
      error
    );
    throw error;
  }
}

export async function getUserReview(itemType, itemId) {
  try {
    if (!pb.authStore.isValid) {
      return null;
    }

    if (!["produit", "recette", "boutique"].includes(itemType)) {
      throw new Error(
        "Type d'élément invalide. Utilisez 'produit', 'recette' ou 'boutique'"
      );
    }

    const userId = pb.authStore.model.id;

    // Récupère l'avis de l'utilisateur pour l'élément spécifié
    const review = await pb
      .collection("avis")
      .getFirstListItem(`user="${userId}" && ${itemType}="${itemId}"`)
      .catch(() => null);

    return review;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'avis de l'utilisateur pour ${itemType} ${itemId}:`,
      error
    );
    return null;
  }
}

export async function getItemAverageRating(itemType, itemId) {
  try {
    if (!["produit", "recette", "boutique"].includes(itemType)) {
      throw new Error(
        "Type d'élément invalide. Utilisez 'produit', 'recette' ou 'boutique'"
      );
    }

    // Récupère tous les avis pour l'élément spécifié
    const reviews = await pb.collection("avis").getFullList({
      filter: `${itemType}="${itemId}"`,
    });

    // Calcule la note moyenne
    let averageRating = 0;
    if (reviews.length > 0) {
      const sum = reviews.reduce((total, review) => total + review.note, 0);
      averageRating = sum / reviews.length;
    }

    return {
      averageRating: averageRating.toFixed(1),
      reviewCount: reviews.length,
    };
  } catch (error) {
    console.error(
      `Erreur lors du calcul de la note moyenne pour ${itemType} ${itemId}:`,
      error
    );
    return {
      averageRating: 0,
      reviewCount: 0,
    };
  }
}

// Fonctions de filtrage

// Utilitaire pour construire les expressions de filtre
function buildFilterExpression(filters, conditions = []) {
  const expressions = [...conditions];

  // Filtres par pays (maintenant une relation)
  if (filters.pays) {
    expressions.push(`pays="${filters.pays}"`); // Maintenant pays est l'ID de la relation
  }

  // Filtres par continents (via la relation pays)
  if (filters.continents && filters.continents.length > 0) {
    const continentFilters = filters.continents
      .map((c) => `pays.continent="${c}"`)
      .join(" || ");
    expressions.push(`(${continentFilters})`);
  }

  // Filtre par note minimum
  if (filters.noteMin !== undefined && filters.noteMin > 0) {
    expressions.push(`note>=${filters.noteMin}`);
  }

  return expressions.length > 0 ? expressions.join(" && ") : "";
}

// Filtrage des produits
export async function filterProducts(
  filters = {},
  page = 1,
  perPage = 20,
  sort = "created"
) {
  try {
    const specificConditions = [];

    // Filtres spécifiques aux produits

    // Filtres par prix
    if (filters.prixMin !== undefined) {
      specificConditions.push(`prix>=${filters.prixMin}`);
    }
    if (filters.prixMax !== undefined) {
      specificConditions.push(`prix<=${filters.prixMax}`);
    }

    // Filtres par catégorie
    if (filters.categories && filters.categories.length > 0) {
      const categoryFilters = filters.categories
        .map((c) => `categorie="${c}"`)
        .join(" || ");
      specificConditions.push(`(${categoryFilters})`);
    }

    // Construction de l'expression de filtrage complète
    const filterExpression = buildFilterExpression(filters, specificConditions);

    // Exécution de la requête avec expansion de pays
    const resultList = await pb.collection("produits").getList(page, perPage, {
      filter: filterExpression,
      sort: sort,
      expand: "pays", // Ajout de l'expansion pays
    });

    // Traitement des images
    resultList.items = resultList.items.map((product) => {
      if (product.img) {
        product.img = pb.files.getURL(product, product.img);
      }

      // Traitement de l'image du drapeau
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

      return product;
    });

    return resultList;
  } catch (error) {
    console.error("Erreur lors du filtrage des produits:", error);
    throw error;
  }
}

// Filtrage des recettes
export async function filterRecipes(
  filters = {},
  page = 1,
  perPage = 20,
  sort = "created"
) {
  try {
    const specificConditions = [];

    // Filtres spécifiques aux recettes

    // Filtre par temps de préparation (en minutes)
    if (filters.tempsPreparationMin !== undefined) {
      specificConditions.push(
        `tempsPreparation>=${filters.tempsPreparationMin}`
      );
    }
    if (filters.tempsPreparationMax !== undefined) {
      specificConditions.push(
        `tempsPreparation<=${filters.tempsPreparationMax}`
      );
    }

    // Filtre par difficulté
    if (filters.difficulte) {
      specificConditions.push(`difficulte="${filters.difficulte}"`);
    }

    // Filtre par type de cuisine
    if (filters.typeCuisine && filters.typeCuisine.length > 0) {
      const typeFilters = filters.typeCuisine
        .map((t) => `typeCuisine="${t}"`)
        .join(" || ");
      specificConditions.push(`(${typeFilters})`);
    }

    // Construction de l'expression de filtrage complète
    const filterExpression = buildFilterExpression(filters, specificConditions);

    // Exécution de la requête
    const resultList = await pb.collection("recettes").getList(page, perPage, {
      filter: filterExpression,
      sort: sort,
      expand: "pays,auteur",
    });

    // Traitement des images
    resultList.items = resultList.items.map((recipe) => {
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

    return resultList;
  } catch (error) {
    console.error("Erreur lors du filtrage des recettes:", error);
    throw error;
  }
}

// Filtrage des boutiques
export async function filterShops(
  filters = {},
  page = 1,
  perPage = 20,
  sort = "created"
) {
  try {
    const specificConditions = [];

    // Filtres spécifiques aux boutiques

    // Filtre par taille de boutique
    if (filters.taille && filters.taille.length > 0) {
      const tailleFilters = filters.taille
        .map((t) => `taille="${t}"`)
        .join(" || ");
      specificConditions.push(`(${tailleFilters})`);
    }

    // Filtre par catégories de produits disponibles
    if (filters.categoriesProduits && filters.categoriesProduits.length > 0) {
      // Note: Supposant que les catégories sont stockées dans un champ d'array ou similaire
      // Cette syntaxe dépend de la façon dont vous structurez vos données
      const categorieFilters = filters.categoriesProduits
        .map((c) => `categoriesProduits.contains("${c}")`)
        .join(" || ");
      specificConditions.push(`(${categorieFilters})`);
    }

    // Construction de l'expression de filtrage complète
    const filterExpression = buildFilterExpression(filters, specificConditions);

    // Exécution de la requête
    const resultList = await pb.collection("boutiques").getList(page, perPage, {
      filter: filterExpression,
      sort: sort,
      expand: "pays",
    });

    // Traitement des images
    resultList.items = resultList.items.map((shop) => {
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

    return resultList;
  } catch (error) {
    console.error("Erreur lors du filtrage des boutiques:", error);
    throw error;
  }
}

// Fonction de recherche avancée pour les recettes
export async function searchRecipes(
  query,
  fields = ["nom"],
  page = 1,
  perPage = 20
) {
  try {
    const filter = fields.map((field) => `${field}~"${query}"`).join(" || ");
    const resultList = await pb.collection("recettes").getList(page, perPage, {
      filter: filter,
      expand: "pays,auteur",
    });

    resultList.items = resultList.items.map((recipe) => {
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

    return resultList;
  } catch (error) {
    console.error(
      `Erreur lors de la recherche de recettes avec la requête "${query}":`,
      error
    );
    throw error;
  }
}

// Fonction de recherche avancée pour les boutiques
export async function searchShops(
  query,
  fields = ["nom"],
  page = 1,
  perPage = 20
) {
  try {
    const filter = fields.map((field) => `${field}~"${query}"`).join(" || ");
    const resultList = await pb.collection("boutiques").getList(page, perPage, {
      filter: filter,
      expand: "pays",
    });

    resultList.items = resultList.items.map((shop) => {
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

    return resultList;
  } catch (error) {
    console.error(
      `Erreur lors de la recherche de boutiques avec la requête "${query}":`,
      error
    );
    throw error;
  }
}

// Fonction combinant filtrage et recherche textuelle pour les produits
export async function searchAndFilterProducts(
  query = "",
  filters = {},
  page = 1,
  perPage = 20,
  sort = "created"
) {
  try {
    const specificConditions = [];

    // Ajoute la condition de recherche si une requête est fournie
    if (query) {
      const searchFields = filters.searchFields || ["nom", "description"];
      const searchFilter = searchFields
        .map((field) => `${field}~"${query}"`)
        .join(" || ");
      specificConditions.push(`(${searchFilter})`);
    }

    // Filtres par prix
    if (filters.prixMin !== undefined) {
      specificConditions.push(`prix>=${filters.prixMin}`);
    }
    if (filters.prixMax !== undefined) {
      specificConditions.push(`prix<=${filters.prixMax}`);
    }

    // Filtres par catégorie
    if (filters.categories && filters.categories.length > 0) {
      const categoryFilters = filters.categories
        .map((c) => `categorie="${c}"`)
        .join(" || ");
      specificConditions.push(`(${categoryFilters})`);
    }

    // Construction de l'expression de filtrage complète
    const filterExpression = buildFilterExpression(filters, specificConditions);

    // Exécution de la requête
    const resultList = await pb.collection("produits").getList(page, perPage, {
      filter: filterExpression,
      sort: sort,
      expand: "pays",
    });

    // Traitement des images
    resultList.items = resultList.items.map((product) => {
      if (product.img) {
        product.img = pb.files.getURL(product, product.img);
      }

      // Traiter l'URL du drapeau du pays si disponible
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

      return product;
    });

    return resultList;
  } catch (error) {
    console.error(
      "Erreur lors de la recherche et du filtrage des produits:",
      error
    );
    throw error;
  }
}

// Fonction combinant filtrage et recherche textuelle pour les recettes
export async function searchAndFilterRecipes(
  query = "",
  filters = {},
  page = 1,
  perPage = 20,
  sort = "created"
) {
  try {
    const specificConditions = [];

    // Ajoute la condition de recherche si une requête est fournie
    if (query) {
      const searchFields = filters.searchFields || [
        "nom",
        "description",
        "ingredients",
      ];
      const searchFilter = searchFields
        .map((field) => `${field}~"${query}"`)
        .join(" || ");
      specificConditions.push(`(${searchFilter})`);
    }

    // Filtre par temps de préparation (en minutes)
    if (filters.tempsPreparationMin !== undefined) {
      specificConditions.push(
        `tempsPreparation>=${filters.tempsPreparationMin}`
      );
    }
    if (filters.tempsPreparationMax !== undefined) {
      specificConditions.push(
        `tempsPreparation<=${filters.tempsPreparationMax}`
      );
    }

    // Filtre par difficulté
    if (filters.difficulte) {
      specificConditions.push(`difficulte="${filters.difficulte}"`);
    }

    // Filtre par type de cuisine
    if (filters.typeCuisine && filters.typeCuisine.length > 0) {
      const typeFilters = filters.typeCuisine
        .map((t) => `typeCuisine="${t}"`)
        .join(" || ");
      specificConditions.push(`(${typeFilters})`);
    }

    // Construction de l'expression de filtrage complète
    const filterExpression = buildFilterExpression(filters, specificConditions);

    // Exécution de la requête
    const resultList = await pb.collection("recettes").getList(page, perPage, {
      filter: filterExpression,
      sort: sort,
    });

    // Traitement des images
    resultList.items = resultList.items.map((recipe) => {
      if (recipe.img) {
        recipe.img = pb.files.getURL(recipe, recipe.img);
      }
      return recipe;
    });

    return resultList;
  } catch (error) {
    console.error(
      "Erreur lors de la recherche et du filtrage des recettes:",
      error
    );
    throw error;
  }
}

// Fonction combinant filtrage et recherche textuelle pour les boutiques
export async function searchAndFilterShops(
  query = "",
  filters = {},
  page = 1,
  perPage = 20,
  sort = "created"
) {
  try {
    const specificConditions = [];

    // Ajoute la condition de recherche si une requête est fournie
    if (query) {
      const searchFields = filters.searchFields || [
        "nom",
        "description",
        "adresse",
      ];
      const searchFilter = searchFields
        .map((field) => `${field}~"${query}"`)
        .join(" || ");
      specificConditions.push(`(${searchFilter})`);
    }

    // Filtre par taille de boutique
    if (filters.taille && filters.taille.length > 0) {
      const tailleFilters = filters.taille
        .map((t) => `taille="${t}"`)
        .join(" || ");
      specificConditions.push(`(${tailleFilters})`);
    }

    // Filtre par catégories de produits disponibles
    if (filters.categoriesProduits && filters.categoriesProduits.length > 0) {
      const categorieFilters = filters.categoriesProduits
        .map((c) => `categoriesProduits.contains("${c}")`)
        .join(" || ");
      specificConditions.push(`(${categorieFilters})`);
    }

    // Construction de l'expression de filtrage complète
    const filterExpression = buildFilterExpression(filters, specificConditions);

    // Exécution de la requête
    const resultList = await pb.collection("boutiques").getList(page, perPage, {
      filter: filterExpression,
      sort: sort,
    });

    // Traitement des images
    resultList.items = resultList.items.map((shop) => {
      if (shop.img) {
        shop.img = pb.files.getURL(shop, shop.img);
      }
      return shop;
    });

    return resultList;
  } catch (error) {
    console.error(
      "Erreur lors de la recherche et du filtrage des boutiques:",
      error
    );
    throw error;
  }
}

// Fonction pour récupérer tous les pays
export async function getAllPays() {
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
export async function getPaysByContinent(continent) {
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

export async function getProductsByContinent(continent, options = {}) {
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

export async function getPopularProducts(limit = 8) {
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

export async function getRecipesByContinent(continent, options = {}) {
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
