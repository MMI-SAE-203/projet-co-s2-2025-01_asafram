import { createRecipe } from "../../../backend/backend.js";

export async function POST({ request }) {
  try {
    const formData = await request.formData();

    const recipeData = {
      nom: formData.get("nom"),
      description: formData.get("description"),
      ingredients: formData.get("ingredients"),
      etapes: formData.get("etapes"),
      continent: formData.get("continent"),
      pays: formData.get("pays"),
      type: formData.get("type"),
      temps: parseInt(formData.get("temps")),
      difficulte: formData.get("difficulte"),
    };

    const img = formData.get("img");
    if (img && img.size > 0) {
      recipeData.img = img;
    }

    const newRecipe = await createRecipe(recipeData);

    return new Response(
      JSON.stringify({
        success: true,
        recipe: newRecipe,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Erreur lors de la création de la recette:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
