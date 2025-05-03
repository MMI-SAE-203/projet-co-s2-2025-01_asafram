/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select882850990",
    "maxSelect": 1,
    "name": "pays",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Japon",
      "Thailande",
      "Colombie",
      "Russie",
      "Mexique",
      "Pérou",
      "Argentine",
      "Corée du Sud"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select882850990",
    "maxSelect": 1,
    "name": "pays",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Japon",
      "Thailande",
      "Colombie",
      "Russie"
    ]
  }))

  return app.save(collection)
})
