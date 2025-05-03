/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // remove field
  collection.fields.removeById("text1264587087")

  // add field
  collection.fields.addAt(7, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1264587087",
    "maxSize": 0,
    "name": "ingredients",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1264587087",
    "max": 0,
    "min": 0,
    "name": "ingredients",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("editor1264587087")

  return app.save(collection)
})
