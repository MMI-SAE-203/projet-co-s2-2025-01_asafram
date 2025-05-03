/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool750439983",
    "name": "indisponible",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool750439983",
    "name": "disponibilite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
})
