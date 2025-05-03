/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_114470560")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1819170229",
    "max": 0,
    "min": 0,
    "name": "nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2787480667",
    "max": 0,
    "min": 0,
    "name": "prenom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "email3885137012",
    "name": "email",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "email"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "date1642709770",
    "max": "",
    "min": "",
    "name": "date_inscription",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4007288574",
    "max": 0,
    "min": 0,
    "name": "mdp",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file3031940482",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo_profile",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3277785110",
    "max": 0,
    "min": 0,
    "name": "adresse",
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
    "id": "number1158672400",
    "max": null,
    "min": null,
    "name": "telephone",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2471982478",
    "max": 0,
    "min": 0,
    "name": "langue",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text353089135",
    "max": 0,
    "min": 0,
    "name": "origine",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_114470560")

  // remove field
  collection.fields.removeById("text1819170229")

  // remove field
  collection.fields.removeById("text2787480667")

  // remove field
  collection.fields.removeById("email3885137012")

  // remove field
  collection.fields.removeById("date1642709770")

  // remove field
  collection.fields.removeById("text4007288574")

  // remove field
  collection.fields.removeById("file3031940482")

  // remove field
  collection.fields.removeById("text3277785110")

  // remove field
  collection.fields.removeById("number1158672400")

  // remove field
  collection.fields.removeById("text2471982478")

  // remove field
  collection.fields.removeById("text353089135")

  return app.save(collection)
})
