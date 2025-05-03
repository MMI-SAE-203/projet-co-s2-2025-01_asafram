/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // remove field
  collection.fields.removeById("text4208515716")

  // remove field
  collection.fields.removeById("bool607635383")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1824984188",
    "maxSelect": 1,
    "name": "continent",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Amérique Latine",
      "Asie",
      "Afrique",
      "Maghreb"
    ]
  }))

  // add field
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

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Entrée",
      "Plats Chauds",
      "Desserts"
    ]
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "number1622456096",
    "max": null,
    "min": null,
    "name": "temps",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number3485334036",
    "max": null,
    "min": null,
    "name": "note",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "img",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor313655829",
    "maxSize": 0,
    "name": "etapes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1383128419")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4208515716",
    "max": 0,
    "min": 0,
    "name": "createur",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "bool607635383",
    "name": "favori_recette",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("select1824984188")

  // remove field
  collection.fields.removeById("select882850990")

  // remove field
  collection.fields.removeById("select2363381545")

  // remove field
  collection.fields.removeById("number1622456096")

  // remove field
  collection.fields.removeById("number3485334036")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor313655829",
    "maxSize": 0,
    "name": "etapes_recette",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  return app.save(collection)
})
