/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // remove field
  collection.fields.removeById("select882850990")

  // update field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_328358686",
    "hidden": false,
    "id": "relation730836958",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "pays",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // add field
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
      "Corée du Sud",
      "Inde",
      "Brésil"
    ]
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_328358686",
    "hidden": false,
    "id": "relation730836958",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "pays2",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
