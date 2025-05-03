/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2518114106")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "date1485397344",
    "max": "",
    "min": "",
    "name": "date_commentaire",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date1742892625",
    "max": "",
    "min": "",
    "name": "date_reaction",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number3539951398",
    "max": null,
    "min": null,
    "name": "nombre_reaction",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file1764237323",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "type_reaction",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2518114106")

  // remove field
  collection.fields.removeById("date1485397344")

  // remove field
  collection.fields.removeById("date1742892625")

  // remove field
  collection.fields.removeById("number3539951398")

  // remove field
  collection.fields.removeById("file1764237323")

  return app.save(collection)
})
