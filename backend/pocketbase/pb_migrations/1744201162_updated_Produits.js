/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number1652623940",
    "max": null,
    "min": null,
    "name": "nombre_avis",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number1652623940",
    "max": null,
    "min": null,
    "name": "nombre_like",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
