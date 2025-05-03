/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3693799407",
    "max": 0,
    "min": 0,
    "name": "nom_produit",
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
    "id": "text3578015206",
    "max": 0,
    "min": 0,
    "name": "origine_produit",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number4159695454",
    "max": null,
    "min": null,
    "name": "prix",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "file3166026747",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image_produit",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

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

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text750439983",
    "max": 0,
    "min": 0,
    "name": "disponibilite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2468555493",
    "max": 0,
    "min": 0,
    "name": "allergene",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
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

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "date3400589952",
    "max": "",
    "min": "",
    "name": "date_ajout",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool4018512588",
    "name": "favori",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(12, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url1977946525",
    "name": "lien_affiliation",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // remove field
  collection.fields.removeById("text3693799407")

  // remove field
  collection.fields.removeById("text3578015206")

  // remove field
  collection.fields.removeById("number4159695454")

  // remove field
  collection.fields.removeById("file3166026747")

  // remove field
  collection.fields.removeById("text1843675174")

  // remove field
  collection.fields.removeById("text1264587087")

  // remove field
  collection.fields.removeById("text750439983")

  // remove field
  collection.fields.removeById("text2468555493")

  // remove field
  collection.fields.removeById("number2992219701")

  // remove field
  collection.fields.removeById("date3400589952")

  // remove field
  collection.fields.removeById("bool4018512588")

  // remove field
  collection.fields.removeById("url1977946525")

  return app.save(collection)
})
