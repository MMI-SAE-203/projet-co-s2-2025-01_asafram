/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // update field
  collection.fields.addAt(6, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor313655829",
    "maxSize": 0,
    "name": "etapes_recette",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // update field
  collection.fields.addAt(6, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor313655829",
    "maxSize": 0,
    "name": "temps_preparation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
})
