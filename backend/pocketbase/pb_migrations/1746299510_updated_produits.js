/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // add field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "number1321863406",
    "max": null,
    "min": null,
    "name": "nombres_notes",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // remove field
  collection.fields.removeById("number1321863406")

  return app.save(collection)
})
