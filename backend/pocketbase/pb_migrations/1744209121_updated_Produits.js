/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // remove field
  collection.fields.removeById("number2992219701")

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2992219701",
    "max": 0,
    "min": 0,
    "name": "poid_litre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number2992219701",
    "max": null,
    "min": null,
    "name": "poid_litre",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("text2992219701")

  return app.save(collection)
})
