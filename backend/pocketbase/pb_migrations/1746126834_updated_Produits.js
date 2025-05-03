/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "name": "produits",
    "updateRule": "",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("text1843675174")

  // remove field
  collection.fields.removeById("date3400589952")

  // remove field
  collection.fields.removeById("text3143934251")

  // remove field
  collection.fields.removeById("bool4018512588")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select1232983604",
    "maxSelect": 1,
    "name": "categorie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Boissons",
      "Viandes",
      "Poissons",
      "Fruits & Légumes",
      "Snacks",
      "Épices",
      "Sauces",
      "Condiments"
    ]
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1824984188",
    "maxSelect": 1,
    "name": "continent",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Amérique du Sud",
      "Maghreb",
      "Asie",
      "Afrique"
    ]
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select882850990",
    "maxSelect": 1,
    "name": "pays",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Japon",
      "Thailande",
      "Colombie",
      "Russie"
    ]
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3693799407",
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

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3166026747",
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
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3578015206",
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

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool750439983",
    "name": "disponibilite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // update field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2992219701",
    "max": 0,
    "min": 0,
    "name": "quantite",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "number1652623940",
    "max": null,
    "min": null,
    "name": "note",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_118875587")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "name": "Produits",
    "updateRule": null,
    "viewRule": null
  }, collection)

  // add field
  collection.fields.addAt(8, new Field({
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
  collection.fields.addAt(9, new Field({
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
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3143934251",
    "max": 0,
    "min": 0,
    "name": "information_complementaire",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
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

  // remove field
  collection.fields.removeById("select1232983604")

  // remove field
  collection.fields.removeById("select1824984188")

  // remove field
  collection.fields.removeById("select882850990")

  // update field
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

  // update field
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

  // update field
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

  // update field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "bool750439983",
    "name": "indisponible",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // update field
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

  // update field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "number1652623940",
    "max": null,
    "min": null,
    "name": "nombre_avis",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
