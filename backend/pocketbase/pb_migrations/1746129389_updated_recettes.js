/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select882850990",
    "maxSelect": 1,
    "name": "pays",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Sénégal",
      "Maroc",
      "Mexique",
      "Japon"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select882850990",
    "maxSelect": 1,
    "name": "pays",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Sénégal"
    ]
  }))

  return app.save(collection)
})
