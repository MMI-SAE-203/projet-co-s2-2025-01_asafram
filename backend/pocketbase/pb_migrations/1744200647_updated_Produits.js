/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // remove field
  collection.fields.removeById("text1652623940")

  // add field
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // add field
  collection.fields.addAt(11, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1652623940",
    "max": 0,
    "min": 0,
    "name": "nombre_like",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("number1652623940")

  return app.save(collection)
})
