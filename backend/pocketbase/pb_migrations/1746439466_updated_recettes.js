/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "select2942972832",
    "maxSelect": 1,
    "name": "difficulte",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "facile",
      "moyen",
      "difficile"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // remove field
  collection.fields.removeById("select2942972832")

  return app.save(collection)
})
