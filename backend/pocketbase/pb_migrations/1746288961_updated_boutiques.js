/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2440240353")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 4,
    "name": "continent",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Asie",
      "Afrique",
      "Maghreb",
      "Amérique Latine"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2440240353")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 1,
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Asiatique",
      "Sud-Américain",
      "Africain",
      "Maghrébin"
    ]
  }))

  return app.save(collection)
})
