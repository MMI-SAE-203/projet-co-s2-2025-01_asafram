/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2440240353")

  // add field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "select1232983604",
    "maxSelect": 2,
    "name": "categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "viande",
      "poisson",
      "fruit",
      "feculent",
      "snack",
      "epices",
      "sauces",
      "boissons"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2440240353")

  // remove field
  collection.fields.removeById("select1232983604")

  return app.save(collection)
})
