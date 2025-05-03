/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2440240353")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file3150104748",
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

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select1984990008",
    "maxSelect": 1,
    "name": "taille",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Petite épicerie",
      "Magasin de taille moyenne",
      "Grande Surface"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2440240353")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  // remove field
  collection.fields.removeById("file3150104748")

  // remove field
  collection.fields.removeById("select1984990008")

  return app.save(collection)
})
