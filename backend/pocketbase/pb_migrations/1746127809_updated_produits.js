/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1232983604",
    "maxSelect": 1,
    "name": "categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Boissons",
      "Viandes",
      "Poissons",
      "Fruits & Légumes",
      "Snacks",
      "Épices",
      "Sauces",
      "Condiments",
      "Conserves",
      "Autres"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1232983604",
    "maxSelect": 1,
    "name": "categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Boissons",
      "Viandes",
      "Poissons",
      "Fruits & Légumes",
      "Snacks",
      "Épices",
      "Sauces",
      "Condiments",
      "Autres"
    ]
  }))

  return app.save(collection)
})
